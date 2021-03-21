const { user } = require("firebase-functions/lib/providers/auth");

const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
}
//nom
const isNom = (nom) => {
    const regEx = /^[A-Za-z\é\è\ê\-]+$/;
    if (nom.match(regEx)) return true;
    else return false;
}
//prenom
const isPrenom = (prenom) => {
    const regEx = /^[A-Za-z\é\è\ê\-]+$/;
    if (prenom.match(regEx)) return true;
    else return false;
}
//pwd
const isMdp = (password) => {
    const regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
    if (password.match(regEx)) return true;
    else return false;}
    

const isEmpty = (string) => {
    if (string.trim() === '') return true;
    else return false;
}
exports.validateSignupData =(data,res)=>{
    let errors = {};
    if (isEmpty(data.email)) {
        errors.email = ' Must not be empty'
    }
    else if (!isEmail(data.email)) {
        errors.email = 'Must be a valid email adress';
    }
//nom
    if (isEmpty(data.nom)) {
        errors.nom = 'Must not be empty'} 
    else if (!isNom(data.nom)) {
        errors.nom = 'Must be a valid name';
    }
    //prenom
    if (
        isEmpty(data.prenom)) {errors.prenom = 'Must not be empty'} 
    else if (!isPrenom(data.prenom)) {
        errors.prenom = 'Must be a valid prenom';
    }
//mdp
    if (isEmpty(data.password)) {errors.password = 'Must not be empty'}
    else if (!isMdp(data.password)) {
        errors.password = 'Must be a valid password';
    }

//mdp and confirmMdp
    if (data.password !== data.confirmPassword) errors.confirmPassword = "passwords must match";
    

    return{
        errors,
        valid:Object.keys(errors).length ===0 ?true:false
    }
}
exports.validateloginData= (data)=>{
    let errors = {};
    if (isEmpty(data.email)) errors.email = 'Must not be empty';
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
     
      
    return{
        errors,
        valid:Object.keys(errors).length === 0 ?true:false
    }
}
exports.reduceUserDetails = (data) => {
    let userDetails = {};
    //if (!isEmpty(data.nom.trim())) userDetails.nom = data.nom;
    //if (!isEmpty(data.prenom.trim())) userDetails.prenom = data.prenom;
    if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if (!isEmpty(data.universite.trim())) userDetails.universite=data.universite;
    if (!isEmpty(data.faculte.trim())) userDetails.faculte=data.faculte;
    if (!isEmpty(data.departement.trim())) userDetails.departement=data.departement;
   

      // https://website.com
      //if (data.universite.trim().substring(0, 4) !== 'http') {
       // userDetails.website = `http://${data.website.trim()}`;
     // } else userDetails.website = data.website;
    //}
    if (!isEmpty(data.adresse.trim())) userDetails.adresse = data.adresse;
  
    return userDetails;
  };