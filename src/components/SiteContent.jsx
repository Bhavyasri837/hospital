export default function SiteContent() {
  return (
    <>



<div id="loading-screen" aria-hidden="true">
  <div className="loader-mark">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="loader-pulse" d="M2 30H14L20 14L28 42L34 22L38 30H54" stroke="url(#loaderGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="loaderGrad" x1="0" y1="0" x2="56" y2="0">
          <stop offset="0" stopColor="#0B6FB0"/>
          <stop offset="1" stopColor="#3FD0E0"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
  <p className="loader-label">Meridian Health</p>
</div>

<a className="skip-link" href="#main-content">Skip to content</a>


<header className="navbar" id="navbar">
  <nav className="nav-inner" aria-label="Primary">
    <a href="#top" className="brand" aria-label="Meridian Health home">
      <svg width="30" height="30" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 30H14L20 14L28 42L34 22L38 30H54" stroke="var(--blue-600)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>Meridian <em>Health</em></span>
    </a>

    <ul className="nav-links" id="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#doctors">Doctors</a></li>
      <li><a href="#departments">Departments</a></li>
      <li><a href="#packages">Packages</a></li>
      <li><a href="#testimonials">Stories</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="nav-actions">
      <button className="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" aria-pressed="false">
        <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8"/><path d="M12 2.5v2.6M12 18.9v2.6M4.4 4.4l1.8 1.8M17.8 17.8l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.4 19.6l1.8-1.8M17.8 6.2l1.8-1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
      </button>
      <a href="#appointment" className="btn btn-primary btn-sm">Book Appointment</a>
      <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</header>

<main id="main-content">


<section className="hero" id="top">
  <div className="hero-bg" aria-hidden="true"></div>
  <div className="hero-inner">
    <div className="hero-copy reveal">
      <span className="eyebrow">Multi-specialty hospital · Est. 1998</span>
      <h1>Care that listens.<br />Medicine that <span className="grad-text">leads.</span></h1>
      <p className="hero-sub">Meridian Health brings together award-winning specialists, advanced diagnostics, and calm, human-centred care — all under one roof, available around the clock.</p>
      <div className="hero-cta">
        <a href="#appointment" className="btn btn-primary">Book an Appointment</a>
        <a href="#emergency" className="btn btn-ghost">
          <span className="pulse-dot" aria-hidden="true"></span> Emergency Line
        </a>
      </div>
      <div className="hero-trust">
        <div className="trust-item"><strong>4.9/5</strong><span>Patient rating</span></div>
        <div className="trust-item"><strong>120+</strong><span>Specialist doctors</span></div>
        <div className="trust-item"><strong>24/7</strong><span>Emergency care</span></div>
      </div>
    </div>

    <div className="hero-visual reveal" data-reveal-delay="120">
      <div className="glass-card appointment-preview">
        <div className="ap-head">
          <span className="ap-dot"></span>
          <p>Next available slot</p>
        </div>
        <h3>Dr. Amara Ellison</h3>
        <p className="ap-role">Cardiology · Senior Consultant</p>
        <div className="ap-slot">
          <span>Today</span>
          <strong id="hero-time">4:30 PM</strong>
        </div>
        <a href="#appointment" className="btn btn-primary btn-sm btn-full">Reserve this slot</a>
      </div>
      <svg className="ecg-signature" viewBox="0 0 420 120" fill="none" aria-hidden="true">
        <path id="ecg-path" d="M0 60H60L78 20L98 100L118 40L134 60H180L198 30L216 90L234 50L250 60H420"
          stroke="url(#ecgGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <defs>
          <linearGradient id="ecgGrad" x1="0" y1="0" x2="420" y2="0">
            <stop offset="0" stopColor="#0B6FB0" stopOpacity="0.15"/>
            <stop offset="0.5" stopColor="#0B6FB0"/>
            <stop offset="1" stopColor="#3FD0E0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</section>


<section className="section about" id="about">
  <div className="container about-grid">
    <div className="about-visual reveal">
      <div className="about-frame">
        <div className="about-block block-a"></div>
        <div className="about-block block-b"></div>
        <div className="glass-card float-card">
          <p className="fc-label">Accredited</p>
          <strong>NABH &amp; JCI Certified Facility</strong>
        </div>
      </div>
    </div>
    <div className="about-copy reveal">
      <span className="eyebrow">About Meridian</span>
      <h2>Twenty-five years of care built around the patient, not the process.</h2>
      <p>We started Meridian Health with one belief: hospitals should feel calmer than the world outside them. Today that means private consultation suites, transparent pricing, and clinical teams who coordinate your care from first symptom to full recovery.</p>
      <ul className="about-list">
        <li><span className="check">✓</span> Integrated diagnostics &amp; same-day results</li>
        <li><span className="check">✓</span> Dedicated care coordinator for every patient</li>
        <li><span className="check">✓</span> 14 specialty centres under one campus</li>
      </ul>
      <a href="#departments" className="link-arrow">Explore our departments →</a>
    </div>
  </div>
</section>


<section className="section stats" id="stats">
  <div className="container stats-grid reveal">
    <div className="stat-item">
      <strong className="counter" data-target="120" data-suffix="+">0</strong>
      <span>Specialist Doctors</span>
    </div>
    <div className="stat-item">
      <strong className="counter" data-target="48000" data-suffix="+">0</strong>
      <span>Patients Treated / Year</span>
    </div>
    <div className="stat-item">
      <strong className="counter" data-target="99" data-suffix="%">0</strong>
      <span>Patient Satisfaction</span>
    </div>
    <div className="stat-item">
      <strong className="counter" data-target="24" data-suffix="/7">0</strong>
      <span>Emergency Availability</span>
    </div>
  </div>
</section>


<section className="section" id="doctors">
  <div className="container">
    <div className="section-head reveal">
      <span className="eyebrow">Meet the team</span>
      <h2>Specialists trusted with the moments that matter.</h2>
      <p>Every consultant at Meridian is board-certified and trained at leading institutions worldwide.</p>
    </div>

    <div className="doctor-grid">
      <article className="doctor-card reveal">
        <div className="doctor-photo dp-1" aria-hidden="true"></div>
        <div className="doctor-body">
          <h3>Dr. Amara Ellison</h3>
          <p className="doctor-role">Cardiology · Senior Consultant</p>
          <p className="doctor-meta">18 yrs experience · Harvard Medical</p>
          <div className="doctor-foot">
            <span className="rating">★ 4.9</span>
            <a href="#appointment" className="link-arrow-sm">Book →</a>
          </div>
        </div>
      </article>

      <article className="doctor-card reveal" data-reveal-delay="90">
        <div className="doctor-photo dp-2" aria-hidden="true"></div>
        <div className="doctor-body">
          <h3>Dr. Rohan Kapoor</h3>
          <p className="doctor-role">Neurology · Head of Department</p>
          <p className="doctor-meta">22 yrs experience · Johns Hopkins</p>
          <div className="doctor-foot">
            <span className="rating">★ 4.8</span>
            <a href="#appointment" className="link-arrow-sm">Book →</a>
          </div>
        </div>
      </article>

      <article className="doctor-card reveal" data-reveal-delay="180">
        <div className="doctor-photo dp-3" aria-hidden="true"></div>
        <div className="doctor-body">
          <h3>Dr. Leila Farouk</h3>
          <p className="doctor-role">Pediatrics · Senior Consultant</p>
          <p className="doctor-meta">15 yrs experience · Imperial College</p>
          <div className="doctor-foot">
            <span className="rating">★ 5.0</span>
            <a href="#appointment" className="link-arrow-sm">Book →</a>
          </div>
        </div>
      </article>

      <article className="doctor-card reveal" data-reveal-delay="270">
        <div className="doctor-photo dp-4" aria-hidden="true"></div>
        <div className="doctor-body">
          <h3>Dr. Marcus Chen</h3>
          <p className="doctor-role">Orthopaedics · Consultant Surgeon</p>
          <p className="doctor-meta">12 yrs experience · Stanford Medicine</p>
          <div className="doctor-foot">
            <span className="rating">★ 4.9</span>
            <a href="#appointment" className="link-arrow-sm">Book →</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>


<section className="section section-tint" id="departments">
  <div className="container">
    <div className="section-head reveal">
      <span className="eyebrow">Departments</span>
      <h2>Fourteen specialty centres, one connected campus.</h2>
      <p>From routine checkups to complex surgery, every department shares the same records, labs and care standards.</p>
    </div>

    <div className="dept-grid">
      <article className="dept-card reveal">
        <div className="dept-icon">❤️</div>
        <h3>Cardiology</h3>
        <p>Heart screening, catheterisation and rehabilitation programs.</p>
      </article>
      <article className="dept-card reveal" data-reveal-delay="60">
        <div className="dept-icon">🧠</div>
        <h3>Neurology</h3>
        <p>Advanced imaging and treatment for brain &amp; nervous system.</p>
      </article>
      <article className="dept-card reveal" data-reveal-delay="120">
        <div className="dept-icon">🦴</div>
        <h3>Orthopaedics</h3>
        <p>Joint replacement, sports medicine and physiotherapy.</p>
      </article>
      <article className="dept-card reveal" data-reveal-delay="180">
        <div className="dept-icon">👶</div>
        <h3>Pediatrics</h3>
        <p>Newborn to adolescent care in a calm, dedicated wing.</p>
      </article>
      <article className="dept-card reveal" data-reveal-delay="240">
        <div className="dept-icon">🩺</div>
        <h3>General Medicine</h3>
        <p>Preventive care, diagnostics and chronic condition management.</p>
      </article>
      <article className="dept-card reveal" data-reveal-delay="300">
        <div className="dept-icon">🔬</div>
        <h3>Oncology</h3>
        <p>Precision diagnostics and multidisciplinary cancer care.</p>
      </article>
    </div>
  </div>
</section>


<section className="emergency" id="emergency">
  <div className="container emergency-inner reveal">
    <div className="emergency-copy">
      <span className="eyebrow eyebrow-light">Emergency services</span>
      <h2>Every second is triaged. Every case is ready before you arrive.</h2>
      <p>Our emergency department is staffed around the clock with trauma specialists, a dedicated ambulance fleet, and direct ICU escalation.</p>
    </div>
    <div className="emergency-cta">
      <a href="tel:+18005551234" className="btn btn-white">
        <span className="pulse-dot pulse-dot-dark" aria-hidden="true"></span> Call Emergency: +1 (800) 555-1234
      </a>
      <p className="emergency-note">Available 24 hours · 365 days a year</p>
    </div>
  </div>
</section>


<section className="section" id="appointment">
  <div className="container appt-grid">
    <div className="appt-copy reveal">
      <span className="eyebrow">Book appointment</span>
      <h2>Reserve your consultation in under a minute.</h2>
      <p>Choose your specialist and preferred time. Our care coordinator will confirm by SMS and email within the hour.</p>
      <ul className="about-list">
        <li><span className="check">✓</span> No waiting-room queues — arrive at your slot</li>
        <li><span className="check">✓</span> Free rescheduling up to 2 hours before</li>
        <li><span className="check">✓</span> Insurance &amp; direct billing accepted</li>
      </ul>
    </div>

    <form className="glass-card appt-form reveal" id="appointment-form" data-reveal-delay="100" noValidate>
      <h3>Appointment details</h3>

      <div className="form-row">
        <label htmlFor="f-name">Full name</label>
        <input id="f-name" name="name" type="text" placeholder="Jordan Blake" required autocomplete="name" />
        <span className="field-error" data-htmlFor="f-name"></span>
      </div>

      <div className="form-row">
        <label htmlFor="f-email">Email address</label>
        <input id="f-email" name="email" type="email" placeholder="you@email.com" required autocomplete="email" />
        <span className="field-error" data-htmlFor="f-email"></span>
      </div>

      <div className="form-row-split">
        <div className="form-row">
          <label htmlFor="f-phone">Phone number</label>
          <input id="f-phone" name="phone" type="tel" placeholder="+1 (___) ___-____" required autocomplete="tel" />
          <span className="field-error" data-htmlFor="f-phone"></span>
        </div>
        <div className="form-row">
          <label htmlFor="f-date">Preferred date</label>
          <input id="f-date" name="date" type="date" required />
          <span className="field-error" data-htmlFor="f-date"></span>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="f-dept">Department</label>
        <select id="f-dept" name="department" required>
          <option value="" disabled >Select a department</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Orthopaedics</option>
          <option>Pediatrics</option>
          <option>General Medicine</option>
          <option>Oncology</option>
        </select>
        <span className="field-error" data-htmlFor="f-dept"></span>
      </div>

      <div className="form-row">
        <label htmlFor="f-notes">Notes for the doctor <span className="optional">(optional)</span></label>
        <textarea id="f-notes" name="notes" rows="3" placeholder="Briefly describe your symptoms or reason for visit"></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-full">Confirm Appointment</button>
      <p className="form-success" id="form-success" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>


<section className="section section-tint" id="packages">
  <div className="container">
    <div className="section-head reveal">
      <span className="eyebrow">Health packages</span>
      <h2>Preventive care, packaged for your life stage.</h2>
      <p>Comprehensive screening bundles with same-day results and a follow-up consultation included.</p>
    </div>

    <div className="package-grid">
      <article className="package-card reveal">
        <h3>Essential</h3>
        <p className="package-desc">Annual wellness check for adults 18–40</p>
        <p className="package-price">$149<span>/screening</span></p>
        <ul>
          <li>Full blood panel</li>
          <li>Blood pressure &amp; BMI review</li>
          <li>15-min GP consultation</li>
        </ul>
        <a href="#appointment" className="btn btn-outline btn-full">Choose Essential</a>
      </article>

      <article className="package-card package-featured reveal" data-reveal-delay="90">
        <span className="package-tag">Most booked</span>
        <h3>Complete</h3>
        <p className="package-desc">Full-body screening with imaging</p>
        <p className="package-price">$389<span>/screening</span></p>
        <ul>
          <li>Everything in Essential</li>
          <li>ECG &amp; chest X-ray</li>
          <li>Abdominal ultrasound</li>
          <li>30-min specialist consultation</li>
        </ul>
        <a href="#appointment" className="btn btn-primary btn-full">Choose Complete</a>
      </article>

      <article className="package-card reveal" data-reveal-delay="180">
        <h3>Executive</h3>
        <p className="package-desc">Advanced diagnostics for 40+</p>
        <p className="package-price">$649<span>/screening</span></p>
        <ul>
          <li>Everything in Complete</li>
          <li>Cardiac stress test</li>
          <li>Tumour marker panel</li>
          <li>Dedicated care coordinator</li>
        </ul>
        <a href="#appointment" className="btn btn-outline btn-full">Choose Executive</a>
      </article>
    </div>
  </div>
</section>


<section className="section" id="testimonials">
  <div className="container">
    <div className="section-head reveal">
      <span className="eyebrow">Patient stories</span>
      <h2>What it feels like to be cared for here.</h2>
    </div>

    <div className="testimonial-wrap reveal">
      <div className="testimonial-track" id="testimonial-track">
        <figure className="testimonial-card">
          <blockquote>“From check-in to discharge, everything felt coordinated. My care team already had my history before I said a word.”</blockquote>
          <figcaption><strong>Sarah Malik</strong><span>Cardiology patient</span></figcaption>
        </figure>
        <figure className="testimonial-card">
          <blockquote>“The health package caught something my previous checkups missed. I'm genuinely grateful for how thorough it was.”</blockquote>
          <figcaption><strong>David Okafor</strong><span>Executive package</span></figcaption>
        </figure>
        <figure className="testimonial-card">
          <blockquote>“My son's surgery was explained clearly at every step. The pediatric wing felt calm, not clinical.”</blockquote>
          <figcaption><strong>Priya Nair</strong><span>Pediatrics parent</span></figcaption>
        </figure>
      </div>
      <div className="testimonial-dots" id="testimonial-dots"></div>
    </div>
  </div>
</section>


<section className="section section-tint" id="faq">
  <div className="container faq-grid">
    <div className="section-head faq-head reveal">
      <span className="eyebrow">FAQ</span>
      <h2>Answers before you ask.</h2>
      <p>Can't find what you need? <a href="#contact" className="link-arrow-sm">Contact our team →</a></p>
    </div>

    <div className="faq-list reveal" data-reveal-delay="80">
      <div className="faq-item">
        <button className="faq-question" aria-expanded="false">
          Do I need a referral to see a specialist?
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer"><p>No referral is required. You can book directly with any specialist through our appointment form or by calling our care line.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-question" aria-expanded="false">
          Which insurance providers do you accept?
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer"><p>We work with all major national insurers and offer direct billing. Our billing desk can verify your coverage before your visit.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-question" aria-expanded="false">
          Can I reschedule or cancel an appointment?
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer"><p>Yes — rescheduling is free up to 2 hours before your slot via the confirmation link sent to your email.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-question" aria-expanded="false">
          Is the emergency department open to walk-ins?
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer"><p>Yes, our emergency department is open 24/7 to walk-ins as well as ambulance arrivals, with immediate triage on arrival.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section" id="blog">
  <div className="container">
    <div className="section-head reveal">
      <span className="eyebrow">From the journal</span>
      <h2>Health insights, written by our own doctors.</h2>
    </div>

    <div className="blog-grid">
      <article className="blog-card reveal">
        <div className="blog-image blog-img-1" aria-hidden="true"></div>
        <div className="blog-body">
          <span className="blog-tag">Cardiology</span>
          <h3>Five heart-health habits worth starting this year</h3>
          <p>Small, sustainable changes that measurably lower cardiovascular risk over time.</p>
          <a href="#" className="link-arrow-sm">Read article →</a>
        </div>
      </article>
      <article className="blog-card reveal" data-reveal-delay="90">
        <div className="blog-image blog-img-2" aria-hidden="true"></div>
        <div className="blog-body">
          <span className="blog-tag">Pediatrics</span>
          <h3>A parent's guide to childhood vaccination schedules</h3>
          <p>What to expect at each stage, and why timing matters more than people think.</p>
          <a href="#" className="link-arrow-sm">Read article →</a>
        </div>
      </article>
      <article className="blog-card reveal" data-reveal-delay="180">
        <div className="blog-image blog-img-3" aria-hidden="true"></div>
        <div className="blog-body">
          <span className="blog-tag">General Medicine</span>
          <h3>Why annual screenings catch what symptoms don't</h3>
          <p>The case for preventive care, explained by our general medicine team.</p>
          <a href="#" className="link-arrow-sm">Read article →</a>
        </div>
      </article>
    </div>
  </div>
</section>


<section className="section section-tint" id="contact">
  <div className="container contact-grid">
    <div className="contact-copy reveal">
      <span className="eyebrow">Contact</span>
      <h2>Visit, call, or write — we respond within the hour.</h2>
      <div className="contact-info">
        <div className="contact-item">
          <strong>Address</strong>
          <p>221 Harborview Avenue, Suite 400, Meridian City</p>
        </div>
        <div className="contact-item">
          <strong>Phone</strong>
          <p><a href="tel:+18005551234">+1 (800) 555-1234</a></p>
        </div>
        <div className="contact-item">
          <strong>Email</strong>
          <p><a href="mailto:care@meridianhealth.example">care@meridianhealth.example</a></p>
        </div>
        <div className="contact-item">
          <strong>Hours</strong>
          <p>Outpatient: Mon–Sat, 8am–8pm · Emergency: 24/7</p>
        </div>
      </div>
    </div>

    <form className="glass-card contact-form reveal" id="contact-form" data-reveal-delay="100" noValidate>
      <h3>Send us a message</h3>
      <div className="form-row">
        <label htmlFor="c-name">Name</label>
        <input id="c-name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-row">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" type="email" placeholder="you@email.com" required />
      </div>
      <div className="form-row">
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" rows="4" placeholder="How can we help?" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-full">Send Message</button>
      <p className="form-success" id="contact-success" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>

</main>


<footer className="footer">
  <div className="container footer-grid">
    <div className="footer-brand">
      <a href="#top" className="brand">
        <svg width="26" height="26" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <path d="M2 30H14L20 14L28 42L34 22L38 30H54" stroke="#3FD0E0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Meridian <em>Health</em></span>
      </a>
      <p>Premium multi-specialty care, built around the patient.</p>
    </div>

    <div className="footer-col">
      <h4>Explore</h4>
      <a href="#about">About</a>
      <a href="#doctors">Doctors</a>
      <a href="#departments">Departments</a>
      <a href="#packages">Health Packages</a>
    </div>
    <div className="footer-col">
      <h4>Patients</h4>
      <a href="#appointment">Book Appointment</a>
      <a href="#faq">FAQ</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="footer-col">
      <h4>Emergency</h4>
      <a href="tel:+18005551234">+1 (800) 555-1234</a>
      <p className="footer-note">Open 24 hours, every day</p>
    </div>
  </div>
  <div className="container footer-bottom">
    <p>© 2026 Meridian Health. All rights reserved.</p>
    <div className="footer-legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>

<button id="back-to-top" aria-label="Back to top">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
</button>


    </>
  );
}
