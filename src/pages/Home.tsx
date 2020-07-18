import React, { } from 'react';
import { IonContent,  IonPage,  IonCard, IonCardHeader,  IonCardContent,  IonIcon,  IonButton } from '@ionic/react';
import './Home.css';
import {logInOutline} from 'ionicons/icons';
import {pencilOutline} from 'ionicons/icons';

const Home: React.FC = () => {


  return (
    <IonPage>
      <IonContent>
        <IonCardHeader className="baslik">
          <p></p>
        <img src="http://www.mapeg.gov.tr/img/logo/1.png" width="250px"></img> 
         </IonCardHeader>
        <IonCard>
          <IonCardContent className="cContent">
            <div className="button">
            <IonButton size="large" color="primary" shape="round" fill="solid"  routerLink="/Login" >
              <IonIcon slot="start" icon={logInOutline}></IonIcon> GİRİŞ YAP</IonButton>
            <IonButton size="large" color="primary" shape="round" fill="solid"  routerLink="/Register" >
              <IonIcon slot="start" icon={pencilOutline}></IonIcon> KAYIT OL</IonButton>
            </div>

          </IonCardContent>
        </IonCard>

        
      </IonContent>
    </IonPage>
  );
};

export default Home;
