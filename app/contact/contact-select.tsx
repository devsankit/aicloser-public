'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export function ContactSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);
  const select = (index: number) => { onChange(options[index]); setOpen(false); trigger.current?.focus(); };
  return <div ref={root} style={{ position: 'relative', minWidth: 0 }}>
    <button ref={trigger} type="button" role="combobox" aria-label={label} aria-expanded={open} aria-controls={id} aria-haspopup="listbox" aria-activedescendant={open ? `${id}-${active}` : undefined}
      onClick={() => { setActive(Math.max(0, options.indexOf(value))); setOpen(!open); }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
        if (event.key === 'Tab') setOpen(false);
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true); setActive(index => open ? (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length : Math.max(0, options.indexOf(value))); }
        if (open && (event.key === 'Home' || event.key === 'End')) { event.preventDefault(); setActive(event.key === 'Home' ? 0 : options.length - 1); }
        if (open && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); select(active); }
      }}
      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, textAlign: 'left', whiteSpace: 'normal', lineHeight: 1.5, background: '#161f30', border: `1px solid ${open ? '#f97316' : '#344155'}`, borderRadius: 10, padding: '12px 14px', color: '#fff', fontSize: 14, minHeight: 48, cursor: 'pointer' }}>
      <span>{value}</span><ChevronDown size={18} style={{ flexShrink: 0 }} />
    </button>
    {open ? <div id={id} role="listbox" aria-label={label} style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, zIndex: 30, background: '#161f30', border: '1px solid #344155', borderRadius: 12, padding: 6, boxShadow: '0 14px 32px rgba(0,0,0,.3)', maxHeight: 300, overflowY: 'auto' }}>
      {options.map((option, index) => <div key={option} id={`${id}-${index}`} role="option" aria-selected={option === value} onPointerMove={() => setActive(index)} onMouseDown={event => event.preventDefault()} onClick={() => select(index)} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '12px 10px', borderRadius: 8, color: '#fff', fontSize: 14, lineHeight: 1.5, whiteSpace: 'normal', cursor: 'pointer', background: index === active ? 'rgba(249,115,22,.16)' : 'transparent' }}><span style={{ flex: 1 }}>{option}</span>{option === value ? <Check size={16} color="#fb923c" /> : null}</div>)}
    </div> : null}
  </div>;
}
