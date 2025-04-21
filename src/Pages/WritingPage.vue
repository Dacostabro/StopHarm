<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar class="writing_header_bg">
                <ion-title></ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-footer>
            <ion-toolbar class="writing_footer_bg">
                <ion-title></ion-title>
            </ion-toolbar>
        </ion-footer>

        
        <ion-content>
            <h2>How are you?</h2>
            
            <a href = "/home">
                <ion-button>Back to Home</ion-button>
            </a>
            

            <ion-item>
                <ion-input label="Text input" placeholder="Enter text"></ion-input>
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
    IonInput
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
        IonInput

    }

}
</script>