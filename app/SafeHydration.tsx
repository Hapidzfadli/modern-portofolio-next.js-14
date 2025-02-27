"use client";

import { useEffect, useState } from "react";

export function SafeHydration({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  // Only show the UI after hydration to prevent hydration mismatch errors
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated ? (
    <>{children}</>
  ) : (
    <div className="min-h-screen bg-black-100"></div>
  );
}
