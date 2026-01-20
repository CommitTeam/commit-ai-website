
import React from 'react';
import { motion } from 'framer-motion';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#F3F4F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm font-bold text-gray-400 mb-8">
          CommitAI, Inc. - Effective Date: January 2025
        </p>

        <div className="bg-white rounded-3xl border border-black/5 p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">

          <section>
            <p className="font-bold text-black mb-4">
              Legal Entity: CommitAI, Inc. ("Commit," "we," "us," or "our")
            </p>
            <p className="mb-2">
              <strong>Contact:</strong> contact@icommit.ai | 2442 NW Market St, Unit #1176, Seattle, WA 98109 | +1-925-352-1917
            </p>
            <p className="mb-2"><strong>Territorial Reach:</strong> Worldwide</p>
            <p className="mb-4"><strong>Age Requirement:</strong> The Services are for users 18 years and older only.</p>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you use our mobile applications, websites, and related services (the "Services"). By using the Services, you agree to this Policy. If you do not agree, please do not use the Services.
            </p>
            <p>
              We may update this Policy from time to time. If we make material changes, we will notify you via the app, our website, or email. Your continued use of the Services after an update constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">1) Scope & Roles</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Controller:</strong> For most processing, CommitAI, Inc. is the "controller" (GDPR/UK GDPR).</li>
              <li><strong>Processor:</strong> For limited programs (e.g., a corporate wellness deployment), we may act as a processor/service provider under a separate data processing agreement.</li>
              <li><strong>Jurisdiction for State Laws:</strong> For U.S. state privacy laws, our business is organized and governed under the laws of the State of Delaware, USA (see Section 18 for additional Delaware notices).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">2) What We Collect</h2>
            <p className="mb-4">We collect information (A) that you provide, (B) automatically when you use the Services, and (C) from third parties you authorize. We obtain consent before using any personal information where required by law and before accessing sensitive device features or health/special category data.</p>

            <h3 className="text-lg font-black uppercase mb-2">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account & Profile:</strong> name, display name/handle, email, phone (optional), age/age-gate confirmation (18+), photo/avatar, biography, location (city/country), preferred units.</li>
              <li><strong>Credentials & Authentication:</strong> password or passkey; when using Sign in with Apple/Google, we receive tokens (not your third-party passwords).</li>
              <li><strong>User-Generated Content (UGC):</strong> posts, captions, comments, likes, messages, and media (photos/videos) you upload in the workout flow or feed.</li>
              <li><strong>Workout & Challenge Details:</strong> selected workout type, goals, repetitions, durations, targets, challenge terms (including any allowed stakes/tokens), outcomes, leaderboards.</li>
              <li><strong>Special Categories / Sensitive Data (subject to explicit consent):</strong> health and fitness information (e.g., steps, heart rate, calories, motion patterns, body metrics), and motion/camera sensor data captured only within the workout post/recording flow for form/rep/motion detection.</li>
              <li><strong>Support & Communications:</strong> emails, forms, in-app reports, feedback, bug reports.</li>
              <li><strong>Transactions:</strong> purchase history, in-app purchases (IAP), rewards/wallet balances, redemptions. (Payment card data is processed by our payment providers; we do not store full card numbers.)</li>
            </ul>

            <h3 className="text-lg font-black uppercase mb-2">B. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Usage & Device Data:</strong> app version, device model, OS/version, language, time zone, unique device identifiers, crash logs, diagnostics, referral/UTM data.</li>
              <li><strong>Interaction Data:</strong> screens viewed, buttons tapped, session duration, feature usage (e.g., motion detection begins only when you enter a workout post), links clicked.</li>
              <li><strong>Location:</strong> coarse location (country/region) from IP; precise/approximate device location only if you grant permission.</li>
              <li><strong>Cookies/SDKs:</strong> on our website and in-app for essential functions, analytics, fraud prevention, and—only with consent where required—marketing attribution.</li>
            </ul>

            <h3 className="text-lg font-black uppercase mb-2">C. Information from Third Parties (You Authorize)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Health & Fitness Sources:</strong> Apple HealthKit, Google Health Connect/Fit, or wearables (e.g., Fitbit, Garmin) only if you connect them.</li>
              <li><strong>Single Sign-On:</strong> Apple/Google to create an account or import profile details.</li>
              <li><strong>Payments & Anti-Fraud:</strong> app stores/payment processors (e.g., Apple IAP), fraud prevention providers, and platform vendors.</li>
              <li><strong>Program Partners:</strong> e.g., university or corporate wellness programs, only if you enroll and as contractually limited.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">3) Health, Motion & Camera Data (Consent-First)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> We ask for and require your consent before accessing or processing health data, motion/camera data, precise location, microphone, or other sensitive device features. You can withdraw consent at any time in device or in-app settings.</li>
              <li><strong>Workout Scope:</strong> Motion/camera detection is limited to the workout post/recording flow and is off elsewhere in the app.</li>
              <li><strong>Processing Location:</strong> We aim to process pose/motion on-device where feasible. If cloud processing is used (e.g., anti-cheat/quality), data is transmitted securely and minimized.</li>
              <li><strong>HealthKit/Health Connect:</strong> Data obtained via Apple HealthKit/Google Health Connect is used solely to provide or improve health features in the app and not for advertising or third-party marketing. We do not sell HealthKit/Health Connect data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">4) Why We Use Information (Purposes)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Provide & Operate:</strong> account creation, workouts, challenges, motion/rep detection, leaderboards, social/community features, notifications.</li>
              <li><strong>Personalize & Improve:</strong> recommendations, form tips, feature development, accessibility, A/B testing.</li>
              <li><strong>Safety, Integrity & Moderation:</strong> detect spam/abuse, cheating, prohibited content, fraudulent transactions; platform and user protection.</li>
              <li><strong>Payments & Rewards:</strong> process IAP, wallet funding, redemptions/payouts (where enabled), receipts, and tax reporting as required.</li>
              <li><strong>Communications:</strong> transactional messages (account, security, challenge updates), service announcements; marketing communications only with consent or as permitted by law.</li>
              <li><strong>Legal/Compliance:</strong> age gating (18+), responding to lawful requests, regulatory obligations.</li>
              <li><strong>With Your Consent:</strong> for sensitive data, precise location, marketing/attribution SDKs, or any processing that legally requires consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">5) Legal Bases (EEA/UK)</h2>
            <p>Where GDPR/UK GDPR applies, we rely on: contract necessity, legitimate interests (e.g., security, limited analytics), consent (for special category/sensitive data, device permissions, and marketing), and legal obligation (e.g., tax, accounting). You may withdraw consent at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">6) How We Share Information</h2>
            <p className="mb-4 font-bold">We do not sell personal information. We share with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers/Processors:</strong> hosting, analytics, crash reporting, support, content moderation, security/anti-fraud, email/push delivery, payment processing—contractually limited to our instructions.</li>
              <li><strong>Health Integrations:</strong> HealthKit/Health Connect data is not used for advertising and not shared for third-party marketing.</li>
              <li><strong>Public Content:</strong> UGC you choose to make public (e.g., challenge posts, comments, usernames, avatars) is visible per your settings.</li>
              <li><strong>Program Partners:</strong> if you join a university/corporate program, we may share minimal necessary data (e.g., participation/completion, aggregated results) as directed and with consent where required.</li>
              <li><strong>Legal & Safety:</strong> to comply with law, enforce our terms, protect users/platform/public, or address fraud/security.</li>
              <li><strong>Business Transfers:</strong> in a merger, acquisition, or asset sale, data may transfer subject to equivalent protections.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">7) International Data Transfers</h2>
            <p>We are U.S.-based (Delaware). We may transfer data internationally. Where required (e.g., EEA/UK), we use appropriate safeguards (e.g., Standard Contractual Clauses) and supplementary measures.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">8) Retention</h2>
            <p className="mb-4">We retain personal information only as long as needed for the purposes above and as required by law.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Data:</strong> while your account is active.</li>
              <li><strong>UGC:</strong> until you delete it or your account, subject to backups and lawful needs.</li>
              <li><strong>Health/Motion Data:</strong> minimized and retained only for feature functionality and integrity checks.</li>
              <li><strong>Legal/Finance:</strong> for statutory periods (e.g., tax/transaction records).</li>
            </ul>
            <p className="mt-4">When no longer needed, we delete or de-identify data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">9) Security</h2>
            <p>We use administrative, technical, and physical safeguards (e.g., encryption in transit, access controls, least-privilege). No system is 100% secure. Please protect your credentials and keep your device/OS updated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">10) Your Rights & Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, Correction, Deletion, Portability.</li>
              <li><strong>Consent Management:</strong> enable/disable camera, microphone, motion sensors, notifications, precise location, HealthKit/Health Connect; withdraw consent in settings.</li>
              <li><strong>Marketing Opt-Out:</strong> unsubscribe in emails; disable marketing notifications in-app.</li>
              <li><strong>Do Not Sell/Share (U.S. state laws):</strong> we do not sell personal information. If we ever engage in "sharing" for cross-context behavioral advertising, we will provide a "Do Not Sell or Share My Personal Information" link and honor GPC where applicable.</li>
              <li><strong>How to Exercise:</strong> Use in-app settings or email contact@icommit.ai. We may verify your request. Authorized agent requests must include proof of authority.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">11) Children's Privacy</h2>
            <p>The Services are intended only for users 18+. We do not knowingly collect personal information from anyone under 18. If you believe such data was provided to us, contact contact@icommit.ai and we will delete it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">12) UGC, Community Safety & Moderation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You control what you post; visibility depends on your settings.</li>
              <li>We may moderate/remove content that violates our guidelines or law (e.g., unsafe, abusive, infringing, deceptive, or unlawful content; prohibited contests).</li>
              <li>Motion/camera detection is limited to the workout flow.</li>
              <li>We use automated tools (including AI) and human review to detect spam, cheating, fraud, or prohibited content. You can appeal moderation decisions via support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">13) AI, Profiling & Automated Decision-Making</h2>
            <p>We use algorithmic systems (some AI/ML-based) to detect motion/reps, personalize content, flag anomalies, and protect integrity. Where required, we will provide meaningful information about logic involved and offer avenues for human review.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">14) Cookies, Mobile Identifiers & Similar Technologies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential:</strong> login, security, payments, core functionality.</li>
              <li><strong>Analytics/Performance:</strong> crash logs, aggregated metrics.</li>
              <li><strong>Marketing/Attribution:</strong> only with consent where required.</li>
            </ul>
            <p className="mt-4">Manage preferences via browser, OS-level settings, and any in-app controls. We honor Global Privacy Control (GPC) where applicable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">15) Device Permissions & Platform Rules (Consent Required)</h2>
            <p className="mb-4">Depending on your settings, the app may request:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Camera and microphone (workout recording),</li>
              <li>Motion sensors/accelerometer/gyroscope,</li>
              <li>HealthKit/Health Connect,</li>
              <li>Notifications,</li>
              <li>Precise/approximate location (optional).</li>
            </ul>
            <p className="mt-4">We request your permission first and explain why access is needed.</p>
            <p className="mt-2"><strong>Apple HealthKit / Google Health Connect:</strong> Data is used only to provide health features, is not used for advertising, and is not sold.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">16) Payments, Wallets & Rewards</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payments:</strong> processed by app stores and/or third-party processors; we receive limited transaction metadata. We do not store full card numbers.</li>
              <li><strong>Wallets/Rewards:</strong> balances/redemptions recorded in our systems. Identity verification may be required for anti-fraud/AML depending on jurisdiction and payout method.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">17) Third-Party Links & Services</h2>
            <p>Third-party sites/SDKs are governed by their policies. Review them carefully.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">18) U.S. State Law Disclosures (Delaware-Governing)</h2>
            <p className="mb-4"><strong>Organized & Governed:</strong> CommitAI, Inc. is a Delaware corporation; our U.S. state law disclosures are made in reference to Delaware law and applicable U.S. state privacy statutes (e.g., CA, VA, CO, CT, UT).</p>

            <h3 className="text-lg font-black uppercase mb-2">California (CCPA/CPRA) Notice at Collection:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Categories:</strong> identifiers (e.g., name, email, device IDs), commercial information (purchases), internet/usage data, geolocation (approximate), audio/visual UGC, inferences for personalization, and sensitive data (health/fitness) with consent.</li>
              <li><strong>Purposes:</strong> provide Services, personalization, security/fraud prevention, analytics, compliance.</li>
              <li><strong>Retention:</strong> see Section 8.</li>
              <li><strong>Sale/Share:</strong> we do not sell personal information; we currently do not share for cross-context behavioral advertising. If that changes, we will provide opt-out mechanisms and honor GPC.</li>
              <li><strong>Rights:</strong> access, correct, delete, portability, and limit use/disclosure of sensitive information to what is necessary to provide the Services.</li>
            </ul>

            <p><strong>VA/CO/CT/UT:</strong> we process sensitive data (health/fitness) only with your consent and for stated purposes. You may appeal a rights request by emailing contact@icommit.ai with "APPEAL" in the subject.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">19) Data Minimization & De-Identification</h2>
            <p>We collect what we need for stated purposes, prefer privacy-preserving methods (e.g., on-device processing), and may de-identify/aggregate data for analytics. We will not attempt to re-identify de-identified data and require the same of our processors.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">20) Law Enforcement & Legal Requests</h2>
            <p>We may access, preserve, and disclose information when reasonably necessary to comply with law, enforce our terms, protect users or our Services, or address fraud/security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">21) How to Contact Us</h2>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> contact@icommit.ai</li>
              <li><strong>Postal:</strong> CommitAI, Inc., 2442 NW Market St, Unit #1176, Seattle, WA 98107</li>
              <li><strong>Phone:</strong> +1-925-352-1917</li>
            </ul>
            <p className="mt-4">If you are in the EEA/UK and believe we have not resolved your issue, you may lodge a complaint with your local data protection authority.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">22) Changes to this Policy</h2>
            <p>We will post updates here and adjust the "Effective Date." For material changes, we will provide additional notice (e.g., in-app prompt or email). Your continued use after changes take effect constitutes acceptance.</p>
          </section>

        </div>
      </motion.div>
    </div>
  );
};
