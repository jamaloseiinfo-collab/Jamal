import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>FixFind | Find trusted local fixers — fast.</title>
        <meta name="description" content="Premium marketplace for local fixers — with face verification." />
      </Head>

      {/* Hero Section */}
      <section
        className="hero-bg text-white py-40 px-6 text-center"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url('/hero.jpg') center/cover no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm mb-2">🟢 Face verification enabled</p>
          <h1 className="text-5xl font-bold mb-4">
            Find trusted local fixers — <span className="text-green-400">fast.</span>
          </h1>
          <p className="text-lg mb-8">
            Plumbers, electricians, cleaners, mechanics & more across Johannesburg & Pretoria.
            Verified pros. Safer payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="text"
              placeholder="Search e.g. plumber, electrician..."
              className="px-4 py-3 rounded-md w-64 text-gray-800"
            />
            <button className="bg-green-500 px-6 py-3 rounded-md text-white font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Browse by category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: '🧰', name: 'Home & Maintenance' },
            { icon: '🧹', name: 'Cleaning & Lifestyle' },
            { icon: '💻', name: 'Tech & Digital' },
            { icon: '🚗', name: 'Automotive' },
            { icon: '👨‍👩‍👧‍👦', name: 'Personal & Family Care' },
            { icon: '🏢', name: 'Business & Property' },
          ].map((cat) => (
            <Link
              key={cat.name}
              href="#"
              className="border rounded-2xl px-6 py-4 hover:bg-gray-100 transition"
            >
              <span className="text-2xl mr-2">{cat.icon}</span>
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 FixFind (Pty) Ltd
      </footer>
    </>
  );
}
