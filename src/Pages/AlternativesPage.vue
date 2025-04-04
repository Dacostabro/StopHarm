<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar>
                <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>Alternatives</h2>
            <ion-accordion-group>
                <ion-accordion value="first">
                <ion-item slot="header" color="light">
                    <ion-label>First Accordion</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">First Content</div>
                </ion-accordion>
                <ion-accordion value="second">
                <ion-item slot="header" color="light">
                    <ion-label>Second Accordion</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">Second Content</div>
                </ion-accordion>
                <ion-accordion value="third">
                <ion-item slot="header" color="light">
                    <ion-label>Third Accordion</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">Third Content</div>
                </ion-accordion>
            </ion-accordion-group>
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
    IonAccordion,
    IonAccordionGroup,
    IonLabel,
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
        IonAccordion,
        IonAccordionGroup,
        IonLabel,

    }

}
</script>