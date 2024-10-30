import { TESTIMONIALS } from "@/common/constants";

import { Marquee } from "@/components/ui/marquee";

import { TestimonialCard } from "@/components/home/testimonial-card";

const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);

export const Testimonials = () => {
    return (
        <section className="relative z-10 max-w-screen-xl mx-auto px-4 mt-10 md:px-8">
            <div className="max-w-xl sm:text-center md:mx-auto">
                <h3 className="text-3xl font-semibold sm:text-4xl text-center tracking-tighter">
                    Hear from our users
                </h3>
                <p className="mt-3 text-muted-foreground text-center">
                    Discover how Catche is helping people securely share files with ease and peace
                    of mind.
                </p>
            </div>

            <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg py-12">
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
            </div>
        </section>
    );
};
