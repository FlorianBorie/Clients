import * as Realm from "realm-web";
import { app } from '../../service/mongoDB-sdk/index';
import { handleLogin, handleLogout, handleAuthenticationErrors } from "../../state/actions/authentication";

const useAuthentication = () => {
    function handleUserRegistration(newUser) {
        return new Promise((resolve) => {
            app.emailPasswordAuth
            .registerUser(newUser.email, newUser.password)
            .then(() => {
                const credentials = Realm.Credentials.emailPassword(newUser.email, newUser.password)
                app.logIn(credentials)
                .then(user => {
                    resolve(user)
                    handleLogin(user)
                });
            })
            .catch((err) => handleAuthenticationErrors(err))
        })
    }
    async function handleUserLogout() {
        console.dir(app.currentUser);
        app.currentUser
          ?.logOut()
          .then(() => console.log("user successfully log out"))
          .catch((err) => console.log(err));
    }
    async function handleUserLogin(email, password) {
        return new Promise((resolve) => {
          app
            .logIn(Realm.Credentials.emailPassword(email, password))
            .then(async () => {
              // verify current user
              const currentUser = await app.currentUser;
    
              resolve(currentUser);
              handleLogin(currentUser);
              // retrieve user profile
              // getUser(currentUser.email)
              //     .then(userProfile => {
              //         dispatch(handleLogin(userProfile))
              //             resolve(currentUser)
              //     })
            })
            .catch((err) => handleAuthenticationErrors(err));
        });
    }
    
      async function handleAuthentication() {
        const currentUser = await app.currentUser;
        handleLogin(currentUser);
        // getUser(currentUser?.email)
        //     .then(userProfile => !!currentUser && dispatch(handleLogin(userProfile)))
        //     .catch(err =>  dispatch(handleAuthenticationError(err)))
    }

    return {
        handleUserRegistration,
        handleUserLogout,
        handleUserLogin,
        handleAuthentication,
    };
};
export default useAuthentication;