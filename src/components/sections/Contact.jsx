import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { CustomButton } from "../buttons/CustomButton";
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { sendEmail } from "../../services/email";
import { useState, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Toast from "../ui/Toast";
import contactImage from "../../assets/images/contactImage.png";

const Contact = () => {
    const [alert, setAlert] = useState('');
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const handleSendMessage = async (event) => {
        event.preventDefault();

        if (!formData.email || !formData.subject || !formData.message) {
            setAlert('Please fill in all fields.');
            setTimeout(() => {
                setAlert('');
            }, 3000);
            return;
        }

        const response = await sendEmail(formData);
        const responseData = await response.json();

        setAlert(responseData.message);

        if (response.ok) {
            setFormData({ email: '', subject: '', message: '' });
        }

        setTimeout(() => {
            setAlert('');
        }, 3000);
    }

    return (
        <section className="mt-5 max-w-6xl mx-auto px-4 md:px-8 pb-20 md:pb-28" id="contact">
            <SectionHeader title={"Contact."} subtitle={"Connect with Me"} />

            <div className="flex flex-col md:flex-row items-stretch justify-center" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {/* Contact Information */}
                    <div className="md:pr-6">
                        <p className="mt-3 mb-8 md:mb-12 text-base text-secondary-text text-center md:text-left">
                            I&apos;d be happy to connect! Feel free to reach out for project inquiries, collaboration opportunities, or any other questions you may have.
                        </p>

                        <ul className="mb-6 md:mb-0 space-y-4 md:space-y-6">
                            {contactData.map((item, idx) =>
                                <Link to={item.path} key={idx} target="_blank" rel="noopener noreferrer">
                                    <li className="flex items-center">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-primary-text flex-shrink-0">
                                            {item.icon}
                                        </div>

                                        <div className="ml-4 overflow-hidden">
                                            <h3 className="mb-1 text-lg font-medium leading-6 text-primary-text truncate">
                                                {item.title}
                                            </h3>
                                            <p className="text-secondary-text truncate">
                                                {item.info}
                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            )}
                        </ul>
                        <div className="flex items-center mt-4">
                            <Toast message={alert} />
                        </div>
                    </div>

                    {/* Right-Side Image - Hidden on mobile */}
                    <div className="hidden md:block">
                        <img
                            src={contactImage}
                            alt="Contact Illustration"
                            className="rounded-lg w-full h-full max-h-[400px] object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

const contactData = [
    {
        title: "Email",
        icon: <MdEmail size={24} />,
        info: "tayadepranjal2903@gmail.com",
        path: "mailto:tayadepranjal2903c@gmail.com"
    },
    {
        title: "LinkedIn",
        icon: <FaLinkedin size={24} />,
        info: "@pranjaltayade",
        path: "https://www.linkedin.com/in/pranjal-tayade-832a91239/"
    },
    {
        title: "GitHub",
        icon: <FaGit size={24} />,
        info: "tayade-29",
        path: "https://github.com/tayade-29"
    },
];

export default Contact;