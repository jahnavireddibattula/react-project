import { useEffect } from "react";
import { useState } from "react";


export function ShoppingCart(props){
    return(
        <div className="container m-3 p-1">
            <span className="bi bi-cart4"></span> {props.count}
        </div>
    )
}


export default function EffectsComponent(){
    const [count, setCount] = useState(0);
    function AddClick(){
        var c = count + 1;
        alert("Item Added");
        setCount(c);
        console.log(c);
    }
    return(
        <div className="container-fluid mt-4">
            <div className="position-absolute top-0 end-0">
                <ShoppingCart count={count}/>
            </div>
            <div>
                <button onClick={AddClick}>Add to Cart</button>
            </div>
        </div>
    )
}


// export function Login(){
//     useEffect(()=>{ //mount part
//         alert('Login Component Requested and will mount');
//         return()=>{ // return means unmount (means coming out of the funtion and store the value in memory)
//             alert('Login Component Unmounted');
//         }
//     },[])
//     return(
//         <div>
//             <h2>User Login</h2>
//         </div>
//     )
// }

// export function Register(){
//     useEffect(()=>{ //mount part
//         alert('Register Component Requested and will mount');
//         return()=>{ // return means unmount (means coming out of the funtion and store the value in memory)
//             alert('Register Component Unmounted');
//         }
//     },[])
//     return(
//         <div>
//             <h2>Register New User</h2>
//         </div>
//     )
// }

// export default function EffectsComponent(){
//     const [component, setComponent] = useState('');

//     function LoginClick(){
//         setComponent(<Login/>);
//     }
 
//     function RegisterClick(){
//         setComponent(<Register/>);
//     } 

//     return(
//         <div className="container-fluid mt-4">
//             <button onClick={LoginClick}>Login</button>
//             <button onClick={RegisterClick}>Register</button>
//             <hr/>
//             {component}
//         </div>
//     )
// }