import { cn } from "@/lib/utils";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

interface TechIconProps {
    name: string;
    href: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, href, Icon }) => (
    <Link
        className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
    >
        <Icon className="h-6 w-6 text-muted-foreground transition-colors" />
    </Link>
);
