import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useFormValidation } from '../../../lib/hooks/useFormValidation/index';
import * as Input from "../Input";
import './Register.css';
import useAuthentication from '../../../lib/hooks/useAuthentication/index';

const Register = ({history}) => {
  const { handleUserRegistration } = useAuthentication();
  const {formValues, validate, handleOnChange, isValid} = useFormValidation({formName: "register"});
  const {prenom, nom, email, password} = formValues["register"] ?? {};

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
      handleUserRegistration(newUser).then((user) => {
        console.log("Utilisateur bien enregistré !")
        alert("Vous avez bien été enregistré !")
        user && setTimeout(() => history.push("/", 2000));
      }).catch(alert("l'utilisateur est déjà pris !"))
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
                <Input.Submit
                  classNames="btn-primary btn-block"
                  title="S'inscrire"
                  disabled={!isValid}
                />
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

export default (Register);