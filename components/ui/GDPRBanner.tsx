"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "summit_cookie_consent";

export default function GDPRBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            // Delay showing banner slightly for better UX
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
        // Dispatch custom event for Google Analytics consent update
        window.dispatchEvent(new CustomEvent("cookieConsentChange", {
            detail: { consent: "accepted" }
        }));
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
        // Dispatch custom event for Google Analytics consent update
        window.dispatchEvent(new CustomEvent("cookieConsentChange", {
            detail: { consent: "declined" }
        }));
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#1A365D] text-white p-4 md:p-6 shadow-2xl"
                >
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-sm md:text-base">
                                We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.{" "}
                                <Link href="/privacy-policy" aria-label="Read our Privacy Policy" className="underline hover:text-sky-300 transition-colors">
                                    Read our Privacy Policy
                                </Link>
                            </p>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-4 py-2 text-sm font-medium border border-white/50 rounded hover:bg-white/10 transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2 text-sm font-bold bg-[#377d7e] hover:bg-[#2a6061] rounded transition-colors"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
