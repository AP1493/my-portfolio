"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Full Stack Development Intern",
    company: "The Special Character",
    period: "Jan 2025 - Present",
    location: "Ahmedabad",
    website: "https://thespecialcharacter.graphy.com/",
    description:
      "Currently, I am working as full stack developer intern in this company. I am leading the team for our current project procurement ERP system which aims to reduce the manual data entry and inventory management load in manufacturiung sector.",
  },
  {
    title: "Backend Development Intern",
    company: "The Special Character",
    period: "June 2024 - July 2024",
    location: "Ahmedabad",
    website: "https://thespecialcharacter.graphy.com/",
    description:
      "I worked as a Backend Developer Intern at The Special Character, where I built APIs and implemented user authentication. I also managed role-based access control, assigning appropriate roles to users based on authentication. Additionally, I organized regular demo sessions with clients to showcase progress and gather feedback.",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/80 to-background"></div>
        <div className="absolute top-1/4 -right-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">My professional journey in the tech industry</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 h-8 w-8 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="bg-background/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-3">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group border-primary/20 hover:border-primary/40 transition-colors duration-300"
                    >
                      <a href={exp.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

