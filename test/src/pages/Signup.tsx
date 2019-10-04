import React from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Signup: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Sign Up Form Form</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <form method='Post' action="../back/routes/index">
            <IonItem>
                <IonLabel position="floating">First name</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Last name</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Re-enter password</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonButton type="submit" color="primary">Sign Up</IonButton>
          </form>
        </IonContent>

      </IonPage>
    );
  };

  export default Signup;
