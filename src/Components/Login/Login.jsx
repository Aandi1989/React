import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from '../utils/validators/validators';
import {connect} from "react-redux";
import {login} from '../Redux/auth-reducer'
import { Redirect } from 'react-router';
import styles from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} validate={[required]} name={'email'} component={Input} />
            </div>
            <div>
                <Field placeholder={"password"} validate={[required]} name={'password'} component={Input} type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox" } name={'rememberMe'} component={Input} /> remember me
            </div>
            {
             props.error && <div className={styles.formSummeryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
 


const Login = (props)=>{
    
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
})
export default connect (mapStateToProps, {login})(Login)