import React from 'react'
import santé from '../images/santé.png'
import Dotors from '../images/doctors.png'
import Laboratoires from '../images/laboratoires.png'
import '../assets/css/landing.css'

function Landing() {
    return (
        <section style={{marginTop:"80px"}} class="page-section" id="services">
            <div class="container">
                <div class="text-center">
 
                    <h3 class="section-subheading text-muted">QUE VOUS ENVISAGEZ DE REJOINDRE LA RÉVOLUTION NUMÉRIQUE DES SOINS DE SANTÉ, VOUS VOULEZ PRENDRE UN RENDEZ-VOUS CHEZ UN MÉDECIN OU UN LABORATOIRE, VÉRIFIEZ VOTRE SITUATION DE SANTÉ ICI VOUS VOUS TROUVEZ</h3>
                </div>
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }} >
                    <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                        <div >
                            <div className="photo">
                                <img className="photo" src={santé} alt="" align="left" />
                                <h4 class="my-3">VERIFIEZ TA SANTE</h4>
                                <p class="text-muted" style={{textAlign: "center" }} ></p>
                            </div>
                        </div>
                        <div   >
                            <div className="photo">
                                <img className="photo" src={Dotors} alt="" align="center" />
                                <h4 class="my-3">VISITEZ UN DOCTEUR</h4>
                                <p class="text-muted" style={{textAlign: "center" }}>For those who want to save a lot of space in their home and in their bag. You don't have to worry about the storage limit. </p>
                            </div>
                        </div>
                        <div  >
                            <div className="photo">
                            <img className="photo" src={Laboratoires} alt="" align="right" />
                            <h4 class="my-3">VISITEZ UN LABORATOIRE</h4>
                            <p class="text-muted" style={{textAlign: "center" }}>For those who want to improve their reading and speaking accuracy and fluency. While the narrator(s) narrates the book, you can notice and learn .</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}
        
export default Landing