<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar class="grounding_header_bg">
                <ion-title></ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-footer>
            <ion-toolbar class="grounding_footer_bg">
                <ion-title> 
                    <a href = "/home">
                        <ion-button id="groundBack">Back to Home</ion-button>
                    </a>

                </ion-title>
            </ion-toolbar>
        </ion-footer>
        
        <ion-content>
            
            
            
            <ion-accordion-group>
                <ion-accordion value="first">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>5-4-3-2-1 Technique</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>What are 5 things that you can see?
                    <br>What are 4 things that you can feel?
                    <br>What are 3 things that you can hear?
                    <br>What are 2 things that you can smell?
                    <br>What is 1 thing that you can taste?
                    </div>
                </ion-accordion>


                <ion-accordion value="second">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>Categories</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>Choose one of the categories below or another you may come up with and list as many 
                    items as you can that follows under each one. <br>

                    <ion-list>
                        <ion-item>Movies</ion-item>
                        <ion-item>Countries</ion-item>
                        <ion-item>Books</ion-item>
                        <ion-item>Cereals</ion-item>
                        <ion-item>Sports Teams</ion-item>
                        <ion-item>Colors</ion-item>
                        <ion-item>Cars</ion-item>
                        <ion-item>Fruits & Vegetables</ion-item>
                        <ion-item>Animals</ion-item>
                        <ion-item>Cities</ion-item>
                        <ion-item>TV Shows</ion-item>
                        <ion-item>Instruments</ion-item>
                    </ion-list>
                    
                    </div>
                </ion-accordion>


                <ion-accordion value="third">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>Body Awareness</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>1. Take 5 long, deep breaths through your nose, and exhale through puckered lips.<br>
                    <br>2. Place both of your feet flat on the floor. Wiggle your toes. Curl and uncurl your toes, and take a moment to notice the sensations in your feet.<br>
                    <br>3. Stomp your feet on the ground and pay attention to the sensations in your feet and legs as your make contact with the ground.<br>
                    <br>4. Clench your hands tightly into fists, hold for a moment, then release the tnesion. Repeat a few times. <br>
                    <br>5. Press your palms together tightly and hold this pose for a bit. Pay attention to the feeling of tension in your hands and arms.<br>
                    <br>6. Quickly rub your palms together, and notice the sound and feeling of warmth.<br>
                    <br>7. Stretch your hands high over your head for 5 seconds. Then bring your arms down and allow them to rest at your sides.<br>
                    <br>8. Take 5 more deep breaths. Take notice of the feeling of calm in your body.<br>
                    </div>
                </ion-accordion>

                <ion-accordion value="fourth">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>Mental Exercises</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>
                    <ion-list>
                        <ion-item>Name all the objects that you can see.</ion-item>
                        <ion-item>What's an activity that you know how to do well? Describe the steps of how to perform that activity.</ion-item>
                        <ion-item>Count backwards from 100 by 7.</ion-item>
                        <ion-item>Find a nearby object and describe it in detail. What are the qualities about it that you notice? What is it's color? It's texture? It's size? Etc.</ion-item>
                        <ion-item>Spell your full name backwards. Spell the names of other people backwards.</ion-item>
                        <ion-item>Name all of your family members, their ages, and something about them.</ion-item>
                        <ion-item>Read something backwards letter-by-letter for a bit.</ion-item>
                        <ion-item>Think of an object and "draw" it in your head or with your finger.</ion-item>
                    </ion-list>
                    
                    </div>
                </ion-accordion>


            <ion-accordion value="fifth">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>Find Your Safe Place</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>Close or rest your eyes and imagine a safe and comfortable place. This place can be somewhere real or imagined. 
                    What do you see? Try to use all five senses when imagining this place, and spend as much time there as you wish.
                    
                    </div>
                </ion-accordion>

                <ion-accordion value="sixth">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>Recite Something in Order</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>Count in multiples of threes, fours, or any multiple you wish. Recite the alphabet or a piece of writing you may remember (a poem, a movie, or a book).
                    
                    </div>
                </ion-accordion>

                <ion-accordion value="seventh">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>Affirmative Safe Words</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>Remind yourself to breathe and to stay calm. You will be okay, and this will pass. Small phrases like these can help provide comfort in uncomfortbale situations. 
                    
                    </div>
                </ion-accordion>

                <ion-accordion value="eigth">
                <ion-item slot="header" id="accordionAlign">
                    <ion-label><b>Visualize</b></ion-label>
                </ion-item>
                    <div class="ion-padding" slot="content"><b>How it works:</b>
                    <br>If you are struggling with something such as anxiety, try visualizing it as a tangible item.
                    You can envision this item getting farther from you until eventually it fades away.
                    
                    </div>
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