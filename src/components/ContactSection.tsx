
import React from "react";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300">
            Feel free to contact me for any work or suggestions
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
                  <p className="font-medium">raj.johari@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">(+91) Your-Phone-Number</p>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mt-8 mb-4">Social Links</h4>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-gray-800 text-white hover:bg-blue-600"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-gray-800 text-white hover:bg-gray-600"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-gray-800 text-white hover:bg-pink-600"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white"
                  required
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white"
                  required
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white"
                  required
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-gray-800 border-gray-700 focus:border-primary text-white min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
