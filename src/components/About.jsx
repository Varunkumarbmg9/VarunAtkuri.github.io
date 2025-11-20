import { motion } from 'framer-motion';

const skills = {
    "Languages": ["Python", "SQL", "Java", "Scala", "Bash/Shell"],
    "Cloud": ["AWS (S3, Glue, EMR, Kinesis, Redshift)", "Azure", "GCP"],
    "Data Engineering": ["Snowflake", "dbt", "Apache Spark", "Airflow", "Kafka"],
    "Tools": ["Docker", "Kubernetes", "Terraform", "Git", "Tableau"]
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

const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bio & Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white">Professional Summary</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Skilled in Snowflake (Snowpark), dbt, Python, SQL, and AWS. Hands-on experience in developing modular data models, implementing incremental ELT workflows, and supporting analytics and machine learning teams with high-quality, HIPAA-compliant datasets. Strong focus on performance, cost-efficiency, and data governance best practices.
                        </p>

                        <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
                        <div className="space-y-6 mb-8">
                            {education.map((edu, index) => (
                                <div key={index} className="border-l-2 border-primary/30 pl-4">
                                    <h4 className="text-lg font-medium text-white">{edu.school}</h4>
                                    <p className="text-primary">{edu.degree}</p>
                                    <p className="text-sm text-gray-500">{edu.year} • GPA: {edu.gpa}</p>
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
                        <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
                        <div className="space-y-6 mb-8">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-semibold mb-6 text-white">Certifications</h3>
                        <ul className="space-y-2">
                            {certifications.map((cert, index) => (
                                <li key={index} className="flex items-center text-gray-300">
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
