'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { ContactSelect } from './contact-select';

const WHATSAPP_NUMBER = '919589510954';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '1 - 5 Sales Reps',
    interest: 'SIM-Based Call Recording Setup',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waText = [
      '👋 *New Inquiry from AI Closer Website*',
      '',
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      formData.company ? `*Company:* ${formData.company}` : '',
      `*Team Size:* ${formData.teamSize}`,
      `*Requirement:* ${formData.interest}`,
      formData.message ? `*Message:* ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div style={{
      background: '#0d131f',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '36px 32px',
      boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
    }}>
      <div style={{ marginBottom: '24px' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#f97316',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          background: 'rgba(249,115,22,0.12)',
          padding: '4px 10px',
          borderRadius: '12px',
          border: '1px solid rgba(249,115,22,0.25)',
        }}>
          Direct Support & Sales Form
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '12px 0 6px 0' }}>
          Send Us a Message
        </h2>
        <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
          Fill out this form and our solutions team will respond on WhatsApp / Email within 15 minutes.
        </p>
      </div>

      {submitted ? (
        <div style={{
          background: 'rgba(34,197,94,0.1)',
          border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: '14px',
          padding: '28px',
          textAlign: 'center',
          color: '#ffffff',
        }}>
          <CheckCircle2 size={44} color="#22c55e" style={{ margin: '0 auto 12px auto' }} />
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
            Thank You, {formData.name}!
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
            Your details have been submitted. A WhatsApp window was opened so you can chat directly with our engineering team.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ankit Sharma"
                style={{
                  width: '100%',
                  background: '#161f30',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ankit@company.com"
                style={{
                  width: '100%',
                  background: '#161f30',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                style={{
                  width: '100%',
                  background: '#161f30',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Sales Agency / Tech Corp"
                style={{
                  width: '100%',
                  background: '#161f30',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Sales Team Size
              </label>
              <ContactSelect label="Sales Team Size" value={formData.teamSize} onChange={teamSize => setFormData({ ...formData, teamSize })} options={['1 - 5 Sales Reps', '6 - 20 Sales Reps', '21 - 50 Sales Reps', '50+ Enterprise Closers']} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Primary Requirement
              </label>
              <ContactSelect label="Primary Requirement" value={formData.interest} onChange={interest => setFormData({ ...formData, interest })} options={['SIM-Based Call Recording Setup', 'WhatsApp Web QR Scanner & Sync', 'Lead Routing & Telecalling Pipeline', 'Custom CRM Feature Development', 'Live Product Demo & Onboarding']} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
              Message / Notes
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you're looking to solve in your sales process..."
              style={{
                width: '100%',
                background: '#161f30',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 6px 20px rgba(249,115,22,0.35)',
              marginTop: '4px',
              transition: 'opacity 0.2s ease',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Submitting...' : 'Send Message & Connect on WhatsApp'}
            <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
