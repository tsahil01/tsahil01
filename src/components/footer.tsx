import { ThemeToggle } from "./ToggleTheme";

export function Footer() {
    return <>
    <div className="mt-8 p-5 flex flex-row max-w-3xl mx-auto gap-2">
        <p className="text-sm text-primary/60 italic text-center my-auto">
            Liked my work? Want to collaborate? Feel free to reach out to me on <a href="https://x.com/sahiltwtz" className="text-blue-500">X</a> or <a href="mailto:sahiltiwaskar2003@gmail.com" className="text-blue-500">Email</a> 
        </p>
    </div>
    </>
}