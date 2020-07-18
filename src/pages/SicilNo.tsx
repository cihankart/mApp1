import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonInput, IonBackButton, IonButton, IonButtons, IonProgressBar, IonText, IonIcon, IonChip, IonCardHeader, IonFooter } from '@ionic/react';
import './SicilNo.css';
import { cardOutline, walletOutline, ellipse, caretForward } from 'ionicons/icons';



const SicilNo: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
        <IonChip color="success">
            <IonIcon color="success" icon={ellipse}></IonIcon>
            <IonText color="light">Online</IonText>
          </IonChip>
          <IonChip color="danger">
            <IonIcon color="danger" icon={ellipse}></IonIcon>
            <IonText color="light">Offline</IonText>
          </IonChip>
          <IonButtons slot="end">


            <IonButton className="cikis" routerLink="./Home" routerDirection="root">Çıkış yap</IonButton>
          </IonButtons>
          <IonProgressBar value={0.15}></IonProgressBar><br />
        </IonToolbar>
      </IonHeader>
      <IonContent>

       


        <IonCard>
           <IonCardHeader className="baslik1">
           Sicil No
            <br />
           </IonCardHeader>
           <br /><br />
          <IonCardContent className="rite">

            <IonInput className="borders0" placeholder="SA2C1B3"></IonInput>
          </IonCardContent>
          


        </IonCard>
        <div className="button111">
          <IonChip color="dark">
            <IonText>
              <IonIcon className="icons" icon={walletOutline}>
              </IonIcon> Offline Kontör Mik.: 1919
           </IonText>
          </IonChip>
          <IonChip color="success">
            <IonText>
              <IonIcon className="icons" icon={cardOutline}>
              </IonIcon>Online Kontör Mik.: 1919
            </IonText>
          </IonChip>
        </div>

        <div className="button11" >
            <IonButton size="large" color="success" routerLink="./SicilBilgileri">İLERİ<IonIcon icon={caretForward}></IonIcon></IonButton>   
          </div>


      </IonContent>
    </IonPage>
  );
};

export default SicilNo;
