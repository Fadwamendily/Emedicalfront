import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import AuthService from '../Services/authService'

function Login() {
   const { setUser, setIsAuth, user,setRole } = useContext(AuthContext)
   const [values, setValues] = useState({})

   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault();
      AuthService.login(values).then(jsonData => {
         if (jsonData.message=== 'user not found') {
            alert('verifiez votre email ou votre mot de passe')
               
         }
         else{
            console.log('user', jsonData)
            setUser(jsonData.user);
            setIsAuth(jsonData.isAuthenticated);
            setRole(jsonData.role)
           window.location.href = '/home'

         }
      })
   }
   return (
      <div>
         <div className="container">
            <div className="center verticle_center full_height">
               <div className="login_section">
                  <div className="logo_login">
                     <div className="center">
                        <img width="210" src="images/logo/logo.png" alt="#" />
                     </div>
                  </div>
                  <div className="login_form">
                     <form onSubmit={onSubmit}>
                        <fieldset>
                           <div className="field">
                              <label className="label_field">Email <color style={{ color: 'red' }}>*</color> </label>
                              <input type="email" name="email" placeHolder="E-mail" onChange={onChangeHandler} />
                           </div>
                           <div className="field">
                              <label className="label_field">Mot de passe <color style={{ color: 'red' }}>*</color></label>
                              <input type="password" name="password" placeHolder="Mot de passe " onChange={onChangeHandler} />
                           </div>
                           <div className="field">
                              <label className="label_field hidden">hidden label</label>
                              <label className="form-check-label"><input type="checkbox" class="form-check-input" /> Remember Me</label>
                              <Link className='forgot' to="/SignUp">Créer un compte maintenant</Link>
                           </div>
                           <div className="field margin_0">
                              <label className="label_field hidden">hidden label</label>
                              <button className="main_bt" >Connexion</button>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login