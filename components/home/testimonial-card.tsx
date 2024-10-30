import { cn } from "@/lib/utils";
import Image from "next/image";

function TestimonialCard({
    img,
    name,
    username,
    body
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) {
    return (
        <figure
            className={cn("relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4")}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt="Testimonial Avatar"
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium">{name}</figcaption>
                    <p className="text-xs font-medium text-muted-foreground">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
}

export { TestimonialCard };
