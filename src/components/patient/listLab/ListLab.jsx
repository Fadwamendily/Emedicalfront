import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GETLabos, selectlabos } from '../../../features/labo/laboSlice'
import SiderBar from '../../SideBar'


function ListLab() {

    const dispatch = useDispatch()
    const labos = useSelector(selectlabos)

   

    return (

        <div class="row" style={{ display: "flex" }}>

            <div>
                <SiderBar />

                <div id="content" style={{ paddingTop: '51px' }}>
                    <div className="midde_cont">
                        <div className="container">
                            <div className="row column_title">
                                <div className="col-md-12">
                                    <div className="page_title">
                                        <h2>Liste des laboratoires</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row ml-5" style={{ marginTop: '100px' }}>
                                {
                                    labos.map((l, i) => {
                                        return (
                                            // <DocIteme docteur={docteur} />
                                            <div class="col-md-4 col-lg-4">
                                                <div class="full white_shd margin_bottom_30">
                                                    <div class="info_people">
                                                        <div class="p_info_img">
                                                            <img src={'http://localhost:5000/getfile/' + l.avatar} alt="#" />
                                                        </div>
                                                        <div class="user_info_cont">
                                                            <h4>{l.name}</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="fa fa-envelope-o"></i> {l.email}</li>
                                                                <li><i className="fa fa-phone"></i> : {l.phoneNumber}</li>
                                                                <li><i className="fa fa-map-marker"></i> :{l.adresse}</li>
                                                            </ul>

                                                        </div>   </div>

                                                        <div className="bottom_list"></div>
                                                        <div class="user_info_cont p-3">
                                                        <p> {l.bio}</p>
                                                 </div>


                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListLab