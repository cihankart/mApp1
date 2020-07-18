import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Date1 from './pages/Date1';
import Login from './pages/Login';
import Register from './pages/Register';
import SicilNo from './pages/SicilNo';
import SicilBilgileri from './pages/SicilBilgileri';
import SevkiyatBilgileri from './pages/SevkiyatBilgileri';
import SevkYeri from './pages/SevkYeri';
import TahminiMiktarBilgileri from './pages/TahminiMiktarBilgileri';
import Onay from './pages/Onay';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/Date1" component={Date1} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/sicilNo" component={SicilNo} exact />
        <Route path="/sicilBilgileri" component={SicilBilgileri} exact />
        <Route path="/sevkiyatBilgileri" component={SevkiyatBilgileri} exact />
        <Route path="/sevkYeri" component={SevkYeri} exact />
        <Route path="/tahminiMiktarBilgileri" component={TahminiMiktarBilgileri} exact />
        <Route path="/Onay" component={Onay} exact />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
