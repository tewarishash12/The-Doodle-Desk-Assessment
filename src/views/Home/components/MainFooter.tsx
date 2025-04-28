import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LinkItem {
    text: string;
    path: string;
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
];

const MainFooter: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 bg-white p-4">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 600px:px-12">
                {/* Copyright for all screen sizes */}
                <h1 className="text-sm text-gray-900 md:hidden text-center w-full">
                    ©{new Date().getFullYear()} gogetwell.ai
                </h1>
                <h1 className="text-xs text-gray-900 hidden md:block">
                    ©{new Date().getFullYear()} gogetwell.ai
                </h1>

                {/* Footer Links */}
                <ul className="mt-4 md:mt-0 flex gap-x-3 flex-wrap gap-y-3 mx-auto">
                    {links.map((item, i) => (
                        <li
                            key={i}
                            className="text-black hover:underline hover:text-cyan-700 text-xs text-center"
                        >
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    ))}
                </ul>

                {/* Social Links */}
                <div className="items-center gap-2 md:gap-8 hidden md:flex">
                    <Link
                        to="https://x.com/gogetwellai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={25} className="text-cyan-700 hover:text-cyan-500 transition" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={25} className="text-cyan-700 hover:text-cyan-500 transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;