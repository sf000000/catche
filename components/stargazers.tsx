import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TbStarFilled } from "react-icons/tb";

interface GithubLinkProps {
    owner: string;
    repo: string;
    stargazersCount: number;
}

export function Stargazers({ owner, repo, stargazersCount }: GithubLinkProps) {
    return (
        <Link
            className="group flex gap-3 items-center text-muted-foreground"
            href={`https://github.com/${owner}/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="relative items-center rounded-lg border bg-clip-padding px-2 py-0.5 transition-colors duration-300 flex group-hover:bg-accent after:absolute after:h-0 after:w-0 after:border-8 after:border-transparent after:transition-colors after:duration-300 after:right-[calc(-0.5em-1px)] after:border-r-0 after:border-l-primary/20 group-hover:after:border-l-primary/30 backdrop-blur-sm text-muted-foreground">
                <TbStarFilled className="w-4 h-4 mr-1.5" />
                {stargazersCount}
            </div>
            <AiFillGithub className="w-8 h-8" />
        </Link>
    );
}
