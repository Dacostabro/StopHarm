<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar>
                <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>Home</h2>

            <a href = "/grounding">
                <ion-button id = "grounding_button" expand="block">Grounding</ion-button>
            </a>

            <div class="row1_container">
                <a href = "/hotlines">
                    <ion-button id = "hotlines_button" expand="block">Hotlines</ion-button>
                </a>

                <a href = "/alternatives">
                    <ion-button id = "alternatives_button" expand="block">Alternatives</ion-button>
                </a>
            </div>

            <a href = "/writing">
                <ion-button id = "writing_button" expand="block">Writing</ion-button>
            </a>

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

    },

    methods:{
        dateUpdate(input){
            // calculate the chosen day in MS, find the difference between it and current date, and display it.
            const date = new Date(input);
            let chosenMS = date.getTime();
            let msDifference = totalMS-chosenMS;
            let daysDifference = Math.floor(msDifference/(1000*60*60*24));
            document.getElementById('counter_button').innerHTML = daysDifference;
        }
    }

}

// recalculate the current date
let currentDate = new Date
let totalMS = currentDate.getTime();

</script>
