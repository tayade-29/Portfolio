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
import cast1 from "../assets/images/cast1.png"
import task from "../assets/images/task.png"
import pin from "../assets/images/pin.jpg"


export const headlines = [
    "Hi, I'm Pranjal Tayade.",
    "I'm a web Developer",
    "A web Developer passionate about crafting beautiful, responsive, and efficient web applications using React, Tailwind CSS, and modern technologies. With a knack for problem-solving and experience in backend development, I bring ideas to life with clean code and seamless functionality. Let’s create something amazing!"

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
        image: pin,
        linkOnline: '',
        linkGithub: null,
        description: 'Social Media Website Built a social media platform using React.js for the front end and MongoDB for data management. Integrated features like user authentication, profile creation, and real-time update using React components and Express backend services',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'Job Portal',
        image: cast1,
        linkGithub: '',
        linkOnline: '',
        description: 'A web application UI that provides job landing website',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'Task Manager',
        image: task,
        linkGithub: '',
        linkOnline: null,
        description: 'Task Manager is a web based application that helps us to organise task, status of task, in this React is used as frontend and Redux is used as state management tool ',
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
