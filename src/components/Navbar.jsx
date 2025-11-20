import { motion } from 'framer-motion';

const Navbar = () => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-dark/50 backdrop-blur-md border-b border-white/10"
        >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Varun.
            </div>
            <div className="flex gap-8">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
