'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen relative bg-[#FFFCE8]">
      {/* Sticky Pulldown Navbar */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative px-6 py-16 md:px-20 lg:px-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-28">
        <div className="z-10 flex-1 space-y-6">
          <div className="relative inline-block">
            <span className="absolute -inset-2 bg-[#FCF49C] -z-10 rounded-sm" />
            <p className="text-xl text-slate-800">Hello folks, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              zaidan<span className="text-blue-500">.</span>
            </h1>
          </div>

          <p className="text-slate-600 text-lg max-w-md">
            Smart enough to know better, curious enough to do it anyways.
          </p>

          <div className="relative inline-block bg-[#FCF49C] p-4 rounded-sm border-l-4 border-yellow-400">
            <h2 className="font-bold text-lg text-slate-900">3 Years Experience</h2>
            <p className="text-slate-700">Interior Designer & 3D Modeler</p>
          </div>
        </div>

        {/* Hero Character Image (Made Larger) */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-[#FCF49C] w-72 h-72 md:w-96 md:h-96 -z-10 rounded-md translate-x-4 -translate-y-4" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-200/50 rounded-md overflow-hidden border border-slate-300">
            <Image
              src="/hero-avatar.png"
              alt="Zaidan Character Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="bg-[#8CA8AB] text-white py-16 px-6 md:px-20 lg:px-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Copy and Skills */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
              about me<span className="text-yellow-300">!</span>
            </h2>

            <div className="space-y-4 text-slate-100 text-sm md:text-base leading-relaxed bg-[#79999D]/80 p-6 rounded-md">
              <div className="flex items-start gap-4">
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 bg-slate-100/20 rounded">
                  <Image
                    src="/side-headshot.png"
                    alt="Avatar Headshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <p>I'm primarily a digital artist with a varying artstyle.</p>
                  <p>
                    I've worked for Stelkblox as an asset builder and I have experience
                    with using software like ROBLOX Studio and SketchUp.
                  </p>
                </div>
              </div>

              <p className="italic text-yellow-200 text-right font-semibold pt-2">
                I'm very interested in interior designing, here's what I've made! ---------&gt;
              </p>
            </div>

            {/* Hard Skills & Soft Skills Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#79999D]/60 p-5 rounded">
                <h3 className="font-bold text-lg mb-3 border-b border-slate-300/40 pb-1">~Hard Skills~</h3>
                <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-100">
                  <li>2D Illustrating</li>
                  <li>ROBLOX Based 3D Modeling</li>
                  <li>Layout Planning</li>
                  <li>Furniture Designing</li>
                </ol>
              </div>

              <div className="bg-[#79999D]/60 p-5 rounded">
                <h3 className="font-bold text-lg mb-3 border-b border-slate-300/40 pb-1">~Soft Skills~</h3>
                <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-100">
                  <li>Trustworthy</li>
                  <li>Creative</li>
                  <li>Positive</li>
                  <li>Confident</li>
                </ol>
              </div>
            </div>
            
            <p className="text-xs text-slate-300">@harzardoustherapy</p>
          </div>

          {/* Right Side: Auto-Scrolling Render Showcase (9 Renders Loop) */}
          <div className="relative h-[480px] overflow-hidden rounded-lg shadow-2xl border-2 border-slate-400/30 bg-[#79999D]/30">
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#8CA8AB] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#8CA8AB] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-4 animate-scroll-vertical p-4">
              {[
                '/render-1.png', '/render-2.png', '/render-3.png',
                '/render-4.png', '/render-5.png', '/render-6.png',
                '/render-7.png', '/render-8.png', '/render-9.png',
                '/render-1.png', '/render-2.png', '/render-3.png',
                '/render-4.png', '/render-5.png', '/render-6.png',
                '/render-7.png', '/render-8.png', '/render-9.png',
              ].map((src, index) => (
                <div key={index} className="relative h-64 w-full flex-shrink-0 rounded-md overflow-hidden shadow-md bg-slate-700/40">
                  <Image
                    src={src}
                    alt={`Interior design showcase render ${(index % 9) + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. ACCOMPLISHMENTS & TESTIMONIALS */}
      <section id="works" className="bg-[#FFFCE8] py-20 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Side Illustration (Made Larger) */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/side-avatar.png"
                alt="Zaidan Character Posing"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Accomplish<br />-ments <span className="text-sm font-normal text-slate-600">along with a few</span> Generous Words
            </h2>

            <blockquote className="relative bg-[#FCF49C] p-8 rounded-lg shadow-sm border-l-8 border-yellow-400">
              <p className="text-lg md:text-xl font-semibold italic text-slate-800 leading-relaxed">
                "Their building style is unlike what we've seen in our community, and their dedication to detail is genuinely inspiring. Can't wait to see more works."
              </p>
              <footer className="mt-4 text-sm font-bold text-slate-700">
                — uu7w - Director Of FBU
              </footer>
            </blockquote>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-end">
                <span className="text-xs text-slate-500 font-mono">a few certificates</span>
                <span className="text-xs text-slate-400 font-mono">&lt;------------------</span>
              </div>

              <a
                href="/pdfs/javascript-cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/80 p-5 rounded-md border-t-2 border-b-2 border-slate-800 shadow-sm hover:bg-yellow-50 hover:border-yellow-600 transition group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition">
                      Completion Of JavaScript Essentials 2
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Cisco Networking Academy - 2026</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-slate-700">PDF ↗</span>
                </div>
              </a>

              <a
                href="/pdfs/ai-for-oceans-cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/80 p-5 rounded-md border-t-2 border-b-2 border-slate-800 shadow-sm hover:bg-yellow-50 hover:border-yellow-600 transition group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition">
                      AI for Oceans
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Code.org - 2025</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-slate-700">PDF ↗</span>
                </div>
              </a>

              <div className="text-right pt-1">
                <p className="text-xs text-slate-400 font-mono">@harzardoustherapy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT & FOOTER SECTION */}
      <section id="contact" className="bg-[#8CA8AB] text-white py-16 px-6 md:px-20 lg:px-32 border-t-4 border-[#79999D]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-slate-100 text-sm md:text-base">
              Have a project in mind or want to collaborate? Send a message below!
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#79999D] p-8 rounded text-center border border-yellow-300">
              <h3 className="text-2xl font-bold text-yellow-200 mb-2">Message Sent!</h3>
              <p className="text-slate-100">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 bg-[#FCF49C] text-slate-900 font-bold rounded hover:bg-yellow-200 transition cursor-pointer"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-[#79999D] p-6 md:p-8 rounded-lg shadow-md">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-white text-slate-900 rounded outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-white text-slate-900 rounded outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-white text-slate-900 rounded outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Tell me about your idea..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#FCF49C] text-slate-900 font-bold rounded hover:bg-yellow-200 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}

          <footer className="pt-8 border-t border-slate-400/40 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-200 gap-4">
            <p>© {new Date().getFullYear()} Zaidan. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://www.roblox.com/users/1566686321/profile" target="_blank" rel="noreferrer" className="hover:text-yellow-200">Roblox</a>
              <a href="https://twitter.com/AprilZondag" target="_blank" rel="noreferrer" className="hover:text-yellow-200">Twitter / X</a>
              <a href="https://github.com/ahmadzaidansirmannur-rgb" target="_blank" rel="noreferrer" className="hover:text-yellow-200">GitHub</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}