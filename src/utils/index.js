
//import cast from "../assets/images/cast.png";
import p1 from "../assets/images/Ai.png";
import p2 from "../assets/images/2.png";
import p3 from "../assets/images/npd.png";
import p4 from "../assets/images/zeropad.png";
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
        title: 'Zeropad',
        image: p4,
        linkGithub: '',
        linkOnline: 'https://zeropad.in/',
        description: 'Developed during my internship at Rytnow Pvt. Ltd., ZeroPad is a real-time web app to monitor sanitary waste incinerators. I led the complete development cycle—research, UI/UX design, implementation, testing, and deployment. ',
        techStack: ['React', 'Tailwind CSS', 'SQL']
    },
    {
        title: 'BlogApplication',
        image: p1,
        linkOnline: '',
        linkGithub: 'https://github.com/tayade-29/BlogApplication',
        description: 'A full-stack blogging platform developed independently with user authentication, profile management, and dynamic routing. Utilized Redux Toolkit and RTK Query for efficient API state handling. Backend was built using Node.js and Prisma ORM.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'AI Image Generator',
        image:p2 ,
        linkGithub: 'https://github.com/tayade-29/AiImagegeneration',
        linkOnline: '',
        description: 'Created a DALL·E-inspired AI-powered image generator that converts user prompts into visuals. Developed with React.js for the frontend and Node.js for backend processing. Integrated AI APIs for real-time',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'NPD',
        image:p3 ,
        linkGithub: '',
        linkOnline: null,
        description: 'A dynamic dashboard-based application that tracks each stage in the product development lifecycle. Used React and Redux for UI and state management, and integrated REST APIs for real-time data updates. ',
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
     'Redux',
     'API Integration',
     'Data Stuctures'
];




export const metadata = {
    title: "Pranjal Tayade",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "",
    pageUrl: "https://pranjalportfolio-chi.vercel.app/"
};
