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
    const colors = ["#FFCDAA", "#F9AD93", "#F59A99", "#EC8FBE", "#C08CD4", "#9584D2", "#8674C8", "#6C52AD", "#674DA8", "#553F91", "#00005A"];

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
          if ( progress > 0.08 ) {
            gsap.to('.scroll', {
              y: 50,
              opacity: 0,
            });
          } else {
            gsap.to('.scroll', {
              y: 0,
              opacity: 1,
            });
          }
          if ( progress > 0.1 && progress < 0.58 ) {
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
      color: '#FEFFD1',
      opacity: 0.4,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=8000',
        scrub: 2.5
      }
    });
    gsap.set('.title01_1', { x: '100vw', top: 220 }); 
    gsap.to('.title01_1', { 
      x: -3000,
      color: '#FEFFD1',
      opacity: 0.4,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=12000',
        scrub: 2.5
      }
    });
    gsap.set('.title01_2', { x: '100vw', top: 230 }); 
    gsap.to('.title01_2', { 
      x: -3000,
      color: '#FEFFD1',
      opacity: 0.4,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=12100',
        scrub: 2.5
      }
    });
    gsap.set('.title01_3', { x: '100vw', bottom: 180 }); 
    gsap.to('.title01_3', { 
      x: -3000,
      color: '#FEFFD1',
      opacity: 0.4,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=13000',
        scrub: 2.5
      }
    });
    gsap.set('.title02', { x: '100vw', bottom: -67 }); 
    gsap.to('.title02', { 
      x: -3000,
      color: '#FEFFD1',
      opacity: 0.1,
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
      color: '#E7BFF7',
      opacity: 0.4,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=14000',
        scrub: 2
      }
    });
    gsap.set('.title03_1', { x: '100vw', top: 250 }); 
    gsap.to('.title03_1', { 
      x: -2000,
      color: '#E7BFF7',
      opacity: 0.4,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=14100',
        scrub: 2
      }
    });
    gsap.set('.title04', { x: '100vw', top: 500 }); 
    gsap.to('.title04', { 
      x: -3000,
      color: '#ECAECE',
      opacity: 0.4,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=16000',
        scrub: 3,
      }
    });
    gsap.set('.title04_1', { x: '100vw', bottom: 100 }); 
    gsap.to('.title04_1', { 
      x: -3000,
      color: '#ECAECE',
      opacity: 0.1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=15500',
        scrub: 3,
      }
    });
    gsap.set('.title04_2', { x: '100vw', bottom: 300 }); 
    gsap.to('.title04_2', { 
      x: -3000,
      color: '#ECAECE',
      opacity: 0.1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=19000',
        scrub: 3,
      }
    });
    gsap.set('.title04_3', { x: '100vw', bottom: 400 }); 
    gsap.to('.title04_3', { 
      x: -3000,
      color: '#ECAECE',
      opacity: 0.1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=19300',
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
    gsap.set('.title05_1', { x: '100vw', top: 280 }); 
    gsap.to('.title05_1', { 
      x: -3000,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=21700',
        scrub: 5,
      }
    });
    gsap.set('.title05_2', { x: '100vw', top: 400 }); 
    gsap.to('.title05_2', { 
      x: -3000,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=21800',
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

    gsap.set('.title08', { y: '-4800' }); 
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
    tl09.to('.title09', { x: '30vw', textShadow: 'rgba(185, 207, 221, 0.6) 0px 0px 20px' }) // 진행률 0~50%
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
    tl10.to('.title10', { x: '30vw', textShadow: 'rgba(185, 207, 221, 0.6) 0px 0px 20px' }) // 진행률 0~50%
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
    tl11.to('.title11', { x: '30vw', textShadow: 'rgba(185, 207, 221, 0.6) 0px 0px 20px' }) // 진행률 0~50%
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
    tl12.to('.title12', { x: '30vw', textShadow: 'rgba(185, 207, 221, 0.6) 0px 0px 20px' }) // 진행률 0~50%
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
    tl13.to('.title13', { x: '30vw', textShadow: 'rgba(185, 207, 221, 0.6) 0px 0px 20px' }) // 진행률 0~50%
        .to('.title13', { y: '100vh', color: 'rgba(185,207,221, 0.2)' }); // 진행률 50~100%

    gsap.set('.stars__wrapper', { opacity: 0 }); 
    gsap.to('.stars__wrapper', { 
      opacity: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'bottom 2500',
        scrub: true,
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="trigger">
        <div className="trigger__item"></div>
      </div>
      <div className="bg2"></div>
      <div className="bg">
        <div className="element">
          {/* scroll icon */}
          <div className="scroll">
            <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap:'round', strokeLinejoin: 'round', strokeMiterlimit:1.5 }}>
              <path id="wheel" d="M123.359,79.775l0,72.843" style={{
                fill: 'none',
                stroke: '#fff',
                strokeWidth: 20
              }} />
              <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{
                fill: 'none',
                stroke: '#fff',
                strokeWidth: 20
              }} />
            </svg>
            <span className="text">
              Let's go !!
            </span>
          </div>

          {/* text1 */}
          <span 
            className="title title01"
            style={{ 
              color: '#FC9F9F',
              fontSize: 380,
              letterSpacing: '-6px',
              zIndex: 1
            }}
          >Kimkayeong</span>
          <span 
            className="title title01_1"
            style={{ 
              color: '#fff',
              opacity: 0.3,
              fontSize: 380,
            }}
          >+</span>
          <span 
            className="title title01_2"
            style={{ 
              color: '#fff',
              opacity: 0.2,
              fontSize: 100,
            }}
          >+</span>
          <span 
            className="title title01_3"
            style={{ 
              color: '#FFCDAA',
              opacity: 0.1,
              filter: 'blur(10px)',
              fontSize: 600,
            }}
          >+</span>
          {/* text2 */}
          <span 
            className="title title02"
            style={{
              color: '#FFFFD4',
              opacity: 0.7,
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
              color: '#CBC3E8',
              opacity: 0.7,
              filter: 'blur(2px)',
              fontSize: 150,
              zIndex: 1
            }}
          >
            HTML/SCSS
          </span>
          <span 
            className="title title03_1"
            style={{
              color: '#BE8AD2',
              opacity: 0.9,
              filter: 'blur(2px)',
              fontSize: 180,
            }}
          >
            ♥
          </span>
          {/* text4 */}
          <span 
            className="title title04"
            style={{
              color: '#FFFFD4',
              opacity: 1,
              fontSize: 280
            }}
          >
            ECMAScript6
          </span>
          <span 
            className="title title04_1"
            style={{
              color: '#F5F5D4',
              opacity: 0.3,
              filter: 'blur(20px)',
              fontSize: 600,
            }}
          >
            ♥
          </span>
          <span 
            className="title title04_2"
            style={{
              color: '#fff',
              opacity: 0.4,
              fontSize: 200,
            }}
          >
            +
          </span>
          <span 
            className="title title04_3"
            style={{
              color: '#fff',
              opacity: 0.7,
              fontSize: 80,
            }}
          >
            +
          </span>
          {/* text5 */}
          <span 
            className="title title05"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #CBC3E8',
              filter: 'blur(3px)',
              fontSize: 400,
              zIndex: 1
            }}
          >
            React.js
          </span>
          <span 
            className="title title05_1"
            style={{
              color: '#fff',
              opacity: 0.2,
              filter: 'blur(10px)',
              fontSize: 300,
            }}
          >
            ♥
          </span>
          <span 
            className="title title05_2"
            style={{
              color: '#fff',
              opacity: 0.5,
              filter: 'blur(10px)',
              fontSize: 200,
            }}
          >
            +
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
              fontSize: 600,
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
              textShadow: '-300px 0px 20px rgba(185, 207, 221, 0.6)',
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
              textShadow: '-300px 0px 20px rgba(185, 207, 221, 0.6)',
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
              textShadow: '-300px 0px 20px rgba(185, 207, 221, 0.6)',
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
              textShadow: '-300px 0px 20px rgba(185, 207, 221, 0.6)',
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
              textShadow: '-300px 0px 20px rgba(185, 207, 221, 0.6)',
              textAlign: 'right'
            }}
          >
            Oauth 2.0
          </span>
        </div>
      </div>
      <div className="stars__wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </div>
  );
};

export default App;