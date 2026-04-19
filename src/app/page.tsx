"use client";

import { useState } from "react";

// App Components
import CodeInput from "../components/CodeInput";
import ToggleSwitch from "../components/ToggleSwitch";
import ExplainButton from "../components/ExplainButton";
import OutputBox from "../components/OutputBox";
import UsageCounter from "../components/UsageCounter";
import HistoryPanel from "../components/HistoryPanel";

// Landing Page Components
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

import { useUsage } from "../hooks/useUsage";
import { useHistory, HistoryItem } from "../hooks/useHistory";

export default function Home() {
  const FREE_LIMIT = 5;

  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [simpleMode, setSimpleMode] = useState(false);

  const { usage, increment, isLimitReached } = useUsage(FREE_LIMIT);
  const { history, addToHistory, clearHistory } = useHistory();

  const handleExplain = async () => {
    if (!code.trim() || loading) return;

    if (isLimitReached) {
      alert("Upgrade to Pro for unlimited explanations 🚀");
      return;
    }

    setLoading(true);
    setExplanation("");

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          mode: simpleMode ? "simple" : "normal",
        }),
      });

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();

      setExplanation(data.explanation);
      increment();

      addToHistory({
        code,
        explanation: data.explanation,
        mode: simpleMode ? "simple" : "normal",
      });
    } catch (err) {
      console.error("Error:", err);
      setExplanation("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectHistory = (item: HistoryItem) => {
    setCode(item.code);
    setExplanation(item.explanation);
    setSimpleMode(item.mode === "simple");
  };

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      
      {/* Landing Page */}
      <Hero />

      {/* Code Explainer App Section */}
      <section className="py-16 px-4 flex justify-center">
        <div className="w-full max-w-2xl p-6 space-y-6 rounded-2xl shadow-xl bg-white dark:bg-zinc-900">
          
          <h2 className="text-2xl font-bold text-center">
            🚀 Try Code Explainer
          </h2>

          <CodeInput code={code} setCode={setCode} />

          <ToggleSwitch enabled={simpleMode} setEnabled={setSimpleMode} />

          <ExplainButton onClick={handleExplain} loading={loading} />

          <UsageCounter usage={usage} limit={FREE_LIMIT} />

          <OutputBox explanation={explanation} />

          <HistoryPanel
            history={history}
            onSelect={handleSelectHistory}
            onClear={clearHistory}
          />
        </div>
      </section>

      {/* Remaining Landing Sections */}
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />

    </main>
  );
}