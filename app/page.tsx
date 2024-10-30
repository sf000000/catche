import { HeroSection } from "@/components/home/hero-section";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
    return (
        <>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0" />
            <HeroSection />
            <Testimonials />
        </>
    );
}
