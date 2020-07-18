import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonIcon, IonButton, IonProgressBar, IonChip, IonText } from '@ionic/react';

import './TahminiMiktarBilgileri.css';
import { caretBack, caretForward, walletOutline, cardOutline, ellipse } from 'ionicons/icons';


const TahminiMiktarBilgileri: React.FC = () => {



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
          <IonProgressBar value={0.90}></IonProgressBar><br />
        </IonToolbar>
      </IonHeader>
      <IonContent>


        <br></br><div className="button1">
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
        <IonCard>
          <IonCardHeader className="baslik1">

  
           Tahmini Miktar Bilgileri


          </IonCardHeader>
          <br /><br />
          <IonCardContent>
            <IonItem>
              <IonLabel>e-Sevk Fişi Ölçü Birimi:</IonLabel>
              <IonInput className="borders" placeholder="kg" disabled></IonInput>
            </IonItem>
            <IonItem>
              <IonText color="danger">Miktar girişlerini KİLOGRAM (kg) olarak yapınız.</IonText>
            </IonItem>
            <IonItem>
              <IonText color="success">Ondalıklı Sayı girişlerinde virgül "," kullanınız.</IonText>
            </IonItem>


            <IonItem>
              <IonLabel>D'lı Mik.:</IonLabel>
              <IonInput className="border" placeholder="50000kg"></IonInput>
              <IonLabel>D'lı Mik.:</IonLabel>
              <IonInput className="borders" placeholder="50ton" disabled ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>D Mik.:</IonLabel>
              <IonInput className="border" placeholder="7000kg" ></IonInput>
              <IonLabel>D Mik.:</IonLabel>
              <IonInput className="borders" placeholder="7ton" disabled ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Net Mik.: </IonLabel> <br />
              <IonInput className="border" placeholder="43000kg " ></IonInput>
              <IonLabel>Net Mik.: </IonLabel> <br />
              <IonInput className="borders" placeholder="43ton" disabled ></IonInput>
            </IonItem>

          </IonCardContent>

        </IonCard>

        <br /> <div className="button15">
              <IonButton size="large" color="warning" routerLink="./SevkYeri" routerDirection="back">
                <IonIcon icon={caretBack}></IonIcon>
                Geri
            </IonButton>
              <IonButton size="large"  color="success" routerLink="./Onay">
                Onay
                <IonIcon icon={caretForward}></IonIcon>
              </IonButton>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default TahminiMiktarBilgileri;
