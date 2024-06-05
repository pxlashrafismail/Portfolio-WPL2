<template>
    <div class="about-container">
        <div class="about-container-header">
            <label class="bout-container-header-lbl" for="about-me">{{aboutLabel}}</label>
            <select class="bout-container-header-select" 
            name="about-me-select" 
            id="about-me"
            v-model="store.filter">
                <option 
                v-for="filter in store.getFilters" 
                :key="filter"
                :value="filter">
                    {{ filter }}
                </option>
            </select>
        </div>
        <div class="about-container-body">
            <div class="about-container-body-content" 
            v-for="subject in store.getFilteredSubjects" :key="subject.id">
                <AboutCardComponent :aboutMeOption="subject" />
            </div>
        </div> 
    </div>
</template>

<script>
import { useAboutMeStore } from '@/stores/aboutMe.js'
import AboutCardComponent from '@/components/AboutCardComponent.vue'   
    export default {
        name: 'AboutView',
        components: {
            AboutCardComponent,
        },
        data() {
            return {
                aboutLabel: 'About Me',
                // options: [
                //     {value: 'all', text: 'All'},
                //     {value: 'reflecion', text: 'Reflecion'},
                //     {value: 'soft-skills', text: 'Soft Skills'},
                //     {value: 'hard-skills', text: 'Hard Skills'},
                //     {value: 'experience', text: 'Experience'},
                //     {value: 'myself', text: 'Myself'},
                // ],
                store : useAboutMeStore(),

            }
        },
        // computed:{
        //     filteredAboutMe() {
        //         let aboutMeItem = this.store.getFilteredAboutMe();
        //         return aboutMeItem;
                
        //     }
        // },
        // methods: {
        //     applyFilters() {
        //         this.store.SetFilterAboutMe(this.selectedOption);
        //         console.log("testing the filter");
        //     }
        // },
        created() {
           this.store.fetchAboutMe()
        },
   
    }
