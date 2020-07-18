import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonIcon, IonInput, IonButtons, IonProgressBar, IonChip, IonText } from '@ionic/react';
import { caretBack, caretForward, ellipse, walletOutline, cardOutline } from 'ionicons/icons';
import './SevkYeri.css';


const SevkYeri: React.FC = () => {

  const options = {
    cssClass: 'my-custom-interface'
  };

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
          <IonProgressBar value={0.70}></IonProgressBar><br />
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
            Sevk Yeri
          </IonCardHeader>
          <br /><br />
          <IonCardContent>

            <IonItem>
              <IonLabel>Sevk Yeri Ünvanı:</IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="alik">ALİ KAYA</IonSelectOption>
                <IonSelectOption value="mehmetç">MEHMET ÇELİK</IonSelectOption>
                <IonSelectOption value="refikt">REFİK TAN</IonSelectOption>
              </IonSelect>

              <IonLabel>İl:</IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="istanbul">İstanbul</IonSelectOption>
                <IonSelectOption value="ankara">Ankara</IonSelectOption>
                <IonSelectOption value="izmir">İzmir</IonSelectOption>
                <IonSelectOption value="bursa">Bursa</IonSelectOption>
                <IonSelectOption value="balikesir">Balıkesir</IonSelectOption>
                <IonSelectOption value="sakarya">Sakarya</IonSelectOption>
                <IonSelectOption value="duzce">Düzce</IonSelectOption>
                <IonSelectOption value="kocaeli">Kocaeli</IonSelectOption>
                <IonSelectOption value="antalya">Antalya</IonSelectOption>
                <IonSelectOption value="konya">Konya</IonSelectOption>
                <IonSelectOption value="mersin">Mersin</IonSelectOption>
                <IonSelectOption value="eskisehir">Eskişehir</IonSelectOption>
              </IonSelect>

              <IonLabel>İlçe:</IonLabel>
              <IonSelect interface="popover" interfaceOptions={options}>
                <IonSelectOption value="cankaya">Çankaya</IonSelectOption>
                <IonSelectOption value="mamak">Mamak</IonSelectOption>
                <IonSelectOption value="golbasi">Gölbaşı</IonSelectOption>
                <IonSelectOption value="kizilcahamam">Kızılcahamam</IonSelectOption>
                <IonSelectOption value="kahramankazan">Kahramankazan</IonSelectOption>
                <IonSelectOption value="polatli">Polatlı</IonSelectOption>
                <IonSelectOption value="sereflikochisar">Şereflikoçhisar</IonSelectOption>
                <IonSelectOption value="kecioren">Keçiören</IonSelectOption>
                <IonSelectOption value="yenimahalle">Yenimahalle</IonSelectOption>
              </IonSelect>
            </IonItem>


            <IonItem>
              <IonLabel>Adres:</IonLabel>
              <IonInput className="borders0" placeholder="..."></IonInput>
            </IonItem>

          </IonCardContent>

        </IonCard>
        <br /> <div className="button14">
              <IonButton size="large" color="warning" routerLink="./SevkiyatBilgileri" routerDirection="back">
                <IonIcon icon={caretBack}></IonIcon>
                GERİ
            </IonButton>
              <IonButton size="large" color="success" routerLink="./TahminiMiktarBilgileri">
                İLERİ
                <IonIcon icon={caretForward}></IonIcon>
              </IonButton>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default SevkYeri;
