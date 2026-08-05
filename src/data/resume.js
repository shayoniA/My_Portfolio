import { m } from 'framer-motion';
import {
  Award,
  BookOpen,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Sparkles,
  Trophy,
  Wand2,
} from 'lucide-react';

export const profile = {
  name: 'Sayani Adhikary',
  title: 'Aspiring Software Engineer',
  email: 'sayania662@gmail.com',
  phone: '+91 9874112460',
  summary:
    'Aspiring Software Engineer with strong foundations in full-stack development, data science, and AI/ML.',
  location: 'India',
};

export const socials = [
  { label: 'Email', icon: Mail, href: 'mailto:sayania662@gmail.com' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/shayoniA' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sayani-adhikary-825349298/' },
];

export const highlights = [
  { label: 'Full-stack Development'},
  { label: 'AI / ML & Deep Learning'},
  { label: 'Agentic AI & LLMs'},
  { label: 'Cloud & DevOps'},
  { label: 'Computer Vision & NLP'},
  { label: 'Data Structures & Algorithms'},
];

export const quickStats = [
  { value: '5', label: 'Resume sections' },
  { value: '4', label: 'Core project showcases' },
  { value: '8+', label: 'Skill clusters' },
  { value: 'Top 100', label: 'Myntra HackerRamp 2025' },
];

export const sectionCards = [
  {
    title: 'Education & Qualifications',
    description:
      'A quick look at my academic foundation and where I am building my engineering craft.',
    icon: BookOpen,
    to: '/education',
    accent: 'teal',
  },
  {
    title: 'Skills',
    description:
      'Structured groups for full-stack, AI, DevOps, and programming languages with a polished presentation.',
    icon: Wand2,
    to: '/skills',
    accent: 'cyan',
  },
  {
    title: 'Projects',
    description:
      'A deeper, interactive showcase of some selective projects with tech stack, impact, and problem framing.',
    icon: Layers3,
    to: '/projects',
    accent: 'mint',
  },
  {
    title: 'Achievements & Experience',
    description:
      'Internships, hackathons, and competitive programming accomplishments presented as a timeline.',
    icon: Trophy,
    to: '/experience',
    accent: 'gold',
  },
  {
    title: 'Courses & Certifications',
    description:
      'A showcase of some selective courses I have taken along with their certificates.',
    icon: Trophy,
    to: '/certifications',
    accent: 'mint',
  },
];

export const education = [
  {
    degree: 'B. Tech, Computer Science & Engineering',
    institution: 'Indian Institute of Information Technology Guwahati',
    years: '2023 - 2027',
    note: 'Strong academic base for software engineering, systems thinking, and modern AI workflows.',
    score: '7.66',
    result: 'https://drive.google.com/file/d/1lOO7CDXbMzvgWb7MrbJL6qZqx4j9puwa/view?usp=sharing'
  },
  {
    degree: 'CISCE Indian School Certificate (ISC) - Class XII',
    institution: 'Abbot Shishu Hall',
    years: '2022',
    note: 'Stream - Science (Physics, Chemistry, Maths, Biology, Computer science',
    score: '94.75 %',
    result: 'https://drive.google.com/file/d/1Tg2mnRHkZuOSbVU82HLphV-o1kaoLdhh/view?usp=sharing'
  },
  {
    degree: 'CISCE Indian Certificate of Secondary Education (ICSE) - Class X',
    institution: 'Abbot Shishu Hall',
    years: '2020',
    note: 'Topped my batch',
    score: '94 %',
    result: 'https://drive.google.com/file/d/161MtAH2kJhePiBC34i-ACAOTPeOYbZj6/view?usp=sharing'
  },
];

