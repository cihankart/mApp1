import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonInput, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonButtons, IonIcon, IonProgressBar, IonChip, IonText } from '@ionic/react';

import './SicilBilgileri.css';
import { caretForward, caretBack, walletOutline, cardOutline, ellipse } from 'ionicons/icons';
const options = {
  cssClass: 'my-custom-interface'
};

const SicilBilgileri: React.FC = () => {


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
          <IonProgressBar value={0.30}></IonProgressBar><br />
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
          
            Sicil Bilgileri
        
          </IonCardHeader>
          <br /><br />
          <IonCardContent >

            <IonItem>
              <IonLabel>Sicil No: </IonLabel>
              <IonInput className="borders1" placeholder="SA2C1B3" disabled ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Ruhsat Sahibi: </IonLabel>
              <IonInput className="borders1" placeholder="MADEN VE PETROL İŞLERİ GENEL MÜDÜRLÜĞÜ" disabled ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Maden Grubu: </IonLabel>
              <IonInput className="borders1" placeholder="II-B GRUP" disabled ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Maden Cinsi: </IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="linyit">Linyit</IonSelectOption>
                <IonSelectOption value="bor">Bor</IonSelectOption>
                <IonSelectOption value="kuvartz">Kuvartz</IonSelectOption>
                <IonSelectOption value="altin">Altın</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Ürün Türü: </IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="komplexmetalatik">Kompleks Metal-Atık</IonSelectOption>
              </IonSelect>

              <IonLabel>Tenör: </IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="+86+8">+86+8</IonSelectOption>

              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Ticari İsim: </IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="bej">Açık Bej (Baiyulan)</IonSelectOption>
                <IonSelectOption value="blonde">Blonde</IonSelectOption>
                <IonSelectOption value="black">Black</IonSelectOption>
                <IonSelectOption value="red">Red</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Açıklama: </IonLabel>
              <IonInput className="borders1" placeholder="..."></IonInput>
            </IonItem>


          </IonCardContent>

        </IonCard>
        <br /> <div className="button12">
              <IonButton size="large" color="warning" routerLink="./SicilNo" routerDirection="back">
                <IonIcon icon={caretBack}></IonIcon>
               GERİ</IonButton>
              <IonButton size="large" color="success" routerLink="./SevkiyatBilgileri" routerDirection="forward">
                İLERİ
                <IonIcon icon={caretForward}></IonIcon>
              </IonButton>
            </div>
      </IonContent>
    </IonPage>
  );
};


export default SicilBilgileri;