</script>










    <!-- <div class="end-reflection">
        Persoonlijke Reflectie: Ash
    
    Reflectie op de X-factor
    (em)passie:
    Mijn werkzaamheden als coder binnen WPL2 toonden mijn passie voor webontwikkeling en mijn toewijding om een functioneel en gebruiksvriendelijk product te creëren. Het ontwikkelen van een volledig werkende website voor huizen met filters was een uitdagende taak die ik met veel enthousiasme heb uitgevoerd.
    
    Ondernemend & Innovatief:
    Ik heb initiatief getoond door een voorbeeldwebsite te ontwikkelen, wat niet alleen het werk van de designers vergemakkelijkte, maar ook de kwaliteit van ons project verbeterde. Deze innovatieve aanpak hielp ons om sneller te testen en feedback te verwerken.
    
    (Internationaal) Samen(net)werken:
    Ondanks de uitdagingen die we tegenkwamen, zoals de slechte feedback na de eerste en tweede sprint, bleef ons team goed communiceren en samenwerken. Mijn rol als coder vereiste constante afstemming met de designers en andere teamleden om ervoor te zorgen dat de website aan alle eisen voldeed.
    
    (Multi)disciplinair:
    Het project vereiste samenwerking tussen verschillende disciplines, waaronder design en codering. Door nauw samen te werken met de designers, kon ik de technische aspecten van hun visies realiseren, wat leidde tot een beter eindproduct.
    
    Reflectie op mijn persoonlijke softskills
    Gekozen reflectiemethode: STARR-methode
    
    Situatie:
    Na de tweede sprint kregen we feedback dat we het projectconcept volledig verkeerd hadden begrepen. 
    
    Taak:
    Mijn taak was om de website te herstructureren en aan te passen aan het nieuwe concept van het project, dat gericht was op het promoten van de app in plaats van het tonen van huizen.
    
    Actie:
    Ik zocht actief naar nieuwe ideeën, deelde deze met mijn team en werkte samen met de designers om een nieuw ontwerp te maken. Daarnaast bleef ik nauw contact houden met de docenten om ervoor te zorgen dat onze aanpak in lijn was met de projectdoelen.
    
    Resultaat:
    In de derde sprint kregen we positieve feedback over het design en in de vierde sprint werd ons project volledig goedgekeurd. Ons harde werk werd gewaardeerd door de docenten, en we waren trots op het eindresultaat.
    
    Reflectie:
    Door deze ervaring heb ik mijn communicatievaardigheden en vermogen om constructieve feedback te verwerken verbeterd. Het accepteren van kritiek en snel aanpassen aan nieuwe richtingen zijn vaardigheden die ik sterk heb ontwikkeld tijdens WPL2.
    
    Algemene reflectie over het verloop van WPL2
    
    Positieve realisaties:
    Ik ben trots op de volledige herstructurering van de website en het implementeren van de nieuwe ideeën die we hebben verzameld na de slechte feedback. Dit zorgde voor een succesvolle afronding van het project.
    
    Moeilijke punten:
    Het moeilijkste moment was het ontvangen van de slechte feedback na de tweede sprint. Het was een grote uitdaging om de negatieve feedback te verwerken en het project volledig opnieuw te beginnen.
    
    Samenwerking:
    De samenwerking binnen ons team verliep uitzonderlijk goed. We hadden open en transparante communicatie en werkten effectief samen zonder conflicten. Een verbeterpunt zou kunnen zijn om nog regelmatiger feedbacksessies te houden om ervoor te zorgen dat iedereen altijd op dezelfde lijn zit.
    
    Beeld van de job:
    Het WPL2-project kwam goed overeen met mijn beeld van een toekomstige baan in webontwikkeling. De noodzaak om te kunnen omgaan met feedback, snel aan te passen en effectief samen te werken met verschillende disciplines zijn allemaal belangrijke aspecten die ik in een toekomstige functie verwacht
    </div>
        <div id="soft-skills">
            <h1> My soft skills </h1><br>
            <ul>
                <li><span> Communication: </span>Strong verbal and written communication skills, essential for
                    effective collaboration and conveying technical concepts to diverse stakeholders.
                </li>
                <li><span> Teamwork: </span>Demonstrated ability to contribute constructively to team projects,
                    open to diverse perspectives, fostering positive group dynamics.
                </li>
                <li><span> Problem-Solving: </span>Analytical thinking and creative problem-solving ability to
                    address complex technical challenges and find innovative solutions.
                </li>
                <li><span> Adaptability: </span>Adaptive mindset to respond swiftly to changing project
                    requirements and technological developments, ensuring effective performance in dynamic
                    environments.
                </li>
                <li><span> Curiosity: </span>Continuous pursuit of knowledge expansion, exploring new
                    technologies and trends to constantly enhance technical skills.
                </li>
            </ul>
        </div>
        <div id="hard-skills">
            <h1> My hard skills </h1><br>
            <ul>
                <li><span> JavaScript (JS): </span>In-depth knowledge and experience in developing interactive
                    and dynamic web pages using JavaScript.
                </li>
                <li><span> Cascading Style Sheets (CSS): </span>Extensive expertise in styling and formatting
                    web content for an attractive and responsive user experience.
                </li>
                <li><span> HyperText Markup Language (HTML): </span>Proficient knowledge of HTML for creating
                    well-structured and accessible web pages.
                </li>
                <li><span> UI/UX Design: </span>Experience in designing intuitive user interfaces and optimizing
                    the user experience for web applications.
                </li>
                <li><span> Adobe Photoshop and Illustrator: </span>Proficiency in using Photoshop for editing
                    and optimizing graphic elements, and Illustrator for creating vector images and graphic
                    designs.
                </li>
            </ul>
        </div>
        <div id="experience">
            <h1>Work and education</h1> <br>
            <ul>
                <li>
                    <span>2019 - PresentLifeguard - Hasselt Swimming Pool. Location: Belgium.</span>
                    <ol>
                        <li>Ensured the safety of pool visitors.</li>
                        <li>Responded promptly to emergencies and enforced pool safety rules.</li>
                        <li>Maintained a vigilant watch over the pool area.</li>
                    </ol>
                </li>
    
    
                <li>
                    <span>2016 - 2018 Language Student and Flexible Worker. Location: Belgium. </span>
                    <ol>
                        <li>tudied Dutch intensively to achieve proficiency in the language. Location:
                            Belgium.
                        </li>
                        <li>Engaged in flexible work, contributing to various industries, including factory work
                            and employment at McDonald's.
                        </li>
                        <li>Developed adaptability and multitasking skills by managing both academic studies and
                            work responsibilities simultaneously.
                        </li>
                        <li>Gained practical experience in a dynamic work environment, fostering a strong work
                            ethic and teamwork capabilities.
                        </li>
                        <li>Demonstrated the ability to balance educational pursuits with real-world work
                            experiences.
                        </li>
                    </ol>
                </li>
    
    
                <li>
                    <span>2014 - 2016 Dive Master freelancer. Location: Egypt.</span>
                    <ol>
    
                        <li>Worked as a Dive Master at Manta Safari Dive Center, Sharm El Sheikh, a prominent
                            diving destination.
                        </li>
                        <li>Led and guided diving excursions, ensuring the safety and enjoyment of guests.
                        </li>
                    </ol>
                </li>
    
    
                <li>
                    <span>2011 - 2014 Entertainment Manager - Shores Aloha Hotels. Location: Egypt.</span>
                    <ol>
                        <li>Managed and coordinated entertainment activities for hotel guests.</li>
                        <li>Organized events and ensured a lively and enjoyable atmosphere.</li>
                        <li>Handled guest relations and resolved issues to enhance their experience.</li>
                    </ol>
                </li>
    
    
                <li>
                    <span>2010- 2011 Sales - Manta Safari Excursion Office.  Location: Egypt.</span>
                    <ol>
                        <li>Worked as a salesperson, promoting and selling excursion packages.</li>
                        <li>Assisted customers in choosing suitable excursions.</li>
                        <li>Provided information about tour packages and ensured customer satisfaction.</li>
                    </ol>
                </li>
    
    
                <li>
                    <span>2007 - 2010 Legal Intern</span>
                    <ol>
                        <li>Completed a legal internship as part of the requirements for obtaining a Master's
                            degree in Law from the Faculty of Law.
                        </li>
                        <li>Assisted in legal research, document preparation, and case analysis.</li>
                        <li>Gained practical experience in various areas of law under the guidance of
                            experienced attorneys.
                        </li>
                    </ol>
                </li>
    
    
                <li>
                    <span>2007 Year of Graduation: Master of Laws - Faculty of Law Egypt </span>
                    <ol>
                        <li>Successfully completed a Master's degree in Law from the Faculty of Law.</li>
                        <li>Engaged in in-depth legal research, academic studies, and practical applications of
                            legal principles.
                        </li>
                    </ol>
                </li>
            </ul>
    
        </div>
        <div id="myself">
            <h1>Something about me</h1> <br>
            <ul>
                <li>
                    Diving is not just a hobby for me; it's my ultimate joy. Beneath the waves, I lose myself in
                    a world where time seems to stand still. The underwater realm is where I find profound peace,
                    surrounded by the serenity of the deep. It's more than an activity, it's a sanctuary where I reconnect
                    with myself and the wonders of nature, making every dive a transformative experience.
                </li>
                <li>
                    In addition to diving, I have a deep passion for dancing, finding rhythm in every beat, and
                    expressing myself through movement. Running and swimming are not just exercises but ways for
                    me to
                    feel the pulse of life coursing through my veins. Traveling is a constant source of
                    inspiration,
                    broadening my perspective and enriching my soul with diverse experiences.
                </li>
                <li>
                    The gym is my haven for physical and mental well-being. Fitness, to me, is not just a
                    routine; it's
                    a celebration of what the human body can achieve. Music is my companion, sometimes a gentle
                    melody
                    to clear my head, and other times a lively tune to elevate my spirits.
                </li>
                <li>
                    Life, in my view, is too short to not pursue what brings genuine happiness. Embracing every
                    moment,
                    I strive to create a life filled with joy, adventure, and a deep appreciation for the beauty
                    that
                    surrounds us.
                </li>
            </ul>
        </div> -->