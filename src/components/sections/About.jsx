import { skillsWork } from "../../utils";
import StackSkills from "../ui/StackSkills";
import { FaCode } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";
import { TbCertificate } from "react-icons/tb";
import SectionHeader from "../ui/SectionHeader";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Tooltip from "../ui/Tooltip";
import transition from "../../assets/images/transition.png";
import zoomer from "../../assets/images/zoomer.png";
import ccpap from "../../assets/images/ccpap.png";

const About = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

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

    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8 px-4" id="about">
            <SectionHeader title={"About."} subtitle={"Skills & Journey"} />

            <div className="text-secondary-text flex flex-col md:flex-row gap-8 md:gap-16" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="flex-1 text-base md:text-left"
                >
                    <p className="pb-3">
                        I’m a passionate and curious Full Stack Developer with hands-on experience building responsive, user-centric web applications using React.js, Node.js, and MongoDB. I recently completed a Software Development internship, where I contributed to live projects like Zeropad, gaining practical exposure to frontend architecture, Redux state management, and performance optimization techniques like lazy loading and code splitting.
                    </p>

                    <div className="pb-3">
                        I'm looking for new opportunities where I can merge my love for code with my love for learning to solve challenging problems.
                        </div>
                </motion.div>

                <div className="flex-1 pt-0 md:pt-0">
                    <StackSkills
                        title={"Programming & Tools"}
                        list={skillsWork}
                        icon={<FaCode color="#6366f1" />} />
                </div>
            </div>
        </section>
    )
}

export default About;