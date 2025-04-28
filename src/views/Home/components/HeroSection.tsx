import { motion } from 'framer-motion';
import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="relative w-full bg-gray-50 overflow-hidden">
            {/* Navbar */}
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Hero Content */}
            <div className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-12 md:py-20">
                {/* Mobile background image */}
                <img
                    src={smallBG}
                    alt="background_image"
                    className="absolute top-0 left-0 w-full h-full object-cover md:hidden z-[-10]"
                />

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div>

                {/* Main Content */}
                <div className="z-10 max-w-4xl mx-auto">
                    {/* Header with animation */}
                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-cyan-700">AI Front Office </span> <br />
                        for Healthcare Agents
                    </motion.h1>

                    {/* Paragraph with animation */}
                    <motion.p
                        className="text-lg md:text-2xl text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Create your <span className="text-cyan-700 font-bold">AI Store</span> in 2 minutes. <br />
                        Scale your practice with <span className="font-bold text-cyan-700">Digital Marketing</span>.
                    </motion.p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <HcfSignupPopup popupButtonStatus buttonChildren={
                            <Button
                                block
                                variant="solid"
                                className="rounded-full max-w-xs text-lg px-8 py-4 hover:bg-cyan-800 hover:scale-105 transition-all duration-300"
                            >
                                Get Started
                            </Button>
                        } />
                    </div>

                    {/* Stats Section with animation */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-12 mt-12 text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">2100<span className="text-cyan-700">+</span></h2>
                            <p className="mt-2 text-sm md:text-base">Qualified Doctors</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">1000<span className="text-cyan-700">+</span></h2>
                            <p className="mt-2 text-sm md:text-base">Hospitals</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">800<span className="text-cyan-700">+</span></h2>
                            <p className="mt-2 text-sm md:text-base">Treatment Plans</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
