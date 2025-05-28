
import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { content, loading } = useWebsiteContent();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const emailBody = `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from your portfolio contact form
      `.trim();
      
      const mailtoLink = `mailto:johariraj70@gmail.com?subject=Contact Form: ${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message pre-filled. Please send the email to complete your message.",
      });
      
      // Reset form
      reset();
    } catch (error) {
      console.error("Error opening email client:", error);
      toast({
        title: "Error",
        description: "There was a problem opening your email client. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use content data or fallback to default values
  const contactInfo = {
    email: content?.contact?.email || "johariraj70@gmail.com",
    phone: content?.contact?.phone || "+91 8888176317",
    socialLinks: {
      linkedin: content?.contact?.socialLinks?.linkedin || "https://www.linkedin.com/in/bhaturaj-johari-74b18124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: content?.contact?.socialLinks?.github || "https://github.com/bhaturaj",
      leetcode: content?.contact?.socialLinks?.leetcode || "https://leetcode.com/u/raj_johari_4141/"
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300">
            Feel free to contact me for any work or suggestions. Fill out the form below and it will open your email client with the message pre-filled.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mt-8 mb-4">Connect With Me</h4>
              
              <div className="flex gap-4">
                <a 
                  href={contactInfo.socialLinks.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6 text-white group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </a>
                <a 
                  href={contactInfo.socialLinks.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-gray-500/25"
                >
                  <Github className="w-6 h-6 text-white group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </a>
                <a 
                  href={contactInfo.socialLinks.leetcode}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-orange-500/25"
                >
                  <Code className="w-6 h-6 text-white group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white min-h-[150px]"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Opening Email Client..." : "Send Message"}
              </Button>
              
              <p className="text-xs text-gray-400 text-center mt-2">
                This will open your default email client with the message pre-filled. Simply send the email to complete your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
