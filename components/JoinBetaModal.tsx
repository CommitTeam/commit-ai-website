import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Flame } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';

interface JoinBetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinBetaModal: React.FC<JoinBetaModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  console.log('JoinBetaModal rendered, isOpen:', isOpen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Full Name:', fullName);
    console.log('Email:', email);

    if (!fullName || !email) {
      console.log('Validation failed - missing fullName or email');
      return;
    }

    console.log('Validation passed, sending to API...');
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://nodeapp.icommit.ai/api/misc/joinCommunity', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        console.log('Success! Setting isSubmitted to true');
        setIsSubmitted(true);
        setMessage("🎉 You've successfully joined the community!");

        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        console.log('API returned error:', data.message);
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Reset state when closed
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        setFullName('');
        setEmail('');
        setMessage('');
      }, 300);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={onClose}
             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
           />

           {/* Modal */}
           <motion.div
             initial={{ scale: 0.9, opacity: 0, y: 20 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             exit={{ scale: 0.9, opacity: 0, y: 20 }}
             onClick={(e) => e.stopPropagation()}
             className="relative bg-white border-4 border-black shadow-neo-lg rounded-2xl w-full max-w-md overflow-hidden"
           >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full border-2 border-transparent hover:border-black transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    <div className="flex justify-center mb-6">
                       <div className="bg-brand-yellow p-3 rounded-full border-2 border-black shadow-neo-sm transform -rotate-3">
                          <Flame size={32} className="fill-black" />
                       </div>
                    </div>

                    <h2 className="text-3xl font-black text-center mb-2 uppercase italic tracking-tighter">Join the Squad</h2>
                    <p className="font-mono text-gray-500 text-center text-sm mb-8">
                      Be the first to know when the arena opens. Early adopters get exclusive badges.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="font-bold text-xs uppercase ml-1 mb-1 block">Full Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => {
                            console.log('Full name changed:', e.target.value);
                            setFullName(e.target.value);
                          }}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-lg font-mono focus:outline-none focus:ring-0 focus:bg-brand-yellow/10 focus:shadow-neo-sm transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-xs uppercase ml-1 mb-1 block">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            console.log('Email changed:', e.target.value);
                            setEmail(e.target.value);
                          }}
                          placeholder="fit_legend@example.com"
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-black rounded-lg font-mono focus:outline-none focus:ring-0 focus:bg-brand-yellow/10 focus:shadow-neo-sm transition-all placeholder:text-gray-400"
                        />
                      </div>
                      {message && (
                        <div className={`text-sm font-mono text-center p-2 rounded-lg border-2 border-black ${
                          message.includes('successfully') ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {message}
                        </div>
                      )}
                      <NeoButton
                        fullWidth
                        size="lg"
                        type="submit"
                        className="mt-2"
                        disabled={loading}
                        onClick={() => console.log('Button clicked!')}
                      >
                        {loading ? 'SUBMITTING...' : 'GET EARLY ACCESS'}
                      </NeoButton>
                    </form>
                    <p className="text-[10px] text-center mt-6 text-gray-400 font-mono uppercase tracking-widest">No Spam. Only Gains.</p>
                  </>
                ) : (
                  <div className="text-center py-8">
                     <motion.div
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       transition={{ type: "spring", stiffness: 200, damping: 15 }}
                       className="w-20 h-20 bg-green-500 rounded-full border-4 border-black mx-auto mb-6 flex items-center justify-center shadow-neo"
                     >
                       <Check size={40} className="text-white stroke-[4]" />
                     </motion.div>
                     <h3 className="text-4xl font-black uppercase mb-4 italic tracking-tighter">You're In!</h3>
                     <p className="font-bold text-gray-600 mb-8 leading-relaxed">
                       Thanks <span className="text-black bg-brand-yellow px-1 border border-black rounded-sm mx-1">{fullName}</span>! We've added your email to the list. Keep your eyes peeled for an invite soon.
                     </p>
                     <NeoButton onClick={onClose} variant="black" fullWidth>
                       BACK TO HOME
                     </NeoButton>
                  </div>
                )}
              </div>

              {/* Decorative bottom bar */}
              <div className="h-4 bg-brand-yellow border-t-2 border-black w-full flex">
                  {[...Array(20)].map((_, i) => (
                      <div key={i} className="flex-1 border-r border-black/20"></div>
                  ))}
              </div>
           </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};