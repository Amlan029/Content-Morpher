"use client";

import { useParams, useRouter } from "next/navigation";
import FormSection from "../(components)/FormSection";
import OutputSection from "../(components)/OutputSection";
import { TEMPLATE } from "../../(components)/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { TotalUsageContext } from "@/app/(context)/TotalUsageCredit";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

function CreateNewContent() {
  const { "template-slug": templateSlug } = useParams();
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === templateSlug
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
  const {userSubscription} = useContext(UserSubscriptionContext)
  const router = useRouter();
  const GenerateAiContent = async (formData: any) => {
    try {
      setLoading(true);
      if(totalUsage>=10000 && !userSubscription){
        toast.caller("You are out of Credit⚠️");
        router.push("/dashboard/billing")
      }
      const res = await fetch("/api/GenAIRes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, templateSlug }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error("Error while fetching GenAIRes");
        return;
      } else{
        toast.success("Content Generated Successfully")
      }

      setAiOutput(data.text);

      // ⭐ immediately update credits here
      const wordsUsed =
        data.text?.trim().length ? data.text.trim().split(/\s+/).length : 0;

      setTotalUsage((prev: number) => prev + wordsUsed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAiContent(v)}
          loading={loading}
        />
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
}

export default CreateNewContent;
