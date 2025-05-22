'use client'

import { useEffect, useState } from 'react'
import './ProjectList.css' // Import your CSS file for styling

interface Project {
  id: number
  title: string
  description: string
  base_url: string
  image: string // Assuming your API provides an image URL
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching projects:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading projects...</p>

  return (
    <section className="project-list-background">
      <div className="container text-center mt-3">
        
        <div className="row g-6">
          {projects.map((project) => (
            <div className="col-md-4 col-sm-6" key={project.id}>
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded project-img"
                />
                <h2 className="mt-3">{project.title}</h2>
                <p>{project.description}</p>
                <a
                  href={project.base_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}