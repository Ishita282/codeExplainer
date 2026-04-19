"use client";

import { useEffect, useState } from "react";

export function useUsage(limit: number) {
  const [usage, setUsage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await fetch("/api/usage");
        if (!res.ok) throw new Error("Failed to fetch usage");

        const data = await res.json();
        if (mounted) setUsage(data.count ?? 0);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const increment = async () => {
    try {
      const res = await fetch("/api/usage/increment", {
        method: "POST",
      });

      if (!res.ok) throw new Error("Increment failed");

      const data = await res.json();
      setUsage(data.count ?? 0);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    usage,
    increment,
    isLimitReached: usage >= limit,
    loading,
  };
}