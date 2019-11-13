import React from 'react';

import {IonContent, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './login.css';
const Story1: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center" color="green"><h1>Story #1</h1></IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="back">
          
          <IonTitle>Counting Wisely</IonTitle>
          <p>Akbar once put a question to his court that left everyone puzzled. As they all tried to figure out the answer, Birbal 
            walked in and asked what the matter was. They repeated the question to him.

‘How many crows are there in the city?’

Birbal immediately smiled, went up to Akbar, and announced that the answer to his questions was twenty-one 

thousand, five hundred and twenty-three. When asked how he knew the answer, Birbal replied, ‘Ask your men to count the number of crows. 
If there are more, 
then the crows’ relatives from outside the city are visiting them. If there are fewer, then the crows are visiting their relatives outside the city.’ 
Pleased with the answer, Akbar presented Birbal with a ruby and pearl chain.</p>
          

        </IonContent>

      </IonPage>
    );
  };

  export default Story1;
