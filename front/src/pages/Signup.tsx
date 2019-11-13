import React from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Signup: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Sign Up Form</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <form method='Post' action="http://localhost:3000/signup">
            <IonItem>
                <IonLabel title="firstname" position="floating">First name</IonLabel>
                <IonInput name="firstname"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Last name</IonLabel>
                <IonInput name="lastname"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput name="email"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" name="password"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Re-enter password</IonLabel>
                <IonInput  type="password" name="password2"></IonInput>
            </IonItem>
            <IonButton className="button" fill="clear" expand="block" type="submit">Sign Up</IonButton>
          </form>
        </IonContent>

      </IonPage>
    );
  };

  export default Signup;
