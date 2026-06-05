import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CLARITY_PROJECT_ID, GA_MEASUREMENT_ID } from "../../config/sheets";
import { logPageVisit } from "../../services/supabaseApi";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID && !window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID);
    }

    if (CLARITY_PROJECT_ID && !window.clarity) {
      window.clarity = function clarity() {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    logPageVisit(path);

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: path,
      });
    }
  }, [location.pathname, location.search]);

  return null;
}

export default AnalyticsTracker;
