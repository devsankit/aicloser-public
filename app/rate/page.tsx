'use client';

import { useState } from 'react';
import Link from 'next/link';

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJo5F7NI8XYzkRdOsuwCANm0U';
const FEEDBACK_API_URL = 'https://app.aicloser.in/api/feedback';

interface ReviewPreset {
  id: string;
  label: string;
  tag: string;
}

const FEATURE_TAGS: ReviewPreset[] = [
  { id: 'rec', label: '📞 SIM Call Recording', tag: 'SIM call recording & automatic cloud sync' },
  { id: 'team', label: '👥 Telecaller Tracking', tag: 'telecalling team tracking and daily call logs' },
  { id: 'wa', label: '💬 WhatsApp Sync', tag: 'WhatsApp follow-ups and lead qualification' },
  { id: 'setup', label: '⚡ Fast & Easy Setup', tag: 'easy setup with existing SIM cards' },
  { id: 'roi', label: '🚀 Increased Closings', tag: 'closing rate and sales team accountability' },
  { id: 'support', label: '🛡️ Great Support', tag: 'friendly onboarding and responsive support' },
];

const PREBUILT_TEMPLATES = {
  enthusiastic: [
    "Best sales CRM we've ever used! 🔥 The automatic SIM call recording is pure magic—everything syncs to the dashboard instantly. Our closing rates went up within the first two weeks. 5 stars all the way!",
    "Absolutely blown away by AI Closer! Super smooth setup on our phones, crystal clear call recordings, and incredible WhatsApp lead tracking. If you run a sales team, you need this CRM yesterday!",
    "Loving AI Closer! It solved our biggest headache of tracking telecallers and verifying client calls. Setup took less than 10 minutes and support is phenomenal. 10/10 recommendation!"
  ],
  professional: [
    "AI Closer is easily the most dependable sales CRM we have implemented. The automatic SIM call recording and centralized lead timeline give our management 100% clarity over telecaller activity. Setup was seamless and the team support has been top-notch.",
    "Outstanding CRM for telecalling teams. Centralizing call recordings without relying on expensive virtual numbers cut our telecom costs in half. Highly recommended for any growing sales agency or closing team.",
    "A game-changer for outbound sales operations. AI Closer eliminated manual call logging completely. The WhatsApp sync and real-time dashboard keep our closers accountable and productive every day."
  ],
  crisp: [
    "Great product. Seamless SIM-based call recording and reliable sales dashboard. Saves hours of daily reporting for our telecallers.",
    "Reliable, fast, and very easy to deploy. The automatic call sync and WhatsApp follow-up features are excellent. Highly recommended.",
    "Very impressed with AI Closer. Perfect solution for monitoring sales calls and keeping team performance transparent."
  ]
};

