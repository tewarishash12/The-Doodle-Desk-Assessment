import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState)
            setIsSubmitting(false);
            toast.push(
                <Notification title="Success" type="success">
                    Successfully submitted
                </Notification>
            );
            setFormState({ fullname: '', email: '', subject: '', message: '' });
        } catch (err) {
            setIsSubmitting(false);
            toast.push(
                <Notification title="Error" type="danger">
                    Something went wrong
                </Notification>
            );
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Contact Info */}
                <motion.div
                    className="space-y-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let&apos;s get in touch!</h2>
                        <p className="text-gray-600 text-lg">
                            Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-cyan-100 p-3 rounded-lg">
                                <BiPhone className="w-6 h-6 text-cyan-700" />
                            </div>
                            <div>
                                <p className="text-gray-600">Phone</p>
                                <a href="tel:+919811396858" className="text-gray-900 hover:text-cyan-700">
                                    +91 9811396858
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-cyan-100 p-3 rounded-lg">
                                <CgMail className="w-6 h-6 text-cyan-700" />
                            </div>
                            <div>
                                <p className="text-gray-600">Email</p>
                                <a href="mailto:hello@gogetwell.ai" className="text-gray-900 hover:text-cyan-700">
                                    hello@gogetwell.ai
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                to="https://x.com/gogetwellai"
                                target="_blank"
                                className="p-3 bg-cyan-100 rounded-full hover:bg-cyan-200 transition"
                            >
                                <BsTwitter className="w-5 h-5 text-cyan-700" />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/company/gogetwellai/"
                                target="_blank"
                                className="p-3 bg-cyan-100 rounded-full hover:bg-cyan-200 transition"
                            >
                                <BsLinkedin className="w-5 h-5 text-cyan-700" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Contact Form */}
                <motion.div
                    className="bg-gray-50 p-8 rounded-2xl shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Fullname */}
                        <div className="relative">
                            <BiUser
                                className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${focused === 'fullname' || formState.fullname ? 'text-cyan-700' : 'text-gray-400'}`}
                            />
                            <input
                                required
                                type="text"
                                name="fullname"
                                value={formState.fullname}
                                placeholder="Full Name"
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 transition"
                                onChange={handleChange}
                                onBlur={() => setFocused('')}
                                onFocus={() => setFocused('fullname')}
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <CgMail
                                className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${focused === 'email' || formState.email ? 'text-cyan-700' : 'text-gray-400'}`}
                            />
                            <input
                                required
                                type="email"
                                name="email"
                                value={formState.email}
                                placeholder="Email Address"
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 transition"
                                onChange={handleChange}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused('')}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                required
                                name="message"
                                value={formState.message}
                                rows={4}
                                placeholder="Your Message"
                                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 transition"
                                onChange={handleChange}
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused('')}
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            loading={isSubmitting}
                            className="w-full py-3 px-6 bg-cyan-700 text-white rounded-lg hover:bg-transparent hover:border-cyan-700 hover:text-cyan-700 border-2 border-cyan-700 transition-all duration-300 flex justify-center items-center gap-2"
                        >
                            <span>Send Message</span>
                            <BiSend className="w-5 h-5" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
