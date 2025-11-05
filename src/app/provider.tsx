import { ThemeProvider } from "@/components/theme-provider";

export function Provider({ children }: { children: React.ReactNode }) {
    return <>
        <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            enableSystem={false}
        >
            {children}
        </ThemeProvider>
    </>;
}