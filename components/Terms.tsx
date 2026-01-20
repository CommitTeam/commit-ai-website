
import React from 'react';
import { motion } from 'framer-motion';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#F3F4F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">Terms of Use</h1>
        <p className="text-gray-500 font-mono text-sm mb-12">Effective Date: 15th Nov 2025</p>

        <div className="space-y-10 text-gray-700">

          <section>
            <h2 className="text-xl font-black uppercase mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to CommitAI Inc. ("CommitAI", "we", "us", or "our"). These Terms of Use ("Terms") govern your access to and use of our mobile application (the "App"), website, and any associated services (collectively, the "Services"). By creating an account, using the Services, or otherwise accessing the App, you agree to be bound by these Terms. If you do not agree, you must not access or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">2. Eligibility</h2>
            <p className="leading-relaxed mb-4">
              You must be at least 13 years old to create an account. If you are under 18, you must have permission from a parent or legal guardian who agrees to these Terms on your behalf.
            </p>
            <p className="leading-relaxed">
              By registering and using the Services, you represent and warrant that you are legally capable of forming a binding contract and meet the eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">3. Account Registration & Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">You agree to provide true, accurate, current and complete information about yourself as requested by the registration form.</li>
              <li className="leading-relaxed">You are responsible for safeguarding your username and password, and you agree not to disclose your credentials to any third party. You accept responsibility for all activities that occur under your account.</li>
              <li className="leading-relaxed">You must notify us immediately of any unauthorized use of your account or any other breach of security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">4. Use of the Services</h2>
            <p className="leading-relaxed mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable right to access and use the Services.
            </p>
            <p className="leading-relaxed mb-4">
              You agree to use the Services in accordance with all applicable laws, regulations, and these Terms.
            </p>
            <p className="leading-relaxed mb-2">You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Use the Services for any unlawful purpose or in furtherance of illegal activities.</li>
              <li className="leading-relaxed">Reverse-engineer, decompile or attempt to derive the source code of the App.</li>
              <li className="leading-relaxed">Circumvent any technical protection measures or content filtering.</li>
              <li className="leading-relaxed">Use bots, scripts, automation or other means to post content, manipulate challenges, or otherwise disrupt normal functioning.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">5. User-Generated Content (UGC) and Licenses</h2>
            <p className="leading-relaxed mb-4">
              The Services include the ability to upload, post, share, and otherwise make available user-generated content ("UGC") such as fitness videos, challenge check-ins, photographs, comments, and other contributions.
            </p>
            <p className="leading-relaxed mb-4">
              You retain ownership of the UGC you post. By posting UGC, you grant CommitAI a worldwide, non-exclusive, royalty-free, sublicensable and transferable license to use, reproduce, distribute, display, adapt, and otherwise exploit the UGC for purposes of operating, promoting and improving the Services.
            </p>
            <p className="leading-relaxed">
              You confirm you have all rights necessary to grant the license and that your UGC does not infringe any law, regulation, or third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">6. Prohibited Content & Conduct</h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-4">
              <h3 className="font-black text-red-700 mb-2">Zero-Tolerance Policy for Harmful Content</h3>
              <p className="leading-relaxed text-red-700">
                We maintain a zero-tolerance policy toward the creation, posting, streaming, or sharing of hate speech, harassment, sexually explicit, pornographic, or obscene content on the platform.
              </p>
            </div>
            <p className="leading-relaxed mb-2">Users are strictly prohibited from posting or transmitting content that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Promotes hatred, discrimination, or violence against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or any protected characteristic</li>
              <li className="leading-relaxed">Contains nudity, sexual acts, sexually explicit material, or pornographic content</li>
              <li className="leading-relaxed">Is abusive, threatening, defamatory, or otherwise offensive</li>
              <li className="leading-relaxed">Promotes or depicts nudity, sexual activities, pornographic material, or sexually explicit content</li>
              <li className="leading-relaxed">Harasses, bullies, intimidates, or discriminates against others based on race, ethnicity, religion, gender, gender identity, sexual orientation, disability, or other protected characteristic</li>
              <li className="leading-relaxed">Encourages self-harm, harmful weight-loss regimes, extreme or dangerous fitness practices (particularly in the context of a challenge)</li>
              <li className="leading-relaxed">Violates privacy, confidentiality or publicity rights of any person</li>
              <li className="leading-relaxed">Is fraudulent, misleading, deceptive or constitutes spam</li>
              <li className="leading-relaxed">Violates intellectual property rights of third parties</li>
              <li className="leading-relaxed">Promotes violence, terrorism, illicit behaviour or illegal goods/services</li>
              <li className="leading-relaxed">Involves collection of personal data about other users without consent or using the Services to facilitate unauthorized data collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">7. Moderation, Reporting & Removal</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">We reserve the right — but are not obligated — to monitor, review, remove or refuse any UGC or suspend accounts that violate these Terms or pose risk to other users or the Services.</li>
              <li className="leading-relaxed">Users can report UGC or other users via in-App mechanisms. We will follow our moderation policy (see Community Guidelines) in processing reports.</li>
              <li className="leading-relaxed">You understand that we may remove or block access to content without notice and we are not liable for decisions to moderate at our discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">8. Subscription, Payments & Fees</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">Certain features of the Services may require payment of fees or subscription. Terms of payment will be separately disclosed at the time of purchase.</li>
              <li className="leading-relaxed">All fees are non-refundable unless mandated by applicable law.</li>
              <li className="leading-relaxed">We reserve the right to change fee structure, but will provide notice in advance of changes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">9. Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">All rights, title and interest in and to the Services (including the App, website, technology, trademarks, logos, graphics and other materials) are owned by CommitAI or its licensors.</li>
              <li className="leading-relaxed">Except for the limited license granted in Section 4, you have no rights in the Services.</li>
              <li className="leading-relaxed">You may not copy, modify, distribute, sell, lease or create derivative works of the Services or any portion thereof.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">10. Disclaimers & Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">The Services are provided "as is" and "as available" without warranties of any kind, whether express, implied or statutory. To the maximum extent permitted by law, CommitAI disclaims all warranties including fitness for a particular purpose, non-infringement, accuracy, reliability, availability and security.</li>
              <li className="leading-relaxed">You assume all risk in connection with your use of the Services. CommitAI is not responsible for injuries, losses or damages arising out of your participation in fitness challenges, your use of user content, or interactions with other users.</li>
              <li className="leading-relaxed">In no event shall CommitAI or its affiliates be liable for any indirect, incidental, special, consequential or punitive damages, or for loss of profits, revenue, data or goodwill arising out of or in connection with your use of the Services, even if advised of the possibility of such damage.</li>
              <li className="leading-relaxed">Some jurisdictions do not allow exclusion or limitation of certain liabilities. To the extent such laws apply, our liability will be limited to the maximum extent permitted.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">11. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to defend, indemnify and hold harmless CommitAI, its officers, directors, employees and agents from and against any and all claims, liabilities, damages, losses or expenses (including attorneys' fees) arising from your breach of these Terms, your UGC, your violation of third-party rights or your use of the Services in violation of law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">12. Termination & Suspension</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">We may suspend or terminate your access to the Services, with or without notice, if you breach these Terms or we determine your conduct may harm the Services or other users.</li>
              <li className="leading-relaxed">Upon termination, your license to use the Services ends, and we may immediately delete or disable your account and UGC at our discretion.</li>
              <li className="leading-relaxed">Termination does not affect rights or obligations accrued before termination.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">13. Governing Law & Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, USA, excluding conflict-of-law principles that might apply a different jurisdiction.</li>
              <li className="leading-relaxed">You agree that any dispute, claim or controversy arising out of or relating to these Terms, the Services or your use thereof shall be resolved by binding arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules.</li>
              <li className="leading-relaxed">If the arbitration clause is found unenforceable, you agree to submit to the exclusive jurisdiction of the state or federal courts located in San Francisco County, California.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">14. Changes to Terms</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="leading-relaxed">We may modify these Terms at any time and will update the "Last Updated" date above. We will provide notice of material changes via the App or by email.</li>
              <li className="leading-relaxed">Your continued use of the Services after modifications constitutes acceptance of the revised Terms.</li>
              <li className="leading-relaxed">If you do not agree to the modifications, you must stop using the Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-4">15. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have questions or concerns about these Terms, please contact us at:
            </p>
            <div className="bg-white border-2 border-black rounded-xl p-6">
              <p className="font-black mb-2">CommitAI Inc.</p>
              <p className="leading-relaxed">2442 NW Market St</p>
              <p className="leading-relaxed">Unit #1176</p>
              <p className="leading-relaxed">Seattle, WA 98107</p>
              <p className="leading-relaxed mt-2">
                <a href="mailto:contact@icommit.ai" className="text-brand-orange hover:underline">contact@icommit.ai</a>
              </p>
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
};