export const certifications = [
  {
    skill: 'The Complete Agentic AI Engineering Course',
    link: 'https://drive.google.com/file/d/11ahP34_bCb6leHbZBahd2xGRlzjR2hHx/view?usp=sharing',
    set: 'OpenAI Agents SDK, Multi-agent orchestration, MCP, LangChain, LangGraph, CrewAI, Autogen, Human-in-the-loop design'
  },
  {
    skill: 'LLM Engineering: Master AI, Large Language Models, & Agents',
    link: 'https://drive.google.com/file/d/16zeqNIJUTwjkmFQ67aDtmyOVixjnZweg/view?usp=sharing',
    set: 'RAG, Tool calling, Hugging face, LoRA & QLoRA, Open-sourec models like Ollama, Gradio'
  },
  {
    skill: 'Machine Learning A-Z: AI, Python & R',
    link: 'https://drive.google.com/file/d/1sto-HQTe68EOJh4MBLhDDZOpF9zSMJhL/view?usp=sharing',
    set: 'Supervised (Regression / Classification) & Unsupervised (Clustering) learning, Data preprocessing, Model selection, Hyperparameter tuning, Decision trees & Random forest, SVM & SVR, XGBoost, Association Rule learning (Apriori & Eclat), Dimensionality reduction (PCA & LDA)'
  },
  {
    skill: 'The Complete Web Development Bootcamp - by Dr. Agenla Yu',
    link: 'https://drive.google.com/file/d/1IC1hBVP-SRGS8IbwudGOAeSIrxcpI88O/view?usp=sharing',
    set: 'HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, ExpressJS, jQuery, DOM, NextJS, MongoDB, PostgreSQL, Postman, RESTful APIs, Git (version control), Authentication & security'
  },
  {
    skill: 'Deep Learning A-Z: Neural Networks, AI',
    link: 'https://drive.google.com/file/d/1VkRPkXUTtf8vaT2gKcscelxIAqniTpCU/view?usp=sharing',
    set: 'Neural networks (ANN, CNN, RNN), Self-organizing maps (SOM), Boltzmann machines'
  },
  {
    skill: 'Docker & Kubernetes: The Practical Guide',
    link: 'https://drive.google.com/file/d/1VABTQTTtHChTbALeNob2KFP4AgqtJjME/view?usp=sharing',
    set: 'Docker, Kubernetes, Containerization, Cross-container communication, Kubernetes networking'
  },
  {
    skill: 'NLP: Natural Language Processing with Python',
    link: 'https://drive.google.com/file/d/1vDha5fZPyg6xuut86U4_DkzUa6bj8XYI/view?usp=sharing',
    set: 'Named entity recognition, Semantic analysis, Text classification, Topic modelling'
  },
];

export const skills = [
  {
    title: 'Software Development',
    items: ['HTML', 'CSS', 'JavaScript', 'Flask', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'RESTful APIs', 'jQuery', 'DOM', 'MongoDB', 'PostgreSQL', 'Software testing', 'Postman', 'Mocha', 'Git (version control)', 'Authentication & security'],
  },
  {
    title: 'Agentic AI & LLMs',
    items: ['RAG', 'Tool calling', 'MCP', 'LangChain', 'HuggingFace', 'Prompt engineering', 'OpenAI Agents SDK', 'Multi-agent orchestration', 'CrewAI', 'LoRA & QLoRA', 'Open-sourec models like Ollama', 'Gradio'],
  },
  {
    title: 'AI / ML & Deep Learning',
    items: ['Regression', 'Classification', 'Clustering', 'PyTorch', 'TensorFlow', 'Data preprocessing', 'Hyper-parameter tuning', 'ANNs', 'CNNs', 'RNNs', 'Model selection', 'Association Rule learning (Apriori & Eclat)', 'Boltzmann machines', 'Dimensionality reduction (PCA & LDA)', 'Self-organizing maps (SOM)'],
  },
  {
    title: 'Computer Vision & NLP',
    items: ['Object detection', 'Image classification', 'YOLO', 'Image segmentation', 'OpenCV', 'Face detection', 'Named entity recognition', 'Semantic analysis', 'Topic modelling', 'Text classification'],
  },
  {
    title: 'Cloud Computing & DevOps',
    items: ['AWS (EC2, IAM, S3)', 'Docker', 'Kubernetes', 'Render', 'Railway', 'Deployment', 'Containerization', 'Cross-container communication'],
  },
  {
    title: 'Programming Languages & DSA',
    items: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'Data structures', 'Algorithms', 'OOPs'],
  },
  {
    title: 'Design & Product',
    items: ['UX/UI Design', 'Figma', 'Web scraping', 'Agile/Scrum', 'System thinking', 'Problem solving'],
  },
];

