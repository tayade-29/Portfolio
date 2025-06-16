import { CustomButton } from "../buttons/CustomButton";
import NavBar from "../navbar/NavBar";
import profile from "../../assets/images/MyProfile.jpg";
import { useRef } from "react";
import hover3d from "../../utils/hover";
import { motion } from 'framer-motion';
import { headlines } from '../../utils';
import { SocialMediaIcons } from "../ui/SocialMediaIcons";
import AnimatedSubtitle from "../text anim/AnimatedSubtitle";
import AnimatedTitle from "../text anim/AnimatedTitle";
import { animateScroll } from 'react-scroll';

const Hero = () => {
    const hero = useRef(null);

    const hoverHero = hover3d(hero, {
        x: 30,
        y: -40,
        z: 30,
    });

    const imageHover = hover3d(hero, {
        x: 20,
        y: -5,
        z: 11,
    });

    const scrollToContact = () => {
        animateScroll.scrollToBottom();
    };

    return (
        <div className="bg-primary bg-grid-small-white/[0.2] min-h-screen flex flex-col" id="home">
            <NavBar />

            <section ref={hero} className="flex-grow flex items-center">
                <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-8">
                    {/* Social Icon - Positioned absolutely on desktop */}
                    <div className="hidden md:block">
                        <SocialMediaIcons />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                        {/* Text Section */}
                        <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
                            <AnimatedTitle
                                text={headlines[0]}
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-text"
                                color={true}
                            />

                            <AnimatedSubtitle
                                text={headlines[1]}
                                className="text-secondary-text text-xl sm:text-2xl md:text-3xl font-bold mt-1 md:mt-0"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.6 }
                                }}
                                className="text-secondary-text text-lg sm:text-xl md:text-2xl font-medium mt-2 md:mt-3"
                            >
                                {headlines[2]}
                            </motion.p>

                            <div className="mt-4 md:mt-5">
                                <CustomButton
                                    label={'Get in Touch'}
                                    onClick={scrollToContact}
                                    svg={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                        </svg>
                                    }
                                />
                            </div>
                        </div>

                        {/* Image - Hidden on mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.5 }
                            }}
                            className="hidden md:block flex-shrink-0"
                            style={{
                                transform: hoverHero.transform,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <img
                                src={profile}
                                alt="Profile"
                                className="rounded-full border-2 border-secondary w-60 h-60 lg:w-72 lg:h-72 object-cover"
                                style={{
                                    transform: imageHover.transform,
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Mobile Social Icons - Centered below content */}
                    <div className="md:hidden flex justify-center mt-6">
                        <SocialMediaIcons />
                    </div>
                </div>

                {/* Background Glow - Adjusted for mobile */}
                <div
                    className="absolute inset-0 max-w-xs h-64 sm:max-w-md md:max-w-lg blur-[118px]"
                    style={{
                        background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                        top: "20%",
                        left: "10%",
                        right: "auto"
                    }}
                />
            </section>
        </div>
    );
};

export default Hero;