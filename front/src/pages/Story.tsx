
import React, {useEffect, useState} from 'react';
import {IonContent, IonAvatar, IonButton, IonCheckbox, IonInput, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonCardContent } from '@ionic/react';
import { Redirect } from 'react-router';

const fetchStories = (setStories: { (value: React.SetStateAction<never[]>): void; (arg0: any): void; }) =>{
  fetch("http://localhost:3000/index/story").then(  res => res.json())
  .then( data => setStories(data.story) );
};


const Story: React.FC = () => {
    const [story, setStory] = useState([]);

    useEffect(()=>{
        fetchStories(setStory);
    },[])
    console.log(story);

    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center" color="success"><h1>Story Section</h1></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="back">
        <form className="back" method='Get' action="http://localhost:3000/login/logout">
            <IonButton fill="clear" className="button" expand="block" type="submit">Logout</IonButton>
        </form>
        {
            story.map((story: any , idx) => (
              <IonContent key={idx}>
                <IonCard>
                    <IonCardHeader>
                        {/*<IonCardSubtitle>Story {idx}</IonCardSubtitle>*/}
                        <IonCardTitle>{story.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent><b>
                        {story.content}
                        </b>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        
                        <IonCardTitle> Quiz of {story.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonToolbar>
                      <IonItem>
                        {story.questions[0].question}
                      </IonItem>
                      </IonToolbar>
                         <form method="post" action="http://localhost:3000/index/quiz"> 
                          <IonItem>
                            {story.questions[0].options[0]}
                            <IonItem>
                            <IonCheckbox name="answer1" color="primary" />
                            </IonItem>
                          </IonItem>
                          <IonItem>
                            {story.questions[0].options[1]}
                            <IonItem>
                              
                            <IonCheckbox name="answer2" color="primary" />
                            </IonItem>
                          </IonItem>
                          <IonItem>
                            {story.questions[0].options[2]}
                            <IonItem>
                            <IonCheckbox name="answer3" color="primary" />
                            </IonItem>
                          </IonItem>
                          <IonButton type="submit">Submit</IonButton>
                         </form>
                        
                      
                      <IonItem></IonItem>
                        
                        
                    </IonCardContent>
                </IonCard>
                
              </IonContent>
              
                

            ))
        }
        </IonContent>

      </IonPage>
    );
  };

  export default Story;
