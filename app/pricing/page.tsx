// import {
//   ArrowRight,
//   Lightbulb,
//   ShieldCheck,
//   Target,
//   Zap,
//   Globe,
//   Users,
//   Lock,
//   TrendingUp,
// } from "lucide-react";
// import React from "react";

// export default function AboutPage() {
//   const cards = [
//     {
//       icon: <Target className="w-7 h-7" />,
//       title: "Our Mission",
//       desc: "To democratize access to pharmaceutical products by creating a transparent, technology-driven marketplace that empowers both suppliers and pharmacies to thrive.",
//       accent: "emerald",
//     },
//     {
//       icon: <Lightbulb className="w-7 h-7" />,
//       title: "Our Vision",
//       desc: "To become the world's most trusted pharmaceutical ecosystem, ensuring healthcare providers—from local pharmacies to hospital chains—have seamless access to essential medicine.",
//       accent: "blue",
//     },
//   ];
//   const values = [
//     {
//       icon: <ShieldCheck className="w-8 h-8" />,
//       title: "Trust & Transparency",
//       desc: "We believe in building long-term relationships through honest communication and transparent pricing.",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Innovation",
//       desc: "We continuously push boundaries to deliver cutting-edge solutions that solve real problems.",
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Global Impact",
//       desc: "We're committed to improving healthcare access worldwide through technology and collaboration.",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Customer-Centric",
//       desc: "Every decision we make starts with understanding our customers' needs and challenges.",
//     },
//     {
//       icon: <Lock className="w-8 h-8" />,
//       title: "Security",
//       desc: "We maintain the highest standards of data protection and regulatory compliance.",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Continuous Growth",
//       desc: "We invest in our people, technology, and processes to stay ahead of industry changes.",
//     },
//   ];
//   return (
//     <main className="min-h-screen bg-white text-gray-800 font-light">
//       {/* HERO SECTION */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-700 to-teal-400 text-white py-20 md:py-32">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
//             <span className="text-sm font-light tracking-wide">
//               About RxonDeal
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-extralight leading-tight">
//             Transforming Healthcare
//             <span className="block font-light mt-2">Supply Chain</span>
//           </h1>

//           <p className="text-lg md:text-xl max-w-3xl mx-auto text-green-50 font-light leading-relaxed">
//             We're building the future of pharmaceutical procurement, one
//             connection at a time.
//           </p>
//         </div>
//       </section>
//       {/* COMPANY SECTION */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Content */}
//             <div>
//               <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
//                 Our Story
//               </span>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-6">
//                 Building a Better Marketplace
//               </h2>

//               <div className="space-y-6 text-gray-600 font-light leading-relaxed">
//                 <p>
//                   Founded in 2019, RxonDeal was born from a simple observation:
//                   pharmacies were spending too much time and money on
//                   procurement, while suppliers struggled to reach their ideal
//                   customers efficiently.
//                 </p>

//                 <p>
//                   Our founders, with decades of combined experience in
//                   healthcare and technology, set out to create a platform that
//                   would bridge this gap. What started as a small team of five
//                   has grown into a company serving over 10,000 pharmacies across
//                   50 countries.
//                 </p>

//                 <p>
//                   Today, RxonDeal processes millions of dollars in
//                   pharmaceutical transactions monthly, helping healthcare
//                   providers focus on what matters most—patient care.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-6 mt-10">
//                 <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
//                   <h3 className="text-3xl font-light text-green-600 mb-2">
//                     2019
//                   </h3>
//                   <p className="text-sm text-gray-600 font-light">
//                     Year Founded
//                   </p>
//                 </div>
//                 <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
//                   <h3 className="text-3xl font-light text-green-600 mb-2">
//                     50+
//                   </h3>
//                   <p className="text-sm text-gray-600 font-light">
//                     Countries Served
//                   </p>
//                 </div>
//                 <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
//                   <h3 className="text-3xl font-light text-green-600 mb-2">
//                     10k+
//                   </h3>
//                   <p className="text-sm text-gray-600 font-light">
//                     Active Pharmacies
//                   </p>
//                 </div>
//                 <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
//                   <h3 className="text-3xl font-light text-green-600 mb-2">
//                     200+
//                   </h3>
//                   <p className="text-sm text-gray-600 font-light">
//                     Verified Suppliers
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="relative">
//               <div className="absolute -inset-4 bg-green-200 rounded-3xl blur-3xl opacity-20"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
//                 alt="Team collaboration"
//                 className="relative w-full rounded-2xl shadow-2xl border border-gray-100"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-24 bg-white relative overflow-hidden">
//         {/* Subtle Background Pattern */}
//         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {cards.map((card, idx) => (
//               <div
//                 key={idx}
//                 className="group relative bg-white p-10 md:p-12 rounded-3xl border border-slate-100 hover:border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//               >
//                 {/* Subtle top-bar accent */}
//                 <div
//                   className={`absolute top-0 left-8 w-12 h-1 bg-${card.accent}-500 rounded-b-sm`}
//                 />

//                 <div className="mb-8 p-4 bg-slate-50 rounded-2xl w-fit text-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
//                   {card.icon}
//                 </div>

//                 <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
//                   {card.title}
//                 </h3>

//                 <p className="text-slate-500 leading-relaxed text-[16px] font-medium mb-8">
//                   {card.desc}
//                 </p>

