export const ACCEPTED_FILE_TYPES = {
    "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    "video/*": [".mp4", ".webm", ".ogg"],
    "audio/*": [".mp3", ".wav", ".ogg"],
    "application/pdf": [".pdf"],
    "application/zip": [".zip"]
};

export const FAQ_ITEMS = [
    {
        question: "What file types can I upload?",
        answer: "We support various file types including images (PNG, JPG, JPEG, GIF), PDFs, and ZIP archives. Each file must be under 50MB in size."
    },
    {
        question: "How secure are my uploaded files?",
        answer: "Your files are encrypted during transfer and storage. We use industry-standard security protocols to ensure your data remains private and secure. Files are only accessible to you and those you explicitly share them with."
    },
    {
        question: "How long are files stored?",
        answer: "Files are stored for 30 days by default. Premium users can extend storage duration up to 1 year. You can manually delete files at any time."
    },
    {
        question: "Can I share my uploaded files?",
        answer: "Yes! After uploading, you'll receive a secure, shareable link. You can set password protection and expiration dates for shared files."
    },
    {
        question: "What happens if my upload fails?",
        answer: "If an upload fails, you'll receive an error message explaining why. Common reasons include file size limits, network issues, or unsupported file types. You can simply try uploading again."
    }
];

export const TESTIMONIALS = [
    {
        name: "Alex",
        username: "@alex",
        body: "Simple, fast, and truly anonymous. Perfect for sharing files without worries.",
        img: "https://avatar.vercel.sh/alex"
    },
    {
        name: "Samira",
        username: "@samira88",
        body: "Exactly what I needed! Easy to use and no signup required.",
        img: "https://avatar.vercel.sh/samira88"
    },
    {
        name: "Liam",
        username: "@liam_the_techie",
        body: "Great for quick, private file sharing. It’s been reliable every time.",
        img: "https://avatar.vercel.sh/liam_the_techie"
    },
    {
        name: "Priya",
        username: "@priyadesigns",
        body: "So refreshing! No clutter, no accounts, just quick sharing.",
        img: "https://avatar.vercel.sh/priyadesigns"
    },
    {
        name: "Carlos",
        username: "@carlostech",
        body: "My go-to for secure, anonymous file transfers. Highly recommend!",
        img: "https://avatar.vercel.sh/carlostech"
    },
    {
        name: "Nina",
        username: "@ninaphotography",
        body: "Perfect for sending photos to clients—fast and no data trail!",
        img: "https://avatar.vercel.sh/ninaphotography"
    }
];
