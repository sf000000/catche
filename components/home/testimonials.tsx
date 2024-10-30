import { Marquee } from "@/components/ui/marquee";

import { TestimonialCard } from "@/components/home/testimonial-card";

const reviews = [
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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const Testimonials = () => {
    return (
        <section className="relative min-h-screen">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-3xl font-semibold sm:text-4xl text-center tracking-tighter">
                        Hear from our customers
                    </h3>
                    <p className="mt-3 text-muted-foreground text-center">
                        Discover how Catche is helping people securely share files with ease and
                        peace of mind.
                    </p>
                </div>

                <section className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg py-12">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <TestimonialCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <TestimonialCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
                </section>
            </div>
        </section>
    );
};
