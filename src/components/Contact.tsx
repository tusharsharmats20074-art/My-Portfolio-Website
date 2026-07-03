import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Github, Linkedin, Instagram, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { developerInfo } from "../data";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || "service_placeholder";
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || "template_placeholder";
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || "key_placeholder";

    try {
      // If the developer has configured EmailJS env variables
      if (
        serviceId !== "service_placeholder" &&
        templateId !== "template_placeholder" &&
        publicKey !== "key_placeholder"
      ) {
        await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! Thank you for reaching out.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback for instant preview simulation
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setStatusMessage(
          "Success (Demo Mode)! In production, your EmailJS configuration will receive this message. Configure VITE_EMAILJS_SERVICE_ID in .env.example to enable live delivery."
        );
        console.log("Contact submission payload (simulated):", formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please verify your EmailJS credentials or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-slate-400 text-sm sm:text-base mt-4"
          >
            Have a question, project proposal, or collaboration in mind? Drop me a line!
          </motion.p>
        </div>

        {/* Content Split: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info details (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-2xl text-white">
                Contact Information
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                Feel free to contact me via the contact form or directly through social media channels. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              {/* Location card */}
              <div className="flex items-center space-x-4 p-4 glass glow-hover rounded-xl">
                <div className="p-3 bg-blue-500/10 text-cyan-400 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="font-sans font-semibold text-slate-200">{developerInfo.location}</p>
                </div>
              </div>

              {/* Email card */}
              <a
                href={`mailto:${developerInfo.email}`}
                className="flex items-center space-x-4 p-4 glass glow-hover rounded-xl transition-all group"
              >
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Email Address</p>
                  <p className="font-sans font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {developerInfo.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Social media connections */}
            <div className="space-y-4 pt-4">
              <h4 className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest">
                Connect on Socials
              </h4>
              <div className="flex items-center space-x-3">
                <a
                  href={developerInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600/20 hover:text-cyan-400 border border-white/10 hover:border-blue-500/30 rounded-xl text-slate-300 transition-all focus:outline-none"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600/20 hover:text-cyan-400 border border-white/10 hover:border-blue-500/30 rounded-xl text-slate-300 transition-all focus:outline-none"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={developerInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600/20 hover:text-cyan-400 border border-white/10 hover:border-blue-500/30 rounded-xl text-slate-300 transition-all focus:outline-none"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form container (7 cols) */}
          <div className="lg:col-span-7 glass rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <form ref={formRef} onSubmit={handleSend} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="subject" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  placeholder="Collaboration proposal"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  placeholder="Write your message details..."
                />
              </div>

              {/* Feedback messages notifications */}
              <AnimatePresence mode="wait">
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-start space-x-3 p-4 rounded-xl border text-sm text-left ${
                      submitStatus === "success"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <span className="leading-tight">{statusMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-sans font-semibold text-sm transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_15px_rgba(59,130,246,0.2)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4.5 h-4.5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
