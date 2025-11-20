import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaPython, FaJava, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { SiSnowflake, SiApachespark, SiApacheairflow, SiTerraform, SiKubernetes, SiTableau, SiDbt, SiScala, SiMysql, SiGooglecloud } from 'react-icons/si';

const skills = {
    "Languages": [
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Scala", icon: <SiScala /> }
    ],
    "Cloud & DevOps": [
        { name: "AWS", icon: <FaAws /> },
        { name: "Azure", icon: <VscAzure /> },
        { name: "GCP", icon: <SiGooglecloud /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "K8s", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> }
    ],
    "Data Engineering": [
        { name: "Snowflake", icon: <SiSnowflake /> },
        { name: "dbt", icon: <SiDbt /> },
        { name: "Spark", icon: <SiApachespark /> },
        { name: "Airflow", icon: <SiApacheairflow /> },
        { name: "Tableau", icon: <SiTableau /> }
    ]
};

const education = [
    {
        school: "University of North Texas",
        degree: "M.S. Data Science",
        year: "2023 – 2025",
        gpa: "3.9"
    },
    {
        school: "Kalasalingam University",
        degree: "B.S. Mechanical Engineering",
        year: "2017 – 2021",
        gpa: "3.3"
    }
];

const certifications = [
    "AWS Certified Data Engineer – Associate",
    "AWS Certified Machine Learning Engineer – Associate",
    "AWS Certified Cloud Practitioner",
    "Fundamentals of the Databricks Generative AI"
];

const MagneticWrapper = ({ children }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const xVal = clientX - (left + width / 2);
        const yVal = clientY - (top + height / 2);
        x.set(xVal * 0.5); // Strength of magnetic pull
        y.set(yVal * 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseXSpring, y: mouseYSpring }}
        >
            {children}
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-dark/50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Bio & Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-8 bg-primary rounded-full" /> Professional Summary
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 bg-white/5 p-6 rounded-xl border border-white/5">
                            Skilled in Snowflake (Snowpark), dbt, Python, SQL, and AWS. Hands-on experience in developing modular data models, implementing incremental ELT workflows, and supporting analytics and machine learning teams with high-quality, HIPAA-compliant datasets. Strong focus on performance, cost-efficiency, and data governance best practices.
                        </p>

                        <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-8 bg-primary rounded-full" /> Education
                        </h3>
                        <div className="space-y-6 mb-8">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-6 border-l border-white/10 hover:border-primary transition-colors">
                                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-dark border-2 border-primary rounded-full" />
                                    <h4 className="text-lg font-medium text-white">{edu.school}</h4>
                                    <p className="text-primary font-medium">{edu.degree}</p>
                                    <p className="text-sm text-gray-500 mt-1">{edu.year} • GPA: {edu.gpa}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills & Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-8 bg-primary rounded-full" /> Technical Skills
                        </h3>
                        <div className="space-y-8 mb-12">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">{category}</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {items.map(skill => (
                                            <MagneticWrapper key={skill.name}>
                                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all group cursor-default">
                                                    <span className="text-lg text-primary group-hover:scale-110 transition-transform">{skill.icon}</span>
                                                    {skill.name}
                                                </div>
                                            </MagneticWrapper>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-8 bg-primary rounded-full" /> Certifications
                        </h3>
                        <ul className="grid gap-3">
                            {certifications.map((cert, index) => (
                                <li key={index} className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
