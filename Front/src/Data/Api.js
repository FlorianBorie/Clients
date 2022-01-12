import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const url = "http://localhost:4000/api";

export default {
    getAll: function( prenom, nom, mail, adresse ){
        return axios.getAll(
            `${url}/clients/all`,
            {
                prenom,
                nom,
                mail,
                adresse
            },
            {
                headers: headers
            }
        );
    },
    
    // login: function(email, password) {
    //     return axios.post(
    //       `${burl}/user/login`,
    //       {
    //         email,
    //         password
    //       },
    //       {
    //         headers: headers
    //       }
    //     );
    //   },
    //   signup: function(send) {
    //     return axios.post(`${burl}/user/signup`, send, { headers: headers });
    //   },
    
    //   isAuth: function() {
    //     return localStorage.getItem("token") !== null;
    //   },
    //   logout: function() {
    //     localStorage.clear();
    //   }
    
}