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
        const fetchHistory = async () => {
            try {
                const res = await fetch("/api/history");
                const data: HistoryItem[] = await res.json();
                setHistory(data);
            } catch (err) {
                console.error("Failed to fetch history:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    const addToHistory = async (item: {
        code: string;
        explanation: string;
        mode: string;
    }) => {
        const res = await fetch("/api/history", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });

        const newItem = await res.json();

        setHistory((prev) => [newItem, ...prev]);
    };

    const clearHistory = async () => {
        await fetch("/api/history", {
            method: "DELETE",
        });

        setHistory([]);
    };

    return {
        history,
        addToHistory,
        clearHistory,
        loading,
    };
}