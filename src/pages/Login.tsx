import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent,  IonIcon, IonButton, IonInput, IonButtons, IonBackButton, IonLoading } from '@ionic/react';
import './Login.css';
import {logInOutline} from 'ionicons/icons'
import { Link } from 'react-router-dom'
import {loginUser} from '../firebaseConfig'
import { toast } from '../toast';

const Login: React.FC = () => {
    

    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[busy, setBusy] = useState<boolean>(false)

    async function login() {
        setBusy(true)
        const res = await loginUser(username, password)
        if(res){
            toast('Giriş Başarılı!')
           
        }
        setBusy(false)
    }

  return (
    <IonPage>
     <IonHeader>
         <IonLoading message="Lütfen Bekleyiniz..." duration={0} isOpen={busy}/>
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
            <IonInput className="inputText" placeholder="kullaniciadi@mapeg.gov.tr" color="primary" type="email"required 
            onIonChange={(e: any) => setUsername(e.target.value)}>
            </IonInput>
            <div className="p1"> Şifre:</div>
            <IonInput className="inputText" placeholder="*********" color="primary"  type="password" required
            onIonChange={(e: any) => setPassword(e.target.value)}>
            </IonInput>
            <div className="button">
            <IonButton onClick={login} color="primary" shape="round" fill="solid" routerLink="./SicilNo" >
              <IonIcon slot="start" icon={logInOutline}></IonIcon> GİRİŞ YAP</IonButton>
            </div>

            <p>Daha Önce üye olmadınız mı? <Link to="/register">Kayıt Ol</Link></p>

          </IonCardContent>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Login;
 