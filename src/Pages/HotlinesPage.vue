<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar>
                <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>Hotlines</h2>
            <ion-list :inset="true">

                <h3>Crisis Text Line</h3>
                <h4>Text 'CONNECT' to</h4>
                <ion-item>
                    <ion-label>741741</ion-label>
                </ion-item>

                <h3>Depression Hotline</h3>
                <ion-item>
                    <ion-label>1-630-482-9696</ion-label>
                </ion-item>

                <h3>Domestic Violence Hotlines</h3>
                <h4>National Domestic Violence Hotline</h4>
                <ion-item>
                    <ion-label>1-800-799-7233</ion-label>
                </ion-item>
                <h4>Domestic Abuse Helpline for Men and Women</h4>
                <ion-item>
                    <ion-label>1-888-743-5754</ion-label>
                </ion-item>
                <h4>STAND Against Domestic Violence Crisis Hotline</h4>
                <ion-item>
                    <ion-label>1-888-215-5555</ion-label>
                </ion-item>
                
                <h3>Eating Disorders Hotline</h3>
                <h4>National Associate of Anorexia Nervosa & Associated Disorders (ANAD)</h4>
                <ion-item>
                    <ion-label>1-847-831-3438</ion-label>
                </ion-item>

                <h3>Elder Abuse Hotline</h3>
                <ion-item>
                    <ion-label>1-800-252-8966</ion-label>
                </ion-item>

                <h3>Parent Hotline</h3>
                <ion-item>
                    <ion-label>1-800-840-6537</ion-label>
                </ion-item>

                <h3>Rape/Sexual Assault Hotlines</h3>
                <h4>The National Sexual Assault Hotline</h4>
                <ion-item>
                    <ion-label>1-800-656-4673</ion-label>
                </ion-item>
                <h4>Safe Helpline</h4>
                <ion-item>
                    <ion-label>1-877-995-5247</ion-label>
                </ion-item>
                <h4>Safe Horizon Rape, Sexual Assault, and Incest Hotline</h4>
                <ion-item>
                    <ion-label>212-227-3000</ion-label>
                </ion-item>
                <h4>Take Back The Night Foundation Hotline</h4>
                <ion-item>
                    <ion-label>1-866-966-9013</ion-label>
                </ion-item>
            
                <h3>Runaway or Homeless Youth Hotlines</h3>
                <h4>National Runaway Safeline</h4>
                <ion-item>
                    <ion-label>1-800-786-2929</ion-label>
                </ion-item>
                <h4>Covenant House</h4>
                <ion-item>
                    <ion-label>1-800-999-9999</ion-label>
                </ion-item>

                <h3>Self-Injury Hotline</h3>
                <ion-item>
                    <ion-label>1-800-621-4673</ion-label>
                </ion-item>

                <h3>Stalking Hotlines</h3>
                <h4>Crime Victims Hotline</h4>
                <ion-item>
                    <ion-label>1-866-689-4357</ion-label>
                </ion-item>
                <h4>Safe Horizon</h4>
                <ion-item>
                    <ion-label>1-800-621-4673</ion-label>
                </ion-item>


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
    IonLabel,
} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
    
    components: {

        IonPage,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonContent,
        IonList,
        IonItem,
        IonLabel

    }

});
</script>