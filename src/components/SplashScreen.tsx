import React, { useCallback, useEffect, useState } from 'react';
import { motion, useAnimate, useReducedMotion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;
const isMobile = () => window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;

/** Four circles create the continuous three-dot conveyor from the reference. */
const MovingDots = () => (
  <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor" aria-hidden="true">
    {[0, 1, 2, 3].map(index => (
      <motion.circle key={index} cy="12" cx={index === 0 ? 4 : index * 8 - 4} r={index === 0 ? 0 : 3}
        animate={{ cx: [4, 4, 12, 20, 20, 4], r: [0, 3, 3, 3, 0, 0] }}
        transition={{ duration: 2.004, repeat: Infinity, delay: -index * 0.501,
          times: [0, 0.2495, 0.499, 0.7485, 0.998, 1], ease: [0.36, 0.6, 0.31, 1] }}
      />
    ))}
  </svg>
);

export const SplashScreen: React.FC = () => {
  const prefersReduced = useReducedMotion();
  // Explicit preview opt-in; ordinary visits always respect the system preference.
  const reduced = prefersReduced && new URLSearchParams(window.location.search).get('splash') !== 'full';
  const [scope, animate] = useAnimate();
  const [visible, setVisible] = useState(() => {
    if (!['/', '/index.html', '/flexqr-flores', '/flexqr-flores/'].includes(window.location.pathname)) return false;
    const force = new URLSearchParams(window.location.search).get('splash');
    if (isMobile() || force === '1' || force === 'true' || force === 'full') return true;
    try { return !sessionStorage.getItem('flexqr_splash_seen'); } catch { return true; }
  });

  const finish = useCallback(() => {
    if (!isMobile()) {
      try { sessionStorage.setItem('flexqr_splash_seen', 'true'); } catch { /* Storage is optional. */ }
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible || !scope.current) return;
    const header = document.getElementById('header-flexqr-brand');
    const content = document.getElementById('app-content');
    const previousOverflow = document.body.style.overflow;
    const previousOpacity = header?.style.opacity ?? '';
    const previousInert = content?.inert ?? false;
    if (header) header.style.opacity = '0';
    if (content) content.inert = true;
    document.body.style.overflow = 'hidden';

    const logo = scope.current.querySelector('.intro-logo') as HTMLElement;
    const source = logo.getBoundingClientRect();
    const target = header?.getBoundingClientRect();
    const dx = target ? target.left - source.left : 0;
    const dy = target ? target.top - source.top : 0;
    const scale = target ? target.height / source.height : 1;
    let cancelled = false;
    const controls = reduced
      ? animate([
          ['.intro-logo', { opacity: [0, 1] }, { duration: 0.15 }],
          ['.intro-logo', { opacity: 0 }, { at: 0.55, duration: 0.15 }],
          ['.intro-question', { opacity: [0, 1] }, { at: 0.7, duration: 0.15 }],
          ['.intro-question', { opacity: 0 }, { at: 2.2, duration: 0.15 }],
        ])
      : animate([
          ['.intro-dots', { opacity: [1, 0] }, { at: 3.2, duration: 0.25 }],
          ['.intro-logo', { opacity: [0, 1], transform: ['scale(0.94)', 'scale(1)'] }, { at: 3.4, duration: 0.3, ease }],
          ['.intro-logo-face', { transform: ['rotateX(0deg)', 'rotateX(-90deg)'], opacity: [1, 0] }, { at: 4.25, duration: 0.4, ease: [0.65, 0, 0.35, 1] }],
          ['.intro-question', { opacity: [0, 1], transform: ['rotateX(85deg) translateY(8px)', 'rotateX(0deg) translateY(0px)'] }, { at: 4.48, duration: 0.42, ease }],
          ['.intro-question', { opacity: 0, transform: 'translateY(-8px)' }, { at: 5.8, duration: 0.25, ease }],
          ['.intro-logo-face', { transform: 'rotateX(0deg)', opacity: 1 }, { at: 6.02, duration: 0.12 }],
          ['.intro-logo', { transform: `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`, opacity: target ? 1 : 0 }, { at: 6.05, duration: 0.55, ease }],
          ['.intro-black', { opacity: [1, 0] }, { at: 6.05, duration: 0.65, ease }],
        ]);
    controls.then(() => { if (!cancelled) finish(); });
    const handleEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') finish(); };
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('orientationchange', finish);
    return () => {
      cancelled = true;
      controls.cancel();
      if (header) header.style.opacity = previousOpacity;
      if (content) content.inert = previousInert;
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('orientationchange', finish);
    };
  }, [visible, reduced, animate, scope, finish]);

  if (!visible) return null;
  return (
    <div ref={scope} className="intro-screen" role="dialog" aria-modal="true" aria-label="Bienvenido a FLEXQR" onClick={finish}>
      <div className="intro-black" />
      <div className="intro-stage" aria-hidden="true">
        {!reduced && <div className="intro-dots"><MovingDots /></div>}
        <div className="intro-logo"><span className="intro-logo-face">FLEX<span>QR</span></span></div>
        <p className="intro-question" aria-label="¿A quién vas a sorprender hoy?">
          <span>¿A quién vas a</span>
          <span>sorprender hoy?</span>
        </p>
      </div>
      <button type="button" className="intro-skip" onClick={finish}>Toca para comenzar</button>
    </div>
  );
};
