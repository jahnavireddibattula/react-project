import { useEffect } from "react";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
// import reportWebVitals from "../../reportWebVitals";



export default function ShopperHome(){
    const[cookies,removeCookie] = useCookies();
    // const[setCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(()=>{
        if(cookies["userid"]===undefined){
           navigate("/login");
        }
    },[]);
    function SignoutClick(){
        removeCookie("userid");
        useNavigate("/login");
    }
    return(
        <div className="container-fluid d-flex justify-content-between">

            <div>
               <div className="d-flex justify-content-between">
               <div>
                   <img src="electronics.jpg" alt="asas" style={{width:'200px',height:'300px'}}/>
                </div> 
                <div>
                   <img src="men's.jpg" alt="asas" style={{width:'200px',height:'300px'}}/>
                </div> 
                <div>
                   <img src="women's.jpg" alt="asas" style={{width:'200px',height:'300px'}}/>
                </div> 
                <div>
                   <img src="jewelery.jpg" alt="asas" style={{width:'200px',height:'300px'}}/>
                </div>  
               </div>
            </div>
            <div>
                <h4>Hello ! - {cookies["userid"]}</h4>
                <button onClick={SignoutClick} className="btn btn-link">Signout</button>
             </div>
        </div>
    )
}