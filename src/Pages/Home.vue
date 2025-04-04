<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar>
                <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>Test List Header2</h2>
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