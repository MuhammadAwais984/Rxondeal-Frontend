"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar({ pages = [] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled || open
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <img
              src="/WhatsApp Image 2026-03-09 at 11.36.46 PM.jpeg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
          >
            {pages.map((page) => {
              const hasDropdown =
                page.hasDropdown && page.dropdownItems?.length > 0;
              const isActive =
                pathname === `/${page.slug}` ||
                page.dropdownItems?.some((d) => pathname === `/${d.slug}`);

              if (hasDropdown) {
                const isOpen = activeDropdown === page.id;
                return (
                  <div
                    key={page.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(page.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-[13.5px] font-medium transition-all duration-150 ${
                        isActive || isOpen
                          ? "text-green-700 bg-green-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {page.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-green-500" : ""
                        }`}
                      />
                    </button>

                    {/* DROPDOWN */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                        isOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                      }`}
                      style={{ minWidth: "240px" }}
                    >
                      {/* Arrow */}
                      <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45 z-10" />

                      <div className="relative bg-white rounded-2xl border border-slate-100 shadow-[0_16px_48px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden z-20">
                        {/* Header accent */}
                        <div className="px-4 pt-3 pb-2 border-b border-slate-50">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {page.label}
                          </p>
                        </div>

                        <div className="p-2">
                          {page.dropdownItems.map((item, i) => (
                            <Link
                              key={i}
                              href={`/${item.slug}`}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-100 group ${
                                pathname === `/${item.slug}`
                                  ? "bg-green-50 text-green-700"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                            >
                              {/* Icon dot */}
                              <span
                                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                                  pathname === `/${item.slug}`
                                    ? "bg-green-500"
                                    : "bg-slate-300 group-hover:bg-green-400"
                                }`}
                              />
                              <span className="flex-1">{item.label}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-green-500 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-150" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={page.id}
                  href={`/${page.slug}`}
                  className={`px-3.5 py-2 rounded-xl text-[13.5px] font-medium transition-all duration-150 ${
                    pathname === `/${page.slug}`
                      ? "text-green-700 bg-green-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-50 border border-slate-200 transition-all"
              aria-label="Toggle menu"
            >
              {open ? <FaTimes size={15} /> : <FaBars size={15} />}
            </button>

            {/* Login */}
            <Link
              href="https://app.rxondeal.com/login"
              target="_blank"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-slate-600 border border-slate-200 hover:border-green-300 hover:text-green-700 hover:bg-green-50/50 transition-all duration-150"
            >
              <FaUserCircle size={13} />
              Login
            </Link>

            {/* CTA */}
            <Link
              href="https://app.rxondeal.com/registration"
              target="_blank"
              className="hidden lg:flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all duration-150 hover:-translate-y-px active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, rgb(84,169,38) 0%, rgb(66,175,200) 100%)",
                boxShadow: "0 2px 10px rgba(34,197,94,0.28)",
              }}
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <div
        className={`fixed inset-0 z-[99] lg:hidden transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[8px] bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-black text-[10px]">Rx</span>
              </div>
              <span className="font-bold text-[14px] text-slate-900">
                RXON<span className="text-green-600">DEAL</span>
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100"
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* Mobile links */}
          <nav className="flex flex-col px-4 py-10 gap-1 overflow-y-auto max-h-[calc(100vh-120px)]">
            {pages.map((page) => {
              const hasDropdown =
                page.hasDropdown && page.dropdownItems?.length > 0;
              const href = `/${page.slug}`;

              if (hasDropdown) {
                return (
                  <div key={page.id} className="mb-1">
                    <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {page.label}
                    </p>
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                      {page.dropdownItems.map((item, i) => (
                        <Link
                          key={i}
                          href={`/${item.slug}`}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 text-[13px] font-medium transition-colors ${
                            i < page.dropdownItems.length - 1
                              ? "border-b border-slate-100"
                              : ""
                          } ${
                            pathname === `/${item.slug}`
                              ? "bg-green-50 text-green-700"
                              : "text-slate-600 hover:text-green-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={page.id}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-[13.5px] font-semibold transition-all ${
                    pathname === href
                      ? "bg-green-600 text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {page.label}
                </Link>
              );
            })}

            {/* Mobile actions */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="https://app.rxondeal.com/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-slate-200 text-slate-700 font-bold text-[13px] hover:border-green-300 hover:text-green-700 transition-all"
              >
                <FaUserCircle size={14} /> Login to Portal
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
