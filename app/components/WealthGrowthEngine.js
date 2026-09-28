'use client';

import { useState } from 'react';
import { TrendingUp, ShieldCheck, ArrowRight, Sparkles, Award } from 'lucide-react';
import TransitionLink from './RouteTransition/TransitionLink';
import styles from './WealthGrowthEngine.module.css';

export default function WealthGrowthEngine() {
  const [accountType, setAccountType] = useState('fixed'); // 'fixed' | 'susu'
  const [depositAmount, setDepositAmount] = useState(25000);
  const [durationMonths, setDurationMonths] = useState(12);

  // Interest rate calculation logic (14% - 18% p.a. for Fixed Deposit, ~12% effective growth for Susu)
  const rate = accountType === 'fixed' 
    ? (depositAmount >= 50000 ? 0.18 : depositAmount >= 20000 ? 0.16 : 0.14)
    : 0.12;

  const totalInterest = Math.round(depositAmount * rate * (durationMonths / 12));
  const finalBalance = depositAmount + totalInterest;

  const presets = [5000, 20000, 50000, 100000];

  return (
    <section className={styles.wrapper}>
      <div className="container-wide">
        <div className={styles.engineCard}>
          {/* Ambient Glow Background */}
          <div className={styles.ambientGlow} />

          {/* Left Column: Interactive Controls */}
          <div className={styles.controlCol}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>Smart Yield Calculator</span>
            </div>

            <h2 className={styles.heading}>
              Watch Your Money <br />
              <span className={styles.goldText}>Multiply Safely.</span>
            </h2>
            <p className={styles.subheading}>
              Calculate your guaranteed returns with Upper Amenfi Bank’s high-yield Fixed Deposits and daily Susu growth plans.
            </p>

            {/* Account Type Toggle */}
            <div className={styles.toggleGroup}>
              <button
                type="button"
                className={`${styles.toggleBtn} ${accountType === 'fixed' ? styles.activeToggle : ''}`}
                onClick={() => setAccountType('fixed')}
              >
                <Award size={16} />
                Fixed Deposit (up to 18% p.a.)
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${accountType === 'susu' ? styles.activeToggle : ''}`}
                onClick={() => setAccountType('susu')}
              >
                <TrendingUp size={16} />
                Daily Susu Growth
              </button>
            </div>

            {/* Amount Slider */}
            <div className={styles.sliderBox}>
              <div className={styles.sliderHeader}>
                <label htmlFor="deposit-slider">Initial Investment Amount</label>
                <span className={styles.sliderValueDisplay}>
                  GH₵ {depositAmount.toLocaleString()}
                </span>
              </div>
              <input
                id="deposit-slider"
                type="range"
                min="1000"
                max="200000"
                step="1000"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.presetRow}>
                {presets.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`${styles.presetBtn} ${depositAmount === amt ? styles.activePreset : ''}`}
                    onClick={() => setDepositAmount(amt)}
                  >
                    GH₵ {(amt / 1000).toFixed(0)}k
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            <div className={styles.durationBox}>
              <label>Investment Tenure</label>
              <div className={styles.durationGrid}>
                {[
                  { months: 3, label: '3 Months' },
                  { months: 6, label: '6 Months' },
                  { months: 12, label: '12 Months (1 Year)' },
                ].map((item) => (
                  <button
                    key={item.months}
                    type="button"
                    className={`${styles.durationBtn} ${durationMonths === item.months ? styles.activeDuration : ''}`}
                    onClick={() => setDurationMonths(item.months)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Yield Dashboard */}
          <div className={styles.displayCol}>
            <div className={styles.displayGlassCard}>
              <div className={styles.displayCardHeader}>
                <div className={styles.ratePill}>
                  <TrendingUp size={14} />
                  <span>{(rate * 100).toFixed(0)}% Annual Rate</span>
                </div>
                <span className={styles.guaranteeText}>
                  <ShieldCheck size={14} /> BOG Regulated
                </span>
              </div>

              {/* Main Numbers */}
              <div className={styles.metricsContainer}>
                <div className={styles.metricBlock}>
                  <span className={styles.metricLabel}>Total Estimated Return</span>
                  <div className={styles.metricBigAmount}>
                    GH₵ {finalBalance.toLocaleString()}
                  </div>
                </div>

                <div className={styles.metricDivider} />

                <div className={styles.metricRow}>
                  <div>
                    <span className={styles.subMetricLabel}>Principal Deposit</span>
                    <span className={styles.subMetricValue}>GH₵ {depositAmount.toLocaleString()}</span>
                  </div>
                  <div className={styles.alignRight}>
                    <span className={styles.subMetricLabel}>Net Profit Earned</span>
                    <span className={styles.interestValue}>+ GH₵ {totalInterest.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Visual Progress Bar Breakdown */}
              <div className={styles.visualGraph}>
                <div className={styles.graphLabels}>
                  <span>Deposit Base</span>
                  <span className={styles.goldText}>+{(totalInterest / depositAmount * 100).toFixed(1)}% Growth</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barBase}
                    style={{ width: `${(depositAmount / finalBalance) * 100}%` }}
                  />
                  <div
                    className={styles.barProfit}
                    style={{ width: `${(totalInterest / finalBalance) * 100}%` }}
                  />
                </div>
              </div>

              <TransitionLink href="/contact" className={styles.actionBtn}>
                <span>Lock In This Rate Today</span>
                <ArrowRight size={18} />
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
