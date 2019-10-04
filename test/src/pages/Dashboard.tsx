import React from 'react';
import { IonContent, IonCol, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonRow, IonGrid, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Dashboard: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonItem>
            Hi there user
        </IonItem>

        <IonContent>

            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                <IonCardTitle>Card Title</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                Keep close to Nature's heart...
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                        <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonCardTitle>Card Title</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Keep close to Nature's heart...
                                </IonCardContent>
                            </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

            

        </IonContent>

      </IonPage>
    );
  };
  
  export default Dashboard;
