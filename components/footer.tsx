"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-background/80"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Alay Patel
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/AP1493"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/alay-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:alaypatel140903@gmail.com"
              className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button variant="ghost" size="sm" asChild>
              <Link href="#hero">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#skills">Skills</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground"
          >
            <p>© {new Date().getFullYear()} Alay Patel. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

