import React, { useContext, useEffect, useState } from 'react'
import { CameraOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

import { AuthContext } from '../../Context/AuthContext';
import { useDispatch } from 'react-redux';
import { UpdateUser, UploadAvatar } from '../../features/user/userSlice';
import Swal from 'sweetalert2';
import SiderBar from '../SideBar';

const Profil = () => {

    const { user } = useContext(AuthContext)
    const [disabled, setdisabled] = useState(true)
    const [userdetails, setuserdetails] = useState(user)
    const dispatch = useDispatch()
    const handlePicChanged = (e) => {

        let fdata = new FormData()
        fdata.append('avatar', e.target.files[0])

        let data = {
            id: user._id,
            data: fdata
        }

        console.log(e.target.files[0], 'aaaiodnosjqvqrfefgrgrgrgrfr');
        dispatch(UploadAvatar(data))
    }

 /*    const handleChange = e => {
        const { name, value } = e.target;
        setuserdetails(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(userdetails);
    }; */
    const handleChange = e => {
        const { name, value } = e.target;
        setuserdetails(prevState => ({
           ...prevState,
           [name]: value
        }));}


    const handleupdate = () => {

        let data = {
            id: user._id,
            data: userdetails
        }

        console.log(user, "zzzzzzzzzzzzzzzzzzzz");

        dispatch(UpdateUser(data))
        Swal.fire({
            icon: 'success',
            title: 'votre profil est à jour!',

        })
        setdisabled(!disabled)


    }


    return (
        <div>

            <SiderBar />

            <div id="content">
                <div class='main' style={{ marginTop: "100px" }}>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <div class="row column1 ">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <div class="white_shd full ">
                                        <div class="full price_table padding_infor_info">
                                            <div class="row">

                                                <div class="col-lg-12">
                                                    <div class="full dis_flex center_text">
                                                        <div class="profile_img " style={{ marginLeft: "100px" }}>   <img class="rounded-circle " style={{ height: "180px", width: "200px" }} src={'http://localhost:5000/getfile/' + user.avatar} />
                                                            <CameraOutlined onClick={() => document.getElementById('upload').click()} style={{ color: "blue", width: "40px", height: "40px", position: 'absolute' }} className='upload' />
                                                            <div class="contact_inner mt-2 ml-5">
                                                                <h3 >{user.name} </h3>

                                                                <ul class="list-unstyled">
                                                                    <li><i class="fa fa-envelope-o"></i> :{user.email}</li>
                                                                    <li><i class="fa fa-phone"></i> :{user.phoneNumber}</li>
                                                                </ul>
                                                            </div></div>
                                                        <div class="profile_contant">

                                                            <div className="col-md-12 ">

                                                                <div className="d-flex justify-content-between align-items-center  text-right">
                                                                    <h4 className="mb-5">Profile Settings</h4>
                                                                    <EditOutlined onClick={() => setdisabled(!disabled)} style={{ fontSize: '30px', color: "blue" }} />
                                                                </div>

                                                                <div className="col-md-12"><label >Nom</label><input value={userdetails.name} onChange={handleChange} type="text" className="form-control" name="nom" disabled={disabled} style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="col-md-12"><label >adresse</label><input value={userdetails.adresse} onChange={handleChange} type="text" className="form-control" name="adresse" disabled={disabled} style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="col-md-12"><label >Téléphone</label><input value={userdetails.phoneNumber} onChange={handleChange} name="NumContact" type="text" className="form-control" disabled={disabled} style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="col-md-12"><label >Email</label><input value={userdetails.email} onChange={handleChange} type="text" className="form-control" name="email" disabled={disabled} style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="col-md-12">< label >password</label><input value={userdetails.password} onChange={handleChange} type="password" className="form-control" name="password" disabled={disabled} style={{ fontSize: '13px', color: "black", fontWeight: 'bold' }} /></div>
                                                                <div className="mt-5 mb-5 text-right"><button onClick={() => handleupdate()} className="btn btn-primary profile-button" type="button">save</button></div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <input id='upload' onChange={(e) => handlePicChanged(e)} type="file" hidden /></div>
    )
}

export default Profil
