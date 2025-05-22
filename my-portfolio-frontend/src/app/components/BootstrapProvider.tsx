"use client";

import { useEffect } from "react";

export default function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Load Bootstrap CSS and JS dynamically
    const bootstrapCss = document.createElement("link");
    bootstrapCss.rel = "stylesheet";
    bootstrapCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCss);

    const bootstrapJs = document.createElement("script");
    bootstrapJs.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
    document.body.appendChild(bootstrapJs);

    return () => {
      // Cleanup: remove the Bootstrap CSS and JS when the component unmounts
      document.head.removeChild(bootstrapCss);
      document.body.removeChild(bootstrapJs);
    };
  }, []);

  return <>{children}</>;
}