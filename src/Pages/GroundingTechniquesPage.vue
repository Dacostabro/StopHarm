<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar>
                <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>Grounding Techniques</h2>
            
            <a href = "/home">
                <ion-button>Back to Home</ion-button>
            </a>
            
            Note: an accordion would be good here

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
    IonItem 
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

    }

}
</script>