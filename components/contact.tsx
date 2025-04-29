"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_jvo77iy",
        "template_soa6qg9",
        {
          title: "hello",
          name: formData.name,
          reply_to: formData.email,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "CTTKxolAdRQQ1SLvq" // Replace with your EmailJS Public Key
      );
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-professional-600 to-professional-500">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-professional-600 to-professional-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="bg-white backdrop-blur-sm rounded-xl shadow-lg p-8 border border-professional-100 hover:border-professional-300 transition-all duration-300 h-fit"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Contact Information
            </h3>
            {/* Contact Info Section stays the same */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gradient-to-br from-professional-100 to-professional-200 text-professional-600 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:alaypatel140903@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alaypatel140903@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gradient-to-br from-professional-100 to-professional-200 text-professional-600 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+919558002881"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9558002881
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gradient-to-br from-professional-100 to-professional-200 text-professional-600 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/AP1493"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-professional-100 to-professional-200 text-professional-600 hover:from-professional-200 hover:to-professional-300 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/alay-patel-692607224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-professional-100 to-professional-200 text-professional-600 hover:from-professional-200 hover:to-professional-300 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-white backdrop-blur-sm rounded-xl shadow-lg p-8 border border-professional-100 hover:border-professional-300 transition-all duration-300"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={handleChange}
                        className="border-professional-200 focus:border-professional-400 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        className="border-professional-200 focus:border-professional-400 bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      required
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-professional-200 focus:border-professional-400 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-professional-200 focus:border-professional-400 bg-white min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-professional-600 to-professional-500 hover:from-professional-700 hover:to-professional-600 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="p-6 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary mb-6">
                  <Mail className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
                >
                  Send Another Message
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
