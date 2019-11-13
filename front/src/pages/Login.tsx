import React from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './login.css';
const Login: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle color="green">Login Form</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="back">
          <form className="back" method='Post' action="http://localhost:3000/login">
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput name="email"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" name="password"></IonInput>
            </IonItem>
            <IonButton fill="clear" className="button" expand="block" type="submit">Login</IonButton>
          </form>
        </IonContent>

      </IonPage>
    );
  };

  export default Login;
