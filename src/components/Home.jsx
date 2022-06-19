import React from 'react'
import SideBar from './SideBar'
import about from'../images/about.png'
function Home() {
  return (
    <div class="row" style={{display:"flex"}}>
      <div class="col-md-5">
        <SideBar />
      </div>
      <div class="col-md-7" style={{ marginRight: "0px",marginTop: '100px',flexDirection:"column" , justifyItems:"center"}}>
        <h1 style={{fontSize:"50px",color:"green" }}>Chez Nous Vous Pouvez</h1>
        <img src={about} alt="" style={{ height: '100%', width:"90%", justifyItems:"center" ,marginRight:"200px"}} />
      </div>

    </div>
  )
}

export default Home