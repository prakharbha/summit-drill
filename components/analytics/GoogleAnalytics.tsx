"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-5ZEJ9WWFM7";
const COOKIE_CONSENT_KEY = "summit_cookie_consent";

export default function GoogleAnalytics() {
    const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

    useEffect(() => {
        // Check initial consent status
        const checkConsent = () => {
            const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
            setConsentGiven(consent === "accepted");
        };

        checkConsent();

        // Listen for consent changes
        const handleConsentChange = (event: CustomEvent<{ consent: string }>) => {
            setConsentGiven(event.detail.consent === "accepted");
        };

        window.addEventListener("cookieConsentChange", handleConsentChange as EventListener);

        // Also listen for storage changes (in case consent is changed in another tab)
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === COOKIE_CONSENT_KEY) {
                setConsentGiven(event.newValue === "accepted");
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("cookieConsentChange", handleConsentChange as EventListener);
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    // Update consent mode when consent changes
    useEffect(() => {
        if (consentGiven !== null && typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: consentGiven ? "granted" : "denied",
                ad_storage: consentGiven ? "granted" : "denied",
                ad_user_data: consentGiven ? "granted" : "denied",
                ad_personalization: consentGiven ? "granted" : "denied",
            });
        }
    }, [consentGiven]);

    return (
        <>
            {/* Google tag (gtag.js) - Loads immediately but respects consent */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());

                    // Set default consent to denied (GDPR compliant)
                    gtag('consent', 'default', {
                        'analytics_storage': 'denied',
                        'ad_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied',
                        'wait_for_update': 500
                    });

                    // Check if consent was already given
                    const savedConsent = localStorage.getItem('${COOKIE_CONSENT_KEY}');
                    if (savedConsent === 'accepted') {
                        gtag('consent', 'update', {
                            'analytics_storage': 'granted',
                            'ad_storage': 'granted',
                            'ad_user_data': 'granted',
                            'ad_personalization': 'granted'
                        });
                    }

                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                        anonymize_ip: true
                    });
                `}
            </Script>
        </>
    );
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
    }
}
