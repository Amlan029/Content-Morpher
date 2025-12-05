"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import ICON from "@/app/icon.png";
import Link from "next/link";



export default function Page() {
  // carousel
  const slides = [
    {
      id: "blog",
      title: "Blog Content",
      desc: "Generate long-form blog posts with SEO structure.",
      bg: "https://images.pexels.com/photos/8357683/pexels-photo-8357683.jpeg",
    },
    {
      id: "youtube",
      title: "YouTube Description",
      desc: "Optimized descriptions, chapters, and watch-time hooks.",
      bg: "https://images.pexels.com/photos/17485847/pexels-photo-17485847.png",
    },
    {
      id: "instagram",
      title: "Instagram Post",
      desc: "Captions, emojis and hashtag suggestions.",
      bg: "https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg",
    },
    {
      id: "rewrite",
      title: "Write / Explain Code",
      desc: "AI model to generate programming code in any language.",
      bg: "https://images.pexels.com/photos/34803983/pexels-photo-34803983.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);
  const delay = 4500;

  useEffect(() => {
    if (playing) {
      timerRef.current = window.setInterval(
        () => setIndex((i) => (i + 1) % slides.length),
        delay
      );
    }
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [playing]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setPlaying(false);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
    setPlaying(false);
  }
  function goTo(i: number) {
    setIndex(i);
    setPlaying(false);
  }

  // mobile menu state
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  // close on outside click (mobile)
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!mobileOpen) return;
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [mobileOpen]);

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen dark:bg-zinc-950 dark:text-white transition duration-300">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50">
        <div className="bg-transparent/30 backdrop-blur-sm border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-3 flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-3">
              {" "}
              <div className="w-15 h-10 flex items-center justify-center">
                <Image src={ICON} alt="ICON" />
              </div>{" "}
              <span className="font-semibold text-base text-zinc-100">
                Content Morpher
              </span>{" "}
            </div>

            {/* desktop links */}
            <nav className="hidden md:flex items-center gap-5 text-zinc-200">
              <a href="#carousel" className="text-sm hover:text-indigo-400">
                Features
              </a>
              <a href="/sign-up" className="text-sm hover:text-indigo-400">
                How it works
              </a>
              <a href="#pricing" className="text-sm hover:text-indigo-400">
                Pricing
              </a>
              <a href="#services" className="text-sm hover:text-indigo-400">
                What We Offer
              </a>
              <a href="/sign-up">
                <Button className="ml-2">Get Started</Button>
              </a>
            </nav>

            {/* mobile toggler */}
            <div className="md:hidden flex items-center">
              <button
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((s) => !s)}
                className="p-2 rounded-md bg-zinc-900/80 border border-zinc-700 text-zinc-100 hover:bg-zinc-800/90"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu: absolutely positioned so it doesn't affect layout */}
        <div
          ref={mobileRef}
          className={`absolute left-0 right-0 top-full z-40 transform-gpu origin-top transition-all duration-200 ${
            mobileOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          {/* slim mobile items */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-b-md shadow-sm overflow-hidden">
              <div className="px-3 py-3 space-y-1">
                
                <a
                  href="#carousel"
                  className="block px-3 py-2 rounded-md text-zinc-100 text-sm hover:bg-zinc-800"
                >
                  Features
                </a>
                <a
                  href="/sign-up"
                  className="block px-3 py-2 rounded-md text-zinc-100 text-sm hover:bg-zinc-800"
                >
                  How it works
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 rounded-md text-zinc-100 text-sm hover:bg-zinc-800"
                >
                  Pricing
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 rounded-md text-zinc-100 text-sm hover:bg-zinc-800"
                >
                  What We Offer
                </a>

                <div className="pt-1 pb-2">
                  <Link href={"/sign-up"}><Button className="w-full py-2">Get Started</Button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      
      <section className="relative bg-gradient-to-br from-indigo-900 via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT SECTION */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build copy, descriptions &{" "}
              <span className="block">full-length content — instantly.</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-200 max-w-xl">
              "Add your key points AI expands them into complete,
              ready-to-publish content.”
              <br /> 
              Blogs • Scripts • Reels • Descriptions
              • SEO templates  all generated instantly.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/sign-up">
                <Button size="lg" className="text-base">
                  Start free trial
                </Button>
              </a>
              <Link
                href="/sign-up"
                className="px-5 py-3 rounded-lg border border-indigo-400/60 text-sm md:text-base text-white/90 hover:bg-indigo-500/10 hover:border-indigo-400 transition"
              >
                See how it works
              </Link>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base text-zinc-200 max-w-xl">
              <li>• 30+ AI template tools</li>
              <li>• Rich text output + formatting</li>
              <li>• SEO-optimized content</li>
              <li>• Fast API + dashboard usage stats</li>
            </ul>
          </div>

          {/* RIGHT GIF PREVIEW */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/40 via-purple-500/20 to-fuchsia-500/40 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-indigo-500/40 bg-zinc-900/70 shadow-[0_0_60px_-15px_rgba(129,140,248,0.9)]">
              <img
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDIzeG55d3JsOWZ0YzVxajMxc2FoaGN6MzgzbXd2amhjNWoyZnM2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif"
                className="w-full h-[320px] md:h-[360px] object-cover"
                alt="AI content demo"
              />

              <div className="absolute left-5 bottom-5 bg-zinc-900/90 backdrop-blur-md px-5 py-3 rounded-xl border border-white/15 flex flex-col gap-1">
                <span className="text-xs text-amber-300 font-medium">
                  ⚡ Live AI Content Generation
                </span>
                <span className="text-sm text-zinc-100">
                  Watch content being created in seconds.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section id="carousel" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-zinc-100">
          Popular templates
        </h2>
        <p className="mt-2 text-zinc-400">
          Auto rotating template previews with image backgrounds.
        </p>

        <div className="relative mt-6 rounded-xl overflow-hidden h-64 sm:h-80 md:h-96">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{
                backgroundImage: `url(${s.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full p-6 flex items-center gap-6">
                <div className="w-20 h-20 rounded-lg bg-zinc-900/80 border border-zinc-700 text-indigo-300 flex items-center justify-center font-bold text-3xl">
                  {s.title[0]}
                </div>
                <Card className="bg-zinc-900/80 border border-zinc-800 p-4 max-w-xl">
                  <div className="text-lg font-semibold text-zinc-100">
                    {s.title}
                  </div>
                  <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
                  <div className="mt-3 flex gap-2">
                    <a href="/sign-in">
                      <Button size="sm">Try demo</Button>
                    </a>
                    <a
                      className="inline-flex items-center px-3 py-2 rounded-md border border-zinc-700 text-sm hover:bg-zinc-900"
                      href="/sign-up"
                    >
                      Sign up
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          ))}

          {/* controls */}
          <button
            onClick={prev}
            aria-label="previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-md bg-zinc-900/80 border border-zinc-700 hover:bg-zinc-800"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="next"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-md bg-zinc-900/80 border border-zinc-700 hover:bg-zinc-800"
          >
            ›
          </button>

          {/* dots + pause */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-3">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-indigo-400" : "bg-zinc-600"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setPlaying((p) => !p)}
              className="ml-3 text-sm px-3 py-1 rounded-md border border-zinc-700 bg-zinc-900/80"
            >
              {playing ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES: 4 boxes */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-zinc-100">What we offer</h3>
        <p className="mt-2 text-zinc-400 max-w-2xl">
          Four pillars that make Content Morpher reliable and fast for creators
          and teams.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <article className="hover:duration-300 hover:shadow-indigo-500 hover:shadow-lg hover:scale-108 bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-md bg-indigo-700 flex items-center justify-center">
              {/* 24/7 icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>
            </div>
            <div className="text-lg font-semibold text-zinc-100">
              24/7 Support
            </div>
            <div className="text-sm text-zinc-400">
              Always available help for integration, troubleshooting, and
              onboarding.
            </div>
          </article>

          <article className="hover:scale-105 hover:duration-300 hover:shadow-indigo-500 hover:shadow-lg bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-md bg-emerald-600 flex items-center justify-center">
              {/* lock icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect width="18" height="12" x="3" y="11" rx="2" />
                <path
                  d="M7 11V7a5 5 0 0110 0v4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="text-lg font-semibold text-zinc-100">
              Secure & Private
            </div>
            <div className="text-sm text-zinc-400">
              Data encryption and secure API calls — your content stays private.
            </div>
          </article>

          <article className="hover:duration-300 hover:shadow-indigo-500 hover:shadow-lg hover:scale-108 bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-md bg-sky-600 flex items-center justify-center">
              {/* lightning / fast icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-lg font-semibold text-zinc-100">Fast API</div>
            <div className="text-sm text-zinc-400">
              Low-latency endpoints and webhook callbacks for immediate results.
            </div>
          </article>

          <article className="hover:duration-300 hover:shadow-indigo-500 hover:shadow-lg hover:scale-108 bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-md bg-violet-600 flex items-center justify-center">
              {/* template icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path
                  d="M8 9h8M8 13h8M8 17h5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="text-lg font-semibold text-zinc-100">
              Custom Templates
            </div>
            <div className="text-sm text-zinc-400">
              Create and save templates with tone, structure and domain-specific
              prompts.
            </div>
          </article>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold text-zinc-100">Pricing</h3>
        <p className="text-zinc-300 mt-2">
          Pick a plan, Get credits, and Generate content instantly.
        </p>
        <div className="flex flex-col justify-center items-center mt-15">
          <div>
            <h2 className="text-3xl mb-4 font-semibold text-zinc-100">
              Our Plans
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-5 text-center ">
            <div className="w-90 h-55 p-3 border bg-zinc-900/80 rounded-lg shadow-lg hover:shadow-indigo-500 hover:scale-108 hover:duration-300">
              <h2 className="text-3xl font-extrabold">Free</h2>
              <p className="text-2xl">₹0 /month</p>
              <ul className="list-none mt-3 space-y-1 text-sm text-zinc-400">
                <li>10,000 Words/month</li>
                <li>Unlimited Copy</li>
                <li>30+ Templates</li>
              </ul>
              {/* <Button className="p-5 mt-2" variant={"ghost"}>
            Currently Active
          </Button> */}
            </div>

            <div className="w-90 h-55 p-3 border bg-zinc-900/80 rounded-lg shadow-lg hover:shadow-indigo-500 hover:scale-108 hover:duration-300">
              <h2 className="text-3xl font-extrabold">Content Morpher Go</h2>
              <p className="text-2xl">₹399 /month</p>
              <ul className="list-none mt-3 space-y-1 text-sm text-zinc-400">
                <li>1,00,000 Words/month</li>
                <li>Unlimited Generation & Copy</li>
                <li>30+ Templates</li>
              </ul>
              {/* <Button onClick={createSubscription} className="p-4 mt-2" variant={"outline"}>
            Upgrade
          </Button> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
