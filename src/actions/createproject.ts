import project1 from "../asset/image/portfolio/2.jpg";
import project2 from "../asset/image/portfolio/3.jpg";
import project3 from "../asset/image/portfolio/4.jpg";
import project4 from "../asset/image/portfolio/6.jpg";
import webdevelopment from "../asset/image/myservice/service-2.svg";
import wordrepss from "../asset/image/portfolio/wordrepss.png";


const initialWorksData= [
    {
        id: 1,
        category: 'Wordpress',
        title: 'Project Management Illustration',
        alt: 'Project Management Illustration',
        link: '#',
        caption: 'Project Management Illustration',
        description: 'Project Management Illustration',
        image: project1.src // Use the imported variable directly
    },
    {
        id: 2,
        category: 'Wordpress',
        title: 'Guest App Walkthrough Screens',
        alt: 'Guest App Walkthrough Screens',
        link: '#workDialog',
        caption: 'Guest App Walkthrough Screens',
        description: 'Project Management Illustration',
        image: project2.src
    },
    {
        id: 3,
        category: 'NextJS',
        title: 'Guest App Walkthrough Screens',
        alt: 'Guest App Walkthrough Screens',
        link: '#workDialog',
        caption: 'Guest App Walkthrough Screens',
        description: 'Project Management Illustration',
        image: project3.src
    },
    {
        id: 4,
        category: 'PHP',
        title: 'Delivery App Wireframe',
        alt: 'Delivery App Wireframe',
        link: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        caption: 'Delivery App Wireframe',
        description: 'Project Management Illustration',
        image: project4.src
    },
    {
        id: 5,
        category: 'Design',
        title: 'Onboarding Motivation',
        alt: 'Onboarding Motivation',
        link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240233494&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        caption: 'Onboarding Motivation',
        description: 'Project Management Illustration',
        image: webdevelopment.src
    },
    {
        id: 6,
        category: 'Digital Marketing',
        title: 'Onboarding Motivation',
        alt: 'Onboarding Motivation',
        link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240233494&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        caption: 'Onboarding Motivation',
        description: 'Project Management Illustration',
        image: wordrepss.src
    }
    
];
export default initialWorksData;