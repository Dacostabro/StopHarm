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
                    <div id="quote">"This, too, shall pass." — Persian proverb</div>
                </ion-card-content>
            </ion-card>
            <ion-button id = "quote_button" @click="getQuote">Another Message</ion-button>




            <div class="row1_container">
                <a href = "/hotlines">
                    <ion-button id = "hotlines_button">Hotlines</ion-button>
                </a>

                <a href = "/alternatives">
                    <ion-button id = "alternatives_button">Alternatives</ion-button>
                </a>
            </div>


            <ion-textarea
                aria-label="How are you doing today?"
                placeholder="Nothing that you write will be saved. Write as little or as much as you need."
                class="custom"
                :auto-grow="true"
                rows="11"
            ></ion-textarea>


            <div class="counter_container">
                 <ion-datetime-button datetime = "datetime"></ion-datetime-button>
                 <ion-modal :keep-contents-mounted="true">
                     <ion-datetime 
                         id="datetime"
                         show-default-buttons = "true"
                         presentation="date"
                         max="2099"
                         onfocus = "this.max = new Date().toISOString()"
                         @ionChange = "dateUpdate($event.detail.value)"
                     ></ion-datetime>
                 </ion-modal>
                 <label id = counter expand = "block" value = "0">0</label>
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
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonTextarea,

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
        IonTextarea,

    },

    methods:{
         dateUpdate(input){
            console.log("DID I MAKE IT");
             // calculate the chosen day in MS, find the difference between it and current date, and display it.
             const date = new Date(input);
             let chosenMS = date.getTime();
             let msDifference = totalMS-chosenMS;
             let daysDifference = Math.floor(msDifference/(1000*60*60*24));
             document.getElementById('counter').innerHTML = daysDifference;
         },

         getQuote(){
            let quotes = [
            '"I hope one day that, as a culture, we can take mental health as seriously as we take our physical health. That would be the ideal." — April Kilduff, MA, LCPC, LMHC'  ,
            '"What mental health needs is more sunlight, more candor, and more unashamed conversation." — Glenn Close',
            '"I want to talk about it and not feel any embarrassment or shame because I think it’s important for people to hear from adults who have good, fulfilling lives and manage chronic mental illness as part of those good, fulfilling lives." — John Green',
            '"Whether an illness affects your heart, your arm, or your brain, it’s still an illness, and there shouldn’t be any distinction … We don’t consider taking medication for an ear infection something to be ashamed of. We shouldn’t treat mental health conditions any differently." — Michelle Obama',
            '"I well knew that one could break one’s arms and legs before and that then afterward that could get better, but I didn’t know that one could break one’s brain and that afterward that got better too." — Vincent Van Gogh',
            '"Mental pain is less dramatic than physical pain, but it is more common and also more hard to bear. The frequent attempt to conceal mental pain increases the burden: it is easier to say, “My tooth is aching” than to say, “My heart is broken.”" — C.S. Lewis',
            '"The strongest people are not those who show strength in front of the world but those who fight and win battles that others do not know anything about." ― Jonathan Harnisch',
            '"The first step toward change is awareness. The second step is acceptance." — Nathaniel Branden',
            '"Awareness is like the sun. When it shines on things, they are transformed." — Thich Nhat Hanh',
            '"We all have mental health in the same way that we all have physical health. It’s okay to have depression, it’s okay to have anxiety, it’s okay to have an anxiety disorder." ― Prince Harry',
            '"Look at you, love. Still here and hopeful after it all." ― Alex Elle',
            '"The chief element of happiness is this: to want to be what you are." — Desiderius Erasmus',
            '"No one will listen to us until we listen to ourselves." — Marianne Williamson',
            '"You are stronger than you know." — Lori Osterman',
            '"You are enough just as you are." — Brené Brown',
            '"Why fit in when you were born to stand out?" — Dr. Suess',
            '"The only way out is through." ― Robert Frost',
            '"Sometimes the most important thing in a whole day is the rest we take between two deep breaths." ― Etty Hillesum',
            '"Self-care is how you take your power back." ― Lalah Delia',
            '"There is hope, even when your brain tells you there isn’t." — John Green',
            '"For there is always light. If only we’re brave enough to see it." ― Amanda Gorman',
            '"One small crack does not mean that you are broken, it means that you were put to the test and you didn’t fall apart." ― Linda Poindexter',
            '"If you were born with / the weakness to fall / you were born with / the strength to rise." ― Rupi Kaur',
            '"You are allowed to be both a masterpiece and a work in progress simultaneously." ― Sophia Bush',
            '"Healing doesn’t mean the damage never existed. It means the damage no longer controls your life." ― Akshay Dubey',
            '"I gave myself permission to feel and experience all of my emotions. In order to do that, I had to stop being afraid to feel. In order to do that, I taught myself to believe that no matter what I felt or what happened when I felt it, I would be okay." ― Iyanla Vanzant',
            '"With depression, one of the most important things you could realize is that you’re not alone … Hold onto that fundamental quality of faith. Have faith that on the other side of your pain is something good." ― Dwayne “The Rock” Johnson',
            '"Hope is being able to see that there is light despite all of the darkness." ― Desmond Tutu',
            '"I saw the future, I did, and in it, I was alive." ― Neil Hilborn',
            '"Things work out best for those who make the best of how things work out." — John Wooden',
            '"It’s not a mountain that you climb or a hurdle that you jump, it’s something that you live with in an ongoing way. People want that narrative of illness being in the past tense. But a lot of the time, it isn’t." — John Green',
            '"Self-care means giving the world the best of you instead of what is left of you." — Katie Reed ',
            'Almost everything will work again if you unplug it for a few minutes, including you. ― Anne Lamott',
            '"You don’t have to control your thoughts. You just have to stop letting them control you." ― Dan Millman',
            '"Mental health … is not a destination but a process. It’s about how you drive, not where you’re going. ― Noam Shpancer"',
            '"You may have to fight a battle more than once to win it." ― Margaret Thatcher',
            '"Promise me you’ll always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think." — A.A. Milne',
            '"Do not judge me by my successes; judge me by how many times I fell down and got back up again." ― Nelson Mandela',
            '"If you tried / and didn’t end up / where you wanted to go / that’s still progress." ― Rupi Kaur',
            '"It takes courage to grow up and become who you really are." — E.E. Cummings',
            '"Every day may not be good … but there’s something good in every day." ― Alice Morse Earle',
            '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." ― Christian D. Larson',
            '"Life is tough, my darling, but so are you." ― Stephanie Bennett Henry',
            '"Be yourself; everyone else is already taken." — Oscar Wilde',
            '"Do not let what you cannot do interfere with what you can do." ― John Wooden',
            '"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart." ― Roy T. Bennett',
            '"Courage doesn’t always roar. Sometimes courage is the little voice at the end of the day that says I’ll try again tomorrow." ― Mary Anne Radmacher',
            '"Start where you are. Use what you have. Do what you can." ― Arthur Ashe',
            '"You are not a drop in the ocean. You are the entire ocean in a drop." ― Rumi',
            '"It’s not a mountain that you climb or a hurdle that you jump, it’s something that you live with in an ongoing way. People want that narrative of illness being in the past tense. But a lot of the time, it isn’t." — John Green',
            '"You can’t stop the waves, but you can learn to surf." — Jon Kabat-Zinn',
            '"Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment." — Stephen Covey',
            '"You are not your illness. You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle." ― Julian Seifter',
            '"You don’t have to see the whole staircase; just take the first step." ― Martin Luther King Jr.',
            '"In the midst of movement and chaos, keep stillness inside of you." ― Deepak Chopra',
            '“A gem cannot be polished without friction, nor a man perfected without trials.” — Chinese proverb',
            '“It’s not whether you get knocked down. It’s whether you get up again.” — Vince Lombardi',
            '“The only person who can pull me down is myself, and I’m not going to let myself pull me down anymore.” — JoyBell C.',
            '“You are not your past. You are the warrior that rose above it to become the example of someone who didn’t just survive, but thrived in creating the most beautiful last chapter of their life. ” — Shannon L. Alder',
            '“Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength. ” — Arnold Schwarzenegger',
            '“Stop beating yourself up. You are a work in progress, which means you get there a little at a time, not all at once. ” — Unknown',
            '“You have been criticizing yourself for years, and it hasn’t worked. Try approving of yourself and see what happens.” — Louise L. Hay',
            '“Embrace and love all of yourself – past, present, and future. Forgive yourself quickly and as often as necessary. Encourage yourself. Tell yourself good things about yourself.” — Melody Beattie',
            '“Forgive yourself for your faults and your mistakes and move on.” — Les Brown',
            '“The real difficulty is to overcome how you think about yourself.” — Maya Angelou',
            '“You, yourself, as much as anybody in the entire universe, deserve your love and affection.” — Unknown',
            '“Love yourself—accept yourself—forgive yourself—and be good to yourself, because without you the rest of us are without a source of many wonderful things.” — Leo F. Buscaglia',
            '“To accept ourselves as we are means to value our imperfections as much as our perfections.” — Sandra Bierig',
            '“If only you could sense how important you are to the lives of those you meet; how important you can be to people you may never even dream of. There is something of yourself that you leave at every meeting with another person. ” — Fred Rogers',
            '“You’re always with yourself, so you might as well enjoy the company. ” — Diane Von Furstenberg',
            '“Loving yourself…does not mean being self-absorbed or narcissistic, or disregarding others. Rather it means welcoming yourself as the most honored guest in your own heart, a guest worthy of respect, a lovable companion. ” — Margo Anand',
            '“You are not alone, even in your darkest moments.” – Unknown',
            '“Healing takes time, but you deserve it.” – Unknown',
            'The bravest thing I ever did was continuing my life when I wanted to die.” – Juliette Lewis',
            'Even the darkest night will end, and the sun will rise.” – Victor Hugo',

            ];
            var displayQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('quote').innerHTML = displayQuote;
         }


    }

}

// recalculate the current date
let currentDate = new Date
let totalMS = currentDate.getTime();




</script>
