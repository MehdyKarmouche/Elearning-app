import React from 'react';
import {IonIcon, IonTabButton, IonTabBar, IonContent, IonCol, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonRow, IonGrid, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Dashboard.css';
import { apps, flash, send } from 'ionicons/icons';
const Dashboard: React.FC = () => {
    return (
      <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
        <form className="back" method='Get' action="http://localhost:3000/login/logout">
            <IonButton fill="clear" className="button" expand="block" type="submit">Logout</IonButton>
          </form>

            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>The fox</IonCardSubtitle>
                                <IonCardTitle>Story</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                Keep close to Nature's heart...
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                        <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>The fox</IonCardSubtitle>
                                    <IonCardTitle>Story</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Keep close to Nature's heart...
                                </IonCardContent>
                            </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>The fox</IonCardSubtitle>
                                <IonCardTitle>Story</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                Keep close to Nature's heart...
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                        <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>The fox</IonCardSubtitle>
                                    <IonCardTitle>Story</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Keep close to Nature's heart...
                                </IonCardContent>
                            </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>The fox</IonCardSubtitle>
                                <IonCardTitle>Story</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                Keep close to Nature's heart...
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                        <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>The fox</IonCardSubtitle>
                                    <IonCardTitle>Story</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Keep close to Nature's heart...
                                </IonCardContent>
                            </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>The fox</IonCardSubtitle>
                                <IonCardTitle>Story</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                Keep close to Nature's heart...
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                        <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>The fox</IonCardSubtitle>
                                    <IonCardTitle>Story</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Keep close to Nature's heart...
                                </IonCardContent>
                            </IonCard>
                    </IonCol>
                </IonRow>
                
            </IonGrid>
            <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon name="log-out" />
            <IonLabel>Log out</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={apps} />
            <IonLabel>Stories</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={send} />
            <IonLabel>Scoress</IonLabel>
          </IonTabButton>
        </IonTabBar>

        </IonContent>

      </IonPage>
    );
  };
  
  export default Dashboard;
