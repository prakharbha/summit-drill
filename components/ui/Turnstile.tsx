"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface TurnstileProps {
    onVerify: (token: string) => void;
    onExpire?: () => void;
    onError?: () => void;
    theme?: "light" | "dark" | "auto";
    size?: "normal" | "compact";
    className?: string;
}

declare global {
    interface Window {
        turnstile: {
            render: (
                element: HTMLElement,
                options: {
                    sitekey: string;
                    callback: (token: string) => void;
                    "expired-callback"?: () => void;
                    "error-callback"?: () => void;
                    theme?: "light" | "dark" | "auto";
                    size?: "normal" | "compact";
                }
            ) => string;
            reset: (widgetId: string) => void;
            remove: (widgetId: string) => void;
        };
        onloadTurnstileCallback?: () => void;
    }
}

export default function Turnstile({
    onVerify,
    onExpire,
    onError,
    theme = "light",
    size = "normal",
    className = "",
}: TurnstileProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    useEffect(() => {
        if (!siteKey) {
            console.error("Turnstile site key is not configured");
            return;
        }

        const renderWidget = () => {
            if (containerRef.current && window.turnstile && !widgetIdRef.current) {
                widgetIdRef.current = window.turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    callback: onVerify,
                    "expired-callback": onExpire,
                    "error-callback": onError,
                    theme,
                    size,
                });
            }
        };

        // If turnstile is already loaded, render immediately
        if (window.turnstile) {
            renderWidget();
        } else {
            // Set up callback for when script loads
            window.onloadTurnstileCallback = () => {
                setIsLoaded(true);
                renderWidget();
            };
        }

        return () => {
            // Cleanup widget on unmount
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [siteKey, onVerify, onExpire, onError, theme, size, isLoaded]);

    if (!siteKey) {
        return null;
    }

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
                strategy="afterInteractive"
            />
            <div ref={containerRef} className={className} />
        </>
    );
}
