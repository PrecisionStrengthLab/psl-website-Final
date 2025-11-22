import React, { useState } from "react";
import { motion } from "framer-motion";

// Simple reusable Button
function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-block rounded-2xl px-6 py-3 font-medium transition " + className
      }
    >
      {children}
    </button>
  );
}

// Simple Card + CardContent components
function Card({ children, className = "" }) {
  return (
    <div className={"bg-white border border-gray-100 rounded-2xl " + className}>
      {children}
    </div>
  );
}
function CardContent({ children, className = "" }) {
  return <div className={"p-6 " + className}>{children}</div>;
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
            <nav className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold tracking-tight text-blue-700">
              PSL
            </span>
            <span className="text-sm uppercase tracking-wide text-gray-500">
              Precision Strength Lab
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-6 text-sm md:text-lg text-gray-700">
            {[
              ["home", "Home"],
              ["about", "About"],
              ["services", "Services"],
              ["testimonials", "Testimonials"],
              ["contact", "Contact"],
              ["blog", "Blog"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={
                  "hover:text-blue-600 transition " +
                  (page === key ? "text-blue-600 font-semibold" : "")
                }
              >
                {label}
              </button>
            ))}
          </div>

          {/* Book Now button */}
          <a
            href="https://calendly.com/precisionstrengthlab/assessment"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-blue-600 text-white text-sm md:text-base hover:bg-blue-700">
              Book Now
            </Button>
          </a>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6 max-w-5xl mx-auto text-gray-800">
        {page === "home" && <Home setPage={setPage} />}
        {page === "about" && <About />}
        {page === "services" && <Services />}
        {page === "testimonials" && <Testimonials />}
        {page === "contact" && <Contact />}
        {page === "blog" && <Blog />}
      </main>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="text-center py-20 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700">
          Precision Training. Evidence-Based Performance.
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Scientific, data-backed strength programming for athletes and
          general-pop clients who want measurable progress in strength,
          performance, and confidence.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => setPage("contact")}
            className="text-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Book Your Assessment
          </Button>
          <Button
            onClick={() => setPage("services")}
            className="text-lg border border-gray-200 hover:border-blue-400"
          >
            View Services
          </Button>
        </div>
      </section>
    </motion.div>
  );
}

function About() {
  return (
    <div className="space-y-4 py-8">
      <h2 className="text-3xl font-bold">About PSL</h2>
      <p>
        Precision Strength Lab applies CSCS-level methodology, biomechanics, and
        data-driven programming to create individualized training solutions.
        Every program is built around structured progressions, evidence-based
        exercise selection, and performance tracking to ensure consistent,
        measurable improvement.
      </p>
      <p>
        Lucy works with competitive athletes and motivated general-population
        clients, focusing on strength, power, movement quality, and long-term
        health. The goal is simple: train with purpose, track the data, and
        build the strongest version of you.
      </p>
    </div>
  );
}

function Services() {
  const items = [
    {
      title: "Athlete Performance Programming",
      text: "Data-driven, periodized training focused on strength, power, speed, and durability for sport.",
    },
    {
      title: "General Population Strength Coaching",
      text: "Science-based training to improve strength, posture, mobility, and long-term health.",
    },
    {
      title: "Online Coaching & Program Design",
      text: "Remote training with progress tracking, technique feedback, and structured planning.",
    },
    {
      title: "Nutritional Guidance",
      text: "Evidence-based nutrition strategies to support training, recovery, and body composition goals.",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6">Coaching Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((s) => (
          <Card key={s.title} className="rounded-2xl shadow-md">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-700">{s.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="py-8 space-y-4">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p className="text-sm text-gray-600">
        “Client testimonials will go here. Example: ‘I’ve never felt this strong
        or confident in the gym. Lucy’s programming is clear, structured, and
        actually explains the why behind every block.’”
      </p>
      <p className="text-sm text-gray-600">
        “Another example: ‘As a field sport athlete, PSL helped me build
        strength and power without feeling beat up all the time.’”
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="py-8 space-y-4">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p>
        Ready to get started or have questions about coaching? Reach out below
        or request an initial assessment.
      </p>
      <div className="space-y-2">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          lucy@precisionstrengthlab.com (example)
        </p>
        <p className="text-sm text-gray-700">
          You can also add a scheduling link here (Calendly, Google Calendar,
          etc.).
        </p>
      </div>
      <Button className="bg-blue-600 text-white hover:bg-blue-700">
        Request an Assessment
      </Button>
    </div>
  );
}

function Blog() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <p className="text-sm text-gray-700">
        Future space for articles on strength training, programming, nutrition,
        and performance.
      </p>
    </div>
  );
}
