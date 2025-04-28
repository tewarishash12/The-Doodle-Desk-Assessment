import React from 'react';
import aboutUs from '@/assets/images/about_us.gif';
import mission from '@/assets/images/our_mission.gif';
import challenges from '@/assets/images/challenges_solve.gif';

const sections = [
    {
        img: aboutUs,
        title: 'About Us',
        content1: 'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.',
        content2: 'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.',
        points: [
            { title: 'Modern Solutions', description: 'Leveraging AI technology for healthcare' },
            { title: 'Patient-Centric', description: 'Personalized healthcare experiences' },
        ],
        reverse: false,
    },
    {
        img: mission,
        title: 'Our Mission',
        content1: 'Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.',
        content2: 'We strive to become the leading platform for healthcare tourism management and digital transformation.',
        points: [
            { title: 'AI-Powered Solutions', description: 'Optimizing operations with advanced technology' },
            { title: 'Growth Focus', description: 'Maximizing revenue and opportunities' },
        ],
        reverse: true,
    },
    {
        img: challenges,
        title: 'The Challenges We Solve',
        content1: 'Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.',
        content2: 'Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.',
        points: [
            { title: 'Efficient Operations', description: 'Streamlined booking and management' },
            { title: 'Enhanced Support', description: 'Improved patient communication' },
        ],
        reverse: false,
    },
];

const InfoSection: React.FC = () => {
    return (
        <section className="py-20 bg-white scroll-smooth">
            <div className="max-w-7xl mx-auto px-6">
                {sections.map((section, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col-reverse ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-24`}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src={section.img}
                                alt={section.title}
                                className="rounded-xl w-full h-auto object-cover shadow-md"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                {section.title}
                            </h2>
                            <div className="h-1 w-20 bg-cyan-500 rounded-full mb-8"></div>

                            <p className="text-gray-600 leading-relaxed mb-6">{section.content1}</p>
                            <p className="text-gray-600 leading-relaxed">{section.content2}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {section.points.map((point, idx2) => (
                                    <div key={idx2} className="flex gap-4 items-start">
                                        <div className="p-3 bg-cyan-100 rounded-lg">
                                            <svg
                                                className="w-6 h-6 text-cyan-700"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{point.title}</h4>
                                            <p className="text-sm text-gray-600">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfoSection;
