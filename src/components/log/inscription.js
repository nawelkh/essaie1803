import React, { useState , useEffect } from 'react';
import axios from "axios";
import  firebase from "../../util/config.js"   ;
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


import logo from "../../images/logo.jpg";
import {MdEmail}  from 'react-icons/md' ; 
import {RiLockPasswordFill} from 'react-icons/ri';
import {FaUserAlt} from 'react-icons/fa';
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";




export default function Inscription() {

//connexion avec google 
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: '/profil',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    
    ],
    
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // !! ensure boolean
      setIsSignedIn(!!user);
      console.log(user);
    });
  }, []);




//inscription et connexion 
const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [formation, setFormation] =useState("");


//recuperer la valeur de formation 
const [value, setValue] = React.useState(0);
const handleChange = val => {setValue(val); if (val===2) { setFormation('etudiant')}else {setFormation('professeur')}} 


//partie control 

//email
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
  const regEx = /^([a-zA-Z0-9]{8})$/;
  if (password.match(regEx)) return true;
  else return false;}
  

const isEmpty = (string) => {
  if (string.trim() === '') return true;
  else return false;
}


//fonction d inscription 
 const handleRegister = async (e) => {
 
     e.preventDefault();

  /*const prenomError = document.querySelector(".prenom.error");
  const nomError = document.querySelector(".nom.error");
  const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");
  const confirmPasswordError = document.querySelector(".confirmPassword.error");
  const formationError = document.querySelector(".formation.error");*/
  //const termsError = document.querySelector(".terms.error");

  let errors = {};

  //email
  if (isEmpty(email)) {
      errors.email = ' Must not be empty';
      window.alert(errors.email)
  }
  else if (!isEmail(email)) {
      errors.email = 'Must be a valid email adress';
      window.alert(errors.email)
  }
//nom
  if (isEmpty(nom)) {
      errors.nom = 'Must not be empty';
      window.alert(errors.nom)} 
  else if (!isNom(nom)) {
      errors.nom = 'Must be a valid name';
      window.alert(errors.nom)
  }
  //prenom
  if (
      isEmpty(prenom)) {errors.prenom = 'Must not be empty';  window.alert(errors.prenom)} 
  else if (!isPrenom(prenom)) {
      errors.prenom = 'Must be a valid prenom';  window.alert(errors.prenom)
  }
//mdp
  if (isEmpty(password)) {errors.password = 'Must not be empty';  window.alert(errors.password)}
  else if (!isMdp(password)) {
      errors.password = 'Must be a valid password';
      window.alert(errors.password)
  }

//mdp and confirmMdp
  if (password !== confirmPassword) {
    errors.confirmPassword = "passwords must match";
   window.alert(errors.confirmPassword)

  }else {
   
    axios
     .post('http://localhost:5000/etudiant-e96f9/us-central1/api/signup',
     {
        nom,
        prenom,
        email,
        password,
        confirmPassword ,
        formation 
      } 
      ) 

      .then((res) => {
      window.alert(res);
      //window.alert ("inscription reussite  ");
      handleClickSignIn();
      
     /* if (res.data.errors) {
        nomError.innerHTML = res.data.errors.nom;
        prenomError.innerHTML = res.data.errors.prenom;
        emailError.innerHTML = res.data.errors.email;
        passwordError.innerHTML = res.data.errors.password;
        confirmPasswordError.innerHTML = res.data.errors.confirmPassword;
        formationError.innerHTML = res.data.errors.formation;
      } */
    })
    .catch((err) => window.alert(err));
}
};


