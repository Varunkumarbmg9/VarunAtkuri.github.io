import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
    {
        company: "McKesson",
        role: "Data Engineer",
        location: "Atlanta, GA",
        period: "Aug 2024 – Present",
        description: "Project: Enterprise Healthcare Data Lake and Analytics Platform (AWS Cloud)",
        achievements: [
            "Built layered dbt models in Snowflake, improving query modularity and reuse across analytics and ML pipelines.",
            "Produced ML-ready training and validation datasets for clinical, claims, and research models.",
            "Implemented incremental dbt pipelines for large fact tables, reducing recomputation by 18%.",
            "Built ingestion pipelines using Snowpipe for continuous loading from S3 to Snowflake (CSV/HL7/XML).",
            "Automated ML feature exports from Snowflake to S3 for SageMaker batch and real-time training workflows."
        ],
        tech: ["Snowflake", "dbt", "Python", "AWS", "Airflow"]
    },
    {
        company: "Nisum Technologies",
        role: "Data Engineer",
        location: "Hyderabad, India",
        period: "Nov 2021 – Aug 2023",
        description: "Project: Healthcare Batch & Streaming ETL on AWS",
        achievements: [
            "Developed scalable batch and streaming pipelines for 15+ healthcare data sources.",
            "Wrote PySpark transformations in AWS EMR to standardize healthcare schemas, processing 50GB+ daily.",
            "Optimized ingestion performance by tuning Kinesis Firehose, reducing small-file issues by 35%.",
            "Implemented Data Quality checks using AWS Glue Data Quality, reducing data defects by 20%."
        ],
        tech: ["AWS EMR", "PySpark", "Kinesis", "Glue", "Redshift"]
    },
    {
        company: "Excers.com",
        role: "Data Engineer",
        location: "Hyderabad, India",
        period: "Mar 2020 – Oct 2021",
        description: "Project: Retail Hadoop to AWS Redshift Migration",
        achievements: [
            "Executed data migration scripts to move 1.5 TB/day of historical data from legacy Hive tables to Redshift.",
            "Developed Spark jobs to convert raw CSV files into partitioned Parquet formats in S3.",
            "Implemented incremental load logic using staging tables, reducing ETL window by 22%."
        ],
        tech: ["Spark", "Hive", "Redshift", "Airflow", "Python"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    Professional <span className="text-primary">Experience</span>
                </motion.h2>

                <div className="relative space-y-12">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-8 border-4 border-dark z-10 hidden md:block" />

                            {/* Content Card */}
                            <div className="flex-1">
                                <Tilt
                                    glareEnable={true}
                                    glareMaxOpacity={0.3}
                                    glareColor="#38bdf8"
                                    glarePosition="all"
                                    scale={1.02}
                                    tiltMaxAngleX={5}
                                    tiltMaxAngleY={5}
                                    className="h-full"
                                >
                                    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group h-full ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'items-start' : 'md:items-end'
                                            }`}>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-primary text-lg font-medium">
                                                <FaBriefcase className="text-sm" />
                                                {exp.company}
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                                <span className="flex items-center gap-1"><FaCalendarAlt /> {exp.period}</span>
                                                <span className="flex items-center gap-1"><FaMapMarkerAlt /> {exp.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 mb-6 italic border-l-2 border-primary/30 pl-4">{exp.description}</p>

                                        <ul className={`list-disc list-inside space-y-2 mb-6 text-gray-400 text-sm leading-relaxed ${index % 2 === 0 ? 'text-left' : 'md:text-right'
                                            }`}>
                                            {exp.achievements.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'
                                            }`}>
                                            {exp.tech.map(tech => (
                                                <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Tilt>
                            </div>

                            {/* Empty space for timeline alignment */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
