import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

export default function Footer({
  logo,
  description,
  columns,
  socialLinks,
  copyright,
}) {
  return (
    <footer className="bg-[#fcfdfc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-20">
          {/* Brand Info */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="mb-6">
              {logo ? (
                <img
                  src={`${BASE}${logo}`}
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-200">
                    R
                  </div>
                  <span className="font-bold text-xl tracking-tight text-slate-900">
                    RXON<span className="text-emerald-600">DEAL</span>
                  </span>
                </div>
              )}
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
              {description ||
                "Empowering your business with seamless solutions and unparalleled deals in the modern marketplace."}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns?.map((col, i) => (
              <div key={i}>
                <h4 className="text-[13px] font-bold text-slate-900 mb-6 uppercase tracking-widest">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links?.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.link ?? "#"}
                        className="text-[14px] text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 inline-block"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-400 text-xs font-medium">
              © {new Date().getFullYear()}{" "}
              {copyright || "RxOnDeal Inc. All rights reserved."}
            </p>
          </div>

          {/* Social icons with subtle backgrounds */}
          <div className="flex gap-3">
            {socialLinks?.map((s, i) => {
              const Icon = SOCIAL_ICONS[s.platform.toLowerCase()];
              return (
                <a
                  key={i}
                  href={s.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 hover:-translate-y-1 shadow-sm transition-all duration-300"
                >
                  {Icon ? <Icon className="w-4 h-4" /> : s.platform.charAt(0)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
