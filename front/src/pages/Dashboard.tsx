import React, {useEffect, useState} from 'react';
import {IonIcon, IonTabButton, IonTabBar, IonContent, IonCol, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonRow, IonGrid, IonButton, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Dashboard.css';
import { apps, flash, send } from 'ionicons/icons';
import { Redirect } from 'react-router';

const fetchStories = (setStories: { (value: React.SetStateAction<never[]>): void; (arg0: any): void; }) =>{
    fetch("http://localhost:3000/index/stories").then(  res => res.json())
    .then( data => setStories(data.stories) );
};

const Dashboard: React.FC = () => {
    const [stories, setStories] = useState([]);

    useEffect(()=>{
        fetchStories(setStories);
    },[])
    console.log(stories);
    
    return (
      <IonPage>

        <IonHeader>
            <IonToolbar>
            <IonTitle class="ion-text-center" color="success"><h1>Dashboard</h1></IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
        <form className="back" method='Get' action="http://localhost:3000/login/logout">
            <IonButton fill="clear" className="button" expand="block" type="submit">Logout</IonButton>
        </form>
        <IonToolbar>
          <IonTitle>Stories available</IonTitle>
        </IonToolbar>
        {
            stories.map((story: any , idx) => (
                <IonCard key={idx}>
                    <IonCardHeader>
                        <IonCardSubtitle>Story {idx+1}</IonCardSubtitle>
                        <IonCardTitle>{story.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonItem>
                        <IonIcon name="pin" slot="start" />
                          <form className="back" method='Get' action="http://localhost:8100/story">
                            <IonButton fill="outline" slot="end" type="submit">View</IonButton>
                          </form>
                    </IonItem>

                    <IonCardContent>
                        {story.preview}
                    </IonCardContent>
                </IonCard>
            ))
        }

            
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
            <IonLabel>Scores</IonLabel>
          </IonTabButton>
        </IonTabBar>

        </IonContent>

      </IonPage>
    );
  };
  
  export default Dashboard;
