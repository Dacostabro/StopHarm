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

           
            <label id="counter">0</label>


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