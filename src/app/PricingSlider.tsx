"use client"
import React, { useState } from 'react';
import "./styles/style.css";

interface PricingTier {
  pageviews: number;
  price: number;
}

const pricingTiers: PricingTier[] = [
  { pageviews: 10000, price: 8 },
  { pageviews: 50000, price: 12 },
  { pageviews: 100000, price: 16 },
  { pageviews: 500000, price: 24 },
  { pageviews: 1000000, price: 30 },
];

const PricingSlider = () => {
  const [selectedTier, setSelectedTier] = useState(0);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const { pageviews, price } = pricingTiers[selectedTier];
  const [isDarkMode, setIsDarkMode] = useState(false);

  const discount = 0.75;

  const calculatePrice = (basePrice: number): string => {
    const finalPrice = isYearlyBilling ? basePrice * 12 * discount : basePrice;
    return finalPrice.toFixed(2);
  };

  return (
    <div className={`mainBody ${isDarkMode ? 'dark' : ''}`}>

      <div className={`bg ${isDarkMode ? 'darkBg' : ''}`}></div>

      <div className='innerBody'>
      <div>
        <input
          type="checkbox"
          id="toggle-check"
          checked={isDarkMode}
          onChange={() => setIsDarkMode((prev) => !prev)}
        />
        <label htmlFor="toggle-check" className="toggle-label">
          <div className="toggle-container">
            <div className="toggle-light-icon icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </div>
            <div className="toggle-dark-icon icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <div className="toggle-circle"></div>
          </div>
        </label>
      </div>

      <div className="maincontainer">
      <div className="abovecard">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>

      <div className={`card ${isDarkMode ? 'dark' : ''}`}>
        <div className="cardtop">
          <p className="views">{`${(pageviews / 1000).toFixed(0)}K Pageviews`}</p>
          <h1 className="price">{`$${calculatePrice(price)}`} <span className="time">{isYearlyBilling ? '/year' : '/month'}</span></h1>
        </div>

        <input
        type="range"
        min={0}
        max={pricingTiers.length - 1}
        step={1}
        value={selectedTier}
        onChange={(e) => {setSelectedTier(parseInt(e.target.value))}}
        className="slider"
        />

        <div className="pricing">
          <p className={`monthlybill ${!isYearlyBilling ? 'active' : ''}`}>Monthly Billing</p>

          <div className="switch">
            <input type="checkbox" id="toggle"  
            checked={isYearlyBilling}
            onChange={() => setIsYearlyBilling(!isYearlyBilling)}/>

            <label htmlFor="toggle" className="sliderswitch"></label>
          </div>

          <p className={`yearlybill ${isYearlyBilling ? 'active' : ''}`}>Yearly Billing</p>
          <div className="discount">
            <p>25% discount</p>
          </div>
        </div>

        <hr />

        <div className="cardbottom">
          <div className="checklist">
            <li>
              <img src="/images/icon-check.svg" alt="check" />
              Unlimited websites
            </li>

            <li>
              <img src="/images/icon-check.svg" alt="check" />
              100% data ownership
            </li>

            <li>
              <img src="/images/icon-check.svg" alt="check" />
              Email reports
            </li>
          </div>

          <div className="starttrial">
            <button>Start my trial</button>
          </div>
        </div>
      </div>
      </div>
      </div>

    </div>
  );
};

export default PricingSlider;
