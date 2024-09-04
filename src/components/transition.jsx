'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

const Transition = ({ children }) => {
  const containerRef = useRef();
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (isAnimating) return;

    setIsAnimating(true);

    const isForward = pathname > prevPathname;

    gsap.set(containerRef.current, {
      x: isForward ? '100%' : '-100%',
      opacity: 0,
    });

    // Transisi keluar halaman saat ini
    gsap.to(containerRef.current, {
      x: isForward ? '-100%' : '100%',
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setDisplayChildren(children);

        gsap.set(containerRef.current, {
          x: isForward ? '100%' : '-100%',
          opacity: 0,
        });
        gsap.to(containerRef.current, {
          x: '0%',
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
          onComplete: () => {
            setIsAnimating(false);
            setPrevPathname(pathname);
          },
        });
      },
    });
  }, [pathname, children]);

  return <div ref={containerRef}>{displayChildren}</div>;
};

export { Transition };
