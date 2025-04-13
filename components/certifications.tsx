"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    title: "Autonomous Cars: Deep Learning and Computer Vision in Python",
    provider: "Udemy",
    date: "March 2024",
    link: "https://www.udemy.com/certificate/UC-4f4b30f2-c8bb-4997-bac6-d440caea78d3/",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    provider: "Coursera",
    date: "Sept, 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/UVBDQPUATW78",
  },
  {
    title: "Machine Learning",
    provider: "Teachnook",
    date: "March 2023",
    link: "https://drive.google.com/file/d/1jhLMnb9-EjZ7v8hMFNO9jT_HlsnV9mbW/view?usp=sharing",
  },
  {
    title: "Internet of Things and Machine Learning",
    provider: "Bolt IOT",
    date: "Nov. 2023",
    link: "https://drive.google.com/file/d/1xzY_tv6XT-JAYxpVzY5_8QFQzkAs-7Ix/view?usp=sharing",
  },
  {
    title: "OOPs in Java",
    provider: "Great Learning",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1svdq8OP2qFvBiuDT2xENAVudLrExZbRH/view?usp=sharing",
  },
  {
    title: "Java Programming",
    provider: "Great Learning",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1YGuny5L2Jc8TGBgvzmhcwQJUmDHzac8q/view?usp=sharing",
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="certifications" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
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
            Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">Continuous learning and professional development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
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
              <Card className="h-full flex flex-col bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center justify-between">
                    <span>{cert.provider}</span>
                    <span className="text-xs">{cert.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group border-primary/20 hover:border-primary/40 transition-colors duration-300"
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

