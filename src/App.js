import React, { useContext, useEffect } from 'react';
import './App.css';
/* import SiderBar from './components/SiderBar';
 */import TopBar from './components/TopBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './components/Home';
 import PrivateRoute from './higherOrderComponents/PrivteRoute';
 import PublicRoute from './higherOrderComponents/PublicRoute';
 import CreateDossierMed from './components/patient/dossMedical/CreatedossierMedical';
 import Details from './components/patient/listDocteurs/Details';
 import DocList from './components/patient/listDocteurs/listdoc';
 import ListLab from './components/patient/listLab/ListLab';
 import Profil from './components/patient/Profil';
import QSN from './components/QSN';
import FAQ from './components/FAQ';
import Landing from './components/Landing';
import { useDispatch } from 'react-redux';
import { AuthContext } from './Context/AuthContext';
import { GetDossByPatient } from './features/dossierMedical/dossMedSlice';
import { GETLabos } from './features/labo/laboSlice';




function App() {
  const dispatch = useDispatch()
  const { user } = useContext(AuthContext)
  useEffect(() => {
    dispatch(GetDossByPatient(user._id))
    dispatch(GETLabos())


  }, [])
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/createdossierMedical" component={CreateDossierMed} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/details" component={Details} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/listdoc" component={DocList} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/listlab" component={ListLab } />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/home" component={Home} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/profil" component={Profil} />
          {/*         <PrivateRoute  roles={["Patient", "Doctor", "Laboratoire","Admin"]}  path="/listlab" component={LabList} />
 */}
          <PublicRoute path="/QSN" component={QSN} />
          <PublicRoute path="/FAQ" component={FAQ} />
          <PublicRoute path="/users/search" component={QSN} />
          <Route path="/NotFound" component={NotFound} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signUp" component={SignUp} />
          <PublicRoute exact path="/" component={Landing} />


          {/*<PublicRoute path="/dash" component={Dash} />*/}


          {/*<PublicRoute path="/" component={Home} />*/}

          { /*<Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />*/}
          {/*
          <Route path="/QSN" component={QSN} />
          <Route path="/FAQ" component={FAQ} />

          <div class="inner_container">
            <div class="full_container">
              <SiderBar />
              <Route path="/SiderBar" component={SiderBar} />
              <Route path="/catalogueFreelance" component={CatalogueFreelance} />
              <Route path="/catalogueCvPostuler" component={CatalogueCvPostuler} />
              <Route path="/candidature" component={Candidature} />
              <Route path="/notFound" component={NotFound} />
              <Route path="/catalogueOffre" component={CatalogueOffre} />
              <Route path="/getOffre" component={GetOffre} />
              <Route path="/offre" component={Offre} />
              <Route path="/adminCV" component={AdminCV} />
              <Route path="/adminOffre" component={AdminOffre} />
              <Route path="/cvForm" component={CvForm} />
              <Route path="/cvPostuler" component={CvPostuler} />
              <Route path="/offreForm" component={OffreForm} />
            </div>
          </div>
        
        <Route path="/Home" component={Home} />*/}

        </Switch>
      </Router>
    </div>
  );
}

export default App;