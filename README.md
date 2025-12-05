# 📘 Content Morpher — AI-Powered Content Generation Platform

Content Morpher is a modern AI content generation platform built with **Next.js**, **Clerk Authentication**, **Razorpay Subscriptions**, and **Generative AI APIs**.  
Users can pick templates, enter inputs, and instantly generate high-quality content with a smooth credits-based usage system.

---

## 🚀 Features

### ⭐ AI Content Generation  
Generate blogs, emails, ad copies, captions, and more using template-based prompts.

### ⭐ Dynamic Templates  
All templates are defined in a JSON file and rendered dynamically depending on the selected type.

### ⭐ Credits-Based Usage System  
- Free users get **10,000 word credits**  
- Subscribers get **100,000 credits**  
- Credits update **instantly** on every generation  
- Usage bar visually tracks progress  

### ⭐ Subscription System (Razorpay)  
- Users can upgrade anytime  
- Razorpay subscription + Checkout integration  
- Auto-updates the user's subscription status  
- Higher credit limit for paid users  

### ⭐ Authentication (Clerk)  
Secure login, signup, and user state management using Clerk.

### ⭐ Usage History & Analytics  
- Stores past generations  
- Recalculates usage on reload  
- Shows previously generated outputs  

---

## 🛠️ Tech Stack


### Frontend
---
- **Next.js 14 (App Router)** — UI, routing, API layer  
- **React** — Component-based UI  
- **ShadCN UI** — Design system & components  
- **Tailwind CSS** — Styling  

### Authentication
---
- **Clerk** — Login, signup, session management  

### **Payments & Subscription**
---
- **Razorpay Subscriptions** — Recurring billing & upgrade system  

### AI / Backend Logic
---
- **Generative AI API** — Generates content based on user input  
- **API Routes (Next.js)** — Server-side logic for AI, usage, and billing  

### Database
---
- **Drizzle ORM / SQL Database** — Store history, usage, and subscription state  

### State Management
---
- **React Context API**  
  - Tracks total credits  
  - Tracks subscription status  

### Deployment
---
- **Vercel** — Hosting + serverless functions  

---

## 📁 Project Structure
```bash
/app
├── (context)
│ ├── TotalUsageCredit.tsx
│ └── UserSubscriptionContext.tsx
├── (data)
│ └── Templates.ts
├── dashboard
│ ├── page.tsx
│ ├── history
│ └── billing
├── api
│ ├── GenAIRes → AI content generation
│ ├── GetUsage → Get word usage
│ ├── GetUserSubscription → Check subscription
│ ├── CreateSubscription → Razorpay integration
└── (components)
├── FormSection
├── OutputSection
└── TemplateListSection
```

---

## ⚙️ How Credits Work

### 1. Count generated words**

const wordsUsed = data.text.trim().split(/\s+/).length;
setTotalUsage(prev => prev + wordsUsed);
### 2. Apply immediately
setTotalUsage(prev => prev + wordsUsed);

### 3. Usage bar updates
width: (totalUsage / maxWords) * 100 + "%";

## Credit Limits:

- Free users → 10,000 words

- Subscribers → 100,000 words

## 💳 Subscription Flow (Razorpay)

  -User clicks "Upgrade"
  
  -Backend creates a Razorpay subscription
  
  -Razorpay Checkout opens
  
  -Payment completes
  
  -API verifies subscription
  
  -UserSubscriptionContext updates instantly
  
  -User receives higher credit limits
## 🔒 Authentication (Clerk)

  -Clerk handles:
  
  -Login & Signup
  
  -User session state
  
  -Protected routes
  
  -Components like UserButton and UserProfile
## 🧩 Template System (Dynamic)

Each template looks like:
```bash
{
  slug: "blog-writer",
  name: "Blog Generator",
  description: "...",
  fields: [
    { label: "Topic", name: "topic", required: true },
    { label: "Tone", name: "tone", required: false }
  ]
}
```
These fields automatically generate input sections in the UI.

---

## 📄 Usage History

  -On every generation:
    
  -AI output + prompt are stored
    
  -Word count added to usage
    
  -History page displays all items
    
  -Usage is fetched from:

    -/api/GetUsage

## ▶️ Running the Project Locally
```bash
  git clone <repository-url>
  cd content-morpher
  npm install
  npm run dev
```

### Create .env.local with:
    CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    RAZORPAY_KEY_ID=
    RAZORPAY_KEY_SECRET=
    AI_API_KEY=
    DATABASE_URL=
    NEXT_PUBLIC_APP_URL=http://localhost:3000

## 🎯 Future Improvements

    -Export as PDF / Docx
    
    -Custom template builder
    
    -Credit top-up packs
    
    -Complete analytics dashboard
    
    -Dark/Light theme toggle

## 📌 Conclusion

Content Morpher is a fully functional SaaS-style AI content generator featuring dynamic templates, credit-based usage, subscriptions, and authentication.
The architecture is clean, scalable, and ideal for real-world deployment or portfolio showcase.
