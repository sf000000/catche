import Link from "next/link";

import { Logo } from "@/components/ui/logo";

export default function Footer() {
    return (
        <footer className="w-full border-t z-10">
            <div className="container flex flex-col items-center justify-center max-w-md mx-auto text-center">
                <Logo className="my-8" />
                <p className="text-sm text-muted-foreground mb-4 z-10">
                    Built by{" "}
                    <Link className="underline" href="https://jawad.sh">
                        jawad.sh
                    </Link>
                    . The source code is available on{" "}
                    <Link className="underline" href="https://github.com/sf000000/catche">
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </footer>
    );
}
