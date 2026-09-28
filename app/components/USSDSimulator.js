'use client';

import { useState } from 'react';
import { Smartphone, Zap, ArrowRight, RefreshCw, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
import TransitionLink from './RouteTransition/TransitionLink';
import styles from './USSDSimulator.module.css';

export default function USSDSimulator() {
  // Screen state: 'menu' | 'balance' | 'susu' | 'transfer' | 'airtime'
  const [screen, setScreen] = useState('menu');

  const menuItems = [
    { key: '1', title: 'Check Account Balance', targetScreen: 'balance' },
    { key: '2', title: 'Daily Susu Deposit', targetScreen: 'susu' },
    { key: '3', title: 'MoMo & Bank Transfer', targetScreen: 'transfer' },
    { key: '4', title: 'Buy Airtime / Data', targetScreen: 'airtime' },
  ];

  return (
    <section className={styles.wrapper}>
      <div className="container-wide">
        <div className={styles.simulatorGrid}>
          {/* Left Column: Text & Features */}
          <div className={styles.infoCol}>
            <div className={styles.pillBadge}>
              <Zap size={14} className={styles.badgeIcon} />
              <span>Instant Dial Access • Dial *992#</span>
            </div>

            <h2 className={styles.heading}>
              No Internet? <br />
              <span className={styles.highlightText}>No Problem.</span>
            </h2>
            <p className={styles.description}>
              Experience seamless rural banking on <strong>any phone</strong>. Dial <strong>*992#</strong> to check balances, transfer funds, or contribute to your Susu savings anywhere in Ghana.
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Works on feature phones and smartphones</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Zero data or internet connection required</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Encrypted 24/7 Bank of Ghana secured platform</span>
              </div>
            </div>

            <div className={styles.dialBox}>
              <div className={styles.dialCode}>*992#</div>
              <TransitionLink href="/ussd-guide" className={styles.guideBtn}>
                <span>View Full Dial Guide</span>
                <ArrowRight size={16} />
              </TransitionLink>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className={styles.phoneCol}>
            <div className={styles.phoneFrame}>
              {/* Phone Speaker & Camera Notch */}
              <div className={styles.phoneNotch}>
                <div className={styles.speaker} />
                <div className={styles.camera} />
              </div>

              {/* OLED Screen */}
              <div className={styles.phoneScreen}>
                {/* Header bar inside phone */}
                <div className={styles.screenHeader}>
                  <div className={styles.screenNetwork}>
                    <Smartphone size={12} />
                    <span>Upper Amenfi USSD</span>
                  </div>
                  <div className={styles.screenSignal}>
                    <span>*992# Connected</span>
                  </div>
                </div>

                {/* Live Interactive USSD Terminal Window */}
                <div className={styles.terminalWindow}>
                  {screen === 'menu' && (
                    <div className={styles.terminalContent}>
                      <div className={styles.terminalTitle}>Upper Amenfi Rural Bank</div>
                      <div className={styles.terminalSubtitle}>Select Service:</div>
                      <div className={styles.terminalList}>
                        {menuItems.map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            className={styles.terminalItemBtn}
                            onClick={() => setScreen(item.targetScreen)}
                          >
                            <span className={styles.keyBadge}>{item.key}</span>
                            <span>{item.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {screen === 'balance' && (
                    <div className={styles.terminalContent}>
                      <div className={styles.terminalTitle}>Account Balance</div>
                      <div className={styles.balanceBox}>
                        <div className={styles.accountNumber}>Acc: 0102****889</div>
                        <div className={styles.balanceAmount}>GH₵ 18,450.00</div>
                        <div className={styles.balanceStatus}>Available Balance</div>
                      </div>
                      <button
                        type="button"
                        className={styles.backBtn}
                        onClick={() => setScreen('menu')}
                      >
                        <RefreshCw size={12} />
                        <span>[0] Main Menu</span>
                      </button>
                    </div>
                  )}

                  {screen === 'susu' && (
                    <div className={styles.terminalContent}>
                      <div className={styles.terminalTitle}>Daily Susu Deposit</div>
                      <div className={styles.susuBox}>
                        <div className={styles.susuLabel}>Today's Contribution</div>
                        <div className={styles.susuAmount}>GH₵ 50.00</div>
                        <div className={styles.streakBadge}>🔥 14 Days Active Streak</div>
                      </div>
                      <div className={styles.successMsg}>✓ Deposited into Susu Vault</div>
                      <button
                        type="button"
                        className={styles.backBtn}
                        onClick={() => setScreen('menu')}
                      >
                        <RefreshCw size={12} />
                        <span>[0] Main Menu</span>
                      </button>
                    </div>
                  )}

                  {screen === 'transfer' && (
                    <div className={styles.terminalContent}>
                      <div className={styles.terminalTitle}>Money Transfer</div>
                      <div className={styles.transferOptions}>
                        <div className={styles.transferItem}>1. Send to MoMo Wallet</div>
                        <div className={styles.transferItem}>2. Other Bank Account</div>
                        <div className={styles.transferItem}>3. Branch Pick-up</div>
                      </div>
                      <div className={styles.instantNote}>⚡ Instant settlement</div>
                      <button
                        type="button"
                        className={styles.backBtn}
                        onClick={() => setScreen('menu')}
                      >
                        <RefreshCw size={12} />
                        <span>[0] Main Menu</span>
                      </button>
                    </div>
                  )}

                  {screen === 'airtime' && (
                    <div className={styles.terminalContent}>
                      <div className={styles.terminalTitle}>Buy Airtime & Data</div>
                      <div className={styles.airtimeList}>
                        <span>1. MTN Airtime</span>
                        <span>2. Telecel Airtime</span>
                        <span>3. AT Airtime</span>
                      </div>
                      <div className={styles.feeBadge}>Zero Service Charge</div>
                      <button
                        type="button"
                        className={styles.backBtn}
                        onClick={() => setScreen('menu')}
                      >
                        <RefreshCw size={12} />
                        <span>[0] Main Menu</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Tactile Keypad Controls */}
                <div className={styles.keypad}>
                  <div className={styles.keypadGrid}>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
                      <button
                        key={key}
                        type="button"
                        className={styles.keypadKey}
                        onClick={() => {
                          if (key === '1') setScreen('balance');
                          else if (key === '2') setScreen('susu');
                          else if (key === '3') setScreen('transfer');
                          else if (key === '4') setScreen('airtime');
                          else if (key === '0') setScreen('menu');
                        }}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
