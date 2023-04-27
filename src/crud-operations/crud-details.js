import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CrudDetails(){
   
    const params = useParams();
    const [product, setProducts] = useState([{ProductId:0,Name:'',Price:0,Stock:false }]);

    useEffect(()=>{
        axios({
            method:'get',
            url: `http://127.0.0.1:8080/details/${params.id}`
        })
        .then(response=>{
            setProducts(response.data);
        })
    },[params.id]);
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product[0].Name}</dd>
                <dt>Price</dt>
                <dd>{product[0].Price}</dd>
                <dt>Stock</dt>
                <dd>{(product[0].Stock===true)?"Avaliable":"Out Of Stock"}</dd>
            </dl>
            <Link to="/products">Back to Products</Link>
        </div>
    )
}