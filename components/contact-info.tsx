"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "Al Nahda, Dubai\nUnited Arab Emirates",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+971 4 XXX XXXX",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@mec-uae.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Sunday - Thursday\n9:00 AM - 6:00 PM",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

      <div className="space-y-6 mb-10">
        {contactDetails.map((detail) => (
          <div key={detail.title} className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <detail.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{detail.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.580986556!2d55.3758898!3d25.2854889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f6c8e7c7c7c%3A0x1c1c1c1c1c1c1c1c!2sAl%20Nahda%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MEC Office Location"
        />
      </div>
    </motion.div>
  )
}
