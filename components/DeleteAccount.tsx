import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { NeoButton } from "./ui/NeoButton";
import { useNavigate } from "react-router-dom";

export const DeleteAccount: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#F3F4F6] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-[-10%] w-64 h-64 bg-red-500/5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-brand-yellow/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-xl mx-auto relative z-10">
      <button
  onClick={() => navigate("/")}
  className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-gray-400 hover:text-black mb-4 transition-colors group"
>
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Home
        </button>

        <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="flex items-center gap-3 mb-6 flex-nowrap">
                  <div className="bg-black p-2 sm:p-3 rounded-2xl shrink-0">
                    <Trash2 className="text-brand-yellow" size={24} />
                  </div>

                  <h1
                    className="font-[900] italic uppercase tracking-tight leading-none text-red-500"
                    style={{ fontSize: "clamp(14px, 4.5vw, 36px)" }}
                  >
                    <span className="text-black">Request Account </span>Deletion
                  </h1>
                </div>

                <p className="text-sm sm:text-lg font-bold text-gray-500 mb-10 leading-snug">
                  If you’d like to request deletion of your account and
                  associated data, please complete the form below.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest mb-2 ml-1">
                      Username
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. beast_mode_99"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-black rounded-2xl font-bold text-sm focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest mb-2 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-black rounded-2xl font-bold text-sm focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest mb-2 ml-1">
                      Reason for leaving
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us why you're leaving (optional, but helps us improve)"
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-black rounded-2xl font-bold text-sm focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <div className="bg-red-50 border-2 border-red-500/20 p-4 rounded-2xl flex gap-3 items-start mb-4">
                    <AlertTriangle
                      className="text-red-500 shrink-0 mt-0.5"
                      size={18}
                    />
                    <p className="text-[11px] font-bold text-red-700 leading-tight">
                      Note: This action is permanent. All your points, streaks,
                      and verified history will be wiped from the arena forever.
                    </p>
                  </div>

                  <NeoButton
                    type="submit"
                    variant="black"
                    fullWidth
                    size="lg"
                    disabled={isSubmitting}
                    className={isSubmitting ? "opacity-70" : ""}
                  >
                    {isSubmitting ? "PROCESSING..." : "SUBMIT"}
                  </NeoButton>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-24 h-24 bg-green-500 rounded-full border-4 border-black mx-auto mb-8 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle2 size={48} className="text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-[900] italic uppercase tracking-tighter mb-4 leading-none">
                  Request Sent
                </h2>

                <div className="space-y-6 text-gray-500 font-bold">
                  <p className="text-lg text-black bg-brand-yellow/20 p-4 rounded-2xl border-2 border-brand-yellow/30">
                    We’re sorry to see you go. Your account deletion request has
                    been successfully sent to our team.
                  </p>

                  <p className="text-sm leading-relaxed px-4">
                    Your account and associated data will be deleted within{" "}
                    <span className="text-black underline">24 hours</span> after
                    verification. If you prefer immediate action, you can delete
                    your account directly from the settings menu inside the COMO
                    app.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
