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
    if (isAnimating) return; // Hindari menjalankan animasi jika sudah ada animasi yang sedang berlangsung

    setIsAnimating(true);

    // Tentukan arah transisi berdasarkan perbandingan pathname
    const isForward = pathname > prevPathname;

    // Set posisi awal elemen untuk halaman baru
    gsap.set(containerRef.current, {
      x: isForward ? '100%' : '-100%',
      opacity: 0,
    });

    // Transisi keluar halaman saat ini
    gsap.to(containerRef.current, {
      x: isForward ? '-100%' : '100%',
      opacity: 0,
      duration: 0.2, // Mempercepat durasi transisi keluar
      ease: 'power2.in',
      onComplete: () => {
        // Ganti konten halaman setelah animasi keluar selesai
        setDisplayChildren(children);

        // Set posisi awal halaman baru dan animasi masuk
        gsap.set(containerRef.current, {
          x: isForward ? '100%' : '-100%',
          opacity: 0,
        });
        gsap.to(containerRef.current, {
          x: '0%',
          opacity: 1,
          duration: 0.2, // Mempercepat durasi transisi masuk
          ease: 'power2.out',
          onComplete: () => {
            setIsAnimating(false); // Menandakan animasi selesai
            setPrevPathname(pathname); // Update prevPathname setelah animasi selesai
          },
        });
      },
    });

    // // Membersihkan animasi jika komponen di-unmount
    // return () => {
    //   gsap.killTweensOf(containerRef.current);
    // };
  }, [pathname, children]);

  return <div ref={containerRef}>{displayChildren}</div>;
};

export { Transition };
