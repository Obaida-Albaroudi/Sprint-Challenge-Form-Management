import React, {useState, useEffect} from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {Card,} from 'semantic-ui-react';

import User from "./User.js"

const StyleFlexForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center:
width: 10px; 
height: 30%; 
background: white; 
color: black;
border: 3px solid black; 
border-radius: 2%; 
text-align: left;
font-weight: 200; 
font-size: 1rem; 
margin-left: 1rem;
margin-top: 2rem;

`


const StyleAnswer = styled.p`
color: white;
font-size: 1rem; 
margin-top: 1rem;  
`

const ClientForm = ({errors, touched, values, status}) =>{
    const [user, setUser] = useState([]);
    const [get, setGet] =useState([]);
    


    useEffect(()=>{
        if(status){
            setUser([...user, status])
            setGet(...get, status)
        }
    },[status])


    return (
        <>
            <StyleFlexForm>
                <h1> Client Form </h1>

                <Form >
                    <Field type="text" name="Username" placeholder="Username"/>
                    {touched.Username && errors.Username && (
                        <p>{errors.Username}</p>
                    )}<br></br>
                    
                    <Field type="password" name="Password" placeholder="Password"/>
                    {touched.Password && errors.Password && (
                        <p>{errors.Password}</p>
                    )}<br></br>                 

                    <button type="submit"> Submit </button>

                </Form>

            </StyleFlexForm>

            {get.length >1 &&
                <User props={get}/>
            }


        </>
    )
}

const ClientFormik = withFormik({
    mapPropsToValues({Username, Password}){
        return{
            Username: Username || '',
            Password: Password || ''
        }
    },

    validationSchema: Yup.object().shape({
        Username: Yup.string().required("Username is needed!"),
        Password: Yup.string().min(7, "Password too Short!").required("Password needed!")
    }),

    handleSubmit(values, {setStatus, setSubmitting, resetForm}, setGet){
        axios
        .post('http://localhost:5000/api/register', values)
        .then( res =>{
            setSubmitting(false);
            setStatus(res.data);
            resetForm();
        })
        .catch(err => {
            console.log("error") 
            setSubmitting(false);
        })
        axios
        .get("http://localhost:5000/api/restricted/data", values)
        .then(res => {
            setStatus(res.data)
        })
        .catch(err=> console.log(err))
    }

})(ClientForm)

export default ClientFormik;