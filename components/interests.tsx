"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Cpu, Eye } from "lucide-react"

const interests = [
  {
    title: "Machine Learning",
    icon: <Brain className="h-8 w-8" />,
    description: "Supervised, Unsupervised, Reinforcement",
  },
  {
    title: "Deep Learning Models",
    icon: <Cpu className="h-8 w-8" />,
    description: "LSTM, GRU, RNN, GAN",
  },
  {
    title: "Computer Vision",
    icon: <Eye className="h-8 w-8" />,
    description: "Image Processing, Object Detection, Edge Detection",
  },
]

export default function Interests() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="interests" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
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
            Areas of Interest
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">Exploring the cutting edge of technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary mb-6">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
              <p className="text-muted-foreground">{interest.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold mb-4">
            Vice Chairperson of IEEE Student Branch Nirma University (IEEE SBNU)
          </h3>
          <p className="text-muted-foreground mb-2">Jan 2024 - Dec 2024</p>
          <p className="text-muted-foreground">
            I actively organize technical events, expert sessions, and research weeks, ensuring smooth execution through
            planning and coordination. I guide team members in the planning phase, assigning tasks and fostering
            collaboration. My leadership helps create impactful events, promoting knowledge sharing, industry
            engagement, and professional growth for participants and the team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

