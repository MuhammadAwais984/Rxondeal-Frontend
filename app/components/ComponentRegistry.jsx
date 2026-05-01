"use client";

// ── Home components ─────────────────────────
import HeroSection from "@/app/components/home/HeroSection";
import StatsSection from "@/app/components/home/StatsSection";
import FeaturesSection from "@/app/components/home/FeaturesSection";
import ReviewsSection from "@/app/components/home/ReviewsSection";
import MetricsSection from "@/app/components/home/MetricsSection";
import FaqsSection from "@/app/components/home/FaqsSection";
import CtaSection from "@/app/components/home/CtaSection";
import { PicSection1, PicSection2 } from "@/app/components/home/PicSections";
import ExtraFeatures from "@/app/components/home/ExtraFeatures";
import AccountForcement from "@/app/components/home/CreateAccountForcement";
import Overview from "@/app/components/home/Overview";
import OnboardCards from "@/app/components/home/Onboard";
import PointsSection from "@/app/components/home/PointsSection";
import VerticalCards from "@/app/components/home/VerticalCards";
import MetricsStyle2 from "@/app/components/home/MetricsStyle2";
import HeroStyle2 from "@/app/components/Hero/HeroStyle2";
import HeroStyle3 from "@/app/components/Hero/HeroStyle3";
// ── About components ───────────────────────
import AboutHero from "@/app/components/about/AboutHero";
import AboutStory from "@/app/components/about/AboutStory";
import AboutValues from "@/app/components/about/AboutValues";
import AboutCta from "@/app/components/about/AboutCta";
import Team from "@/app/components/about/Team";
import Partners from "@/app/components/about/Partners";
import CeoMessage from "@/app/components/about/Message";
// ── Contact components ──────────────────────
import ContactForm from "@/app/components/contact/form";

/**
 * REGISTRY MAP
 *
 * Key   = exact "__component" string from Strapi response
 * Value = { component, getProps(data) }
 *
 * HOW TO FIND YOUR KEY:
 * Visit: http://localhost:1337/api/pages?populate[sections][populate]=*
 * Look for "__component" in the JSON — copy it exactly here.
 *
 * YOUR ACTUAL STRAPI KEYS (confirmed from your API response):
 *   "stat-section.stats"   → single stat item
 *   "contact.contact-card" → contact card
 *
 * Add more as you add components to Strapi pages.
 */
