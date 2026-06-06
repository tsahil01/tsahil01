import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "404",
};

export default function NotFound() {
    return (
        <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 px-5 py-32 text-center">
            <p className="font-mono text-6xl sm:text-7xl font-semibold tracking-tighter text-foreground">
                404
            </p>
            <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary/30">{"// "}</span>
                this page doesn&apos;t exist. or i broke it. probably the second one.
            </p>
            <Link
                href="/"
                className="group mt-2 inline-flex items-center gap-1.5 font-mono text-sm text-primary/60 hover:text-primary transition-colors"
            >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                back home
            </Link>
        </div>
    );
}
