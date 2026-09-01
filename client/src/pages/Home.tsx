/**
 * Signal Field Guide design: a disclosure-forward editorial landing page.
 * Uses warm paper, charcoal space, Signal Orange (#F05A28), DM Serif Display, and Manrope.
 * Product purchases happen only on third-party provider or retailer websites.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { publishedReviews } from "../data/reviewCatalog";
import "./HomeEditorial.css";

const reviewPoints = [
  "What the provider currently names on the offer page or label",
  "The terms, support, return, and delivery details that may affect a purchase",
  "The gaps, label checks, and questions that deserve a closer look",
];

const steps = [
  { number: "01", title: "Start with the source.", copy: "Open the provider’s official page to see its current description, product information, and purchase terms." },
  { number: "02", title: "Assess the offer.", copy: "Take your time with the details that matter: terms, fulfilment, support, return policy, and the provider’s current product information." },
  { number: "03", title: "Choose deliberately.", copy: "If the official information aligns with your needs, continue with the provider. If it does not, close the page and keep looking." },
];

const editorialStandards = [
  { number: "A", title: "The named details.", copy: "We separate what a provider visibly states from what still needs a current-label or policy check." },
  { number: "B", title: "The practical questions.", copy: "A review should help a reader find the terms, return context, ingredient or feature list, and relevant cautions—not rush a decision." },
  { number: "C", title: "The clear relationship.", copy: "Where a review includes an approved affiliate link, that relationship is disclosed near the link. No disguised routes or invented proof." },
];

const faqs = [
  { question: "Is this the official product website?", answer: "No. The Buyer’s Ledger is an independent affiliate buyer’s guide. It does not sell products or operate a checkout. Any purchase happens on the relevant third-party provider or retailer website, which is responsible for pricing, payment, terms, delivery, and support." },
  { question: "Will the price or terms be current here?", answer: "Always rely on the provider’s official page for current pricing, product scope, availability, guarantees, and terms. Those details can change after this page is published." },
  { question: "How is this page supported?", answer: "If you use a qualifying affiliate link and make a purchase on a third-party website, The Buyer’s Ledger may receive a commission at no additional cost to you. This does not change the price you see from the provider." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="The Buyer’s Ledger home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-name">THE BUYER’S <sup>LEDGER</sup></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#review-catalog" onClick={closeMenu}>Buyer guides</a>
          <a href="#overview" onClick={closeMenu}>The standard</a>
          <a href="#approach" onClick={closeMenu}>How it works</a>
          <a href="#questions" onClick={closeMenu}>FAQ</a>
          <a className="nav-cta" href="#review-catalog" onClick={closeMenu}>Browse guides <ArrowDownRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content reveal">
          <div className="eyebrow"><span>Independent affiliate buyer’s guide</span><span className="eyebrow-line" /></div>
          <h1>Buy with context.<br /><em>Not with pressure.</em></h1>
          <p className="hero-copy">The Buyer’s Ledger is a premium, independent guide for readers who want to inspect an offer’s visible details, buyer terms, and disclosure status before visiting the provider.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#review-catalog">Browse buyer guides <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#review-catalog">See all buyer guides <ArrowDownRight size={17} /></a>
          </div>
          <p className="disclosure hero-disclosure">Affiliate disclosure: individual buyer guides may contain affiliate links. If you make a qualifying purchase on the linked third-party website, The Buyer’s Ledger may earn a commission at no added cost to you.</p>
        </div>
        <aside className="hero-aside reveal reveal-delay" aria-label="How to use this buyer’s guide">
          <div className="aside-topline"><span>Buyer’s brief</span><span>01—10</span></div>
          <span className="aside-mark aside-signal" aria-hidden="true"><i /><i /><i /></span>
          <p>Use this as an independent buyer’s brief before deciding whether an official product page deserves your time and attention.</p>
          <a href="#approach" className="aside-link">See how it works <ArrowDownRight size={17} /></a>
        </aside>
      </section>

      <section className="landing-review-catalog section" id="review-catalog">
        <div className="section-index"><span>01</span><span>BUYER GUIDES</span></div>
        <div className="landing-catalog-heading reveal"><h2>Choose a buyer’s guide.</h2><p>Every published Buyer’s Ledger guide is below. A provider link is shown only when a specific third-party destination has been verified and can be clearly disclosed.</p></div>
        <div className="landing-catalog-grid">
          {publishedReviews.map((review, index) => (
            <a className={`landing-catalog-card reveal ${review.affiliateAvailable ? "has-affiliate-route" : ""} ${index % 3 === 1 ? "reveal-delay" : index % 3 === 2 ? "reveal-delay-2" : ""}`} href={review.href} key={review.number}>
              <div className="landing-catalog-meta"><span>FILE / {review.number}</span><span>{review.status}</span></div>
              <span className={review.affiliateAvailable ? "affiliate-route-status is-active" : "affiliate-route-status"}>{review.affiliateAvailable ? "Provider link available" : "Provider link pending"}</span>
              <h3>{review.title}</h3><p>{review.copy}</p>
              <span className="landing-catalog-link">{review.affiliateAvailable ? "Open buyer’s guide & provider link" : "Open buyer’s guide"} <ArrowUpRight size={16} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="overview section" id="overview">
        <div className="section-index"><span>02</span><span>THE BUYER’S STANDARD</span></div>
        <div className="overview-intro reveal"><p className="kicker">An elite buyer’s filter</p><h2>Not a verdict.<br />A sharper starting point.</h2></div>
        <div className="overview-panel reveal reveal-delay"><p>The Buyer’s Ledger does not sell the products it covers or process product payments. It creates a clearer path to the provider’s current information so readers can decide what deserves further attention before buying from that provider.</p><div className="checklist" aria-label="Details to review on the official page">{reviewPoints.map((point) => <div className="check-row" key={point}><Check size={16} strokeWidth={2.2} /><span>{point}</span></div>)}</div><a className="inline-cta" href="#review-catalog">Open the buyer’s guide shelf <ExternalLink size={16} /></a></div>
      </section>

      <section className="editorial-ledger section" id="editorial-standard">
        <div className="section-index"><span>03</span><span>THE LEDGER STANDARD</span></div>
        <div className="editorial-ledger-heading reveal"><p className="kicker">The buyer’s advantage</p><h2>Clear terms.<br /><em>No manufactured hype.</em></h2><p>Every guide is built to make a reader’s next click more informed, not more pressured. The point is a practical look at what is visible, what remains unclear, and what belongs on the provider’s current page.</p></div>
        <div className="editorial-standard-grid">{editorialStandards.map((standard, index) => <article className={`editorial-standard-card reveal ${index === 1 ? "reveal-delay" : index === 2 ? "reveal-delay-2" : ""}`} key={standard.number}><span>{standard.number}</span><h3>{standard.title}</h3><p>{standard.copy}</p></article>)}</div>
      </section>

      <div className="number-band" aria-hidden="true"><span>BUYER’S</span><strong>LEDGER</strong><span>BUYER’S</span><strong>LEDGER</strong><span>BUYER’S</span><strong>LEDGER</strong></div>

      <section className="approach section" id="approach">
        <div className="section-index"><span>04</span><span>HOW TO BUY SMARTER</span></div>
        <div className="approach-heading reveal"><p className="kicker">No added pressure</p><h2>Three checks.<br />One considered purchase.</h2></div>
        <div className="step-list">{steps.map((step, index) => <article className={`step-card reveal ${index === 1 ? "reveal-delay" : index === 2 ? "reveal-delay-2" : ""}`} key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
        <div className="approach-note reveal"><span className="note-mark" aria-hidden="true">+</span><p><strong>Worth repeating:</strong> This referral page is not medical, financial, legal, or professional advice. Use your own judgment and consult an appropriate professional when needed.</p></div>
      </section>

      <section className="questions section" id="questions">
        <div className="section-index section-index-light"><span>05</span><span>CLEAR ANSWERS</span></div>
        <div className="questions-intro reveal"><p className="kicker kicker-light">Independent by design</p><h2>Simple answers,<br />plain language.</h2><p>Transparency is part of the point. Here is what this page is—and what it is not.</p></div>
        <div className="faq-list reveal reveal-delay">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <article className={isOpen ? "faq-item is-open" : "faq-item"} key={faq.question}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{faq.question}</span><ChevronDown size={20} strokeWidth={1.7} /></button><div className="faq-answer"><p>{faq.answer}</p></div></article>; })}</div>
      </section>

      <section className="decision section" id="next-step">
        <div className="decision-line" aria-hidden="true" />
        <div className="decision-content reveal"><p className="kicker">Find your next guide</p><h2>Choose a guide.<br /><em>Then go to the source.</em></h2><p>Explore the full buyer’s-guide shelf to find a product-specific brief. Each guide puts the available provider information, disclosure status, and open questions in plain view.</p><a className="button button-primary" href="#review-catalog">Browse every buyer’s guide <ArrowUpRight size={18} /></a></div>
        <div className="decision-symbol reveal reveal-delay" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <footer className="footer">
        <div className="footer-brand"><a className="brand" href="#top" aria-label="Back to top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span className="brand-name">THE BUYER’S <sup>LEDGER</sup></span></a><p>Independent affiliate buyer’s guide.</p><a className="footer-upcoming-link" href="#review-catalog">All published buyer’s guides <ArrowUpRight size={14} /></a></div>
        <div className="footer-legal"><p><strong>Affiliate disclosure.</strong> This site may earn a commission if you purchase through a qualifying affiliate link on a third-party website. The Buyer’s Ledger does not sell products or process payments.</p><p>© {new Date().getFullYear()} The Buyer’s Ledger. This site is independent and is not affiliated with, endorsed by, or operated by the product providers it covers.</p><nav className="footer-legal-links" aria-label="Legal navigation"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/affiliate-disclosure">Affiliate disclosure</a></nav></div>
      </footer>
    </main>
  );
}
