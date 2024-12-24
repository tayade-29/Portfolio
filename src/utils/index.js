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
    "I'm a web Developer",
    "Developer skilled in React, Tailwind CSS, JavaScript, and modern web technologies. I also have experience with backend technologies, enabling me to build full-stack applications. Passionate about creating user-friendly, and high-performance web solutions."

];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'Crafted Elegance',
        image: cast,
        linkGithub: '',
        linkOnline: '',
        description: 'Crafted Elegance (Smart India Hackathon) Led the design and development of an e-commerce platform called "Crafted Elegance" for artisans. Utilized Figma for UI/UX design and developed the front end using HTML, CSS, and JavaScript.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'Pinterest Clone',
        image: ora,
        linkOnline: '',
        linkGithub: null,
        description: 'Social Media Website Built a social media platform using React.js for the front end and MongoDB for data management. Integrated features like user authentication, profile creation, and real-time update using React components and Express backend services',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'Job Portal',
        image: chat,
        linkGithub: '',
        linkOnline: '',
        description: 'A web application UI that provides job landing website',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'Task Tracer',
        image: tracer,
        linkGithub: '',
        linkOnline: null,
        description: 'History Tracer is A desktop application that reads history data from different web browsers and displays it in a table.',
        techStack: ['Java Swing', 'SQLite JDBC']
    },
];

export const skillsWork = [
    'MongoDB',
    'ExpressJs',
    'ReactJs',
    'NodeJs',
    'MySQL',
    'NextJs',
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
