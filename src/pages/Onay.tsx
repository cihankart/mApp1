import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonIcon, IonButton, IonProgressBar, IonText, IonChip } from '@ionic/react';

import './Onay.css';
import { caretBack, download,  checkmarkCircleSharp, ellipse, walletOutline, cardOutline } from 'ionicons/icons';


const Onay: React.FC = () => {



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
          <IonProgressBar value={1}></IonProgressBar><br />
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <br></br><div className="button1">
          <IonChip color="dark">
            <IonText>
              <IonIcon className="icons" icon={walletOutline}>
              </IonIcon> Offline Kontör Miktarı: 1919
           </IonText>
          </IonChip>
          <IonChip color="success">
            <IonText>
              <IonIcon className="icons" icon={cardOutline}>
              </IonIcon>Online Kontör Miktarı: 1919
            </IonText>
          </IonChip>
        </div>
        <IonCard>
          <IonCardHeader>



          </IonCardHeader>
          <IonCardContent>
            <div className="verified">
              <IonIcon icon={checkmarkCircleSharp} color="success" />
            </div>
            <div className="description">
              <IonText color="dark">İşlem Tamamlandı!</IonText>
            </div>


          </IonCardContent>

        </IonCard>
        <br /> <div className="button16">
              <IonButton size="large" color="warning" routerLink="./TahminiMiktarBilgileri" routerDirection="back">
                <IonIcon icon={caretBack}></IonIcon>
                Geri
            </IonButton>
            <br />
              <IonButton size="large" color="success" routerLink="./Sicil No">
                <IonIcon icon={download} />
                SEVK BELGESİ OLUŞTUR (PDF)
            </IonButton>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Onay;
