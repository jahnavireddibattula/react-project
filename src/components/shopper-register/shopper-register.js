// import { Formik,Form,ErrorMessage,Field } from 'formik';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import  * as yup from "yup";
// // import { Field } from 'formik';
// // import { Form } from 'react-router-dom';
// // import { Form } from 'formik';
// // import { ErrorMessage } from 'formik';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// // export const ShopperRegister = () => {
//     export default  function ShopperRegister(){
//         const navigate = useNavigate();
//         const [users, setUsers] = useState([]);
//         const [userError, setUserError] = useState('');
//         // const [userPassword, setUserPassword] = useState('');

//         useEffect(()=>{
//                 axios({
//                     method:'get',
//                     url:'http://127.0.0.1:8080/users'
//                 })
//                 .then(response=>{
//                     setUsers(response.data);
//                 })
//         },[]);

//         function VerifyUserId(e){
//             // alert(e.target.value);
//             for(var user of users){
//                 if(user.UserId===e.target.value){
//                     setUserError('User Name Taken - Try Another');
//                     break;
//                 }else{
//                     setUserError('User Name Available')
//                 }
//             }
//         }

//         // function VerifyUserPassword(e){
//         //     // alert(e.target.value);
//         //     for(var user of users){
//         //         if(user.Password==e.target.value){
//         //             setUserPassword('User Name Taken - Try Another');
//         //             break;
//         //         }else{
//         //             setUserPassword('User Name Available')
//         //         }
//         //     }
//         // }
//   return (
//      <div className='container-fluid'>
//         <h3>Register User</h3>
//         <Formik
//         initialValues={{
//             UserId:"",
//             UserName:"",
//             Password:"",
//             Email:"",
//             Age:0,
//             Mobile:""
//         }}
//         validationSchema={
//             yup.object({
//                 UserId: yup.string().required("User Id Required"),
//                 UserName: yup.string().required("User Name Required"),
//                 Password: yup.string().required("Password Required").matches(/(?=.*[A-Z])\w{4,15}/,"Password 4 to 15 chars with atleast one uppercase letter"),
//                 Email: yup.string().required("Email Required").email("Invalid Email"),
//                 Age: yup.number().required("Age Required"),
//                 Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/,"Invalid Mobile +91 and 10 digits")
//             })
//         }

//         onSubmit= {
//             (values)=> {
//                 axios({
//                     method:"post",
//                     url: "http://127.0.0.1:8080/registeruser",
//                     data: values
//                 })
//                 .then(()=>{
//                     alert("Register Successfully...");
//                     navigate("/login");
//                 })
//             }
//         }
//         >
//             {
//                 <Form>
//                     <dl>
//                         <dt>User Id</dt>
//                         <dd><Field type="text" onKeyUp={VerifyUserId} name="UserId"/></dd>
//                         <dd className='text-danger'>
//                             <ErrorMessage name="UserId" />
//                         </dd>
//                         <dd className='Danger'>{userError}</dd>
//                         <dt>User Name</dt>
//                         <dd><Field type="text"  name="UserName"/></dd>
//                         <dd className='text-danger'>
//                             <ErrorMessage name="UserName" />
//                         </dd>
//                         <dt>Password</dt>
//                         <dd><Field type="Password" name="Password"/></dd>
//                         {/* <dd><Field type="Password" onKeyUp={VerifyUserPassword} name="Password"/></dd> */}
//                         {/* <dd className='text-danger'>{userPassword}
//                             {/* <ErrorMessage name="Password" /> */}
//                         {/* </dd> */} 
//                         <dd className='text-danger'>
//                             <ErrorMessage name="Password" />
//                         </dd>
//                         <dt>Email</dt>
//                         <dd><Field type="email" name="Email"/></dd>
//                         <dd className='text-danger'>
//                             <ErrorMessage name="Email" />
//                         </dd>
//                         <dt>Age</dt>
//                         <dd><Field type="number" name="Age"/></dd>
//                         <dd className='text-danger'>
//                             <ErrorMessage name="Age" />
//                         </dd>
//                         <dt>Mobile</dt>
//                         <dd><Field type="text" name="Mobile"/></dd>
//                         <dd className='text-danger'>
//                             <ErrorMessage name="Mobile" />
//                         </dd>
//                     </dl>
//                     <button className='btn btn-primary'>Register</button>
//                     <div>
//                         <Link to="/login">Existing User?</Link>
//                     </div>
//                 </Form>
//             }

//         </Formik>
//      </div>
//   )
// }



