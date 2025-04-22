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


            <ion-textarea
                aria-label="How are you doing today?"
                placeholder="Nothing that you write will be saved. Write as little or as much as you need."
                class="custom"
                auto-grow="true"
        ></ion-textarea>


            <div class="counter_container">
                 <ion-datetime-button datetime = "datetime"></ion-datetime-button>
                 <ion-modal :keep-contents-mounted="true">
                     <ion-datetime 
                         id="datetime"
                         show-default-buttons = "true"
                         presentation="date"
                         max="2099"
                         onfocus = "this.max = new Date().toISOString()"
                         @ionChange = "dateUpdate($event.detail.value)"
                     ></ion-datetime>
                 </ion-modal>
                 <label id = counter expand = "block" value = "0">0</label>
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
    IonTextarea,

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
        IonTextarea,

    },

    methods:{
         dateUpdate(input){
            console.log("DID I MAKE IT");
             // calculate the chosen day in MS, find the difference between it and current date, and display it.
             const date = new Date(input);
             let chosenMS = date.getTime();
             let msDifference = totalMS-chosenMS;
             let daysDifference = Math.floor(msDifference/(1000*60*60*24));
             document.getElementById('counter').innerHTML = daysDifference;
         }
    }

}

// recalculate the current date
let currentDate = new Date
let totalMS = currentDate.getTime();

</script>
