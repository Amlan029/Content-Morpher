"use client";

import  { useEffect, useState } from "react";
import { Copy, Loader } from "lucide-react";
import Templates from "@/app/(data)/Templates"; 
import Image from "next/image";


export type HistoryItem = {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
};

function getTemplateMeta(slug: string) {
  // Templates structure Adjustment
  return Templates.find((t) => t.slug === slug);
}

const HistoryPage = () => {
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await fetch("/api/GetHistory");
        if (!res.ok) throw new Error("Failed to load history");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // you can plug in your toast here
      alert("Copied to clipboard");
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Loading history... <Loader className="animate-spin"/>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        No history yet. Generate something from the dashboard first.
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold mb-2">History</h1>

      <div className="space-y-4">
        {items.map((item) => {
          const template = getTemplateMeta(item.templateSlug);
          const words =
            item.aiResponse.trim() === ""
              ? 0
              : item.aiResponse.trim().split(/\s+/).length;

          const createdAt = new Date(item.createdAt);
          

          

          return (
            <div
              key={item.id}
              className="rounded-2xl border bg-zinc-900 shadow-md shadow-indigo-500 p-4 flex flex-col gap-3"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border">
                    {template?.icon && <Image src={template.icon} height={70} width={70} alt="icon" />}
                  </span>

                  <div className="flex flex-col">
                    <span className="font-bold text-indigo-500">
                      {template?.name || item.templateSlug}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {createdAt.toLocaleString()} • {words} words
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(item.aiResponse)}
                  className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border hover:bg-accent transition hover:scale-108"
                >
                  <Copy className="h-3 w-3 " />
                  Copy
                </button>
              </div>

              {/* Body / AI response */}
              <div className="text-sm whitespace-pre-wrap leading-relaxed">
                {item.aiResponse}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
