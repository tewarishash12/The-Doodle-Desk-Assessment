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
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in">
                        <span className="text-cyan-700">AI Front Office </span> <br />
                        for Healthcare Agents
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-600 mb-8">
                        Create your <span className="text-cyan-700 font-bold">AI Store</span> in 2 minutes. <br />
                        Scale your practice with <span className="font-bold text-cyan-700">Digital Marketing</span>.
                    </p>

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

                    {/* Stats Section */}
                    <div className="flex flex-wrap justify-center gap-12 mt-12 text-gray-900">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">2100<span className="text-cyan-700">+</span></h2>
                            <p className="mt-2 text-sm md:text-base">Qualified Doctors</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">1000<span className="text-cyan-700">+</span></h2>
                            <p className="mt-2 text-sm md:text-base">Hospitals</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">800<span className="text-cyan-700">+</span></h2>
                            <p className="mt-2 text-sm md:text-base">Treatment Plans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