const REGISTRY = {
  // ────────────────────────────────────────────────────────
  // CONFIRMED — these match your actual Strapi __component values
  // ────────────────────────────────────────────────────────

  // Strapi sends each stat as its own section object:
  // { __component: "stat-section.stats", label: "hello", value: "12121212" }
  "section.stats": {
    component: StatsSection,
    getProps: (data) => ({
      // Try "Stats" first (capital) — Strapi uses the field name you set
      // If blank, check console log and change to lowercase "stats"
      stats: data.Stats ?? data.stats ?? [],
    }),
  },

  "section.hero-home": {
    component: HeroSection,
    getProps: (data) => ({ hero: data.heroHome }),
  },
  "section.about-hero": {
    component: AboutHero,
    getProps: (data) => ({
      badgeText: data.aboutHero?.badgeText,
      title: data.aboutHero?.title,
      subTitle: data.aboutHero?.subTitle,
      variant: data.aboutHero?.variant ?? "default",
    }),
  },
  "section.hero-style2": {
    component: HeroStyle2,
    getProps: (data) => ({
      badgeText: data.badgeText,
      title: data.title,
      subTitle: data.subTitle,
      image: data.image?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`
        : null,
      variant: data.variant ?? "default",
    }),
  },
  "section.hero-style3": {
    component: HeroStyle3,
    getProps: (data) => ({
      badgeText: data.heroStyle3?.badgeText,
      title: data.heroStyle3?.title,
      subTitle: data.heroStyle3?.subTitle,
      variant: data.heroStyle3?.variant ?? "default",
    }),
  },

  "section.features": {
    component: FeaturesSection,
    getProps: (data) => ({
      badgeText: data.badgeText, // ← from section level
      title: data.title, // ← from section level
      features: (data.Features ?? []).map((f) => ({
        label: f.label,
        description: f.description,
        topRightext: f.topRightext,
        icons: f.icon?.icons ?? null,
      })),
    }),
  },

  //Extra Features
  "section.extra-features": {
    component: ExtraFeatures,
    getProps: (data) => ({
      badgeText: data.badgeText,
      title: data.title,
      extraFeatures: (data.extraFeatures ?? []).map((f) => ({
        title: f.title,
        description: f.description,
        icons: f.icon?.icons ?? null,
      })),
    }),
  },

  // ✅ Should be this
  "section.left-pic": {
    component: PicSection1,
    getProps: (data) => ({ data: data.LeftPic }),
  },
  "section.right-pic": {
    component: PicSection2,
    getProps: (data) => ({ data: data.RightPic }),
  },

  // Reviews
  "review-section.review": {
    component: ReviewsSection,
    getProps: (data) => ({ reviews: data }),
  },

  // Metrics
  "section.metrics": {
    component: MetricsSection,
    getProps: (data) => ({ metrics: data.metrics ?? [] }),
  },

  "section.matrics-style2": {
    component: MetricsStyle2,
    getProps: (data) => ({ matrics: data.metricsStyle2 ?? [] }),
    //
  },

  // FAQs
  "section.questions-answer": {
    component: FaqsSection,
    getProps: (data) => ({
      faqs: {
        badge: data.badge,
        title: data.title,
        questionAnswer: (data.faqs ?? []).map((f) => ({
          question: f.question,
          answer: f.answer,
        })),
      },
    }),
  },
  "section.verticle-cards": {
    component: VerticalCards,
    getProps: (data) => ({
      title: data.title,
      subTitle: data.subTitle,
      cards: (data.cards ?? []).map((c) => ({
        title: c.title,
        subText: c.subText,
      })),
    }),
  },

  "section.overview": {
    component: Overview,
    getProps: (data) => ({
      title: data.title,
      paragraph: data.paragraph,
    }),
  },
  //Account Forcement
  "section.create-account": {
    component: AccountForcement,
    getProps: (data) => ({
      badgeText: data.createAccount?.badgeText,
      title: data.createAccount?.title,
      subTitle: data.createAccount?.subTitle,
      buttons: data.createAccount?.buttons ?? [],
    }),
  },

  "section.points": {
    component: PointsSection,
    getProps: (data) => ({
      title: data.title,
      subText: data.subText,
      points: data.points ?? [],
    }),
  },

  "section.onboard": {
    component: OnboardCards,
    getProps: (data) => ({
      onboard: (data.onboard ?? []).map((card) => ({
        title: card.title,
        subText: card.subText,
        icons: card.icons,
        points: card.points ?? [],
        button: card.button,
      })),
    }),
  },

  // CTA
  "sections.cta": {
    component: CtaSection,
    getProps: () => ({}),
  },

  // About page sections -----------------------------------------------------------------------------------

  "section.about-story": {
    component: AboutStory,
    getProps: (data) => ({
      title: data.aboutStory?.title,
      subTitle: data.aboutStory?.subTitle,
      paragraph: data.aboutStory?.paragraph, // ← single string
      stats: data.aboutStory?.Stats ?? [], // ← capital S
      image: data.aboutStory?.image?.url ?? null,
    }),
  },

  "section.about-features": {
    component: AboutValues,
    getProps: (data) => ({
      badgeText: data.badgeText,
      title: data.title,
      values: (data.aboutFeatures ?? []).map((v) => ({
        title: v.label, // ← Strapi uses "label" not "title"
        desc: v.description, // ← Strapi uses "description" not "desc"
        icon: v.icon?.icons ?? null, // ← drill into icon.icons
      })),
    }),
  },

  "section.team": {
    component: Team,
    getProps: (data) => ({
      badgeText: data.team?.badgeText, // ← drill into team
      title: data.team?.title,
      members: (data.team?.members ?? []).map((m) => ({
        name: m.name,
        role: m.role,
        image: m.image?.url ?? null,
      })),
    }),
  },

  "section.about-cta": {
    component: AboutCta,
    getProps: (data) => ({
      title: data.title,
      subTitle: data.subTitle,
      buttonText: data.buttonText,
      buttonLink: data.buttonLink,
    }),
  },

  "section.partners": {
    component: Partners,
    getProps: (data) => ({
      badgeText: data.badgeText,
      title: data.title,
      subTitle: data.subTitle,
      partners: (data.partners ?? []).map((p) => ({
        title: p.title,
        subTitle: p.subTitle,
      })),
    }),
  },
  "section.form": {
    component: ContactForm,
    getProps: (data) => ({
      title: data.form?.title,
      subTitle: data.form?.subTitle,
      fields: data.form?.fileds ?? [], // ← note Strapi typo "fileds"
      button: data.form?.button ?? [],
    }),
  },

  "section.message": {
    component: CeoMessage,
    getProps: (data) => ({
      badgeText: data.message?.badgeText,
      title: data.message?.title,
      subText: data.message?.subText,
      message: data.message?.message,
      name: data.message?.name,
      role: data.message?.role,
      image: data.message?.image?.url ?? null,
    }),
  },
};

export default REGISTRY;
