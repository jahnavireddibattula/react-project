// import { Form, Field } from "formik";
import axios from "axios";
import { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik} from "formik";

export default function CrudEdit(){
    const params=useParams();
    const navigate=useNavigate();
    const[products,setProducts]=useState([{ProductId:0,Name:'',Price:0,Stock:false}]);
    // const [checked, setChecked] = useState(false)

//   const checkHandler = () => {
//     console.log(!checked);
//     setChecked(!checked)
//   }
   
       useEffect(()=>{
        axios({
            method:'get',
            url: `http://127.0.0.1:8080/details/${params.id}`
        })
        .then(response=>{
            setProducts(response.data);
        })
    },[params.id]);

    const formik=useFormik({
        initialValues:{
            ProductId:products[0].ProductId,
            Name:products[0].Name,
            Price:products[0].Price,
            Stock:(products[0].Stock==="true")?true:false
        },
        onSubmit:
        (values)=>{
            axios({
                method:'put',
                url:'http://127.0.0.1:8080/updateproduct',
                data:values
            })
            // .then(()=>{
                //  setProducts(response.data);
                alert("product Registed");
                navigate("/products");
            // }) 

        },
        enableReinitialize:true
    })

    return(
        <div className="container-fluid">
          <h2>Edit Product</h2>
            <form onSubmit={formik.handleSubmit} >
                 <dl>
                   <dt>Name</dt>
                    <dd><input type="text" name="Name"  value={formik.values.Name}
                    onChange={formik.handleChange}></input>
                    </dd>
                    <dt>Price</dt>
                    <dd>
                    <input type="text" name="Price" value={formik.values.Price}
                    onChange={formik.handleChange}></input>
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-check form-switch">
                    <input type="checkbox" className="form-check-input" name="Stock" 
                    checked={(formik.values.Stock==="true")?true:false}
                    onChange={formik.handleChange} value={formik.values.Stock}></input>
                    </dd>
                    </dl>
                    <button className="btn btn-success" type="submit">Save</button>
                    <div>
                    <Link to="/products">Back to Products</Link>
                    </div>
            </form>
                </div>
    )
}

// export default function CrudEdit(){
//     const params = useParams();
//     const [products, setProducts] = useState([{ProductId:0, Name:'', Price:0,Stock:false}]);
//     const navigate = useNavigate();
//     const Namevalue= products[0].Name;
//     const Pricevalue = products[0].Price;
//     const Stockvalue = products[0].Stock;
//     const[name1,setName] = useState('');
//     const[price,setPrice] = useState('');
//     const[stock,setStock] = useState('');

//       useEffect(() => {
//         setName(Namevalue);
//       }, [Namevalue]);

//       useEffect(() => {
//         setPrice(Pricevalue);
//       }, [Pricevalue]);
    
//       useEffect(() => {
//         setStock(Stockvalue);
//       }, [Stockvalue]);  

//     const handlenamechange=(e)=>{
//         setName(e.target.value.replace(/[^a-zA-Z]/gi,''));
//     }

//     const handlepricechange=(e)=>{
//         setPrice(e.target.value);
//     }

//     const handlestockchange=(e)=>{
//         setStock(e.target.value);
//     }


//     useEffect(()=>{
//         axios({
//             method:'get',
//             url: `http://127.0.0.1:8080/details/${params.id}`
//         })
//         .then(response=>{
//             setProducts(response.data);
//         })
//     },[params.id]);
    
//     return(
//         <div className="container-fluid">
//             <h2>Edit Product</h2>
//                 <form 
//                 onSubmit={ 
//                     (values)=>{
//                     axios({
//                         method:'put',
//                         url:'http://127.0.0.1:8080/updateproduct',
//                         data:values
//                     })
//                     .then(()=>{
//                         alert("product Registed");
//                         navigate("/products");
//                     }) 
//                 }}
//                 >
//                     <dl>
//                         <dt>Name</dt>
//                         <dd><input type="text" name="Name"  value={name1}
//                         onChange={(e)=>{handlenamechange(e)}}></input>
//                         </dd>
//                         <dt>Price</dt>
//                         <dd>
//                         <input type="number" name="Price" value={price}
//                          onChange={(e)=>{handlepricechange(e)}}></input>
//                         </dd>
//                         <dt>Stock</dt>
//                         <dd>
//                         <input type="checkbox" name="Stock" checked={stock}
//                          onChange={(e)=>{handlestockchange(e)}}></input>
//                         </dd>
//                     </dl>
//                     <button className="btn btn-success" >Save</button>
//                     <div>
//                     <Link to="/products">Back to Products</Link>
//                     </div>
//                 </form>
//         </div>
//     )
// }