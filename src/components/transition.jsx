'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

const Transition = ({ children }) => {
  const containerRef = useRef(null);
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();
  const isAnimatingRef = useRef(false);
  const prevPathnameRef = useRef(pathname);
  const prevChildrenRef = useRef(children);

  const animateTransition = useCallback(
    (isForward) => {
      if (!containerRef.current) return;

      const timeline = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
          prevPathnameRef.current = pathname;
          prevChildrenRef.current = children;
        },
      });

      timeline
        .set(containerRef.current, {
          x: isForward ? '100%' : '-100%',
          opacity: 0,
        })
        .to(containerRef.current, {
          x: isForward ? '-100%' : '100%',
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        })
        .call(() => setDisplayChildren(children))
        .set(containerRef.current, {
          x: isForward ? '100%' : '-100%',
          opacity: 0,
        })
        .to(containerRef.current, {
          x: '0%',
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
        });
    },
    [children, pathname],
  );

  useEffect(() => {
    if (
      pathname === prevPathnameRef.current &&
      children === prevChildrenRef.current
    ) {
      return;
    }

    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const isForward = pathname > prevPathnameRef.current;
    animateTransition(isForward);

    // eslint-disable-next-line consistent-return
    return () => {
      gsap.killTweensOf(containerRef.current);
    };
  }, [pathname, children, animateTransition]);

  return <div ref={containerRef}>{displayChildren}</div>;
};

export { Transition };
