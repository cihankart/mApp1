import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonDatetime, IonIcon, IonButtons, IonProgressBar, IonChip, IonText } from '@ionic/react';
import { add, caretBack, caretForward, ellipse, walletOutline, cardOutline } from 'ionicons/icons';
import './SevkiyatBilgileri.css';

const options = {
  cssClass: 'my-custom-interface'
};

const SevkiyatBilgileri: React.FC = () => {


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
          <IonProgressBar value={0.50}></IonProgressBar><br />
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
         
            Sevkiyat Bilgileri
 
          
          </IonCardHeader>
          <br /><br />
          <IonCardContent>

            <IonItem>
              <IonLabel>Sevk Kategori:</IonLabel>
              <IonSelect color="secondary" interface="popover" interfaceOptions={options}>
                <IonSelectOption value="birincil">Birincil Sevkiyat</IonSelectOption>
                <IonSelectOption value="ikincil">İkincil Sevkiyat</IonSelectOption>
                <IonSelectOption value="diger">Diğer</IonSelectOption>
              </IonSelect>

              <IonLabel>Sevkiyat Tipi:</IonLabel>
              <IonSelect color="secondary" interface="popover" interfaceOptions={options}>
                <IonSelectOption value="ruhsatdisi">Ocaktan Stoğa (Rhusat Dışı)</IonSelectOption>
                <IonSelectOption value="stokocak">Stoktan Ocağa</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Sevk Tarihi:</IonLabel>
              <IonDatetime color="secondary" className="margins" placeholder="GG/AA/YYYY" displayFormat="DD/MM/YYYY">

              </IonDatetime>

              <IonLabel>Sevk Saati:</IonLabel>
              <IonDatetime color="secondary" className="margins" placeholder="SS:DD" displayFormat="HH:mm">

              </IonDatetime>
            </IonItem>

            <IonItem>
              <IonLabel>Sevkiyat Sorumlusu:</IonLabel>
              <IonSelect color="secondary" interface="popover" interfaceOptions={options}>
                <IonSelectOption value="Cihan Ferhat KART">Cihan Ferhat KART</IonSelectOption>
                <IonSelectOption value="Ali">Ali</IonSelectOption>
                <IonSelectOption value="Mehmet">Mehmet</IonSelectOption>
                <IonSelectOption value="Ayşe">Ayşe</IonSelectOption>
              </IonSelect>
              <IonButton>
                <IonIcon icon={add}></IonIcon>
              </IonButton>
            </IonItem>

            <IonItem>
              <IonLabel>Araç Tipi:</IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="tir">TIR</IonSelectOption>
                <IonSelectOption value="kamyon">Kamyon</IonSelectOption>
                <IonSelectOption value="forklift">Forklift</IonSelectOption>
                <IonSelectOption value="kamyonet">Kamyonet</IonSelectOption>
              </IonSelect>

              <IonLabel>Araç Plakası:</IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="06fdd693">06fdd693</IonSelectOption>
              </IonSelect>
              <IonButton>
                <IonIcon icon={add}></IonIcon>
              </IonButton>

              <IonLabel>Dorse Plakası:</IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="06ak960">06 ak 960</IonSelectOption>
              </IonSelect>
              <IonButton>
                <IonIcon icon={add}></IonIcon>
              </IonButton>
            </IonItem>

          </IonCardContent>

        </IonCard>
        <br /> <div className="button13">
              <IonButton size="large" color="warning" routerLink="./SicilBilgileri" routerDirection="back">
                <IonIcon icon={caretBack}></IonIcon>
                GERİ
            </IonButton>
              <IonButton size="large" color="success" routerLink="./SevkYeri">
                İLERİ
                <IonIcon icon={caretForward}></IonIcon>
              </IonButton>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default SevkiyatBilgileri;
