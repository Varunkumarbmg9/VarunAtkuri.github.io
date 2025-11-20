import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:varunkumaratkuri68@gmail.com"
                    className="inline-block px-8 py-3 bg-primary hover:bg-secondary text-white rounded-full font-medium transition-all transform hover:scale-105 mb-8"
                >
                    Say Hello
                </a>

                <div className="flex justify-center gap-6 mb-16">
                    <a href="mailto:varunkumaratkuri68@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        varunkumaratkuri68@gmail.com
                    </a>
                    <span className="text-gray-600">•</span>
                    <a href="tel:+14098881036" className="text-gray-400 hover:text-white transition-colors">
                        (409) 888-1036
                    </a>
                    <span className="text-gray-600">•</span>
                    <a href="https://www.linkedin.com/in/varunkumaratkuri/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Varun Kumar Atkuri. All rights reserved.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
