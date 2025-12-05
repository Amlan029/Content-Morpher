export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points only based on the given niche and outline. Return the result in Markdown format suitable for a rich text editor (use -, *, etc.). Do NOT use any HTML tags.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate detailed blog content based on the provided topic and outline. Return the result in Markdown format suitable for a rich text editor (use headings, subheadings, bullet points, etc.). Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate the top 5 blog topic ideas in bullet points only (no descriptions) based on the given niche. Return the result as a Markdown bullet list. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me the best SEO-optimized, high-ranked 5 YouTube title ideas in bullet points only based on the given keywords and outline. Return the result in Markdown bullet list format. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate a YouTube description with emojis in 4–5 lines based on the topic and outline. Return the result as plain text/Markdown (no HTML tags).",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 YouTube tags as a simple comma-separated list or bullet list based on the title and outline. Return the result in plain text/Markdown format. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite the given article to be plagiarism free and human-like while keeping the original meaning. Return the result in plain text/Markdown format suitable for a rich text editor. Do NOT use any HTML tags.",
    form: [
      {
        label: "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Rewrite the given text, improving grammar, clarity, and professionalism while keeping the same meaning. Return the result in plain text/Markdown format. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add relevant emojis to the given text based on its meaning and tone, then rewrite it. Return the result in plain text/Markdown format. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post captions based on the given keywords. Each caption should be engaging and can include emojis and hashtags. Return everything in plain text/Markdown format (no HTML tags).",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hashtags based on the given keywords. Return them as a simple list or comma-separated in plain text/Markdown format. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5–10 Instagram post or reel ideas based on the given niche and current trends. Return the ideas as a numbered or bullet list in plain text/Markdown format. Do NOT use HTML tags.",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",
    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting grammar, spelling, and clarity while keeping the same meaning. Return the result in plain text/Markdown format. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    aiPrompt:
      "Based on the user's codeDescription, write the requested code. Return ONLY the code inside a Markdown code block (```), optionally with the correct language hint, and do NOT use any HTML tags.",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPrompt:
      "Based on the user's codeDescription, explain the code line by line. Return the explanation in Markdown format, using headings and bullet points where helpful. Do NOT use any HTML tags.",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",
    slug: "code-bug-detector",
    aiPrompt:
      "Based on the user's codeInput, detect bugs or issues in the code and suggest fixes. Return the explanation in Markdown format and include corrected code snippets inside Markdown code blocks (```), with no HTML tags.",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",
    slug: "tagline-generator",
    aiPrompt:
      "Based on the user's productName and outline, generate 5–10 catchy taglines for the business/product. Return them as a bullet or numbered list in plain text/Markdown format. Do NOT use HTML tags.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",
    slug: "product-description",
    aiPrompt:
      "Based on the user's productName and description, generate a short, compelling product description for e-commerce. Return the result in plain text/Markdown format suitable for a rich text editor. Do NOT use any HTML tags.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];
