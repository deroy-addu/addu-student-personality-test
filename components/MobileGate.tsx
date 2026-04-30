"use client";

import React from "react";

export function MobileGate({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 1200);
      setChecked(true);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (!checked) return null;

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white p-6 text-center">
        <div className="max-w-sm space-y-3">
          <h1 className="text-xl font-semibold text-gray-900">
            Mobile not supported
          </h1>
          <p className="text-sm text-gray-600">
            This application is currently designed for desktop devices only.
            Please access it on a larger screen.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
