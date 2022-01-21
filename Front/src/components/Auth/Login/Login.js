import React, {useEffect} from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useFormValidation} from '../../../lib/hooks/useFormValidation/index';
import * as Input from '../Input';
import './Login.css';

const Alert = ({ isVisible }) => (
	isVisible &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className="icon text-primary fa fa-thumbs-up"></i>User successfully connected</p>
    </div>
)
const ErrorMessage = ({ error }) => (
	error && 
	<div className="alert alert-danger mt-3">
		<p className="icontext]" style={{ color: 'crimson' }}><i className="icon text-danger fas fa-exclamation-circle"></i> {' '}{error?.error}</p>
    </div>
)

const defaultValues = {
	email: 'sandy@gmail.com' ,
	password: '' ,
}

const Login = () => { 
    const navigation = useNavigate();
    const {formValues, validate, register, handleOnChange, isValid} = useFormValidation({formName: "login"});
    const {email, password} = formValues["login"] ?? {};
    // useEffect(() => {
    //     register(defaultValues);
    // }, []);

    useEffect(() => {
        validate(formValues["login"] ?? {})
    }, [formValues]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setTimeout(Navigate.push('/'), 2000)
    };

  return(<>
		<div className="card mx-auto" style={{maxWidth: '380px', marginTop:'200px'}}>
        <div className="card-body">
            <h4 className="card-title mb-4">Se connecter</h4>
            <form name="login" onSubmit={handleOnSubmit}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <Input.Email label="Email" style={{padding: 0}} onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <Input.Password label="Mot de passe" name="password" style={{padding: 0}}  onChange={handleOnChange} />
                </div>
                <div className="form-group">
                    <Input.Submit classNames="btn-primary btn-block" title="Login" disabled={!isValid}/> 
			    </div> 
            </form>
        </div>
        </div> 
        <p className="text-center mt-4">Vous pouvez vous inscrire ici ! <Link to='/register'>S'inscrire</Link></p>
        <p className="text-center mt-4">Vous avez un trou de mémoire cliqué ici <Link to='/forbidden'>Mot de passe oublié !</Link></p>
		<br /><br />
	</>)
}  
export default Login