export const projects = [
  {
    name: 'Ingrelens',
    stack: ['LLMs (Google Gemini API)', 'Flask', 'ReactJS', 'Tesseract OCR', 'MongoDB', 'Caching', "Ollama's Mistral model", 'Render'],
    description: (<>Key Features:
1. <strong>Image-based ingredient extraction</strong>:  Upload a cosmetic product image and automatically extract ingredient text using OCR.
2. <strong>AI-powered ingredient classification</strong>:  Ingredients are classified as good or bad using LLMs instead of static rule-based systems.
3. <strong>Dynamic health scoring</strong>:  A health score is generated based on the overall ingredient composition.
4. <strong>Click-to-explain ingredients</strong>:  Click on any ingredient to receive streamed explanations describing both positive and negative effects, rendered in Markdown.
5. <strong>Cached explanations</strong>:  Previously explained ingredients are stored to reduce latency and minimize API calls.
6. <strong>Clean and responsive UI</strong>:  Smooth animations, loaders, and an intuitive interface for better user experience.

<strong>Why I Built Ingrelens?</strong>
Most ingredient-checking applications rely on static databases and do not adapt to context or combinations of ingredients. Being interested in AI, LLMs, and real-world problem solving, I wanted to build a system that:
- Uses AI reasoning instead of simple database lookups
- Explains ingredients dynamically on demand
- Enables meaningful comparison between cosmetic products
- Future Improvements
- Ingredient sensitivity personalization based on user profile and usage history</>),
    impact: 'A web app that analyzes cosmetic product ingredients directly from images, and explains their impact on skin health. It categorizes ingredients as good or bad, and generates an overall health score for the product, enabling easy comparison between products (higher score indicates better suitability).',
    demovideo: 'https://drive.google.com/file/d/1cjAATwds1UuHmvSKC2Dn4ooxX58_pds4/view',
    deployment: 'https://ingrelens1.onrender.com',
  },
  {
    name: 'Telegram Drug Detector',
    stack: ['Blockchain', 'Flask', 'ReactJS', 'Web3.js', 'NLP', 'Computer Vision', 'Solidity', 'EasyOCR', 'CLIP', 'Telethon (Telegram API)', 'PyTorch', 'Solidity', 'Ganache', 'Ethereum Smart Contracts'],
    description:
      (<>Key Features:
1. <strong>Automated Telegram Monitoring</strong>:  Joins public Telegram channels and fetches recent messages automatically.
2. <strong>Keyword-Based Text Analysis</strong>:  Detects drug, contact, and transaction-related keywords and assigns suspicion scores.
3. <strong>Computer Vision for Image Detection</strong>:  Uses EasyOCR and CLIP to identify drug-related text and visuals inside images.
4. <strong>Blockchain Logging</strong>:  Stores flagged messages immutably on Ethereum (Ganache) with hashes and scores.
5. <strong>Interactive Dashboard</strong>:  React-based UI to view flagged messages, rank channels by total risk score, and inspect message-level details.

<strong>Why I Built TelegramDrugDetector?</strong>
Drug trafficking and illegal substance promotion increasingly exploit encrypted and semi-public platforms like Telegram. Manual monitoring is slow, error-prone, and non-scalable. I built TelegramDrugDetector to explore how AI + blockchain + computer vision can be combined to:
- Automatically detect suspicious activity at scale
- Reduce human effort in monitoring large volumes of content
- Preserve evidence immutably on blockchain for transparency and auditability
- Visualize risk patterns across channels rather than isolated messages</>),
    impact: 'An end-to-end monitoring and analysis system that detects and tracks suspicious drug-related content on Telegram. It automatically joins public Telegram channels, analyzes text/images for drug-related content using NLP and Computer Vision, assigns a suspicion score to each such channel, and logs high-risk messages on the blockchain, to make the records tamper-proof. A React-based dashboard visualizes flagged messages and suspicious channels.',
    demovideo: ' https://drive.google.com/file/d/1AkVjVbFNOT7-nSRA2ntYyLZLh8huQwRB/view',
  },
  {
    name: 'ProtoBoost',
    stack: ['Google Gemini API', 'AI Agents', 'Sentence Transformers', 'BERT', 'Flask', 'MongoDB', 'Pandas', 'Scikit-learn'],
    description:
      (<>Key features:
1. <strong>Prototype Input</strong>:  The system accepts a prototype or codebase as input. Each feedback iteration represents one loop of the prototyping model.
2. <strong>Multi-Agent Feedback Generation</strong>:  Each of the ‘n’ ( input by user) user-specific agents behave as a distinct user category. For each iteration, they independently analyse the prototype, and generate feedback, with metadata: Category (like UX/UI, Feature Request, etc.), Confidence score, and Agent Identifier.
3. <strong>Duplicate Feedback Detection</strong>:  Each agent checks if a semantically-similar feedback  was already generated by the previous agents. If found, its Frequency is incremented. Else a new feedback entry is created with frequency 1.
4. <strong>Interaction with Decision-Making Agent (another agent by my teammate for optimization)</strong>:  In the next iteration, the updated prototype is checked against the previous iteration’s feedback items. If a feedback was not implemented, the Agent Acceptance Rate of the contributing agent(s) decrease, and its Rejection Count increases. If Rejection Count exceeds a predefined threshold, the feedback is permanently discarded. This prevents repeated low-value feedback.
5. <strong>Feedback Score</strong>: Each feedback item is associated with Category, Confidence score, Agent acceptance rate, Frequency. Therefore, each feedback is given a composite score using this formula:
<strong>Feedback Score = [a × Frequency] + [b × Acceptance Rate] + [c × Confidence Score]</strong>

<strong>Why did we built ProtoBoost?</strong>
In iterative software prototyping, user feedback is essential for refining designs and improving usability. But current feedback collection systems rely heavily on manual interpretation, simple voting mechanisms, or static models. Also, there are challenges like feedback-conflicts, over-representation of users, and lack of awareness of prototype maturity. Hence we propose ProtoBoost that makes the prototyping model more scalable, intelligent, and cost-effective.</>),
    impact: 'A multi-agent AI-based feedback reasoning system designed to make iterative software prototyping adaptive and cost-efficient. It models feedback generation, evaluation, and convergence as a multi-loop and memory-based reasoning process, by simulating user categories via user-specific agents, that generate feedback with a composite score based on: frequency, rejection count, frequency, confidence, and historical agent-acceptance rate.',
    demovideo: 'https://drive.google.com/file/d/1MXN0UX4XVqYj7VdIH_wV0xYfSRl4_iQ5/view',
  },
  {
    name: 'StoreIntel - Purplle Tech Challenge 2026',
    stack: ['Computer Vision', 'Redis', 'Apache Kafka', 'Flask', 'YOLOv8', 'LLMs (Google Gemini API)', 'SafeDetector', 'ByteTrack', 'DeepSORT', 'OpenCV', 'imageio (video reader)', 'NumPy', 'Pydantic', 'SQLite', 'RLock', 'MongoDB', 'Next.js', 'TypeScript', 'WebSocket', 'Tailwind CSS', 'Docker'],
    description:
      (<>Key features:
1. <strong>Individuals are tracked</strong> across frames using appearance embeddings, clothing colour, height estimates, and movement direction.
2. <strong>Re-identification</strong> of the same person after occlusion or across adjacent cameras, preserving a consistent identity throughout their visit.
3. <strong>Business events</strong> are obtained from frame-level detections, like ENTRY, EXIT, ZONE_ENTER, ZONE_EXIT, ZONE_DWELL (every 30s of continuous presence), BILLING_QUEUE_JOIN, BILLING_QUEUE_ABANDON, and REENTRY. Every event carries a confidence score.
4. <strong>Staff identification</strong> by uniform colour match, logo/badge detection, and behavioural signals (long duration, billing-area presence, no purchase history).
5. <strong>Billing-queue abandonment</strong> is identified.
6. <strong>Facilitates Anomaly Detection</strong> like QUEUE_ABANDONMENT_SPIKE, HIGH_DWELL_LOW_CONVERSION, SUSPICIOUS_RAPID_REENTRY, EXTREMELY_CROWDED_ZONE, etc.
7. <strong>Natural language AI insights</strong>, daily/weekly store reports, powwered by Gemini (falls back to a rule-based engine in absence of API key).
8. <strong>Live Dashboard</strong> Next.js frontend with real-time metrics, heatmap, anomaly feed, and AI insights. Updates arrive over WebSockets with 60-second polling as fallback.</>),
    impact: 'StoreIntel, a retail store intelligence system, converts raw CCTV footage from physical retail stores into live business analytics. It detects and tracks people frame by frame, emits structured events, streams those events into a REST API, computes real-time metrics and anomalies, and displays everything on a live dashboard. See DESIGN.md for architecture details and CHOICES.md for the three key engineering decisions with full reasoning.',
    demovideo: 'https://drive.google.com/file/d/1mASiPfmA3S7dZ3B9f-NxtcMvMy16mUtE/view?usp=sharing',
  },
  {
    name: 'DressDemona',
    stack: ['AI Agents', 'Selenium', 'BeautifulSoup', 'LLMs (Ollama models)', 'Machine Learning (Clustering)', 'MongoDB', 'React.js', 'Flask', 'Pillow (image processing)', 'Render'],
    description:
      (<>Key Features:
1. <strong>LLM-powered Outfit Understanding</strong>:  Upload outfit images and automatically extract concise clothing descriptions using a multimodal LLM.
2. <strong>Personal Style Profiling</strong>:  Build a dynamic fashion profile based on uploaded outfits.
3. <strong>Style-Based Social Feed</strong>:  Users are clustered based on fashion preferences and shown outfits from similar users.
4. <strong>Cross-Platform Shopping Recommendations</strong>:  Fetches fashion items matching the user’s style from multiple shopping sites (here, Amazon and Zara).
5. <strong>End-to-End Full Stack System</strong>:  Authentication, image uploads, feed ranking, clustering, and recommendations.

<strong>Why I Built DressDemona?</strong>
Finding clothes that genuinely match personal style across multiple platforms is time-consuming and fragmented. Most fashion apps rely only on filters or static recommendations. I built DressDemona to explore how AI, computer vision, and user behavior can work together to:
- Understand fashion visually, and learn evolving personal style
- Combine personal styles with web-scraped recommendations from multiple sites using LLMs
- Provide feed containing outfit recommendations of other users who share similar fashion tastes
- Create a more intuitive and human-like fashion discovery experience</>),
    impact: 'An AI-powered fashion-discovery platform that helps users define their personal style through outfit uploads and receive curated clothing recommendations across multiple e-commerce platforms. DressDemona creates a personalized fashion experience, where users upload outfit images on their profiles and get recommendations from websites like Zara and Amazon, all tailored to their fashion preferences.',
    demovideo: 'https://drive.google.com/file/d/1PP9bRJ21m0zf_isI5kRoBzH0NZQ6N9OQ/view',
  },
];

