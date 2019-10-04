import React from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Login: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Login Form</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <form method='Post' action="../back/routes/index">
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonButton type="submit" color="primary">Login</IonButton>
          </form>
        </IonContent>

      </IonPage>
    );
  };

  export default Login;
