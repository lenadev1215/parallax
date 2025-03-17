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
          if ( progress > 0.2 && progress < 0.58 ) {
            gsap.to('.bg', {
              width: 'calc(100% - 120px)',
              height: 'calc(100vh - 120px)',
              duration: 1,
            });
          } else {
            gsap.to('.bg', {
              width: '100%',
              height: '100vh',
              duration: 1,
            });
          }
        },
      },
    });
    gsap.to('.bg2', {
      scrollTrigger: {
        trigger: '.wrapper',
        onUpdate: (self) => {
          const progress = self.progress; // 0 ~ 1 (스크롤 진행률)
          const index = Math.floor(progress * (colors.length - 1));
          gsap.to('.bg2', {
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
      color: 'rgba(252,196,135, 0.2)',
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=8000',
        scrub: 2.5
      }
    });
    gsap.set('.title02', { x: '100vw', bottom: -67 }); 
    gsap.to('.title02', { 
      x: -3000,
      color: 'rgba(252,196,135, 0.3)',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=10500',
        scrub: 4
      }
    });
    gsap.set('.title03', { x: '100vw', top: 300 }); 
    gsap.to('.title03', { 
      x: -2000,
      color: 'rgba(250,237,177, 0.8)',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=14000',
        scrub: 2
      }
    });
    gsap.set('.title04', { x: '100vw', top: 500 }); 
    gsap.to('.title04', { 
      x: -3000,
      color: 'rgba(185,207,221, 0.7)',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=16000',
        scrub: 3,
      }
    });
    gsap.set('.title05', { x: '100vw', top: 100 }); 
    gsap.to('.title05', { 
      x: -3000,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=19000',
        scrub: 5,
      }
    });
    gsap.set('.title06', { x: '100vw', top: 400 }); 
    gsap.to('.title06', { 
      x: -3000,
      color: 'rgba(185,207,221, 0.95)',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=20000',
        scrub: 2,
      }
    });
    gsap.set('.title07', { x: '100vw', bottom: 40 }); 
    gsap.to('.title07', { 
      x: -2000,
      color: 'rgba(185,207,221, 0.5)',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=20000',
        scrub: 4,
      }
    });

    gsap.set('.title08', { y: '-4000' }); 
    gsap.to('.title08', { 
      y: '110vh',
      color: 'rgba(185,207,221, 0.2)',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.trigger__item',
        start: 'top top',
        end: '+=13000',
        scrub: 2,
      }
    });
    gsap.set('.title09', { x: -2000, y: '50vh' }); 
    const tl09 = gsap.timeline({
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.trigger__item',
        start: 'top -3000',
        end: '+=4000',
        scrub: 2,
      }
    });
    tl09.to('.title09', { x: '30vw' }) // 진행률 0~50%
        .to('.title09', { y: '100vh' }); // 진행률 50~100%
    gsap.set('.title10', { x: -2000, y: '40vh' }); 
    const tl10 = gsap.timeline({
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.trigger__item',
        start: 'top -4500',
        end: '+=3000',
        scrub: 2,
      }
    });
    tl10.to('.title10', { x: '30vw' }) // 진행률 0~50%
        .to('.title10', { y: '100vh' }); // 진행률 50~100%
    gsap.set('.title11', { x: -2000, y: '30vh' }); 
    const tl11 = gsap.timeline({
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.trigger__item',
        start: 'top -5200',
        end: '+=3000',
        scrub: 2,
      }
    });
    tl11.to('.title11', { x: '30vw' }) // 진행률 0~50%
        .to('.title11', { y: '100vh', color: 'rgba(185,207,221, 0.2)' }); // 진행률 50~100%
    gsap.set('.title12', { x: -2000, y: '20vh' }); 
    const tl12 = gsap.timeline({
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.trigger__item',
        start: 'top -5600',
        end: '+=3000',
        scrub: 2,
      }
    });
    tl12.to('.title12', { x: '30vw' }) // 진행률 0~50%
        .to('.title12', { y: '100vh', color: 'rgba(185,207,221, 0.2)' }); // 진행률 50~100%
    gsap.set('.title13', { x: -2000, y: '10vh' }); 
    const tl13 = gsap.timeline({
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.trigger__item',
        start: 'top -6200',
        end: '+=3000',
        scrub: 2,
      }
    });
    tl13.to('.title13', { x: '30vw' }) // 진행률 0~50%
        .to('.title13', { y: '100vh', color: 'rgba(185,207,221, 0.2)' }); // 진행률 50~100%
  }, []);

  return (
    <div className="wrapper">
      <div className="trigger">
        <div className="trigger__item"></div>
      </div>
      <div className="bg2"></div>
      <div className="bg">
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
          {/* text3 */}
          <span 
            className="title title03"
            style={{
              color: 'rgba(97, 75, 95, 0.74)',
              filter: 'blur(2px)',
              fontSize: 150
            }}
          >
            HTML/SCSS
          </span>
          {/* text4 */}
          <span 
            className="title title04"
            style={{
              color: 'rgba(97, 75, 95, 0.5)',
              fontSize: 280
            }}
          >
            ECMAScript6
          </span>
          {/* text5 */}
          <span 
            className="title title05"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px rgba(97, 75, 95, 1)',
              filter: 'blur(6px)',
              fontSize: 400,
              zIndex: 1
            }}
          >
            React.js
          </span>
          {/* text6 */}
          <span 
            className="title title06"
            style={{
              color: 'rgba(252,196,135, 0.2)',
              fontSize: 80,
            }}
          >
            Redux/RTK
          </span>
          {/* text7 */}
          <span 
            className="title title07"
            style={{
              color: 'rgba(252,196,135, 0.2)',
              fontSize: 180,
            }}
          >
            Next.js
          </span>
          
          {/* text8 */}
          <span 
            className="title title__vertical title08"
            style={{
              top: 0,
              color: 'rgba(185,207,221, 0.6)',
              filter: 'blur(5px)',
              fontSize: 520,
              textOrientation: 'upright',
              letterSpacing: -25,
              textTransform: 'uppercase'
            }}
          >
            frontend
          </span>
          <span 
            className="title title09"
            style={{
              width: '40vw',
              top: 0,
              color: 'rgba(185,207,221, 0.6)',
              fontSize: 120,
              textAlign: 'right'
            }}
          >
            TypeScript
          </span>
          <span 
            className="title title10"
            style={{
              width: '40vw',
              top: 0,
              color: 'rgba(185,207,221, 0.6)',
              fontSize: 100,
              textAlign: 'right'
            }}
          >
            Git
          </span>
          <span 
            className="title title11"
            style={{
              width: '40vw',
              top: 0,
              color: 'rgba(185,207,221, 0.6)',
              fontSize: 100,
              textAlign: 'right'
            }}
          >
            RESTApi
          </span>
          <span 
            className="title title12"
            style={{
              width: '40vw',
              top: 0,
              color: 'rgba(185,207,221, 0.6)',
              fontSize: 100,
              textAlign: 'right'
            }}
          >
            Vite
          </span>
          <span 
            className="title title13"
            style={{
              width: '40vw',
              top: 0,
              color: 'rgba(185,207,221, 0.6)',
              fontSize: 100,
              textAlign: 'right'
            }}
          >
            Oauth 2.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;