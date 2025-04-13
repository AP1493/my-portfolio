"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(formData, "fewewef");
      await emailjs.send(
        "service_jvo77iy",
        "template_soa6qg9",
        {
          title: "hello",
          name: formData.from_name,
          reply_to: formData.reply_to,
          email: formData.reply_to,
          subject: formData.subject,
          message: formData.message,
        },
        "CTTKxolAdRQQ1SLvq" // Replace with your EmailJS Public Key
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 rounded-xl shadow-lg bg-background/50 border border-primary/10 backdrop-blur-sm">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="from_name"
              name="from_name"
              placeholder="Your name"
              required
              disabled={isSubmitting}
              value={formData.from_name}
              onChange={handleChange}
              className="border-primary/20 focus:border-primary/40 bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="reply_to" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="reply_to"
              name="reply_to"
              type="email"
              placeholder="Your email"
              required
              disabled={isSubmitting}
              value={formData.reply_to}
              onChange={handleChange}
              className="border-primary/20 focus:border-primary/40 bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              disabled={isSubmitting}
              value={formData.subject}
              onChange={handleChange}
              className="border-primary/20 focus:border-primary/40 bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              required
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleChange}
              className="border-primary/20 focus:border-primary/40 bg-background/50 min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </form>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Message Sent!
          </h3>
          <p className="text-muted-foreground mb-8">
            Thanks for reaching out. I’ll get back to you soon.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </div>
      )}
    </div>
  );
}
