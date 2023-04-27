// import React from "react";
// import { Formik, Form, Field} from "formik";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {useCookies} from "react-cookie";

// export default function ShopperLogin () {
//     const navigate = useNavigate();
//     const [cookies, setCookie, removeCookie] = useCookies();
//   return (
//     <div>
//       <h3>User login</h3>
//       <Formik
//       initialValues={{
//         "UserId":"",
//         "Password":""
//       }}
//       onSubmit={
//         (values)=>{
//             axios({  // Axios is fecthing the data
//                 method: "get",
//                 url:"http://127.0.0.1:8080/users"
//             })
//             .then(response=>{
//                 for(var user of response.data)
//                 if(user.UserId===values.UserId && user.Password===values.Password){
//                   setCookie("userid", values.UserId);
//                     navigate("/home")
//                     break;
//                 } else{
//                     navigate("/invalid")
//                 }
//             })
//         }
//       }
//       >
//        {
//         <Form>
//              <dl>
//                 <dt>User Id</dt>
//                 <dd><Field type="text" name="UserId" /></dd>
//                 <dt>Password</dt>
//                 <dd><Field type="Password" name="Password" /></dd>
//              </dl>
//              <button className="btn btn-success">Login</button>
//              <div>
//              <Link to="/register">New User?</Link>
//              </div>
//         </Form>
//        }
//       </Formik>
//     </div>
//   );
// };


import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useCookies} from "react-cookie";

export default function ShopperLogin(){
    const navigate = useNavigate();
    const[cookies, setCookie] = useCookies();
    // const[setCookie] = useCookies();
    return(
        <div>
            <h2>User Login</h2>
            <Formik
              initialValues={{
                "UserId":"",
                "Password":""
              }}

              onSubmit={
                (values)=>{
                    axios({
                        method: "get",
                        url: "http://127.0.0.1:8080/users"
                    })
                    .then(response=>{
                        for(var user of response.data){
                            if(user.UserId===values.UserId && user.Password===values.Password){
                                setCookie("userid",values.UserId);
                                navigate("/home");
                                break;
                            } else {
                                navigate("/invalid");
                            }
                        }
                    })
                }
              }
            >
            {
                <Form>
                    <dl>
                        <dt>User Id</dt>
                        <dd> <Field type="text" name="UserId" /> </dd>
                        <dt>Password</dt>
                        <dd> <Field type="password" name="Password" /> </dd>
                    </dl>
                    <button className="btn btn-success">Login</button>
                    <div>
                        <Link to="/register"> New User? Register </Link>
                    </div>
                </Form>
            }    
            </Formik>
        </div>
    );
};