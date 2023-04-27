import axios from 'axios';
// import { response } from 'express';
import { useEffect,useState } from 'react';


export default function ShopperJewelery(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
    axios({
        method:'get',
        url:'https://fakestoreapi.com/products/category/jewelery',
    })
    .then(response=>{
        setProducts(response.data);
    })
},[]);

    return(
        <div className="container-fluid">
            <div className='d-flex flex-warp'>
                {
                    products.map(product=>
                        <div className='card m-2 p-2' style={{width:'200px'}}>
                        <img src={product.image} style={{height:'150px'}} alt="asas" className="card-img-top"/>
                        <div className='card-header' style={{height:'200px'}}>
                            <p>{product.title}</p>
                        </div>
                        </div>
                        )
                }
            </div>

        </div>
    )
}