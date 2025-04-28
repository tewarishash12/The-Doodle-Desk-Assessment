import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
                {/* Copyright with animation */}
                <motion.h1
                    className="text-sm text-gray-900 md:hidden text-center w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    ©{new Date().getFullYear()} gogetwell.ai
                </motion.h1>

                <motion.h1
                    className="text-xs text-gray-900 hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    ©{new Date().getFullYear()} gogetwell.ai
                </motion.h1>

                {/* Footer Links with animation */}
                <motion.ul
                    className="mt-4 md:mt-0 flex gap-x-3 flex-wrap gap-y-3 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {links.map((item, i) => (
                        <motion.li
                            key={i}
                            className="text-black hover:underline hover:text-cyan-700 text-xs text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                        >
                            <Link to={item.path}>{item.text}</Link>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Social Links with animation */}
                <motion.div
                    className="items-center gap-2 md:gap-8 hidden md:flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
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
                </motion.div>
            </div>
        </footer>
    );
};

export default MainFooter;
