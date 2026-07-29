"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section bg-[#0a0a0a] relative">
      <div className="section-inner grid lg:grid-cols-2 gap-16">
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3">
            START YOUR
            <br />
            <span className="text-grad">TRANSFORMATION</span>
          </h2>
          <p className="font-inter text-white/50 mt-6 max-w-md">
            Book a free consultation with our coaching team. We&apos;ll reply within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange("name")}
                className="field rounded-xl px-4 py-3.5 font-inter"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange("email")}
                className="field rounded-xl px-4 py-3.5 font-inter"
              />
            </div>
            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange("phone")}
              className="field w-full rounded-xl px-4 py-3.5 font-inter"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your goals..."
              value={form.message}
              onChange={handleChange("message")}
              className="field w-full rounded-xl px-4 py-3.5 font-inter"
            />
            <MagneticButton type="submit" className="px-9 py-4 rounded-full text-sm uppercase tracking-widest">
              Send Message
            </MagneticButton>
            {submitted && (
              <div className="font-inter text-sm text-[#00e5ff] mt-2">
                ✓ Message sent — our team will reach out shortly.
              </div>
            )}
          </form>
        </Reveal>

        <Reveal className="space-y-6">
          <div className="rounded-2xl overflow-hidden grad-border h-64">
            <iframe
              className="w-full h-full grayscale invert-[.9] contrast-125"
              loading="lazy"
              src="https://www.google.com/maps?q=Islamabad,Pakistan&output=embed"
              title="Afaq Fitness location"
            />
          </div>

          <div className="glass rounded-2xl p-6 grid sm:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#ff2d55] shrink-0 mt-1" />
              <div>
                <div className="text-sm font-semibold">Location</div>
                <div className="font-inter text-white/50 text-sm">Blue Area, Islamabad, Pakistan</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-[#00e5ff] shrink-0 mt-1" />
              <div>
                <div className="text-sm font-semibold">Hours</div>
                <div className="font-inter text-white/50 text-sm">
                  Mon–Sat: 6AM – 11PM
                  <br />
                  Sun: 8AM – 8PM
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-[#ff2d55] shrink-0 mt-1" />
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <div className="font-inter text-white/50 text-sm">+92 300 1234567</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-[#00e5ff] shrink-0 mt-1" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="font-inter text-white/50 text-sm">hello@afaqfitness.com</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="glass w-11 h-11 rounded-full flex items-center justify-center hover:text-[#ff2d55]">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="glass w-11 h-11 rounded-full flex items-center justify-center hover:text-[#00e5ff]">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="glass w-11 h-11 rounded-full flex items-center justify-center hover:text-[#ff2d55]">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="glass w-11 h-11 rounded-full flex items-center justify-center hover:text-[#00e5ff]">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
