import { Formik } from "formik";
import {Form} from "formik";
import {Field} from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import * as yup from "yup";


export default function CrudCreate(){
    const navigate = useNavigate();
    const [products,setProducts] = useState([{ProductId:0,Name:'',Price:0,Stock:false}]);
    const [idError, setIdError] = useState('');
    const [verifyName, setverifyName] = useState('');
    const [verifyprice, setverifyPrice] = useState('');
    const [verifystock, setverifyStock] = useState('');

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8080/products'
        })
        .then(response=>{
            setProducts(response.data);
        })
    },[]);

    function VerifyId(e){
        var id = parseInt(e.target.value);
        for(var product of products){
            if(product.ProductId===id) {
                setIdError('Product ID Taken - Try another');
                break;
            } else {
                setIdError('Product ID Avaliable');
            }
        }
    }

    function VerifyName(e){
        // var id = parseInt(e.target.value);
        for(var product of products){
            if(product.Name===e.target.value) {
                setverifyName('Product Name Taken - Try another');
                break;
            } else {
                setverifyName('Product Name Avaliable');
            }
        }
    }

    function VerifyPrice(e){
        var price1 = parseFloat(e.target.value);
        for(var product of products){
            if(product.Price===price1) {
                setverifyPrice('Product Price Taken - Try another');
                break;
            } else {
                setverifyPrice('Product Price Avaliable');
            }
        }
    }

    function VerifyStock(e){
        // var id = parseInt(e.target.value);
        for(var product of products){
            if(product.Stock===e.target.values) {
                setverifyStock('Product Stock Taken - Try another');
                break;
            } else {
                setverifyStock('Product Stock Avaliable');
            }
        }
    }

    // (product[0].Stock===true)?"Avaliable":"Out Of Stock"

    return(
        <div className="container-fluid">
            <h2>Add New Product</h2>
            <Formik
            initialValues={{
                ProductId: 0,
                Name: '',
                Price: 0,
                Stock: 'true'
            }}
            validationSchema={
                yup.object({
                    Stock:yup.bool().oneOf([true],"truevalue"),
                })
            }
            onSubmit={
              (values)=>{
                axios({
                    method:'post',
                    url:'http://127.0.0.1:8080/addproducts',
                    data:values
                }).then(()=>{
                    alert("product Registed");
                    navigate("/products");
                })
              }
            }
            >
                {
                    ({errors,status,Touched})=>(
                    <Form>
                        <dl>
                            <dt>ProductId</dt>
                            <dd><Field name="ProductId" onKeyUp={VerifyId} type="number"/></dd>
                            <dd className="text-danger">{idError}</dd>
                            <dt>Name</dt>
                            <dd><Field name="Name" onKeyUp={VerifyName} type="text"/></dd>
                            <dd className="text-danger">
                            {verifyName}
                            </dd>
                            {/* <dd>{Name}</dd> */}
                            <dt>Price</dt>
                            <dd><Field name="Price" onKeyUp={VerifyPrice} type="number"/></dd>
                            <dd className="text-danger">
                            {verifyprice}
                            </dd>
                            <dt>Stock</dt>
                            <dd><Field className={"form-check-input" + (errors.Stock && Touched.Stock?true:false)} onKeyUp={VerifyStock} name="Stock" type="checkbox"/>Avaliable</dd>
                            
                            <dd className="text-danger">
                            {verifystock}
                            </dd>
                        </dl>
                        <button className="btn btn-primary">Add Product </button>
                        <Link className="ms-2" to="/products">View Products</Link>
                    </Form>
                    )
                }
            </Formik>
        </div>
    )
}