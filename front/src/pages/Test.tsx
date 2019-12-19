import React from 'react';
import {IonContent, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './login.css';



const Test: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle color="green">Test Form</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="back">
          <form className="back" method='Get' action="http://localhost:3000/index/get">
            <IonButton fill="clear" className="button" expand="block" type="submit">Get Data</IonButton>
          </form>
        </IonContent>

      </IonPage>
    );
  };

  export default Test;
