'use client';

import { useEffect, useState } from 'react';
import './EducationList.css';

interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  certificate_image?: string; // For certificate images
  pdf_file?: string; // For certificate PDFs
}

interface Experience {
  id: number;
  company: string;
  position: string;
  start_date: string;
  end_date?: string;
  description?: string;
}

interface Skill {
  id: number;
  name: string;
  proficiency: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
}

export default function EducationList() {
  const [education, setEducation] = useState<Education[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [contact, setContact] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eduResponse, certResponse, expResponse, skillResponse, contactResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/education/`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/certificates/`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/experience/`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills/`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts/`),
        ]);

        const eduData = await eduResponse.json();
        const certData = await certResponse.json();
        const expData = await expResponse.json();
        const skillData = await skillResponse.json();
        const contactData = await contactResponse.json();

        setEducation(eduData);
        setCertificates(certData);
        setExperience(expData);
        setSkills(skillData);
        setContact(contactData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="education" className="education-list-background">
      <div className="container">
        <h2 className="text-center mb-4">Education</h2>
        <div className="row">
          {education.map((edu) => (
            <div className="col-md- mb-4" key={edu.id}>
              <div className="education-card">
                <h3>{edu.degree}</h3>
                <p>
                  <strong>{edu.institution}</strong>
                </p>
                <p>{edu.year}</p>
                {edu.description && <p>{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center mt-5 mb-4">Certificates</h2>
      <div className="row">
  {certificates.map((cert) => (
    <div className="col-md-6 mb-4" key={cert.id}>
      <div className="certificate-card">
        {/* Display certificate image if available */}
        {cert.certificate_image && (
          <img
            src={cert.certificate_image} // Use the full URL directly
            alt={cert.title}
            className="img-fluid"
          />
        )}
        <h3>{cert.title}</h3>
        <p>
          <strong>{cert.issuer}</strong>
        </p>
        <p>{cert.year}</p>

        {/* Display link to PDF if available */}
        {cert.pdf_file && (
          <a
            href={cert.pdf_file} // Use the full URL directly
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2"
          >
            View Certificate PDF
          </a>
        )}
      </div>
    </div>
  ))}
</div>

        <h2 className="text-center mt-5 mb-4">Experience</h2>
        <div className="row">
          {experience.map((exp) => (
            <div className="col-md-6 mb-4" key={exp.id}>
              <div className="experience-card">
                <h3>{exp.position}</h3>
                <p>
                  <strong>{exp.company}</strong>
                </p>
                <p>
                  {exp.start_date} - {exp.end_date || 'Present'}
                </p>
                {exp.description && <p>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center mt-5 mb-4">Skills</h2>
        <div className="row">
          {skills.map((skill) => (
            <div className="col-md-4 mb-4" key={skill.id}>
              <div className="skill-card">
                <h3>{skill.name}</h3>
                <p>Proficiency: {skill.proficiency}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center mt-5 mb-4">Contact</h2>
        <div className="row">
          {contact.map((con) => (
            <div className="col-md-6 mb-4" key={con.id}>
              <div className="contact-card">
                <h3>{con.name}</h3>
                <p>Email: {con.email}</p>
                <p>Message: {con.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}