import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect,useState } from 'react';
import {useCookies} from "react-cookie";

export default function ShopperCategory(){
    const params = useParams();
    const [products, setProducts] = useState([]);
    const[cookies] = useCookies();
    // const[setCookie,removeCookie]=useCookies();
    const navigate = useNavigate();
    // const a1= "mens";
    // const a2 = "fashion";
    // const a3 = a1.concat("",a2);
    // const a4 = a3;
    useEffect(()=>{
        if(cookies["userid"]===undefined){
            navigate("/login");
        }
    axios({
        method:'get',
        url:`https://fakestoreapi.com/products/category/${params.catname}`,
    })
    .then(response=>{
        setProducts(response.data);
    })
},[params.catname]);

    return(
        <div className="container-fluid">
            <h2>Shopper Category {params.catname}-{cookies["userid"]}</h2>
            <div className='d-flex flex-warp'>
                {
                    products.map(product=>
                        <div className='card m-2 p-2' style={{width:'200px'}}>
                        <img src={product.image} style={{height:'150px'}} alt="asas" className="card-img-top"/>
                        <div className='card-header' style={{height:'200px'}}>
                            <p>{product.title}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={'/details/'+ product.id} className="btn btn-primary w-100">Details</Link>
                        </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}