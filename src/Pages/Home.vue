<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar class="home_header_bg">
                    <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-footer>
            <ion-toolbar class="home_footer_bg">
                <ion-title>You've visited ## days in a row. Good job!</ion-title>
            </ion-toolbar>
        </ion-footer>

        <ion-content class="ion-padding">

            <a href = "/grounding">
                <ion-button id = "grounding_button">Grounding</ion-button>
            </a>


            <ion-card>
                <ion-card-content>
                    “There is no passion to be found playing small—in settling for a life that is less than the one you are capable of living.” —Nelson Mandela
                </ion-card-content>
            </ion-card>

            <div class="row1_container">
                <a href = "/hotlines">
                    <ion-button id = "hotlines_button">Hotlines</ion-button>
                </a>

                <a href = "/alternatives">
                    <ion-button id = "alternatives_button">Alternatives</ion-button>
                </a>
            </div>

            <ion-item>
                <ion-input label="How are you?" placeholder="Write as little or as much as you would like. Your responses are not stored.ini"></ion-input>
            </ion-item>

           


            <div class="counter_container">
                 <ion-datetime-button datetime = "datetime"></ion-datetime-button>
                 <ion-modal :keep-contents-mounted="true">
                     <ion-datetime 
                         id="datetime"
                         show-default-buttons = "true"
                         presentation="date"
                         @ionChange = "dateUpdate($event.detail.value)"
                     ></ion-datetime>
                 </ion-modal>
                 <ion-button id = counter_button expand = "block" value = "0">0</ion-button>
             </div>


        </ion-content>
    </ion-page>
</template>

<script>

import { 
    IonPage, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonContent, 
    IonList, 
    IonItem, 
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,

} from '@ionic/vue';

export default {
    
    components: {

        IonPage,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonContent,
        IonList,
        IonItem,
        IonButton,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,

    },

    methods:{
         dateUpdate(input){
             // calculate the chosen day in MS, find the difference between it and current date, and display it.
             const date = new Date(input);
             let chosenMS = date.getTime();
             let msDifference = totalMS-chosenMS;
             let daysDifference = Math.floor(msDifference/(1000*60*60*24));
             document.getElementById('counter_button').innerHTML = daysDifference;
             console.log(chosenMS);
         }
    }

}

// recalculate the current date
let currentDate = new Date
let totalMS = currentDate.getTime();


</script>
