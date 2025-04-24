<template>
    <ion-page> 
        
        <ion-header>
            <ion-toolbar class="home_header_bg">
                    <ion-title>StopHarm</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-footer>
            <ion-toolbar class="home_footer_bg">
               <!-- <ion-title>You've visited ## days in a row. Good job!</ion-title> -->
                <ion-title>Proud of you!</ion-title>
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
    IonDatetime,

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
        IonDatetime,
        

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
            '“As long as you are breathing, there is more right with you than wrong with you, no matter what is wrong.” ― Jon Kabat-Zinn',
            '“Your calm mind is the ultimate weapon against your challenges. So relax.” ― Bryant McGill',
            '“Trust yourself. You’ve survived a lot, and you’ll survive whatever is coming.” ― Robert Tew',
            '“Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths.” ― C.H. Spurgeon',
            '“Life is like riding a bicycle. To keep your balance, you must keep moving.” — Albert Einstein',
            '“I’ve had a lot of worries in my life, most of which never happened.”― Mark Twain',
            '“Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.” ― Benjamin Franklin',
            '“For us, there is only the trying. The rest is not our business.” ― T.S. Eliot',
            '“There must be quite a few things that a hot bath won’t cure, but I don’t know many of them.” ― Sylvia Plath',
            '“The only thing we have to fear is fear itself.” ― Franklin Delano Roosevelt',
            '“The world only exists in your eyes. You can make it as big or as small as you want.” ― F. Scott Fitzgerald',
            '“If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.” ― Martin Luther King Jr.',
            '“The best use of creativity is imagination. The worst use of creativity is anxiety.”  ― Deepak Chopra',
            '“Doing the best at this moment puts you in the best place for the next moment.” — Oprah Winfrey',
            '“You may not control all the events that happen to you, but you can decide not to be reduced by them.” — Maya Angelou',
            '“You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I have lived through this horror. I can take the next thing that comes along.’ You must do the thing you think you cannot do.” — Eleanor Roosevelt',
            '“Every tomorrow has two handles. We can take hold of it with the handle of anxiety or the handle of faith.” ― Henry Ward Beecher',
            '“Let fear be a counselor and not a jailer.” ― Tony Robbins',
            '“I promise you nothing is as chaotic as it seems. Nothing is worth diminishing your health. Nothing is worth poisoning yourself into stress, anxiety, and fear.” ― Steve Maraboli',
            '“Present fears are less than horrible imaginings.” ― William Shakespeare',
            '“You don’t have to control your thoughts. You just have to stop letting them control you.” ― Dan Millman',
            '“Nothing is permanent in this wicked world — not even our troubles.” — Charlie Chaplin',
            '“Actually spending ten minutes clearing off one shelf is better than fantasizing about spending a weekend cleaning out the basement.” — Gretchen Rubin',
            '“Do not fight your negative emotions. Observe and befriend them.” — Haemin Sunim',
            '“We must be willing to get rid of the life we’ve planned, so as to have the life that is waiting for us.” — Joseph Campbell',
            '“Talk to yourself like you would to someone you love.” — Brené Brown',
            '“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.” ― Mother Teresa',
            '“Life is ten percent what you experience and ninety percent how you respond to it.” ― Dorothy M. Neddermeyer',
            '“If the world were perfect, it wouldn’t be.” ― Yogi Berra',
            '“Understanding the difference between healthy striving and perfectionism is critical to laying down the shield and picking up your life. Research shows that perfectionism hampers success. In fact, it’s often the path to depression, anxiety, addiction and life paralysis.” ― Brené Brown',
            '“I tend to get pretty depressed and I have some issues with anxiety and things like that...For me, it’s more psychological. Exercise is a means of expelling those demons.” — Ryan Reynolds',
            '“Rule No. 1 is, don’t sweat the small stuff. Rule No. 2 is, it’s all small stuff.” ― Robert Eliot',
            '“Instead of worrying about what you cannot control, shift your energy to what you can create.” ― Roy T. Bennett',
            '“No matter how much falls on us, we keep plowing ahead. That’s the only way to keep the roads clear.” ― Greg Kincaid',
            '“Now is no time to think of what you do not have. Think of what you can do with what there is.” ― Ernest Hemingway',
            '“Everything you want is on the other side of fear.” ― Jack Canfield',
            '“Breathe, darling. This is just a chapter. It’s not your whole story.” ― S.C. Lourie',
            '“A problem is a chance for you to do your best.” ― Duke Ellington',
            '“Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.” ― Wayne W. Dyer',
            '“Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.” ― Deepak Chopra',
            '“This life is mine alone. So I have stopped asking people for directions to places they’ve never been.” ― Glennon Doyle',
            '“Worrying is like paying a debt you don’t owe.” ― Mark Twain',
            '“Anxiety’s like a rocking chair. It gives you something to do, but it doesn’t get you very far.” ― Jodi Picoult',
            '“Nothing can bring you peace but yourself.” ― Ralph Waldo Emerson',
            '“We tend to think that the future happens later, but we’re creating it in our minds every day.” ― Lori Gottlieb',
            '“You can’t just take Tylenol to deal with anxiety. Being able to be level with people, being honest about your problem — that is a huge help.” —  Royce White',
            '“Anxiety was born in the very same moment as mankind. And since we will never be able to master it, we will have to learn to live with it—just as we have learned to live with storms.” ― Paulo Coelho',
            '“Unease, anxiety, tension, stress, worry — all forms of fear — are caused by too much future, and not enough presence. ― Eckhart Tolle',
            '“The largest part of what we call ‘personality’ is determined by how we’ve opted to defend ourselves against anxiety and sadness.” ― Alain de Botton',
            '“In the end, just three things matter: How well we have lived. How well we have loved. How well we have learned to let go.” — Jack Kornfield',
            '“Your mind will answer most questions if you learn to relax and wait for the answer.” ― William S. Burroughs',
            '“I am waiting for my case to come up / and I am waiting / for a rebirth of wonder.”  ― Lawrence Ferlinghetti',
            '“If you want to conquer the anxiety of life, live in the moment, live in the breath.” ― Amit Ray',
            '“Anxiety is a living body / Poised beside us like a shadow. / It is the last creature standing, / The only beast who loves us / Enough to stay.” ― Amanda Gorman',
            '“There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them.” ― Jo Walton',
            '“It’s so hard to forget pain, but it’s even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.” ― Chuck Palahniuk',
            '“Each of us must confront our own fears, must come face to face with them. How we handle our fears will determine where we go with the rest of our lives. To experience adventure or to be limited by the fear of it.” ― Judy Blume',
            


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
