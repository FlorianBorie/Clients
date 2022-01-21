import React, {useEffect} from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Provider, useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom';
import { useFormValidation } from '../../../lib/hooks/useFormValidation/index';
import * as Input from "../Input";
import './Register.css';
import useAuthentication from '../../../lib/hooks/useAuthentication/index';

const Alert = ({ isVisile }) => {
    isVisile &&
    <div className='alert alert-info mt-3'>
        <p className='icontext'><i className='icon text-primary fa fa-thumbs-up'></i>L'utilisateur à été ajouté avec success</p>
    </div>
}

const ErrorMessage = ({ error }) => {
    error &&
    <div className='alert alert-danger mt-3'>
        <p className='icontext' style={{color: "crimson"}}><i className='icon text-danger fas fa-exclamation-circle'></i>{' '}{error?.error}</p>
    </div>
}

// const defaultValues = {
//     prenom: "sandy",
//     nom: "last",
//     mail: "sandy@gmail.com",
//     password: "test12345",
//   };

const Register = ({history}) => {
  // const dispatch = useDispatch();
  const { handleUserRegistration } = useAuthentication();
  // const navigation = useNavigate();
  const {formValues, validate, register, handleOnChange, isValid} = useFormValidation({formName: "register"});
  const {prenom, nom, email, password} = formValues["register"] ?? {};
  // useEffect(() => {
  //     register(defaultValues);
  // }, []);

  useEffect(() => {
      validate(formValues["register"] ?? {})
  }, [formValues]);

  const handleOnSubmit = (e) => {
      e.preventDefault();
      const newUser = {
        prenom,
        nom,
        email,
        password
      };
      handleUserRegistration(newUser).then(() => {
        console.log("Utilisateur bien enregistré !")
        // setTimeout(() => history.push("/", 2000));
      })
      // navigation.push("/");
  };

    return (
        <>
        <div
          className="card mx-auto"
          style={{ maxWidth: "520px", marginTop: "140px" }}
        >
          <article className="card-body">
            <header className="mb-4">
              <h4 className="card-title">S'inscrire</h4>
            </header>
            {/* feedback et message d'erreurs */}
            <form name="register" onSubmit={handleOnSubmit}>
              <div className="form-row">
                <Input.Text
                  label="Prénom"
                  name="prenom"
                  onChange={handleOnChange}
                />
                <Input.Text
                  label="Nom"
                  name="nom"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <Input.Email
                  label="Mail"
                  style={{ padding: 0 }}
                  onChange={handleOnChange}
                />
              </div>  
              <div className="form-row">
                <Input.Password
                  label="Rentrer votre mot de passe"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <a href='"/'>
                  <Input.Submit
                    classNames="btn-primary btn-block"
                    title="S'inscrire"
                    disabled={!isValid}
                  />

                </a>
              </div>
            </form>
          </article>
        </div>
        <p className="text-center mt-4">
          As-tu déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
        <br />
        <br />
        <br />
      </>
    );
}

export default Register;