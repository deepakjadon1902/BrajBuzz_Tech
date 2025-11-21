import { Link } from "react-router-dom";

export default function Motivation() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-24 pb-16">
      <div className="container mx-auto px-6 sm:px-10 max-w-4xl">

        {/* HEADER */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Our Motivation & Inspiration
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Every great project begins with a purpose. This platform was created not just as a
          product — but as a vision to empower people, simplify technology, and make meaningful impact.
        </p>

        {/* MAIN CONTENT */}
        <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl shadow-lg p-8 space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Why We Started
            </h2>
            <p>
              We saw a growing need for innovation, quality, and user-focused digital solutions.
              Rather than just creating another platform, we wanted to build something meaningful —
              something that solves real problems and helps people grow personally and professionally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              What Inspires Us
            </h2>
            <p>
              Our inspiration comes from dreamers, creators, and individuals who believe in consistent
              improvement. We are inspired by innovation, creativity, and the idea that learning should
              be available, accessible, and enjoyable for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              What Keeps Us Going
            </h2>
            <p>
              Challenges, feedback, and progress motivate us. Every new feature, every user we help,
              and every positive experience reinforces our belief that this journey is worth it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Vision Ahead
            </h2>
            <p>
              We believe the future belongs to those who dare to build it. With dedication,
              innovation, and a mindset to grow, we aim to create something that continues to inspire
              and help people — today and in the years ahead.
            </p>
          </section>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block bg-[#002366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003399] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