//                 <button className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
//                   Learn more <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* CORE VALUES */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-20">
//             <h4 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
//               What Drives Us
//             </h4>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
//               Our Core Values
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, idx) => (
//               <div
//                 key={idx}
//                 className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="mb-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300 origin-left">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
//                   {value.title}
//                 </h3>
//                 <p className="text-slate-500 font-medium leading-relaxed text-[15px]">
//                   {value.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* CEO MESSAGE */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-3">
//               {/* CEO Photo */}
//               <div className="md:col-span-1 bg-gradient-to-br from-green-500 to-teal-500 p-8 flex flex-col items-center justify-center text-white">
//                 <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden mb-6 border-4 border-white/30">
//                   <img
//                     src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
//                     alt="CEO"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-light mb-1">David Chen</h3>
//                 <p className="text-green-100 text-sm font-light">
//                   CEO & Co-Founder
//                 </p>
//                 <div className="flex gap-3 mt-4">
//                   <a
//                     href="#"
//                     className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
//                   >
//                     <span className="text-xs">in</span>
//                   </a>
//                   <a
//                     href="#"
//                     className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
//                   >
//                     <span className="text-xs">X</span>
//                   </a>
//                 </div>
//               </div>

//               {/* Message Content */}
//               <div className="md:col-span-2 p-8 md:p-12">
//                 <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
//                   Leadership Message
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mt-3 mb-6">
//                   A Message from Our CEO
//                 </h2>

//                 <div className="space-y-4 text-gray-600 font-light leading-relaxed">
//                   <p className="text-lg italic border-l-2 border-green-500 pl-4 bg-green-50/50 py-3">
//                     "When we started RxonDeal, our goal was simple: make
//                     pharmaceutical procurement as easy as ordering a book
//                     online."
//                   </p>

//                   <p>
//                     Five years later, I'm proud to say we've made significant
//                     progress toward that vision. But we're far from done. Every
//                     day, our team works tirelessly to eliminate inefficiencies,
//                     reduce costs, and improve access to essential medications.
//                   </p>

//                   <p>
//                     What drives us isn't just technology or market
//                     opportunity—it's the knowledge that our platform directly
//                     impacts patient care. When a pharmacy saves time on
//                     procurement, that's more time spent counseling patients.
//                     When costs decrease, those savings can be passed on to
//                     communities that need it most.
//                   </p>

//                   <p>
//                     As we look to the future, our commitment remains unwavering:
//                     to build the most trusted, innovative, and customer-focused
//                     pharmaceutical marketplace in the world.
//                   </p>

//                   <p>Thank you for being part of our journey.</p>
//                 </div>

//                 <div className="mt-8 pt-6 border-t border-gray-100">
//                   <p className="font-normal text-gray-900">David Chen</p>
//                   <p className="text-sm text-gray-500 font-light">
//                     CEO & Co-Founder, RxonDeal
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* LEADERSHIP TEAM */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
//               Meet Our Team
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3">
//               Leadership Team
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "Sarah Johnson",
//                 role: "Chief Technology Officer",
//                 img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
//               },
//               {
//                 name: "Michael Rodriguez",
//                 role: "Chief Operations Officer",
//                 img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
//               },
//               {
//                 name: "Emily Zhang",
//                 role: "Chief Financial Officer",
//                 img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
//               },
//               {
//                 name: "Ahmed Hassan",
//                 role: "VP of Product",
//                 img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
//               },
//             ].map((member, idx) => (
//               <div key={idx} className="group">
//                 <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
//                 </div>
//                 <h3 className="text-lg font-normal text-gray-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 font-light">
//                   {member.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* PARTNERS SECTION */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
//               Trusted Relationships
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-4">
//               Our Partners
//             </h2>
//             <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
//               We work with industry-leading organizations to deliver the best
//               experience for our users.
//             </p>
//           </div>

//           {/* Partner Categories */}
//           <div className="space-y-16">
//             {/* Technology Partners */}
//             <div>
//               <h3 className="text-xl font-normal text-gray-900 mb-8 text-center">
//                 Technology Partners
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 {["AWS", "Stripe", "Twilio", "MongoDB"].map((partner, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-white p-8 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition flex items-center justify-center group"
//                   >
//                     <div className="text-2xl font-light text-gray-400 group-hover:text-green-600 transition">
//                       {partner}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Healthcare Partners */}
//             <div>
//               <h3 className="text-xl font-normal text-gray-900 mb-8 text-center">
//                 Healthcare Partners
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 {[
//                   "PharmaCorp",
//                   "MedSupply Global",
//                   "HealthLink",
//                   "VitaPharm",
//                 ].map((partner, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-white p-8 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition flex items-center justify-center group"
//                   >
//                     <div className="text-2xl font-light text-gray-400 group-hover:text-green-600 transition">
//                       {partner}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Industry Associations */}
//             <div>
//               <h3 className="text-xl font-normal text-gray-900 mb-8 text-center">
//                 Industry Associations
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//                 {[
//                   "National Pharmacy Association",
//                   "Healthcare Supply Chain Association",
//                   "Global Health Coalition",
//                 ].map((partner, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-white p-8 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition flex items-center justify-center group"
//                   >
//                     <div className="text-lg font-light text-gray-400 group-hover:text-green-600 transition text-center">
//                       {partner}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Partner CTA */}
//           <div className="mt-16 text-center bg-white p-12 rounded-2xl border border-gray-100">
//             <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
//               Interested in partnering with us?
//             </h3>
//             <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
//               We're always looking for innovative organizations that share our
//               vision of improving healthcare supply chains.
//             </p>
//             <button className="bg-green-600 text-white px-10 py-4 rounded-full font-normal hover:bg-green-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
//               Become a Partner
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* CERTIFICATIONS & AWARDS */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
//               Recognition
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3">
//               Certifications & Awards
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "ISO 27001 Certified",
//                 desc: "Information Security Management",
//                 year: "2023",
//               },
//               {
//                 title: "Best HealthTech Startup",
//                 desc: "TechCrunch Awards",
//                 year: "2022",
//               },
//               {
//                 title: "HIPAA Compliant",
//                 desc: "Healthcare Data Protection",
//                 year: "2021",
//               },
//               {
//                 title: "SOC 2 Type II",
//                 desc: "Security & Availability",
//                 year: "2023",
//               },
//               {
//                 title: "Top 50 B2B Platform",
//                 desc: "Forbes Cloud 100",
//                 year: "2023",
//               },
//               {
//                 title: "FDA Registered",
//                 desc: "Pharmaceutical Distribution",
//                 year: "2020",
//               },
//             ].map((cert, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover:shadow-xl transition text-center"
//               >
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl">🏆</span>
//                 </div>
//                 <h3 className="text-lg font-normal text-gray-900 mb-2">
//                   {cert.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 font-light mb-1">
//                   {cert.desc}
//                 </p>
//                 <p className="text-xs text-green-600 font-light">{cert.year}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* CTA SECTION */}
//       <section className="bg-gradient-to-br from-slate-900 to-gray-800 py-20 md:py-28 text-center px-4 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

//         <div className="max-w-4xl mx-auto relative z-10">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
//             Join our growing community
//           </h2>
//           <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto">
//             Be part of the revolution transforming pharmaceutical procurement
//             worldwide.
//           </p>
//           <button className="bg-green-600 text-white px-12 py-4 rounded-full font-normal hover:bg-green-500 shadow-2xl shadow-green-900/30 transition hover:-translate-y-1">
//             Get Started Today
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   MessageCircle,
//   HeadphonesIcon,
//   Building2,
// } from "lucide-react";

// export default function ContactUs() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [sent, setSent] = useState(false);

//   const handleSubmit = () => {
//     if (form.name && form.email && form.message) {
//       setSent(true);
//       setTimeout(() => setSent(false), 4000);
//       setForm({ name: "", email: "", subject: "", message: "" });
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white text-gray-800 font-light">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-cyan-600 text-white py-20 md:py-28">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
//           <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-200 rounded-full blur-[120px]"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
//             <span className="text-sm font-light tracking-wide">
//               𝕽𝖊𝖌𝖎𝖔𝖓𝖆𝖑 𝕳𝖊𝖗𝖎𝖙𝖆𝖌𝖊 𝕱𝖔𝖔𝖉
//             </span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 leading-[1.1]">
//             𝕽𝖊𝖌𝖎𝖔𝖓𝖆𝖑 𝕳𝖊𝖗𝖎𝖙𝖆𝖌𝖊 𝕱𝖔𝖔𝖉
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-green-50 leading-relaxed font-light">
//             Have a question or need support? Our team of pharmacy experts is
//             ready to assist you.
//           </p>
//         </div>
//       </section>

//       {/* CONTACT CARDS */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Phone className="w-6 h-6" />,
//                 title: "Call Us",
//                 info: "+1 (800) 123-4567",
//                 sub: "Mon–Fri, 8am–8pm EST",
//               },
//               {
//                 icon: <Mail className="w-6 h-6" />,
//                 title: "Email Us",
//                 info: "support@rxondeal.com",
//                 sub: "Reply within 24 hours",
//               },
//               {
//                 icon: <MapPin className="w-6 h-6" />,
//                 title: "Visit Us",
//                 info: "123 Pharma Ave, NYC",
//                 sub: "New York, NY 10001",
//               },
//               {
//                 icon: <Clock className="w-6 h-6" />,
//                 title: "Business Hours",
//                 info: "Mon–Fri: 8am–8pm",
//                 sub: "Sat: 9am–5pm EST",
//               },
//             ].map((card, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-50 text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
//                   {card.icon}
//                 </div>
//                 <h3 className="text-lg font-normal text-gray-900 mb-1">
//                   {card.title}
//                 </h3>
//                 <p className="text-green-700 font-normal text-sm mb-1">
//                   {card.info}
//                 </p>
//                 <p className="text-gray-400 text-xs font-light">{card.sub}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FORM + SIDE INFO */}
//       {/* <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-12 items-start">
//             {/* Side */}
//       {/* <div className="w-full lg:w-2/5 space-y-6">
//               <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl">
//                 <HeadphonesIcon className="w-8 h-8 mb-4 opacity-80" />
//                 <h3 className="text-xl font-normal mb-2">Priority Support</h3>
//                 <p className="text-green-100 font-light text-sm leading-relaxed mb-4">
//                   Professional & Enterprise plan users get access to dedicated
//                   account managers with guaranteed 4-hour response times.
//                 </p>
//                 <button className="bg-white text-green-700 px-6 py-2.5 rounded-full text-sm font-normal hover:bg-green-50 transition">
//                   Upgrade Plan
//                 </button>
//               </div>

//               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
//                 <MessageCircle className="w-8 h-8 text-green-600 mb-4" />
//                 <h3 className="text-xl font-normal text-gray-900 mb-2">
//                   Live Chat
//                 </h3>
//                 <p className="text-gray-500 font-light text-sm leading-relaxed mb-4">
//                   Available Monday to Friday, 8am–8pm EST. Average wait time
//                   under 2 minutes.
//                 </p>
//                 <button className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-normal hover:bg-green-700 transition">
//                   Start Chat
//                 </button>
//               </div>

//               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
//                 <Building2 className="w-8 h-8 text-green-600 mb-4" />
//                 <h3 className="text-xl font-normal text-gray-900 mb-2">
//                   Partner with Us
//                 </h3>
//                 <p className="text-gray-500 font-light text-sm leading-relaxed">
//                   Are you a pharmaceutical supplier? Join our global network of
//                   200+ verified wholesalers.
//                 </p>
//               </div>
//             </div> */}
//       {/* </div>
//         </div>
//       </section> */}

//       <section className="py-4 md:py-24 flex items-center justify-center">
//         {/* Form */}
//         <div className="w-full lg:w-3/5 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
//           <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
//             Send us a Message
//           </h2>
//           <p className="text-gray-500 font-light mb-8">
//             Fill out the form and we'll get back to you shortly.
//           </p>

//           {sent && (
//             <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-light">
//               ✓ Message sent! We'll be in touch within 24 hours.
//             </div>
//           )}

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
//             <div>
//               <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-light">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 placeholder="Dr. Sarah Johnson"
//                 className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
//               />
//             </div>
//             <div>
//               <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-light">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 placeholder="sarah@pharmacy.com"
//                 className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
//               />
//             </div>
//           </div>

//           <div className="mb-7">
//             <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-light">
//               Message
//             </label>
//             <textarea
//               rows={5}
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               placeholder="Tell us how we can help you..."
//               className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition resize-none"
//             />
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-normal transition hover:-translate-y-0.5 shadow-lg shadow-green-200"
//           >
//             <Send className="w-4 h-4" /> Send Message
//           </button>
//         </div>
//       </section>

//       {/* MAP PLACEHOLDER */}
//       <section className="py-6 pb-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="w-full h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center border border-green-100">
//             <div className="text-center">
//               <MapPin className="w-10 h-10 text-green-500 mx-auto mb-3" />
//               <p className="text-green-700 font-normal">
//                 123 Pharma Avenue, New York, NY 10001
//               </p>
//               <p className="text-green-500 text-sm font-light mt-1">
//                 Map integration coming soon
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import {
//   FileText,
//   Users,
//   ShoppingCart,
//   AlertTriangle,
//   Scale,
//   RefreshCw,
//   Globe,
//   ChevronRight,
// } from "lucide-react";

// const sections = [
//   {
//     id: "acceptance",
//     label: "Acceptance of Terms",
//     icon: <FileText className="w-4 h-4" />,
//   },
//   {
//     id: "eligibility",
//     label: "Eligibility",
//     icon: <Users className="w-4 h-4" />,
//   },
//   {
//     id: "platform",
//     label: "Platform Use",
//     icon: <Globe className="w-4 h-4" />,
//   },
//   {
//     id: "transactions",
//     label: "Orders & Transactions",
//     icon: <ShoppingCart className="w-4 h-4" />,
//   },
//   {
//     id: "prohibited",
//     label: "Prohibited Conduct",
//     icon: <AlertTriangle className="w-4 h-4" />,
//   },
//   {
//     id: "liability",
//     label: "Liability & Disclaimers",
//     icon: <Scale className="w-4 h-4" />,
//   },
//   {
//     id: "modifications",
//     label: "Modifications",
//     icon: <RefreshCw className="w-4 h-4" />,
//   },
// ];

// export default function TermsAndConditions() {
//   const [active, setActive] = useState("acceptance");

//   return (
//     <main className="min-h-screen bg-white text-gray-800 font-light">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-cyan-600 text-white py-16 md:py-24">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
//           <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-200 rounded-full blur-[120px]"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
//             <span className="text-sm font-light tracking-wide">
//               Effective: January 15, 2025
//             </span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-4 leading-[1.1]">
//             Terms &{" "}
//             <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-white">
//               Conditions
//             </span>
//           </h1>
//           <p className="text-base md:text-lg text-green-50 font-light max-w-2xl leading-relaxed">
//             Please read these terms carefully before using RxonDeal. By
//             accessing our platform, you agree to be bound by these terms.
//           </p>
//         </div>
//       </section>

//       {/* NOTICE BANNER */}
//       <section className="bg-amber-50 border-b border-amber-100 py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <p className="text-amber-700 text-sm font-light text-center">
//             <AlertTriangle className="w-4 h-4 inline mr-2 mb-0.5" />
//             These Terms constitute a legally binding agreement between you and
//             RxonDeal, Inc. Last updated January 15, 2025.
//           </p>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-12">
//             {/* Sidebar */}
//             <aside className="w-full lg:w-64 flex-shrink-0">
//               <div className="sticky top-8 bg-gray-50 rounded-2xl p-4 border border-gray-100">
//                 <p className="text-xs uppercase tracking-widest text-gray-400 font-light mb-4 px-2">
//                   Sections
//                 </p>
//                 <nav className="space-y-1">
//                   {sections.map((sec) => (
//                     <button
//                       key={sec.id}
//                       onClick={() => setActive(sec.id)}
//                       className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left ${
//                         active === sec.id
//                           ? "bg-green-600 text-white"
//                           : "text-gray-600 hover:bg-white hover:text-green-600"
//                       }`}
//                     >
//                       <span className="flex items-center gap-2">
//                         {sec.icon} {sec.label}
//                       </span>
//                       <ChevronRight className="w-3 h-3 opacity-50 flex-shrink-0" />
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <div className="flex-1 max-w-3xl space-y-14">
//               {/* 1. Acceptance */}
//               <div id="acceptance">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <FileText className="w-7 h-7 text-green-500" /> 1. Acceptance
//                   of Terms
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-4">
//                   By registering for, accessing, or using the RxonDeal platform
//                   ("Service"), you acknowledge that you have read, understood,
//                   and agree to be bound by these Terms and Conditions ("Terms"),
//                   our Privacy Policy, and any additional policies incorporated
//                   herein.
//                 </p>
//                 <p className="text-gray-600 font-light leading-relaxed">
//                   If you are accepting these Terms on behalf of a company or
//                   other legal entity (such as a pharmacy), you represent that
//                   you have the authority to bind that entity to these Terms. If
//                   you do not have such authority, or if you do not agree to
//                   these Terms, you must not use the Service.
//                 </p>
//               </div>

//               {/* 2. Eligibility */}
//               <div id="eligibility">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Users className="w-7 h-7 text-green-500" /> 2. Eligibility
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-5">
//                   To use RxonDeal, you must meet all of the following
//                   eligibility requirements:
//                 </p>
//                 {[
//                   "Be at least 18 years of age",
//                   "Hold a valid pharmacy license or be an authorized representative of a licensed pharmacy in your jurisdiction",
//                   "Be a registered business entity in compliance with local laws",
//                   "Provide accurate and truthful registration information",
//                   "Not be prohibited from receiving services under applicable law",
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-start gap-3 mb-3 text-gray-600 font-light text-sm md:text-base"
//                   >
//                     <span className="text-green-500 mt-0.5 flex-shrink-0">
//                       ✓
//                     </span>{" "}
//                     {item}
//                   </div>
//                 ))}
//                 <div className="mt-6 p-5 bg-green-50 border border-green-100 rounded-xl">
//                   <p className="text-green-800 font-light text-sm">
//                     RxonDeal reserves the right to verify eligibility at any
//                     time. Accounts found to be ineligible will be suspended
//                     pending review.
//                   </p>
//                 </div>
//               </div>

//               {/* 3. Platform Use */}
//               <div id="platform">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Globe className="w-7 h-7 text-green-500" /> 3. Platform Use
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-5">
//                   Subject to these Terms, RxonDeal grants you a limited,
//                   non-exclusive, non-transferable, revocable license to access
//                   and use the Service for your internal business operations.
//                 </p>
//                 {[
//                   {
//                     title: "Account Security",
//                     desc: "You are responsible for maintaining the confidentiality of your login credentials. Notify us immediately of any unauthorized access at security@rxondeal.com.",
//                   },
//                   {
//                     title: "Accurate Information",
//                     desc: "All information provided through the platform must be accurate, current, and complete. Misleading information may result in immediate account termination.",
//                   },
//                   {
//                     title: "Authorized Use",
//                     desc: "The Service may only be used for lawful pharmaceutical procurement purposes. Reselling access to the platform to third parties is strictly prohibited.",
//                   },
//                   {
//                     title: "API Usage",
//                     desc: "API access is provided for authorized integration purposes only. Automated scraping, reverse engineering, or excessive API calls outside your plan limits are prohibited.",
//                   },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="mb-4 p-5 border border-gray-100 rounded-xl hover:border-green-100 transition"
//                   >
//                     <h4 className="font-normal text-gray-900 mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-500 text-sm font-light leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* 4. Orders & Transactions */}
//               <div id="transactions">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <ShoppingCart className="w-7 h-7 text-green-500" /> 4. Orders
//                   & Transactions
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-5">
//                   RxonDeal facilitates transactions between pharmacies and
//                   verified suppliers. We are not a party to the underlying
//                   purchase agreements between buyers and suppliers.
//                 </p>
//                 {[
//                   {
//                     step: "01",
//                     title: "Order Placement",
//                     desc: "Orders placed through RxonDeal constitute a binding purchase offer to the selected supplier, subject to supplier confirmation.",
//                   },
//                   {
//                     step: "02",
//                     title: "Pricing",
//                     desc: "Prices displayed are real-time market prices. RxonDeal charges a platform service fee as disclosed in your subscription plan.",
//                   },
//                   {
//                     step: "03",
//                     title: "Payment Terms",
//                     desc: "Payment is processed upon order confirmation. Disputes regarding charges must be raised within 30 days of the transaction date.",
//                   },
//                   {
//                     step: "04",
//                     title: "Cancellations & Returns",
//                     desc: "Cancellation and return policies are governed by the individual supplier's terms. RxonDeal will facilitate dispute resolution where applicable.",
//                   },
//                 ].map((item, i) => (
//                   <div key={i} className="flex gap-4 mb-5">
//                     <span className="text-5xl font-extralight text-gray-100 leading-none flex-shrink-0 w-10">
//                       {item.step}
//                     </span>
//                     <div className="pt-1">
//                       <h4 className="font-normal text-gray-900 mb-1">
//                         {item.title}
//                       </h4>
//                       <p className="text-gray-500 text-sm font-light leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* 5. Prohibited */}
//               <div id="prohibited">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <AlertTriangle className="w-7 h-7 text-green-500" /> 5.
//                   Prohibited Conduct
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-5">
//                   The following activities are strictly prohibited and may
//                   result in immediate account termination and legal action:
//                 </p>
//                 <div className="space-y-3">
//                   {[
//                     "Purchasing or facilitating the purchase of controlled substances or narcotics outside of applicable regulatory frameworks",
//                     "Submitting fraudulent orders, invoices, or documentation",
//                     "Misrepresenting your pharmacy license status or business credentials",
//                     "Attempting to circumvent pricing, fees, or platform security systems",
//                     "Engaging in any form of market manipulation or price fixing",
//                     "Using the platform to launder funds or conduct unlawful financial transactions",
//                     "Uploading malicious code, conducting phishing, or attempting unauthorized access",
//                     "Sharing your account credentials with unauthorized third parties",
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       className="flex items-start gap-3 p-3 bg-red-50 border border-red-50 rounded-lg text-sm text-gray-700 font-light"
//                     >
//                       <span className="text-red-400 flex-shrink-0 mt-0.5">
//                         ✕
//                       </span>{" "}
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* 6. Liability */}
//               <div id="liability">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Scale className="w-7 h-7 text-green-500" /> 6. Liability &
//                   Disclaimers
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <div className="space-y-5">
//                   <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
//                     <h4 className="font-normal text-gray-900 mb-2">
//                       Limitation of Liability
//                     </h4>
//                     <p className="text-gray-500 text-sm font-light leading-relaxed">
//                       To the maximum extent permitted by applicable law,
//                       RxonDeal's aggregate liability for any claims arising out
//                       of or related to these Terms or the Service shall not
//                       exceed the greater of (a) $500 or (b) the total fees paid
//                       by you to RxonDeal in the 3 months preceding the claim.
//                     </p>
//                   </div>
//                   <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
//                     <h4 className="font-normal text-gray-900 mb-2">
//                       Disclaimer of Warranties
//                     </h4>
//                     <p className="text-gray-500 text-sm font-light leading-relaxed">
//                       The Service is provided "as is" and "as available" without
//                       warranties of any kind. RxonDeal does not warrant that the
//                       Service will be uninterrupted, error-free, or free of
//                       harmful components.
//                     </p>
//                   </div>
//                   <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
//                     <h4 className="font-normal text-gray-900 mb-2">
//                       Indemnification
//                     </h4>
//                     <p className="text-gray-500 text-sm font-light leading-relaxed">
//                       You agree to indemnify and hold harmless RxonDeal from any
//                       claims, damages, or expenses (including legal fees)
//                       arising from your use of the Service or violation of these
//                       Terms.
//                     </p>
//                   </div>
//                   <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
//                     <h4 className="font-normal text-gray-900 mb-2">
//                       Governing Law
//                     </h4>
//                     <p className="text-gray-500 text-sm font-light leading-relaxed">
//                       These Terms are governed by the laws of the State of New
//                       York, USA, without regard to conflict of law principles.
//                       Disputes shall be resolved through binding arbitration in
//                       New York City, NY.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* 7. Modifications */}
//               <div id="modifications">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <RefreshCw className="w-7 h-7 text-green-500" /> 7.
//                   Modifications to Terms
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-4">
//                   RxonDeal reserves the right to modify these Terms at any time.
//                   When we make material changes, we will:
//                 </p>
//                 {[
//                   "Send an email notification to your registered email address at least 30 days before changes take effect",
//                   "Display a prominent notice within the platform dashboard",
//                   "Update the 'Last Updated' date at the top of this document",
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-start gap-3 mb-3 text-gray-600 font-light text-sm"
//                   >
//                     <span className="text-green-500 mt-0.5 flex-shrink-0">
//                       ✓
//                     </span>{" "}
//                     {item}
//                   </div>
//                 ))}
//                 <p className="text-gray-600 font-light leading-relaxed mt-4">
//                   Your continued use of the Service after changes take effect
//                   constitutes acceptance of the revised Terms. If you disagree
//                   with any changes, you may close your account before the
//                   effective date.
//                 </p>

//                 <div className="mt-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl">
//                   <h3 className="text-xl font-normal mb-2">
//                     Questions About These Terms?
//                   </h3>
//                   <p className="text-green-100 font-light text-sm mb-4">
//                     Our legal team is happy to clarify any provisions. Contact
//                     us at:
//                   </p>
//                   <p className="font-normal text-sm">legal@rxondeal.com</p>
//                   <p className="text-green-100 font-light text-sm">
//                     123 Pharma Avenue, New York, NY 10001
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import React from "react";

export default function PlatformFeaturesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-light">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-700 to-teal-400 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-light tracking-wide">
              Platform Overview
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-extralight leading-tight">
            Powerful Features for
            <span className="block font-light mt-2">
              Modern Pharmaceutical Trade
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-green-50 font-light leading-relaxed">
            Everything you need to streamline operations, from onboarding to
            order fulfillment.
          </p>
        </div>
      </section>

      {/* ONBOARDING SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              Getting Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-4">
              Seamless Onboarding Process
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Get your business up and running in minutes, not days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Wholesaler Onboarding */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 md:p-10 rounded-3xl border border-green-100 shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl">
                🏢
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                For Wholesalers
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Quick and simple registration process to start selling on our
                platform.
              </p>

              <div className="space-y-4">
                {[
                  "Create business profile with company details",
                  "Upload licensing and certifications",
                  "Set up product catalog and pricing",
                  "Configure shipping and payment methods",
                  "Define relationship settings (direct/approval)",
                  "Go live and start receiving orders",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 font-light">{step}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full bg-green-600 text-white py-3 rounded-full font-normal hover:bg-green-700 transition">
                Register as Wholesaler
              </button>
            </div>

            {/* Pharmacy Onboarding */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 md:p-10 rounded-3xl border border-teal-100 shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl">
                💊
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                For Pharmacies
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Start purchasing from verified suppliers within minutes.
              </p>

              <div className="space-y-4">
                {[
                  "Register with pharmacy license details",
                  "Verify business credentials",
                  "Browse marketplace and find suppliers",
                  "Apply for business relationships",
                  "Set up payment and delivery preferences",
                  "Place your first order",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 font-light">{step}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full bg-teal-600 text-white py-3 rounded-full font-normal hover:bg-teal-700 transition">
                Register as Pharmacy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETPLACE SECTION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
                Marketplace
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-6">
                Discover Thousands of Products
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Access our comprehensive marketplace with real-time inventory,
                competitive pricing, and verified suppliers. Everything you
                need, all in one place.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: "🔍",
                    title: "Smart Search",
                    desc: "Find products instantly with AI-powered search",
                  },
                  {
                    icon: "📊",
                    title: "Live Pricing",
                    desc: "Real-time price updates from multiple suppliers",
                  },
                  {
                    icon: "✓",
                    title: "Verified Suppliers",
                    desc: "All wholesalers undergo strict verification",
                  },
                  {
                    icon: "📦",
                    title: "Stock Availability",
                    desc: "Check inventory levels before ordering",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 transition"
                  >
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-normal text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-green-200 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800"
                alt="Marketplace Interface"
                className="relative w-full rounded-2xl shadow-2xl border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              Top Products
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3">
              Featured Products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Amoxicillin 500mg",
                category: "Antibiotics",
                price: "$45.99",
                stock: "In Stock",
              },
              {
                name: "Ibuprofen 200mg",
                category: "Pain Relief",
                price: "$12.50",
                stock: "In Stock",
              },
              {
                name: "Metformin 850mg",
                category: "Diabetes",
                price: "$28.75",
                stock: "Low Stock",
              },
              {
                name: "Lisinopril 10mg",
                category: "Cardiovascular",
                price: "$35.20",
                stock: "In Stock",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition group"
              >
                <div className="aspect-square bg-gradient-to-br from-green-50 to-gray-50 flex items-center justify-center text-6xl">
                  💊
                </div>
                <div className="p-6">
                  <span className="text-xs text-green-600 font-light uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="font-normal text-gray-900 mt-2 mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-light text-green-600">
                      {product.price}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${product.stock === "In Stock" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
                    >
                      {product.stock}
                    </span>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-full font-light hover:bg-green-600 hover:text-white transition text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BROWSE BY CATEGORY */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              Product Categories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3">
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "💊", name: "Antibiotics", count: "1,245" },
              { icon: "❤️", name: "Cardiovascular", count: "892" },
              { icon: "🧠", name: "Neurological", count: "654" },
              { icon: "🩹", name: "Pain Relief", count: "1,123" },
              { icon: "🫁", name: "Respiratory", count: "743" },
              { icon: "💉", name: "Vaccines", count: "234" },
              { icon: "🍼", name: "Pediatric", count: "567" },
              { icon: "👁️", name: "Ophthalmic", count: "432" },
              { icon: "🦴", name: "Orthopedic", count: "389" },
              { icon: "🧪", name: "Laboratory", count: "678" },
              { icon: "🩺", name: "Diagnostics", count: "456" },
              { icon: "🌿", name: "Supplements", count: "891" },
            ].map((category, idx) => (
              <button
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-normal text-gray-900 text-sm mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 font-light">
                  {category.count} items
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-teal-200 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Search Interface"
                className="relative w-full rounded-2xl shadow-2xl border border-gray-100"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
                Advanced Search
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-6">
                Find Products Instantly
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Our intelligent search and filtering system helps you find
                exactly what you need in seconds.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Search by name or SKU",
                  "Filter by category",
                  "Sort by price",
                  "Filter by supplier",
                  "Stock availability",
                  "Price range filter",
                  "Save search filters",
                  "Recent searches",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 font-light"
                  >
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS RELATIONSHIP */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              Flexible Purchasing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-4">
              Business Relationship Models
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Choose how you want to do business with each wholesaler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Direct Purchase",
                icon: "⚡",
                desc: "Buy immediately without approval",
                features: [
                  "Instant ordering",
                  "Real-time pricing",
                  "Quick checkout",
                  "Immediate confirmation",
                ],
              },
              {
                type: "Approval Required",
                icon: "🤝",
                desc: "Apply first, then purchase",
                features: [
                  "Submit application",
                  "Wholesaler reviews",
                  "Approved access",
                  "Special pricing available",
                ],
              },
              {
                type: "Credit Terms",
                icon: "💳",
                desc: "Purchase on credit with approved terms",
                features: [
                  "Credit limit set",
                  "Net payment terms",
                  "Bulk discounts",
                  "Monthly invoicing",
                ],
              },
            ].map((model, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {model.icon}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">
                  {model.type}
                </h3>
                <p className="text-gray-600 font-light mb-6">{model.desc}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700 font-light"
                    >
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CART AND CHECKOUT */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
                Shopping Experience
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-6">
                Streamlined Cart & Checkout
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Complete your purchases quickly with our optimized checkout
                process.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Smart Cart Management",
                    items: [
                      "Add multiple suppliers in one cart",
                      "Save carts for later",
                      "Bulk quantity adjustments",
                      "Real-time price updates",
                    ],
                  },
                  {
                    title: "Quick Checkout",
                    items: [
                      "One-click reorder",
                      "Saved payment methods",
                      "Multiple shipping addresses",
                      "Order notes and special instructions",
                    ],
                  },
                  {
                    title: "Order Review",
                    items: [
                      "Detailed order summary",
                      "Tax calculations",
                      "Shipping cost preview",
                      "Estimated delivery dates",
                    ],
                  },
                ].map((section, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                  >
                    <h4 className="font-normal text-gray-900 mb-3">
                      {section.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700 font-light"
                        >
                          <span className="text-green-500">•</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-green-200 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-xl font-normal text-gray-900 mb-6">
                  Shopping Cart
                </h3>
                <div className="space-y-4 mb-6">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex gap-4 pb-4 border-b border-gray-100"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        💊
                      </div>
                      <div className="flex-1">
                        <h4 className="font-normal text-gray-900 text-sm">
                          Product Name
                        </h4>
                        <p className="text-xs text-gray-500 font-light">
                          100 tablets
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-light text-gray-900">$45.99</p>
                        <p className="text-xs text-gray-500 font-light">
                          Qty: 5
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between font-light">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">$229.95</span>
                  </div>
                  <div className="flex justify-between font-light">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">$15.00</span>
                  </div>
                  <div className="flex justify-between font-normal pt-2 border-t border-gray-200">
                    <span className="text-gray-900">Total</span>
                    <span className="text-green-600 text-lg">$244.95</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-full font-normal hover:bg-green-700 transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHIPPING METHODS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              Delivery Options
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3">
              Flexible Shipping Methods
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: "🚚",
                name: "Standard Shipping",
                time: "3-5 business days",
                price: "From $15",
              },
              {
                icon: "⚡",
                name: "Express Delivery",
                time: "1-2 business days",
                price: "From $35",
              },
              {
                icon: "📦",
                name: "Bulk Freight",
                time: "5-7 business days",
                price: "Custom quote",
              },
              {
                icon: "🏪",
                name: "Local Pickup",
                time: "Same day",
                price: "Free",
              },
            ].map((method, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition text-center"
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="font-normal text-gray-900 mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-600 font-light mb-3">
                  {method.time}
                </p>
                <p className="text-green-600 font-light">{method.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📍",
                  title: "Real-Time Tracking",
                  desc: "Track your orders every step of the way",
                },
                {
                  icon: "📅",
                  title: "Scheduled Delivery",
                  desc: "Choose your preferred delivery date",
                },
                {
                  icon: "🔒",
                  title: "Secure Packaging",
                  desc: "Temperature-controlled and insured shipping",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-normal text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-light">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDIT PURCHASE SYSTEM */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 rounded-3xl shadow-2xl text-white">
                <h3 className="text-2xl font-light mb-6">
                  Credit Account Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-light">Credit Limit</span>
                    <span className="text-2xl font-normal">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-light">Available Credit</span>
                    <span className="text-2xl font-normal">$38,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-light">Outstanding Balance</span>
                    <span className="text-2xl font-normal">$11,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-light">Payment Terms</span>
                    <span className="font-normal">Net 30</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-white text-green-600 py-3 rounded-full font-normal hover:bg-green-50 transition">
                  View Full Statement
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
                Payment Flexibility
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-6">
                Credit-Based Purchase System
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Build business credit and enjoy flexible payment terms with
                approved suppliers.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Flexible Terms",
                    desc: "Net 15, 30, or 60-day payment options based on your relationship",
                  },
                  {
                    title: "Credit Limits",
                    desc: "Customizable credit limits set by each wholesaler",
                  },
                  {
                    title: "Auto-Pay",
                    desc: "Set up automatic payments to never miss a deadline",
                  },
                  {
                    title: "Payment History",
                    desc: "Build your credit score with on-time payments",
                  },
                  {
                    title: "Multiple Methods",
                    desc: "ACH, wire transfer, or credit card payments",
                  },
                  {
                    title: "Invoice Management",
                    desc: "Consolidated monthly statements and detailed invoicing",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-normal text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER MANAGEMENT */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              Complete Control
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-4">
              Order Management Dashboard
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Track, manage, and analyze all your orders from one central
              dashboard.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Active Orders", value: "24", color: "green" },
                { label: "In Transit", value: "12", color: "blue" },
                { label: "Delivered", value: "156", color: "teal" },
                { label: "Total Spent", value: "$48.5k", color: "gray" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <p
                    className={`text-3xl font-light text-${stat.color}-600 mb-2`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {
                  id: "#ORD-12345",
                  supplier: "PharmaCorp",
                  items: "8 items",
                  status: "Shipped",
                  total: "$1,234.56",
                  date: "Dec 15, 2024",
                },
                {
                  id: "#ORD-12344",
                  supplier: "MedSupply",
                  items: "5 items",
                  status: "Processing",
                  total: "$892.00",
                  date: "Dec 14, 2024",
                },
                {
                  id: "#ORD-12343",
                  supplier: "HealthLink",
                  items: "12 items",
                  status: "Delivered",
                  total: "$2,156.78",
                  date: "Dec 12, 2024",
                },
              ].map((order, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-100 rounded-xl hover:border-green-200 transition"
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-normal">
                      📦
                    </div>
                    <div>
                      <h4 className="font-normal text-gray-900">{order.id}</h4>
                      <p className="text-sm text-gray-600 font-light">
                        {order.supplier} • {order.items}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-light ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="text-gray-600 font-light text-sm">
                      {order.date}
                    </span>
                    <span className="font-normal text-gray-900">
                      {order.total}
                    </span>
                    <button className="text-green-600 hover:text-green-700 font-light text-sm">
                      View →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Order Analytics",
                desc: "Detailed insights into purchasing patterns and trends",
              },
              {
                icon: "🔔",
                title: "Smart Alerts",
                desc: "Get notified about order updates and delivery status",
              },
              {
                icon: "📄",
                title: "Export Reports",
                desc: "Download order history and invoices in multiple formats",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-normal text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHOLESALER ADMIN PANEL */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
                For Wholesalers
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-6">
                Powerful Admin Panel
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Manage your entire business from one comprehensive dashboard
                designed for wholesalers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Dashboard overview",
                  "Order management",
                  "Customer relationships",
                  "Product catalog",
                  "Inventory tracking",
                  "Pricing management",
                  "Analytics & reports",
                  "Payment processing",
                  "Shipping management",
                  "User permissions",
                  "Bulk operations",
                  "API integrations",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 font-light"
                  >
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-green-600 text-white px-10 py-4 rounded-full font-normal hover:bg-green-700 transition shadow-lg">
                Explore Admin Features
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-teal-200 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Admin Dashboard"
                className="relative w-full rounded-2xl shadow-2xl border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STOCK MANAGEMENT */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-normal tracking-widest uppercase">
              Inventory Control
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-3 mb-4">
              Advanced Stock Management
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Real-time inventory tracking and automated stock alerts for
              wholesalers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Real-Time Sync",
                icon: "🔄",
                features: [
                  "Automatic updates",
                  "Multi-location tracking",
                  "Batch management",
                  "Expiry date tracking",
                ],
              },
              {
                title: "Smart Alerts",
                icon: "🔔",
                features: [
                  "Low stock warnings",
                  "Reorder notifications",
                  "Expiring products",
                  "Out of stock alerts",
                ],
              },
              {
                title: "Analytics",
                icon: "📈",
                features: [
                  "Inventory reports",
                  "Movement analysis",
                  "Forecasting tools",
                  "Dead stock identification",
                ],
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 font-light"
                    >
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Inventory Management Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Bulk Upload",
                  desc: "Import inventory via CSV or Excel files",
                },
                {
                  title: "Barcode Scanner",
                  desc: "Quick product lookup and stock updates",
                },
                {
                  title: "Stock Transfers",
                  desc: "Move inventory between warehouses seamlessly",
                },
                {
                  title: "Supplier Integration",
                  desc: "Sync with supplier systems automatically",
                },
                {
                  title: "Audit Trails",
                  desc: "Complete history of all inventory changes",
                },
                {
                  title: "Custom Categories",
                  desc: "Organize products with custom taxonomies",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <span className="text-green-500 mt-1">●</span>
                  <div>
                    <h4 className="font-normal text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-slate-900 to-gray-800 py-20 md:py-28 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to experience these features?
          </h2>
          <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto">
            Join thousands of pharmacies and wholesalers already using RxonDeal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-green-600 text-white px-12 py-4 rounded-full font-normal hover:bg-green-500 shadow-2xl shadow-green-900/30 transition hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="text-white font-light hover:text-green-400 transition">
              Schedule a Demo →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ("use client");

// import React, { useState } from "react";
// import {
//   Shield,
//   Eye,
//   Lock,
//   Database,
//   UserCheck,
//   RefreshCw,
//   Mail,
//   ChevronRight,
// } from "lucide-react";

// const sections = [
//   { id: "overview", label: "Overview", icon: <Shield className="w-4 h-4" /> },
//   {
//     id: "collection",
//     label: "Data We Collect",
//     icon: <Database className="w-4 h-4" />,
//   },
//   { id: "usage", label: "How We Use It", icon: <Eye className="w-4 h-4" /> },
//   {
//     id: "sharing",
//     label: "Data Sharing",
//     icon: <UserCheck className="w-4 h-4" />,
//   },
//   { id: "security", label: "Security", icon: <Lock className="w-4 h-4" /> },
//   {
//     id: "rights",
//     label: "Your Rights",
//     icon: <RefreshCw className="w-4 h-4" />,
//   },
//   { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
// ];

// export default function PrivacyPolicy() {
//   const [active, setActive] = useState("overview");

//   return (
//     <main className="min-h-screen bg-white text-gray-800 font-light">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-cyan-600 text-white py-16 md:py-24">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
//           <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-200 rounded-full blur-[120px]"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
//             <span className="text-sm font-light tracking-wide">
//               Last updated: January 15, 2025
//             </span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-4 leading-[1.1]">
//             Privacy{" "}
//             <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-white">
//               Policy
//             </span>
//           </h1>
//           <p className="text-base md:text-lg text-green-50 font-light max-w-2xl leading-relaxed">
//             At RxonDeal, your privacy is a fundamental right — not an
//             afterthought. Here's exactly how we handle your data.
//           </p>
//         </div>
//       </section>

//       {/* TRUST BADGES */}
//       <section className="py-8 bg-green-50 border-b border-green-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               "HIPAA Compliant",
//               "GDPR Ready",
//               "AES-256 Encrypted",
//               "SOC 2 Type II",
//               "No Data Selling",
//             ].map((badge, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-2 text-green-700 text-sm font-light"
//               >
//                 <span className="text-green-500">✓</span> {badge}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-12">
//             {/* Sidebar Navigation */}
//             <aside className="w-full lg:w-64 flex-shrink-0">
//               <div className="sticky top-20 bg-gray-50 rounded-2xl p-4 border border-gray-100">
//                 <p className="text-xs uppercase tracking-widest text-gray-400 font-light mb-4 px-2">
//                   Contents
//                 </p>
//                 <nav className="space-y-1">
//                   {sections.map((sec) => (
//                     <button
//                       key={sec.id}
//                       onClick={() => setActive(sec.id)}
//                       className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
//                         active === sec.id
//                           ? "bg-green-600 text-white"
//                           : "text-gray-600 hover:bg-white hover:text-green-600"
//                       }`}
//                     >
//                       <span className="flex items-center gap-2">
//                         {sec.icon} {sec.label}
//                       </span>
//                       <ChevronRight className="w-3 h-3 opacity-50" />
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <div className="flex-1 max-w-3xl">
//               <div id="overview" className="mb-12">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Shield className="w-7 h-7 text-green-500" /> Overview
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-4">
//                   RxonDeal, Inc. ("RxonDeal," "we," "us," or "our") operates the
//                   RxonDeal platform — a pharmaceutical marketplace connecting
//                   pharmacies with verified global suppliers. This Privacy Policy
//                   explains how we collect, use, disclose, and safeguard your
//                   information when you use our platform.
//                 </p>
//                 <p className="text-gray-600 font-light leading-relaxed">
//                   By accessing or using RxonDeal, you agree to the collection
//                   and use of information as described in this policy. We are
//                   committed to protecting your personal data in compliance with
//                   HIPAA, GDPR, and applicable data protection laws.
//                 </p>
//               </div>

//               <div id="collection" className="mb-12">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Database className="w-7 h-7 text-green-500" /> Data We
//                   Collect
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 {[
//                   {
//                     title: "Account Information",
//                     desc: "Name, email address, pharmacy license number, business address, phone number, and login credentials.",
//                   },
//                   {
//                     title: "Transaction Data",
//                     desc: "Order history, purchase amounts, supplier interactions, invoice details, and payment information (processed securely via PCI-DSS compliant processors).",
//                   },
//                   {
//                     title: "Usage Data",
//                     desc: "Pages visited, features used, session duration, browser type, IP address, and device identifiers for platform optimization.",
//                   },
//                   {
//                     title: "Pharmacy Inventory Data",
//                     desc: "Stock levels, product catalogs, and reorder thresholds you configure — used only to deliver our core services.",
//                   },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex gap-4 mb-5 p-5 bg-gray-50 rounded-xl border border-gray-100"
//                   >
//                     <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
//                       {i + 1}
//                     </span>
//                     <div>
//                       <h4 className="font-normal text-gray-900 mb-1">
//                         {item.title}
//                       </h4>
//                       <p className="text-gray-500 text-sm font-light leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div id="usage" className="mb-12">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Eye className="w-7 h-7 text-green-500" /> How We Use Your
//                   Data
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-4">
//                   We use your information for the following legitimate purposes:
//                 </p>
//                 <ul className="space-y-3">
//                   {[
//                     "Providing and maintaining our pharmaceutical marketplace platform",
//                     "Processing orders and facilitating supplier transactions",
//                     "Sending order confirmations, invoices, and service notifications",
//                     "Providing customer support and resolving disputes",
//                     "Improving platform features through anonymized usage analytics",
//                     "Complying with legal obligations including HIPAA and tax reporting",
//                     "Sending product updates and marketing communications (with your consent)",
//                   ].map((item, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-gray-600 font-light text-sm md:text-base"
//                     >
//                       <span className="text-green-500 mt-0.5 flex-shrink-0">
//                         ✓
//                       </span>{" "}
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div id="sharing" className="mb-12">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <UserCheck className="w-7 h-7 text-green-500" /> Data Sharing
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <div className="bg-green-50 border border-green-100 rounded-xl p-5 mb-6">
//                   <p className="text-green-800 font-normal text-sm">
//                     We do not sell, rent, or trade your personal information to
//                     third parties for marketing purposes — ever.
//                   </p>
//                 </div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-4">
//                   We may share your information only in these limited
//                   circumstances:
//                 </p>
//                 {[
//                   {
//                     title: "Verified Suppliers",
//                     desc: "Order and shipping details shared only with suppliers you explicitly choose to transact with.",
//                   },
//                   {
//                     title: "Service Providers",
//                     desc: "Trusted vendors who assist us (payment processors, cloud hosting, analytics) under strict data processing agreements.",
//                   },
//                   {
//                     title: "Legal Requirements",
//                     desc: "When required by law, court order, or to protect the rights and safety of our users and platform.",
//                   },
//                   {
//                     title: "Business Transfers",
//                     desc: "In the event of a merger or acquisition, with advance notice provided to all users.",
//                   },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="mb-4 p-5 border border-gray-100 rounded-xl hover:border-green-100 transition"
//                   >
//                     <h4 className="font-normal text-gray-900 mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-500 text-sm font-light">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div id="security" className="mb-12">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Lock className="w-7 h-7 text-green-500" /> Security
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-6">
//                   We implement industry-leading security measures to protect
//                   your data against unauthorized access, alteration, disclosure,
//                   or destruction.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {[
//                     "AES-256 encryption at rest",
//                     "TLS 1.3 encryption in transit",
//                     "Multi-factor authentication",
//                     "Regular penetration testing",
//                     "Quarterly security audits",
//                     "SOC 2 Type II certified",
//                     "HIPAA compliant infrastructure",
//                     "24/7 intrusion monitoring",
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 font-light"
//                     >
//                       <span className="text-green-500">✓</span> {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div id="rights" className="mb-12">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <RefreshCw className="w-7 h-7 text-green-500" /> Your Rights
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <p className="text-gray-600 font-light leading-relaxed mb-6">
//                   Depending on your location, you have the following rights
//                   regarding your personal data:
//                 </p>
//                 {[
//                   {
//                     right: "Access",
//                     desc: "Request a copy of the personal data we hold about you.",
//                   },
//                   {
//                     right: "Correction",
//                     desc: "Request that we correct inaccurate or incomplete data.",
//                   },
//                   {
//                     right: "Deletion",
//                     desc: "Request erasure of your personal data ('right to be forgotten').",
//                   },
//                   {
//                     right: "Portability",
//                     desc: "Receive your data in a structured, machine-readable format.",
//                   },
//                   {
//                     right: "Objection",
//                     desc: "Object to processing of your personal data for certain purposes.",
//                   },
//                   {
//                     right: "Withdraw Consent",
//                     desc: "Withdraw marketing consent at any time via account settings.",
//                   },
//                 ].map((item, i) => (
//                   <div key={i} className="flex gap-4 mb-4 items-start">
//                     <span className="flex-shrink-0 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-normal mt-0.5">
//                       {item.right}
//                     </span>
//                     <p className="text-gray-600 font-light text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//                 <p className="text-gray-500 text-sm font-light mt-4">
//                   To exercise any right, email us at{" "}
//                   <span className="text-green-600">privacy@rxondeal.com</span>.
//                   We respond within 30 days.
//                 </p>
//               </div>

//               <div id="contact" className="mb-4">
//                 <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
//                   <Mail className="w-7 h-7 text-green-500" /> Contact Our
//                   Privacy Team
//                 </h2>
//                 <div className="h-px w-12 bg-green-400 mb-6"></div>
//                 <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl">
//                   <p className="font-light mb-4 leading-relaxed">
//                     For privacy-related inquiries, data subject requests, or
//                     concerns, contact our dedicated Data Protection Officer:
//                   </p>
//                   <p className="font-normal">RxonDeal Privacy Team</p>
//                   <p className="text-green-100 font-light text-sm">
//                     privacy@rxondeal.com
//                   </p>
//                   <p className="text-green-100 font-light text-sm mt-1">
//                     123 Pharma Avenue, New York, NY 10001
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
