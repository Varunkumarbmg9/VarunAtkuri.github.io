import { motion } from 'framer-motion';

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
        <section id="projects" className="py-20 px-4 bg-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    Professional <span className="text-primary">Experience</span>
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-primary text-lg">{exp.company}</p>
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                    <p className="text-gray-400">{exp.period}</p>
                                    <p className="text-sm text-gray-500">{exp.location}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 italic">{exp.description}</p>

                            <ul className="list-disc list-outside ml-5 space-y-2 mb-8 text-gray-400">
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map(tech => (
                                    <span key={tech} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
