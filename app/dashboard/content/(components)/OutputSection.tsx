"use client";
import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

interface OutputSectionProps {
  aiOutput: string;
}
const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // you can plug in your toast here
      toast.success("Text Copied to Clipboard")
    } catch (err) {
      console.error("Copy failed", err);
    }
};
function OutputSection({ aiOutput }: OutputSectionProps) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput || ""); // aiOutput is now the string
  }, [aiOutput]);

  return (
    <div className="bg-white border rounded-md shadow-lg shadow-indigo-500 ">
      <div className="p-5 flex justify-between items-center">
        <h2 className=" text-zinc-900 font-bold text-lg">Your Result</h2>
        <Button className="text-white" onClick={()=> handleCopy(editorRef.current.getInstance().getMarkdown())}>
          <Copy /> Copy
        </Button>
      </div>

      <Editor
        initialValue="Your result will appear here :)"
        ref={editorRef}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut
      />
    </div>
  );
}

export default OutputSection;
