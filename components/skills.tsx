"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Code2, Layout, Server, FileCode, Layers, Cpu } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express.js", "Python", "Java"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "CMS",
    icon: <Layers className="h-6 w-6" />,
    items: ["Strapi CMS", "Payload CMS"],
  },
  {
    category: "UI Frameworks",
    icon: <FileCode className="h-6 w-6" />,
    items: ["TailwindCSS", "Shadcn"],
  },
  {
    category: "Programming",
    icon: <Code2 className="h-6 w-6" />,
    items: ["C", "C++", "Java", "Python", "DSA"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">A comprehensive set of technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-background/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                    className="px-3 py-1 bg-primary/5 hover:bg-primary/10 rounded-full text-sm font-medium transition-colors duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/5 text-primary">
            <Cpu className="h-6 w-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Always Learning</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices
            in web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

