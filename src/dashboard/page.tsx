"use client";

import CodeEditor from "@/components/dashboard/CodeEditor";
import HistoryPanel from "@/components/dashboard/HistoryPanel";
import OutputPanel from "@/components/dashboard/OutputPanel";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

export default function Dashboard() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex h-screen bg-white dark:bg-black">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 gap-6">

        <CodeEditor
          code={code}
          setCode={setCode}
          loading={loading}
          setLoading={setLoading}
          setExplanation={setExplanation}
        />

        <OutputPanel explanation={explanation} loading={loading} />

      </div>

      {/* History Panel */}
      <HistoryPanel
        setCode={setCode}
        setExplanation={setExplanation}
      />
    </div>
  );
}