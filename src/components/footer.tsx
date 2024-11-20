import { ThemeToggle } from "./ToggleTheme";

export function Footer() {
    return <>
    <div className="mt-8 p-5 flex flex-row max-w-3xl mx-auto gap-2">
        <p className="md:text-base text-sm text-primary/60 italic text-center my-auto">
            Liked my work? Want to collaborate? Feel free to reach out to me on <a href="https://twitter.com/t__sahil" className="text-blue-500">Twitter</a> or <a href="https://www.linkedin.com/in/sahil-tiwaskar/" className="text-blue-500">LinkedIn</a> 
        </p>
        <ThemeToggle/>
    </div>
    </>
}