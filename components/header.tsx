import { Logo } from "@/components/ui/logo";

import { DarkModeToggle } from "@/components/mode-toggle";
import { Stargazers } from "@/components/stargazers";

async function getStargazersCount(owner: string, repo: string): Promise<number> {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28"
        },
        next: { revalidate: 60 }
    });

    if (!response.ok) return 0;

    const data = await response.json();
    return data.stargazers_count ?? 0;
}

export async function Header() {
    const owner = process.env.GITHUB_OWNER || "sf000000";
    const repo = process.env.GITHUB_REPO || "catche";

    const stargazersCount = await getStargazersCount(owner, repo);

    return (
        <header className="flex items-center justify-between p-4">
            <Logo />
            <div className="flex items-center gap-3 ml-auto z-10">
                <Stargazers owner={owner} repo={repo} stargazersCount={stargazersCount} />
                <DarkModeToggle />
            </div>
        </header>
    );
}
