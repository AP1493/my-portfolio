"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronRight,
  ChevronLeft,
  Code,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Procurement ERP System",
    description:
      "The project outlines a workflow for managing production and order fulfillment, starting from, inquiry creation to final delivery. It involves checking formulation availability, inventory levels, and initiating production if necessary. The process includes tracking production, recording details, and managing raw materials through vendor interactions. It attempts to reduce the workload of manual data entry in the ERP system.",
    image: "/procurement.png",
    technologies: ["Payload CMS", "Next.js", "Tailwind CSS", "PostgreSQL"],
    github: "",
    live: null,
    status: "Ongoing",
    clientproject: true,
  },

  {
    title: "Restaurant Point of Sale",
    description:
      " Implemented backend using Strapi and integrated PostgreSQL. Developing frontend using Next.js and Shadcn.",
    image: "/restaurant.png",
    technologies: ["Next.js", "Strapi", "PostgreSQL"],
    github: "https://github.com/AP1493/Bandhan-Restaurant",
    live: null,
    status: "Ongoing",
  },
  {
    title: "Buildwise Architectural Project",
    description:
      "I designed and developed a project management system for civil architecture projects, optimizing material resource management. The system automated material calculations based on architectural specifications and featured real-time tracking, automated estimation, and inventory management. By reducing manual calculations and errors, it streamlined planning, enabling data-driven procurement and better cost control.",
    image: "/buildwise.png",
    technologies: ["Strapi", "Next.js", "PostgreSQL"],
    github: "",
    live: null,
    clientproject: true,
  },
  {
    title: "TypeFast AI",
    description:
      "I developed a web application for generating marketing content across six social media platforms. The platform allows users to customize key parameters such as tone, goals, target audience, and content style to align with their marketing strategy. By streamlining content creation, it helps businesses maintain a consistent brand voice while optimizing engagement across different platforms, making social media marketing more efficient and effective.",
    image: "/typefast.png?height=100",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "",
    live: null,
  },
  {
    title: "Appointment Scheduling System",
    description:
      "I developed a full-stack Appointment Scheduling System with features such as user authentication, appointment booking, calendar integration, appointment cancellation, and doctor search. Built using the MERN stack, the system ensures security with JWT authentication, encrypts passwords with bcryptjs, and manages data efficiently using Mongoose.",
    image: "/appointment.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/AP1493/Appointment-Scheduling-System",
    live: null,
  },
  {
    title: "SneakStore",
    description:
      "I developed the user interface using React and TailwindCSS, ensuring a responsive and visually appealing design. On the backend, I utilized Node.js and Express to build a robust and efficient server-side architecture. Additionally, I integrated secure payment processing with Stripe and implemented Google authentication for seamless and secure user login.",
    image: "/sneakstore.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"],
    github: "https://github.com/AP1493/SneakStore",
    live: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const openProjectDetails = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500 border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {project.status && (
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/80 text-primary-foreground"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-primary/5 border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="bg-primary/5 border-primary/20"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.clientproject ? (
                    <div>Client Project</div>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
                      disabled={true}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        // rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    onClick={() => openProjectDetails(project)}
                    className="bg-gradient-to-r from-primary/90 to-purple-500/90 hover:from-primary hover:to-purple-500 transition-all duration-300"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-primary/10">
              <div className="relative overflow-hidden h-48">
                <img
                  src={projects[currentIndex].image || "/placeholder.svg"}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {projects[currentIndex].status && (
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/80 text-primary-foreground"
                    >
                      {projects[currentIndex].status}
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">
                  {projects[currentIndex].title}
                </CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {projects[currentIndex].technologies
                    .slice(0, 3)
                    .map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-primary/5 border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  {projects[currentIndex].technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="bg-primary/5 border-primary/20"
                    >
                      +{projects[currentIndex].technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {projects[currentIndex].description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
                >
                  <a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  onClick={() => openProjectDetails(projects[currentIndex])}
                  className="bg-gradient-to-r from-primary/90 to-purple-500/90 hover:from-primary hover:to-purple-500 transition-all duration-300"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Details
                </Button>
              </CardFooter>
            </Card>

            <div className="flex justify-center mt-6 gap-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevProject}
                  className="rounded-full border-primary/20 hover:border-primary/40 transition-colors duration-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </motion.div>
              <div className="flex gap-1 items-center">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-primary to-purple-500 w-4"
                        : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextProject}
                  className="rounded-full border-primary/20 hover:border-primary/40 transition-colors duration-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.status && (
                    <Badge
                      variant="secondary"
                      className="mt-2 bg-primary/80 text-primary-foreground"
                    >
                      {selectedProject.status}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
                  onClick={closeProjectDetails}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map(({ tech, i }: any) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-primary/5 border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
                  >
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </a>
                  </Button>
                  {selectedProject.live && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300"
                    >
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