export const experience = [
  {
    title: 'Full-stack Developer Internship - Floneo Technologies',
    org: 'Floneo Technologies',
    summary:
      'Working on product development, backend APIs, debugging, and testing as an intern.',
    details: [
      'Building and maintaining product features with a practical full-stack mindset.',
      'Contributing to backend APIs, bug fixing, and test coverage.',
      'Learning production-oriented development patterns in a team environment.',
    ],
    link_floneo: 'https://drive.google.com/file/d/1C3Clc9Wzr2S2iI73sq4u1xC2WouE6T2V/view',
    time: 'May 2026 - August 2026\u00A0\u00A0\u00A0\u00A0\u00A0(3 months - Ongoing)'
  },
  {
    title: 'Oracle Fusion HCM Intern - MPC Cloud Consulting',
    org: 'MPC Cloud Consulting Pvt. Ltd.',
    summary:
      'Being trained in Oracle Fusion Applications, Oracle Cloud ERP, and related enterprise consulting concepts.',
    details: [
      'Exposure to enterprise software and cloud consulting workflows.',
      'Understanding operational processes and business systems.',
      'Building familiarity with large-scale corporate software ecosystems.',
    ],
    link_mpc: 'https://drive.google.com/file/d/1AfbEd4L6Eh4EKkTO4t8yXpDk_ZOJY9Cn/view',
    time: 'May 2026 - July 2026\u00A0\u00A0\u00A0\u00A0\u00A0(2 months)'
  },
  {
    title: 'Competitive Programming - Codeforces',
    org: 'Codeforces',
    summary: 'Current rating of 1393 [Pupil @Codeforces]',
    details: [
      'Shows consistent problem solving and algorithmic practice.',
      'Enables better problem solving, structured thinking, and speed under pressure.',
    ],
    link_cf: 'https://codeforces.com/profile/sayani1'
  },
  {
    title: 'Myntra HackerRamp 2025 - WeForShe Hackathon',
    org: 'Myntra',
    summary: 'Team Lead - Team ranked among Top 100 in India.',
    details: [
      'Built a solution to make online shopping socially engaging.',
      'Strengthened teamwork, leadership, presentation, and fast-paced product development.',
      'Participated in several other hackathons with a product-first mindset.',
    ],
    link_myntra: 'https://www.linkedin.com/posts/sayani-adhikary-825349298_hackathon-myntraweforshe-womenintech-activity-7404216454637813761-VMgc/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf0KV0B4zzZzkV8VF4Zs8YI6Gt0heLQ81M'
  },
];