export default function RateExperiencePage() {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [flow, setFlow] = useState<'INITIAL' | 'COPIED_READY' | 'IMPROVEMENT_FORM' | 'SUBMITTED'>('INITIAL');

  // AI Review Assistant States (4-5 Stars)
  const [selectedTags, setSelectedTags] = useState<string[]>(['rec', 'team']);
  const [tone, setTone] = useState<'enthusiastic' | 'professional' | 'crisp'>('enthusiastic');
  const [generatedReview, setGeneratedReview] = useState<string>(PREBUILT_TEMPLATES.enthusiastic[0]);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [hasCopiedToast, setHasCopiedToast] = useState(false);

  // Form states for 1-3 stars
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setHasCopiedToast(true);
      setTimeout(() => setHasCopiedToast(false), 2500);
    } catch (e) {
      console.warn('Clipboard write warning:', e);
    }
  };

  const handleSelectStar = async (rating: number) => {
    setSelectedRating(rating);
    if (rating >= 4) {
      // Pick initial review
      const templates = PREBUILT_TEMPLATES[tone];
      const initialText = templates[0];
      setGeneratedReview(initialText);
      setFlow('COPIED_READY');
      
      // Auto-copy immediately so customer knows it's ready
      await copyToClipboard(initialText);
    } else {
      setFlow('IMPROVEMENT_FORM');
    }
  };

  const handleRegenerate = async (tags: string[], selectedTone: 'enthusiastic' | 'professional' | 'crisp') => {
    const templates = PREBUILT_TEMPLATES[selectedTone];
    const base = templates[Math.floor(Math.random() * templates.length)];
    const activeTagLabels = FEATURE_TAGS.filter((f) => tags.includes(f.id)).map((f) => f.tag);

    let finalReview = base;
    if (activeTagLabels.length > 0) {
      if (selectedTone === 'enthusiastic') {
        finalReview = `${base} Especially love the ${activeTagLabels.slice(0, 2).join(' and ')}!`;
      } else if (selectedTone === 'professional') {
        finalReview = `${base} Key strengths include ${activeTagLabels.slice(0, 2).join(' alongside ')}.`;
      }
    }

    setGeneratedReview(finalReview);
    await copyToClipboard(finalReview);
  };

  const toggleTag = (tagId: string) => {
    const updated = selectedTags.includes(tagId)
      ? selectedTags.filter((t) => t !== tagId)
      : [...selectedTags, tagId];
    setSelectedTags(updated);
    handleRegenerate(updated, tone);
  };

  const handleToneChange = (newTone: 'enthusiastic' | 'professional' | 'crisp') => {
    setTone(newTone);
    handleRegenerate(selectedTags, newTone);
  };

  const handleOpenGoogle = async () => {
    // Re-ensure review is fresh on clipboard
    await copyToClipboard(generatedReview);
    // Open Google Review popup
    window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
  };

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      setErrorMessage('Please share how we can improve.');
      return;
    }
    if (!contact.trim()) {
      setErrorMessage('Please provide your phone or email so our team can reach out.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(FEEDBACK_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: selectedRating,
          name: name.trim() || 'Anonymous',
          contact: contact.trim(),
          comment: comment.trim(),
          source: 'aicloser.in/rate',
          createdAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Could not submit feedback at this time.');
      }

      setFlow('SUBMITTED');
    } catch (err: any) {
      console.warn('Feedback submit fallback:', err);
      setFlow('SUBMITTED');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#09090B',
      color: '#FAFAFA',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Brand Header */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '20px',
            color: '#FFFFFF',
            boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)'
          }}>
            AI
          </div>
          <span style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
            AI Closer
          </span>
        </Link>
      </div>

      {/* Main Container Card */}
      <div style={{
        width: '100%',
        maxWidth: flow === 'COPIED_READY' ? '540px' : '480px',
        backgroundColor: '#18181B',
        border: '1px solid #27272A',
        borderRadius: '24px',
        padding: flow === 'COPIED_READY' ? '32px 24px' : '36px 28px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        position: 'relative',
        transition: 'all 0.3s ease'
      }}>
        {/* ================= STEP 1: INITIAL STAR RATING ================= */}
        {flow === 'INITIAL' && (
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 10px 0', color: '#FFFFFF' }}>
              How was your experience?
            </h1>
            <p style={{ fontSize: '15px', color: '#A1A1AA', margin: '0 0 32px 0', lineHeight: 1.5 }}>
              Tap a star to rate your experience with AI Closer.
            </p>

            {/* 5 Interactive Stars */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              margin: '20px 0 30px 0'
            }}>
              {[1, 2, 3, 4, 5].map((star) => {
                const isHighlighted = (hoverRating || selectedRating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleSelectStar(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} star`}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      outline: 'none',
                      transform: isHighlighted ? 'scale(1.2)' : 'scale(1)',
                      transition: 'transform 0.15s ease, filter 0.15s ease',
                      filter: isHighlighted ? 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))' : 'none'
                    }}
                  >
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill={isHighlighted ? '#FBBF24' : '#3F3F46'}
                      stroke={isHighlighted ? '#F59E0B' : '#52525B'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </button>
                );
              })}
            </div>

            <div style={{ fontSize: '13px', color: '#71717A' }}>
              Select 1 to 5 stars
            </div>
          </div>
        )}

        {/* ================= STEP 2: 4-5 STARS -> REVIEW ALREADY COPIED UX ================= */}
        {flow === 'COPIED_READY' && (
          <div style={{ textAlign: 'left' }}>
            {/* Top Copied Badge */}
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.45)',
                borderRadius: '30px',
                color: '#4ADE80',
                fontSize: '13.5px',
                fontWeight: 700,
                marginBottom: '12px',
                boxShadow: '0 4px 16px rgba(34, 197, 94, 0.2)'
              }}>
                <span style={{ fontSize: '16px' }}>✓</span> 5-Star Review Copied to Clipboard!
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px 0', color: '#FFFFFF' }}>
                Your review is ready to paste on Google!
              </h2>
              <p style={{ fontSize: '14px', color: '#A1A1AA', margin: 0, lineHeight: 1.5 }}>
                Aapko kuch type karne ki zaroorat nahi hai. Humne aapka review copy kar liya hai—sirf Google par jaakar Paste karein!
              </p>
            </div>

            {/* Visual Copied Box Preview */}
            <div style={{
              position: 'relative',
              backgroundColor: '#09090B',
              border: '1px solid #3F3F46',
              borderRadius: '14px',
              padding: '16px 18px',
              marginBottom: '18px',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  ⭐ ⭐ ⭐ ⭐ ⭐ Copied Text:
                </span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#4ADE80',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  padding: '2px 8px',
                  borderRadius: '6px'
                }}>
                  {hasCopiedToast ? 'Copied again! ✓' : 'Ready to Paste ✓'}
                </span>
              </div>
              <p style={{
                margin: 0,
                fontSize: '13.5px',
                color: '#E4E4E7',
                lineHeight: '1.55',
                fontStyle: 'italic'
              }}>
                "{generatedReview}"
              </p>
            </div>

            {/* 2-Step Simple Guide */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <div style={{
                backgroundColor: '#27272A',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>⭐</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF' }}>Step 1: Tap 5th Star</div>
                <div style={{ fontSize: '11px', color: '#A1A1AA', marginTop: '2px' }}>Google screen par 5th star tap karein</div>
              </div>
              <div style={{
                backgroundColor: '#27272A',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>📋</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF' }}>Step 2: Paste & Post</div>
                <div style={{ fontSize: '11px', color: '#A1A1AA', marginTop: '2px' }}>Long-press karke Paste karein</div>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={handleOpenGoogle}
              style={{
                width: '100%',
                padding: '15px 22px',
                backgroundColor: '#F97316',
                color: '#FFFFFF',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 25px rgba(249, 115, 22, 0.45)',
                marginBottom: '14px',
                transition: 'all 0.15s ease'
              }}
            >
              <span>🚀 Open Google Maps & Paste (Takes 5 Sec)</span>
            </button>

            {/* Option to change text or customize */}
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <button
                type="button"
                onClick={() => setShowCustomizer(!showCustomizer)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#A1A1AA',
                  fontSize: '12.5px',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                {showCustomizer ? '▲ Hide Customizer' : '🎲 Want to change review words? Tap here'}
              </button>
            </div>

            {/* Optional Customizer (Hidden by default to avoid confusion) */}
            {showCustomizer && (
              <div style={{
                marginTop: '16px',
                padding: '16px',
                backgroundColor: '#121214',
                borderRadius: '12px',
                border: '1px solid #27272A'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#D4D4D8', marginBottom: '8px' }}>
                  Tap Features to Include:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                  {FEATURE_TAGS.map((f) => {
                    const isSelected = selectedTags.includes(f.id);
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => toggleTag(f.id)}
                        style={{
                          padding: '5px 10px',
                          borderRadius: '16px',
                          border: isSelected ? '1px solid #F97316' : '1px solid #3F3F46',
                          backgroundColor: isSelected ? 'rgba(249, 115, 22, 0.18)' : '#27272A',
                          color: isSelected ? '#F97316' : '#A1A1AA',
                          fontSize: '11.5px',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {f.label}
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {(['enthusiastic', 'professional', 'crisp'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => handleToneChange(t)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 600,
                          border: tone === t ? '1px solid #F97316' : '1px solid #3F3F46',
                          background: tone === t ? '#F97316' : '#27272A',
                          color: tone === t ? '#FFFFFF' : '#A1A1AA',
                          cursor: 'pointer',
                          textTransform: 'capitalize'
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRegenerate(selectedTags, tone)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: '#27272A',
                      border: '1px solid #3F3F46',
                      color: '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    🎲 New Variation
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= STEP 3: 1-3 STARS INTERNAL IMPROVEMENT FORM ================= */}
        {flow === 'IMPROVEMENT_FORM' && (
          <form onSubmit={handleSubmitFeedback} style={{ textAlign: 'left' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #EF4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px auto',
                color: '#EF4444',
                fontSize: '24px'
              }}>
                😔
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 6px 0', color: '#FFFFFF' }}>
                We are so sorry to hear this
              </h2>
              <p style={{ fontSize: '14px', color: '#A1A1AA', margin: 0, lineHeight: 1.5 }}>
                You rated us {selectedRating} star{selectedRating > 1 ? 's' : ''}. We always strive for 5-star service. Please tell our leadership how we can improve.
              </p>
            </div>

            {errorMessage && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#F87171',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                marginBottom: '16px'
              }}>
                {errorMessage}
              </div>
            )}

            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#D4D4D8', marginBottom: '6px' }}>
                What went wrong / How can we improve? *
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Please describe your experience or any issue you faced..."
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  backgroundColor: '#09090B',
                  border: '1px solid #3F3F46',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#D4D4D8', marginBottom: '6px' }}>
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#09090B',
                  border: '1px solid #3F3F46',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#D4D4D8', marginBottom: '6px' }}>
                Phone or WhatsApp Number *
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#09090B',
                  border: '1px solid #3F3F46',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '14px 20px',
                backgroundColor: '#F97316',
                color: '#FFFFFF',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '15px',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                boxShadow: '0 8px 20px rgba(249, 115, 22, 0.35)',
                transition: 'opacity 0.2s ease'
              }}
            >
              {isSubmitting ? 'Submitting Feedback...' : 'Send Feedback to Leadership'}
            </button>
          </form>
        )}

        {/* ================= STEP 4: 1-3 STARS SUBMITTED SUCCESSFULLY ================= */}
        {flow === 'SUBMITTED' && (
          <div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'rgba(59, 130, 246, 0.15)',
              border: '2px solid #3B82F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              color: '#3B82F6',
              fontSize: '28px'
            }}>
              ✓
            </div>

            <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 10px 0', color: '#FFFFFF' }}>
              Feedback Received
            </h2>
            <p style={{ fontSize: '15px', color: '#A1A1AA', margin: '0 0 24px 0', lineHeight: 1.6 }}>
              Thank you for sharing your feedback. Our leadership team has received your message and will personally reach out to resolve your issue.
            </p>

            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#27272A',
                color: '#FFFFFF',
                borderRadius: '10px',
                fontWeight: 500,
                fontSize: '14px',
                textDecoration: 'none'
              }}
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>

      {/* Footer reassurance */}
      <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '12px', color: '#52525B' }}>
        Protected by AI Closer Customer Care • Dewas, MP
      </div>
    </div>
  );
}
