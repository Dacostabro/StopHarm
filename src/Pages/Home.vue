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
                <ion-input label="What's on your mind?" placeholder="Write as much as you need. Nothing will be stored. You are safe to write whatever you need."></ion-input>
            </ion-item>



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

    }

}
</script>