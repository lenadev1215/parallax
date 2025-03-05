import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './assets/sass/style.scss';

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLSpanElement>(null);
  const textRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 배경색 변경을 위한 색상 배열
    const colors = ["#132F57", "#785F75", "#AB8882", "#FCC487", "#FAEDB1", "#B9CFDD", "#80B5EA", "#80B5EA", "#488ECD", "#0A4197", "#051938", "#000000"];

    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 ~ 1 (스크롤 진행률)
          const index = Math.floor(progress * (colors.length - 1));
          gsap.to(bgRef.current, {
            backgroundColor: colors[index],
            ease: 'power2.out',
            duration: 1.5, // 부드러운 전환 효과
          });
        },
      },
    });

    return () => {
      ScrollTrigger.killAll(); // 컴포넌트 언마운트 시 메모리 정리
    };
  }, []);

  return (
    <div ref={wrapperRef} className="wrapper">
      <div ref={bgRef} className="bg">
        <span 
          ref={textRef1}
          className="title"
          style={{ 
            fontSize: '400px'
          }}
        >Kimkayeong</span>
        <span 
          ref={textRef2}
          className="title"
        >
          Lenadev
        </span>
      </div>
    </div>
  );
};

export default App;