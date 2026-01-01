"use client";

import { useEffect, useRef, useCallback } from "react";
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
    const isRenderedRef = useRef(false);
    const callbacksRef = useRef({ onVerify, onExpire, onError });

    // Update callbacks ref without causing re-renders
    callbacksRef.current = { onVerify, onExpire, onError };

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    const renderWidget = useCallback(() => {
        if (!containerRef.current || !window.turnstile || isRenderedRef.current || !siteKey) {
            return;
        }

        // Mark as rendered before actually rendering to prevent double-render
        isRenderedRef.current = true;

        try {
            widgetIdRef.current = window.turnstile.render(containerRef.current, {
                sitekey: siteKey,
                callback: (token: string) => callbacksRef.current.onVerify(token),
                "expired-callback": () => callbacksRef.current.onExpire?.(),
                "error-callback": () => callbacksRef.current.onError?.(),
                theme,
                size,
            });
        } catch (error) {
            console.error("Turnstile render error:", error);
            isRenderedRef.current = false;
        }
    }, [siteKey, theme, size]);

    useEffect(() => {
        // If turnstile is already loaded, render immediately
        if (window.turnstile && !isRenderedRef.current) {
            renderWidget();
        }

        return () => {
            // Cleanup widget on unmount
            if (widgetIdRef.current && window.turnstile) {
                try {
                    window.turnstile.remove(widgetIdRef.current);
                } catch {
                    // Ignore removal errors
                }
                widgetIdRef.current = null;
                isRenderedRef.current = false;
            }
        };
    }, [renderWidget]);

    const handleScriptLoad = useCallback(() => {
        // Small delay to ensure turnstile is fully initialized
        setTimeout(() => {
            if (!isRenderedRef.current) {
                renderWidget();
            }
        }, 100);
    }, [renderWidget]);

    if (!siteKey) {
        console.error("Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set");
        return null;
    }

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="afterInteractive"
                onLoad={handleScriptLoad}
            />
            <div ref={containerRef} className={className} />
        </>
    );
}
