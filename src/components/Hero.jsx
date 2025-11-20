import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
                    Hello, I'm
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Varun Kumar Atkuri
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Data Engineer with 5 years of experience building cloud-native data pipelines across healthcare and retail domains.
                </p>

                <motion.div
                    className="flex gap-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-full font-medium transition-all transform hover:scale-105"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
            </div>
        </section>
    );
};

export default Hero;
