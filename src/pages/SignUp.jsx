import React, { useContext, useState } from 'react'
import Doctor from '../images/doctor.png'
import Patient from '../images/malade.png'
import Laboratoire from '../images/Labo.png'
import '../css/Register.css'
import { RegistredDoc, selectregistererror } from '../features/doctor/doctorSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RegistredPatient } from '../features/patient/patientSlice'
import { RegistredLab } from '../features/labo/laboSlice'
export default function SignUp(props) {

   const dispatch = useDispatch()
   const [values, setValues] = useState({})
   const errors = useSelector(selectregistererror)
   const [role, setrole] = useState('');
   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault();
      console.log('Success:', values);
      if (role === "Docteur") {
         dispatch(RegistredDoc(values))
         window.location.href = '/login'


      }
      else if(role === "Patient") {
         dispatch(RegistredPatient(values))
         window.location.href = '/login'

      }
      else{dispatch(RegistredLab(values))
         window.location.href = '/login'

      }
      /*  const { user } = useContext(AuthContext)
       */


      const errorHandler = ({ name }) => {

         return (
            <>
               {
                  errors.map(e => {
                     return (
                        <>
                           {
                              e.path[0] === name
                              &&
                              <span style={{ color: "red" }}  >{e.message}</span>
                           }
                        </>
                     )
                  })

               }
            </>
         )
      }
   }

   return (
      <div>
         <div className='registerform' >
            {role === '' &&
               <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }} >
                  <div  >
                     <span className='spanf' style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}  >
                        Vous êtes?
                     </span>
                  </div>
                  <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                     <div >
                        <div className="Author">
                           <img onClick={() => setrole('Docteur')} src={Doctor} alt="" align="center" />
                           <h4>Docteur</h4>
                        </div>
                     </div>
                     <div   >
                        <div className="Author">
                           <img onClick={() => setrole('Patient')} src={Patient} alt="" align="left" />
                           <h4>Patient</h4>
                        </div>
                     </div>
                     <div   >
                        <div className="Author">
                           <img onClick={() => setrole('Laboratoire')} src={Laboratoire} alt="" align="left" />
                           <h4> Laboratoire </h4>
                        </div>
                     </div>
                  </div>

               </div>
            }
            {
               (role === 'Laboratoire' || role === 'Docteur' || role === 'Patient') && <>

                  <div>
                     <div className="container" >
                        <div className="center verticle_center full_height">
                           <div className="login_section">

                              <div className="login_form">
                                 <form onSubmit={onSubmit} >
                                    <fieldset>
                                       <div className="field">
                                          <label className="label_field">Nom <color style={{ color: 'red' }}>*</color> </label>
                                          <input type="name" name="name" placeHolder="Nom" onChange={onChangeHandler} required />
                                          <errorHandler name='name' />

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Téléphone <color style={{ color: 'red' }}>*</color> </label>
                                          <input type="PhoneNumber" name="phoneNumber" placeHolder="Numéro de téléphone" onChange={onChangeHandler} required />
                                          <errorHandler name='phoneNumber' />

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Adresse <color style={{ color: 'red' }}>*</color></label>
                                          <input type="Adress" name="adresse" placeHolder="Adresse" onChange={onChangeHandler} required />
                                          <errorHandler name='adresse' />

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Email <color style={{ color: 'red' }}>*</color></label>
                                          <input type="email" name="email" placeHolder="E-mail" onChange={onChangeHandler} required />
                                          <errorHandler name='email' />

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Mot de passe <color style={{ color: 'red' }}>*</color></label>
                                          <input type="password" name="password" placeHolder="Mot de passe" onChange={onChangeHandler} required />
                                          <errorHandler name='password' />

                                       </div>
                                       {role === 'Docteur' || role === 'Patient' &&
                                          <div className="field">
                                             <label className="label_field">Sexe <color style={{ color: 'red' }}>*</color></label>
                                             <input type="text" name="gender" placeHolder="gender" onChange={onChangeHandler} required />
                                             <errorHandler name='gender' />

                                          </div>}
                                       {role === 'Docteur' &&
                                          <div className="field">
                                             <label className="label_field">Spécialité <color style={{ color: 'red' }}>*</color></label>
                                             <input type="text" name="specialisation" placeHolder="specialisation" onChange={onChangeHandler} required />
                                             <errorHandler name='specialisation' />

                                          </div>}
                                       {role === 'Docteur' &&
                                          <div className="field">
                                             <label className="label_field">Education <color style={{ color: 'red' }}>*</color></label>
                                             <input type="text" name="education" placeHolder="education" onChange={onChangeHandler} required />
                                             <errorHandler name='education' />

                                          </div>}
                                       {role === 'Docteur' || role === 'Laboratoire' &&
                                          <div className="field">
                                             <label className="label_field">Bio <color style={{ color: 'red' }}>*</color></label>
                                             <input type="text" name="bio" placeHolder="bio" onChange={onChangeHandler} required />
                                             <errorHandler name='bio' />

                                          </div>}
                                       {role === 'Patient' &&
                                          <div className="field">
                                             <label className="label_field">Date de naissance <color style={{ color: 'red' }}>*</color></label>
                                             <input type="date" name="birthDate" placeHolder="Date de naissance" onChange={onChangeHandler} required />
                                             <errorHandler name='birthDate' />

                                          </div>
                                       }
                                       <div className="field margin_0">
                                          <label className="label_field hidden">hidden label</label>
                                          <button className="main_bt">S'inscrire</button>
                                       </div>
                                    </fieldset>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            }

         </div>
      </div>
   )

}

