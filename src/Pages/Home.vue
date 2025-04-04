<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar>
                <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>Home</h2>

            <a href = "/alternatives">
                <ion-button>Alternatives</ion-button>
            </a>

            <a href = "/grounding">
                <ion-button>Grounding</ion-button>
            </a>

            <a href = "/hotlines">
                <ion-button>Hotlines</ion-button>
            </a>

            <a href = "/writing">
                <ion-button>Writing</ion-button>
            </a>

            <ion-list>
                <ion-item>List 1</ion-item>
                <ion-item>List 2</ion-item>
                <ion-item>List 3</ion-item>
                <ion-item>List 4</ion-item>
            </ion-list>
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

    }

}
</script>