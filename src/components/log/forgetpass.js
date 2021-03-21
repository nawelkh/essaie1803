import React, {  useState } from 'react';
import axios from "axios";

import logo from "../../images/logo.jpg";

import {MdEmail}  from 'react-icons/md' ; 

export default function Forgetpass() {

  const [email, setEmail] = useState(" ");
 // const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleForget = e => { 

e.preventDefault(); 

axios
     .post('http://localhost:5000/etudiant-e96f9/us-central1/api/passwordReset', {email} )

     window.alert(`consultez votre email ${email} pour changer votre mdp `);
     window.history.back()


.then (()=>{ 

  setError(null);
  //setSuccess(`consultez votre email ::  ${email} ::  pour changer votre mdp `);
 
 })

.catch(error => {
  setError(error);
  window.alert(`lerreur est : ${error} suivante`);
  setEmail("")
})


  }


const disabled = email ===""; 

  //declaration des containers 
    const [Container,setContainer]=React.useState("container");
    const [DivContainer,setDivContainer]=React.useState("forms-container");




    return(
      <div>
        <div class={Container}>
      <div class={DivContainer}>
        <div class="signin-signup">

          <form action=""  onSubmit={handleForget} class="sign-in-form">
          <img src={logo} alt="" style={{width:"30vh" ,float:"left",marginTop:'5px',marginRight:'20px', borderRadius: "50px"}} align="center" ></img>
            
  
            
            <h3 class="title">MOT DE PASSE OUBLIE ?!</h3>

            <div class="input-field">
                <i><MdEmail/></i>
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"  id="email" required /> 
            </div>
              

          <button type="submit" value="Recuperer" class="btn solid" disabled={disabled} >RECUPERER</button>
          <a style={{marginTop:50}}  href="/inscription" > Voulez vous connectez ?</a>

          </form>

            
        </div>
        <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Vous Avez oublie votre mot de passe ?</h3>
           
            <p>
           Pas de soucis Veuillez nous passer  votre Email 
            </p>
            
        
           
          </div>
      </div>
    </div>
</div>
 </div>
</div>

    )
}