import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShopperRegister(){
  const navigate = useNavigate();
  const[users,setUsers] = useState([]);
  const [userError,setUserError] = useState('');
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [age,setAge] = useState('');
  const [mobile,setMobile] = useState('');

  useEffect(()=>{
    axios({
      method:'get',
      url:'http://127.0.0.1:8080/users'
    })
    .then(response=>{
      setUsers(response.data);
    })
  },[]);

  function VerifyUserId(e){
    for(var user of users){
      if(user.UserId===e.target.value){
        setUserError('User Id Taken - Try Another');
        break;
      } else {
        setUserError('UserId Available');
      }
    }
  }

  function VerifyUserName(e){
    for(var user of users){
      if(user.UserName===e.target.value){
        setUserName('User Name Taken - Try Another');
        break;
      } else {
        setUserName('UserName Available');
      }
    }
  }

  function VerifyPassword(e){
    for(var user of users){
      if(user.Password===e.target.value){
        setPassword('User Password Taken - Try Another');
        break;
      } else {
        setPassword('Password Available');
      }
    }
  }

  function VerifyEmail(e){
    for(var user of users){
      if(user.Email===e.target.value){
        setEmail('User Email Taken - Try Another');
        break;
      } else {
        setEmail('Email Available');
      }
    }
  }

  function VerifyAge(e){
    var age = parseInt(e.target.value);
    for(var user of users){
      if(user.Age===age){
        setAge('User Age Taken - Try Another');
        break;
      } else {
        setAge('Age Available');
      }
    }
  }

  function VerifyMobile(e){
    for(var user of users){
      if(user.Mobile===e.target.value){
        setMobile('User Mobile Taken - Try Another');
        break;
      } else {
        setMobile('Mobile Available');
      }
    }
  }

    return(
        <div className="container-fluid">
          <h2>Registation Form</h2>
          <Formik
          initialValues={{
            UserId:"",
            UserName:"",
            Password:"",
            Email:"",
            Age:0,
            Mobile:""
          }}
          validationSchema={
            yup.object({
                UserId: yup.string().required("User Id required"),
                UserName: yup.string().required("User Name is required"),
                Password: yup.string().required("Password is required").matches(/(?=.*[A-Z])\w{4,15}/,"password 4 to 15 chars with atleast one upper case letter"),
                Email: yup.string().required("Email is required").email("invalid Email"),
                Age: yup.number().required("Age is required"),
                Mobile: yup.string().required("Mobile is required").matches(/\+91\d{10}/,"invalid mobile +91 and 10 digits")
            })
          }
          onSubmit={
            (values)=>{
              axios({
                method: "post",
                url: "http://127.0.0.1:8080/registeruser",
                data: values
              })
              .then(()=>{
                alert("Register Successfully..");
                navigate("/login");
              })
            }
          }
          >
           {
            <Form>
              <dl>
                <dt>User Id</dt>
                <dd> <Field type="text" onKeyUp={VerifyUserId} name="UserId"/> </dd>
                <dd className="text-danger">
                  <ErrorMessage name="UserId"/>
                </dd>
                <dd>{userError}</dd>

                <dt>User Name</dt>
                <dd> <Field type="text" onKeyUp={VerifyUserName} name="UserName"/> </dd>
                <dd className="text-danger">
                  <ErrorMessage name="UserName"/>
                </dd>
                <dd>{userName}</dd>

                <dt>Password</dt>
                <dd> <Field type="Password" onKeyUp={VerifyPassword} name="Password"/> </dd>
                <dd className="text-danger">
                </dd>
                <dd>{password}</dd>

                <dt>Email</dt>
                <dd> <Field type="text" onKeyUp={VerifyEmail} name="Email"/> </dd>
                <dd className="text-danger">
                  <ErrorMessage name="Email"/>
                </dd>
                <dd>{email}</dd>

                <dt>Age</dt>
                <dd> <Field type="number" onKeyUp={VerifyAge} name="Age"/> </dd>
                <dd className="text-danger">
                  <ErrorMessage name="Age"/>
                </dd>
                <dd>{age}</dd>
                
                <dt>Mobile</dt>
                <dd> <Field type="text" onKeyUp={VerifyMobile} name="Mobile"/> </dd>
                <dd className="text-danger">
                  <ErrorMessage name="Mobile"/>
                </dd>
                <dd>{mobile}</dd>

              </dl>
              <button type="submit" className="btn btn-primary">Register</button>
              <div>
                <Link to="/login"> Existing User?</Link>
              </div>
            </Form>
           }
          </Formik>
        </div>
    )
}