import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';

const Home: React.FC = () => {
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const FqRef = useRef(null);

	const scrollToSection = (ref: any) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		let lastScrollTop = 0;
		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop > lastScrollTop) {
				if (hcf) hcf.classList.add("hcf-profile-fixed");
			} else {
				if (hcf) hcf.classList.remove("hcf-profile-fixed");
			}
			lastScrollTop = scrollTop;
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="bg-gray-50 text-gray-900 font-inter overflow-hidden w-[100vw] h-[100vh] overflow-y-scroll">
			<div className="px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<HeroSection scrollToSection={scrollToSection} featuresRef={FqRef} contactRef={contactRef} aboutRef={aboutRef} />

				{/* Features Grid */}
				<div className="relative mt-20">
					<FeaturesGrid />
				</div>

				{/* Info Section */}
				<div className="relative mt-20" ref={aboutRef}>
					<InfoSection />
				</div>

				{/* FAQs Section */}
				<div className="relative mt-20" ref={FqRef}>
					<HomeFAQs />
				</div>

				{/* Contact Form Section */}
				<div className="relative mt-20" ref={contactRef}>
					<ContactForm />
				</div>

				{/* Footer */}
				<div className="relative mt-20">
					<MainFooter />
				</div>
			</div>
		</div>
	);
};

export default Home;
