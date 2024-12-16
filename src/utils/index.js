import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";
import a1 from "../assets/images/a1.webp";
import a2 from "../assets/images/a2.webp";
import a4 from "../assets/images/a4.webp";
import a5 from "../assets/images/a5.webp";


export const headlines = [
    "Hi, I'm Pranjal Tayade.",
    "I'm a Software Developer",
    "Over the past few years, I've immersed myself in building and scaling backend software while actively tackling frontend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'SkyCast',
        image: cast,
        linkGithub: 'https://github.com/bjclayton/SkyCast',
        linkOnline: 'https://sky-cast-taupe.vercel.app/',
        description: 'SkyCast is a web app that provides real-time weather conditions and forecasts for selected cities.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'ORA-API',
        image: ora,
        linkOnline: 'https://ora-api-documentation.vercel.app/',
        linkGithub: null,
        description: 'A RESTful API that provides access to a wide range of Bible-related information, including versions, books, verses, and search functionality.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'ChatGenius',
        image: chat,
        linkGithub: 'https://github.com/bjclayton/ChatGenius',
        linkOnline: 'https://chat-genius-puce.vercel.app/',
        description: 'A web application that harnesses the power of Large Language Models (LLMs) to facilitate natural and engaging conversations.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'History Tracer',
        image: tracer,
        linkGithub: 'https://github.com/bjclayton/History-Tracer',
        linkOnline: null,
        description: 'History Tracer is A desktop application that reads history data from different web browsers and displays it in a table.',
        techStack: ['Java Swing', 'SQLite JDBC']
    },
    {
        title: 'InstaWall',
        image: insta,
        linkGithub: 'https://github.com/bjclayton/InstaWall',
        linkOnline: null,
        description: 'InstaWall is a mobile application that allows users to discover, search, like, and share wallpapers from the Unsplash API.',
        techStack: ['Dart', 'Flutter', 'Firebase']
    },
    {
        title: 'PenX',
        image: pen,
        linkGithub: 'https://github.com/bjclayton/PenX',
        linkOnline: 'https://pen-x.vercel.app/',
        description: 'A blog application built with React. It allows users to create and publish blog posts, as well as view and comment on other users\' posts.',
        techStack: ['MERN Stack', 'Tailwind CSS']
    },
];

export const skillsWork = [
    'MongoDB',
    'ExpressJs',
    'ReactJs',
    'NodeJs',
    'MySQL',
    'Sanity',
    'Python',
    'VsCode',
    'GitHub',
];




export const metadata = {
    title: "Pranjal Tayade",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "",
    pageUrl: "https://www.johnclaytonblanc.com"
};
