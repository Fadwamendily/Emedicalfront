import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GETDoctors, selectalldoc } from '../../../features/doctor/doctorSlice'
import SiderBar from '../../SideBar'
import DocIteme from './docItem'

function DocList() {

const dispatch = useDispatch()
const docteurs = useSelector(selectalldoc)

    useEffect(() => {

        dispatch(GETDoctors())

    }, [])

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
                                        <h2>Liste des docteurs</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row ml-5" style={{ marginTop: '100px' }}>
                        
                                        {
                                            docteurs.map((docteur, i) => {
                                                return (
                                                    
                                                    <DocIteme docteur={docteur} />
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

export default DocList