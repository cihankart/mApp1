import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonIcon, IonButton, IonInput, IonButtons, IonBackButton, IonLoading } from '@ionic/react';
import './Register.css';
import { pencilOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import { toast } from '../toast'
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false)

  async function register() {
    //validation
    setBusy(true)
    if (password !== cpassword) {
      return toast('Şifreler Eşleşmedi. Lütfen kontrol ediniz.')
    }
    if (username.trim() === ' ' || password.trim() === ' ') {
      return toast('Kullanıcı Adı ve Şifre kısmını doldurunuz.')
    }

    const res = await registerUser(username, password)
    if (res) {
      toast('Başarılı bir şekilde kayıt oldunuz!')

    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonLoading message="Kayıt işlemi yapılıyor..." duration={0} isOpen={busy} />
        <IonToolbar>
          <IonButtons>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardHeader className="baslik">
          <p></p>
          <img src="http://www.mapeg.gov.tr/img/logo/1.png" width="60%"></img>
        </IonCardHeader>
        <IonCard>
          <IonCardContent className="cContent">

            <div className="p1"> e-Posta:</div>
            <IonInput className="inputText" placeholder="kullaniciadi@mapeg.gov.tr" color="primary" type="email" required
              onIonChange={(e: any) => setUsername(e.target.value)}>
            </IonInput>

            <div className="p1"> Şifre:</div>
            <IonInput className="inputText" placeholder="*********" color="primary" type="password" required
              onIonChange={(e: any) => setPassword(e.target.value)}>
            </IonInput>

            <div className="p1"> Tekrar Şifreyi Gir:</div>
            <IonInput className="inputText" placeholder="*********" color="primary" type="password" required
              onIonChange={(e: any) => setCPassword(e.target.value)}>
            </IonInput>

            <div className="button">
              <IonButton onClick={register} color="primary" shape="round" fill="solid"  >
                <IonIcon slot="start" icon={pencilOutline}></IonIcon> Kayıt Ol</IonButton>
            </div>

            <p>Daha Önce üye oldunuz mu? <Link to="/login">Giriş Yap</Link></p>

          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Register;
