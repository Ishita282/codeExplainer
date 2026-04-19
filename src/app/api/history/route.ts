"use client";

import { useEffect, useState } from "react";

export type HistoryItem = {
  id: string;
  code: string;
  explanation: string;
  mode: string;
  createdAt: string;
};

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/history");
        if (!res.ok) throw new Error("Failed to fetch history");

        const data = await res.json();
        setHistory(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addToHistory = async (item: {
    code: string;
    explanation: string;
    mode: string;
  }) => {
    try {
      const res = await fetch("/api/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      // ✅ handle failed responses FIRST
      if (!res.ok) {
        const text = await res.text(); // safer than json
        console.error("API error:", res.status, text);
        return;
      }

      // ✅ only parse if valid
      const newItem = await res.json();

      setHistory((prev) => [newItem, ...prev]);
    } catch (err) {
      console.error("Add history failed:", err);
    }
  };

  const clearHistory = async () => {
    try {
      const res = await fetch("/api/history", {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setHistory([]);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    history,
    addToHistory,
    clearHistory,
    loading,
  };
}