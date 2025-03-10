import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './assets/sass/style.scss';

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger, useGSAP);

const App: React.FC = () => {
  useGSAP(() => {
    const colors = ["#132F57", "#785F75", "#AB8882", "#FCC487", "#FAEDB1", "#B9CFDD", "#80B5EA", "#80B5EA", "#488ECD", "#0A4197", "#051938", "#000000"];

    gsap.set('.bg', { width: '100%', height: '100vh' }); 
    gsap.to('.bg', {
      scrollTrigger: {
        trigger: '.wrapper',
        onUpdate: (self) => {
          const progress = self.progress; // 0 ~ 1 (스크롤 진행률)
          const index = Math.floor(progress * (colors.length - 1));
          gsap.to('.bg', {
            backgroundColor: colors[index],
            ease: 'power2.out',
            duration: 2
          });
        },
      },
    });
    gsap.set('.title01', { x: '100vw', bottom: 400 }); 
    gsap.to('.title01', { 
      x: -3000,
      color: 'rgba(97, 75, 95, 0.2)',
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=6000',
        scrub: 2.5
      }
    });
    gsap.set('.title02', { x: '100vw', bottom: -67 }); 
    gsap.to('.title02', { 
      x: -3000,
      color: 'rgba(97, 75, 95, 0.4)',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=7000',
        scrub: 4
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="bg"></div>
      <div className="element">
        {/* text1 */}
        <span 
          className="title title01"
          style={{ 
            color: 'rgba(11, 28, 52, 0.8)',
            fontSize: 380,
            letterSpacing: '-4px',
            zIndex: 1
          }}
        >Kimkayeong</span>
        {/* text2 */}
        <span 
          className="title title02"
          style={{
            color: 'rgba(97, 75, 95, 0.4)',
            filter: 'blur(10px)',
            fontSize: 600
          }}
        >
          Lenadev
        </span>
      </div>
    </div>
  );
};

export default App;