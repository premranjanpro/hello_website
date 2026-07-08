import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Mic2, ShieldCheck, WalletCards, Radio, UserPlus, Phone, Info, Mail, MapPin, ArrowLeft, RefreshCw, FileText } from 'lucide-react';
import './style.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderNavbar = () => (
    <nav>
      <b style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>Hello24</b>
      <a className={currentPage === 'pricing' ? 'active-link' : ''} onClick={() => setCurrentPage('pricing')}>Pricing</a>
      <a className={currentPage === 'about' ? 'active-link' : ''} onClick={() => setCurrentPage('about')}>About Us</a>
      <a className={currentPage === 'contact' ? 'active-link' : ''} onClick={() => setCurrentPage('contact')}>Contact Us</a>
      <button onClick={() => setCurrentPage('home')}>Download App</button>
    </nav>
  );

  const renderFooter = () => (
    <footer>
      <div className="footer-grid">
        <div>
          <h3>Hello24</h3>
          <p>Hear the vibe. Start a conversation. Anonymous premium audio marketplace with verified hosts.</p>
        </div>
        <div>
          <h4>Important Links</h4>
          <a onClick={() => setCurrentPage('about')}>About Us</a>
          <a onClick={() => setCurrentPage('pricing')}>Pricing & Plans</a>
          <a onClick={() => setCurrentPage('contact')}>Contact Us</a>
        </div>
        <div>
          <h4>Legal Policies</h4>
          <a onClick={() => setCurrentPage('terms')}>Terms & Conditions</a>
          <a onClick={() => setCurrentPage('privacy')}>Privacy Policy</a>
          <a onClick={() => setCurrentPage('refund')}>Refund & Cancellation</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hello24. All Rights Reserved. Compliant with Google Play Store & Payment Gateways.</p>
      </div>
    </footer>
  );

  if (currentPage === 'terms') {
    return (
      <div>
        {renderNavbar()}
        <div className="content-container">
          <button className="back-button" onClick={() => setCurrentPage('home')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1>Terms & Conditions</h1>
          <p className="last-updated">Last Updated: July 09, 2026</p>
          
          <section className="legal-section">
            <h2>1. Eligibility & Age Restriction</h2>
            <p>You must be at least 18 years of age to register an account and use the Hello24 application. By creating an account, you warrant that you are at least 18 years old and possess the legal authority to enter into this agreement.</p>
          </section>

          <section className="legal-section">
            <h2>2. User Accounts & Registration</h2>
            <p>To access calling features, you must register using a valid mobile phone number and choose a unique username. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          </section>

          <section className="legal-section">
            <h2>3. Wallet & Calling Charges</h2>
            <p>Calling hosts on Hello24 incurs per-minute charges. Users must recharge their in-app wallet balance to initiate calls. Rates are set by hosts and dynamically displayed before call initiation. Billing starts immediately once a WebRTC/audio call connects.</p>
          </section>

          <section className="legal-section">
            <h2>4. Code of Conduct</h2>
            <p>Users must not engage in harassment, hate speech, explicit language, threats, or fraudulent activities during audio call sessions. Violations of conduct rules will result in immediate account suspension without refund of the remaining wallet balance.</p>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property</h2>
            <p>All logos, app elements, trademark assets, and software code are the exclusive property of Hello24. You may not copy, reverse-engineer, or modify any part of our platform.</p>
          </section>
        </div>
        {renderFooter()}
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div>
        {renderNavbar()}
        <div className="content-container">
          <button className="back-button" onClick={() => setCurrentPage('home')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: July 09, 2026</p>

          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <ul>
              <li><strong>Mobile Number:</strong> Used strictly for authentication, OTP verification, and account security.</li>
              <li><strong>Username & Profile Details:</strong> Displayed to other users and hosts during calling interactions.</li>
              <li><strong>Device Information:</strong> We store device models, operating systems, and FCM tokens to send incoming call push notifications.</li>
              <li><strong>Date of Birth:</strong> Collected solely to verify age compliance (18+ constraint).</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Audio Streams & Privacy</h2>
            <p>Hello24 provides real-time peer-to-peer audio calls using WebRTC (via LiveKit). We do NOT record, log, or store call voice streams on our servers. Your conversations remain completely private and ephemeral.</p>
          </section>

          <section className="legal-section">
            <h2>3. Data Protection & Sharing</h2>
            <p>We do not sell, trade, or share your personal data with third-party advertisers. Data is shared only with security/hosting partners (like Google Firebase and LiveKit WebRTC nodes) to facilitate calling operations.</p>
          </section>

          <section className="legal-section">
            <h2>4. Your Rights</h2>
            <p>You can request account deletion at any time directly through the Flutter app settings. Upon deletion, your username, mobile number, wallet records, and device identifiers will be permanently scrubbed from our systems.</p>
          </section>
        </div>
        {renderFooter()}
      </div>
    );
  }

  if (currentPage === 'refund') {
    return (
      <div>
        {renderNavbar()}
        <div className="content-container">
          <button className="back-button" onClick={() => setCurrentPage('home')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1>Refund & Cancellation Policy</h1>
          <p className="last-updated">Last Updated: July 09, 2026</p>

          <section className="legal-section">
            <h2>1. Wallet Recharges</h2>
            <p>All in-app wallet recharges made using payment gateways (UPI, Cards, NetBanking) are final. Wallet balance cannot be withdrawn directly to your bank account except under special support circumstances or during complete account closures.</p>
          </section>

          <section className="legal-section">
            <h2>2. Call Failure Adjustments</h2>
            <p>If a call gets disconnected due to technical server failures, network drops on our end, or LiveKit channel drops within the first 10 seconds, the charged wallet amount for that session will be fully reverted to your in-app wallet immediately.</p>
          </section>

          <section className="legal-section">
            <h2>3. Processing of Refund Requests</h2>
            <p>If you experience transaction failures where money was deducted from your bank account but wallet balance was not updated, the payment gateway will automatically revert the amount to your source bank within <strong>5 to 7 business days</strong>.</p>
            <p>For custom disputes, contact our merchant support team at <strong>support@hello24.com</strong>.</p>
          </section>
        </div>
        {renderFooter()}
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div>
        {renderNavbar()}
        <div className="content-container">
          <button className="back-button" onClick={() => setCurrentPage('home')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1>Contact Us</h1>
          <p className="section-intro">For any support, billing queries, or legal inquiries, please contact our merchant support office.</p>

          <div className="contact-card-grid">
            <div className="contact-info-card">
              <Mail className="contact-icon" size={32} />
              <h3>Email Support</h3>
              <p>support@hello24.com</p>
              <p>Response within 24 hours.</p>
            </div>
            
            <div className="contact-info-card">
              <Phone className="contact-icon" size={32} />
              <h3>Support Hotline</h3>
              <p>+91 9350065724</p>
              <p>Available Mon-Fri, 10 AM - 6 PM IST.</p>
            </div>

            <div className="contact-info-card">
              <MapPin className="contact-icon" size={32} />
              <h3>Registered Address</h3>
              <p>Hello24 Technologies Pvt. Ltd.,</p>
              <p>D-Block, Sector 63, Noida,</p>
              <p>Uttar Pradesh, India - 201301</p>
            </div>
          </div>
        </div>
        {renderFooter()}
      </div>
    );
  }

  if (currentPage === 'pricing') {
    return (
      <div>
        {renderNavbar()}
        <div className="content-container">
          <button className="back-button" onClick={() => setCurrentPage('home')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1>Pricing & Wallet Plans</h1>
          <p className="section-intro">Clear, transparent pricing. Pay only for the minutes you talk. No hidden activation fees.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Bronze Credit</h3>
              <div className="price">₹100</div>
              <p>Get ₹100 talktime balance</p>
              <ul>
                <li>Valid for all hosts</li>
                <li>Instant activation</li>
                <li>Secured UPI Checkout</li>
              </ul>
            </div>
            <div className="pricing-card popular">
              <div className="badge">Most Popular</div>
              <h3>Silver Credit</h3>
              <div className="price">₹250</div>
              <p>Get ₹250 talktime balance</p>
              <ul>
                <li>Valid for all hosts</li>
                <li>Priority support access</li>
                <li>Secured UPI/Card Checkout</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Gold Credit</h3>
              <div className="price">₹500</div>
              <p>Get ₹500 talktime balance</p>
              <ul>
                <li>Valid for all hosts</li>
                <li>VIP connection speed</li>
                <li>Full checkout options</li>
              </ul>
            </div>
          </div>

          <div className="pricing-note">
            <p><strong>Note on per-minute rates:</strong> Host call rates are set independently by hosts (e.g. ₹5/min, ₹10/min) and are clearly visible on their cards before you dial. You are billed strictly per-second based on the active duration of the call.</p>
          </div>
        </div>
        {renderFooter()}
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div>
        {renderNavbar()}
        <div className="content-container">
          <button className="back-button" onClick={() => setCurrentPage('home')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1>About Us</h1>
          
          <div className="about-content">
            <p className="lead-text">Hello24 is a premium, secure, voice-first marketplace connecting users with verified hosts for life conversations, language practice, and social talk.</p>
            
            <div className="vision-grid">
              <div className="vision-card">
                <h3>Voice-Only Focus</h3>
                <p>We believe in the power of voice. By eliminating photos and video, we reduce superficial judgments, letting users focus entirely on conversation, vibe, and deep connections.</p>
              </div>
              <div className="vision-card">
                <h3>Safety First</h3>
                <p>We are built with safety at our core. Block lists, rating constraints, active merchant reviews, and automated terms compliance audit ensure a secure environment for everyone.</p>
              </div>
            </div>
          </div>
        </div>
        {renderFooter()}
      </div>
    );
  }

  return (
    <div>
      {renderNavbar()}
      <section className="hero">
        <div>
          <h1>No photos. Just voice, vibe and value.</h1>
          <p>Anonymous premium audio conversations with verified hosts, wallet billing, ratings and moderation.</p>
          <button onClick={() => setCurrentPage('pricing')}>Start Listening</button>
        </div>
        <div className="phone">
          <div className="wave">
            <Radio size={64} color="#fff" />
          </div>
          <h3>@MidnightMuse</h3>
          <p>Hindi • Life Talk • ₹7/min</p>
          <button onClick={() => setCurrentPage('pricing')}>Call Now</button>
        </div>
      </section>

      <section className="features">
        <div>
          <Mic2 size={32} color="#a78bfa" />
          <h2>Voice Preview</h2>
          <p>Listen to short intros before calling.</p>
        </div>
        <div>
          <ShieldCheck size={32} color="#a78bfa" />
          <h2>Safe by Design</h2>
          <p>Block, report, suspend and terms audit.</p>
        </div>
        <div>
          <WalletCards size={32} color="#a78bfa" />
          <h2>Clear Billing</h2>
          <p>Rupee wallet, earnings and UPI payouts.</p>
        </div>
        <div>
          <UserPlus size={32} color="#a78bfa" />
          <h2>Become Host</h2>
          <p>₹499 activation, review, approval and fair ranking.</p>
        </div>
      </section>
      {renderFooter()}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
