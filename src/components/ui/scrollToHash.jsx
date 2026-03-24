"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [searchParams]);

  return null;
}