export const deepDiveCopy = {
  intro:
    'I enjoy turning complex problems into clean, useful software that feels fast, intelligent, and easy to use.',
  intro2:
    'My work spans full-stack engineering, AI/ML experimentation, and product-oriented prototyping, with a strong bias toward practical results and thoughtful design.',
  intro3:
    'This portfolio is structured like a living resume: each section expands into richer detail so visitors can explore my background at their own pace.',
  buttons: [
    { label: 'Education', to: '/education', icon: BookOpen },
    { label: 'Skills', to: '/skills', icon: Code2 },
    { label: 'Projects', to: '/projects', icon: ExternalLink },
    { label: 'Experience', to: '/experience', icon: Award },
    { label: 'Certifications', to: '/certifications', icon: Award }
  ],
  spotlight: [
    'Full-stack development with modern JavaScript and Flask',
    'AI/ML with LLMs, NLP, computer vision, and data-driven scoring',
    'Cloud tooling, Docker, and deployment workflows',
    'Hackathon leadership and competitive programming',
  ],
  accentWords: ['software', 'AI/ML', 'product thinking', 'visual polish'],
  metaLine: 'Teal-powered interface. Dark, focused aesthetic. Motion-rich but readable.',
  badges: ['Interactive', 'Responsive', 'Animated', 'Resume-first'],
  extraIcons: [Sparkles, Globe2],
};
