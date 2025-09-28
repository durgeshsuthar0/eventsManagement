import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// CountUp component for individual counter
const CountUp = ({ end, suffix = "+", label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCountUp();
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasAnimated]);

  const startCountUp = () => {
    let startTime = null;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + easeOutQuart * (end - startValue));
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div ref={countRef} className="count-up-item" data-aos="fade-left">
      <div className="count-number">
        {count}{suffix}
      </div>
      <div className="count-label">
        {label}
      </div>
    </div>
  );
};

// Main component
const CountUpComponent = () => {
  const statsData = [
    {
      end: 125,
      suffix: "+",
      label: "Wedding Crafted"
    },
    {
      end: 200,
      suffix: "+",
      label: "Delighted Couples"
    },
    {
      end: 70,
      suffix: "+",
      label: "Service Guarantees Fullfiled"
    },
    {
      end: 99,
      suffix: "+",
      label: "Events Experts in Our Team"
    }
  ];

  // Background image URL - replace with your actual image URL
  const backgroundImage = "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <div 
      className="count-up-container"
      style={{
        background: '#86868633',
      }}
    >
      {/* Backdrop Overlay */}
      <div className="backdrop-overlay"></div>
      
      {/* Content */}
      <div className="count-up-content">
        <div className="section-header" data-aos="fade-right">
          <h2 style={{color: "#a92c48"}} className="fw-bold display-7 section-title">Our Achievements</h2>
          <p className="section-subtitle">Celebrating milestones and success stories</p>
        </div>
        
        <div className="count-up-grid">
          {statsData.map((stat, index) => (
            <CountUp
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              duration={2000 + index * 500}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountUpComponent;