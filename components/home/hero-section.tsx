import { cn } from "@/lib/utils";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiNextdotjs, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

import { Button, buttonVariants } from "@/components/ui/button";

import { ShimmerText } from "../shimmer-text";
import { TechIcon } from "./tech-icon";

interface Technology {
    name: string;
    href: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const technologies: Technology[] = [
    {
        name: "Shadcn UI",
        href: "https://shadcn.com",
        Icon: SiShadcnui
    },
    {
        name: "TypeScript",
        href: "https://typescriptlang.org",
        Icon: SiTypescript
    },
    {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com",
        Icon: SiTailwindcss
    },
    {
        name: "Next.js",
        href: "https://nextjs.org",
        Icon: SiNextdotjs
    }
];

export const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center overflow-hidden py-32">
            <div className="container">
                <div className="mx-auto flex max-w-5xl flex-col items-center">
                    <div className="z-10 flex flex-col items-center gap-6 text-center">
                        <div className="group rounded-full border text-base transition-all ease-in hover:cursor-pointer bg-secondary/50">
                            <ShimmerText>
                                ✨ New UI Version 1.0 is here!
                                <ChevronRight className="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </ShimmerText>
                        </div>
                        <div>
                            <h1 className="mb-6 lead text-pretty text-2xl font-bold lg:text-5xl">
                                Fast, Secure, and Anonymous File Sharing
                            </h1>
                            <p className="text-muted-foreground lg:text-xl">
                                Catche lets you share files, images, and videos with complete
                                anonymity. No sign-up, no hassle—just secure, private sharing.
                            </p>
                        </div>
                        <div className="mt-4 flex justify-center gap-2">
                            <Link
                                href="/upload"
                                className={cn(buttonVariants({ variant: "default" }), "group px-3")}
                            >
                                Upload File
                            </Link>
                            <Button variant="outline">
                                Learn more <ExternalLink className="ml-2 h-4" />
                            </Button>
                        </div>
                        <div className="mt-20 flex flex-col items-center gap-4">
                            <p className="text-muted-foreground lg:text-left">
                                Built with open-source technologies
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {technologies.map(({ name, href, Icon }) => (
                                    <TechIcon key={href} name={name} href={href} Icon={Icon} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