//fonction de connexion 
const handleLogin = (e) => {
  e.preventDefault();
  
  /*const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");*/



  let errors = {};
//email
  if (isEmpty(email)) {
      errors.email = ' Must not be empty';
      window.alert(errors.email)
  }
  else if (!isEmail(email)) {
      errors.email = 'Must be a valid email adress';
      window.alert(errors.email) }

//mdp
  if (isEmpty(password)) {errors.password = 'Must not be empty';  window.alert(errors.password)}
  else if (!isMdp(password)) {
      errors.password = 'Must be a valid password';
      window.alert(errors.password)
  }


  axios 
   .post('http://localhost:5000/etudiant-e96f9/us-central1/api/login',{
    email,
      password,
    })
  
    .then((res) => {
      window.alert(res);
      window.alert ("vs etes connectes ");
      window.location='/'

     /* if (res.data.errors) {
        emailError.innerHTML = res.data.errors.email;
        passwordError.innerHTML = res.data.errors.password;
      }*/

    })
    .catch((err) => {
     window.alert(err);
    });
  }


  //declaration des var pr linterface 
    const [Container,setContainer]=React.useState("container");
    const [DivContainer,setDivContainer]=React.useState("forms-container");

    const handleClickSignUp=()=>{ 
          setContainer(" container sign-up-mode")
          setDivContainer("forms-container sign-up-mode")
        }
    const handleClickSignIn=()=>{
        setContainer(" container ")
        setDivContainer("forms-container")
     }


    return (

      <div>
        <div class={Container}>
      <div class={DivContainer}>
        <div class="signin-signup">

          <form action="" onSubmit={handleLogin}  class="sign-in-form">

          <img src={logo} alt="" style={{width:"15vh" ,float:"left",marginTop:'5px',marginRight:'20px', borderRadius: "50px"}} align="center" ></img>
           
            <h2 class="title">Se connecter</h2>

            <div class="input-field">
                <i><MdEmail/></i>
                <input type="email" placeholder="Email"  id="email" onChange={(e) => setEmail(e.target.value)}   required /> 
            </div>

           <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                <input type="password" placeholder="mot de passe" id="password" onChange={(e) => setPassword(e.target.value)} required />
           </div>

          <input type="submit" value="Connexion" class="btn solid" />
          <a style={{marginTop:50}}  href="/forget" > Mot de passe oublié ?</a>

          </form>

          
          <form action="" onSubmit={handleRegister}  class="sign-up-form">
            
            <h3 class="title">S'inscrire</h3>
              
            <div class="input-field">
            <i><FaUserAlt/></i>
            <input type="text" placeholder="Nom"  id="nom" onChange={(e) => setNom(e.target.value)}   required/>
            </div>

            <div class="input-field">
             <i><FaUserAlt/></i>
            <input type="text" placeholder="Prenom"  id="prenom" onChange={(e) => setPrenom(e.target.value)} required/>
            </div>

             <div class="input-field">
              <i><MdEmail/></i>
              <input type="email" placeholder="Email" id="Email" onChange={(e) => setEmail(e.target.value)}  required/> 
              </div>
             
              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                <input type="password" placeholder="mot de passe" id="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>

              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                <input type="password" placeholder="Confirmer mot de passe" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}  required/>
              </div>

                < div class="input"  >
                <ToggleButtonGroup name="value" type="radio" value={value} onChange={handleChange}>
                <ToggleButton style={{ backgroundColor:'white',color:'black'}}  value={1}>Enseignant</ToggleButton>
                <ToggleButton style={{ marginLeft:80,backgroundColor:'white',color:'black'}}value={2}>Etudiant</ToggleButton>
                </ToggleButtonGroup>
                
                </div>
                
            <input type="submit" class="btn" value="Créer" />
             
              <div class="social-media">
              <StyledFirebaseAuth
              uiConfig={uiConfig}
               firebaseAuth={firebase.auth()}/>
              </div>
              
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Welcome To Uniswap</h3>
           
            <p>
          Créez un compte et et swapez avec vos profs et vos amis !
            </p>
            
            <button class="btn transparent" id="sign-up-btn" onClick={handleClickSignUp}>
                Inscription
            </button>
           
          </div>
          
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Vous possedez déja un compte ?</h3>
            <p>
             Connectez-vous alors !
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={handleClickSignIn} >
              Connexion
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
</div>  
        

    
    );  
    
    }


  