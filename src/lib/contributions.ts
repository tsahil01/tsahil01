export interface Pr {
    title: string;
    number: number;
    url: string;
    date: string; // YYYY-MM-DD (merged)
}

export interface Contribution {
    id: string;          // url slug, e.g. "billingsdk"
    repo: string;        // display repo name
    repoFull: string;    // "owner/repo"
    company: string;     // org / company behind the repo
    repoUrl: string;
    description: string;
    bounty?: string;     // e.g. "$500" - leave undefined if none
    prs: Pr[];
}

// Curated from real merged PRs (github.com/tsahil01). Add/trim PRs and fill in
// `bounty` amounts where applicable.
export const contributions: Contribution[] = [
    {
        id: "billingsdk",
        repo: "billingsdk",
        repoFull: "dodopayments/billingsdk",
        company: "Dodo Payments",
        repoUrl: "https://github.com/dodopayments/billingsdk",
        description: "Open-source billing components library (#4 on Product Hunt). Core contributor & maintainer - CLI tooling, registry, theming and docs.",
        // bounty: "",
        prs: [
            { title: "chore: update JSON files for billing components", number: 361, url: "https://github.com/dodopayments/billingsdk/pull/361", date: "2026-02-14" },
            { title: "fix(theme-radius): Add --radius CSS variable to all dark themes", number: 349, url: "https://github.com/dodopayments/billingsdk/pull/349", date: "2026-01-03" },
            { title: "[autofix.ci] apply automated fixes", number: 345, url: "https://github.com/dodopayments/billingsdk/pull/345", date: "2025-12-17" },
            { title: "Enable autofix.ci for automatic formatting/linting on all pull requests", number: 329, url: "https://github.com/dodopayments/billingsdk/pull/329", date: "2025-11-26" },
            { title: "feat: automated code formatting with Prettier and integrates formatting checks into the CI workflow.", number: 325, url: "https://github.com/dodopayments/billingsdk/pull/325", date: "2025-11-20" },
            { title: "fix: invalid link on homepage", number: 307, url: "https://github.com/dodopayments/billingsdk/pull/307", date: "2025-10-16" },
            { title: "fix landing page", number: 295, url: "https://github.com/dodopayments/billingsdk/pull/295", date: "2025-10-08" },
            { title: "UI Revamp", number: 282, url: "https://github.com/dodopayments/billingsdk/pull/282", date: "2025-10-04" },
            { title: "registry build", number: 245, url: "https://github.com/dodopayments/billingsdk/pull/245", date: "2025-09-30" },
            { title: "update Readme", number: 203, url: "https://github.com/dodopayments/billingsdk/pull/203", date: "2025-09-16" },
            { title: "Add Fastify support to CLI + Docs update", number: 202, url: "https://github.com/dodopayments/billingsdk/pull/202", date: "2025-09-16" },
            { title: "fix sitemap", number: 154, url: "https://github.com/dodopayments/billingsdk/pull/154", date: "2025-09-08" },
            { title: "update readme", number: 153, url: "https://github.com/dodopayments/billingsdk/pull/153", date: "2025-09-08" },
            { title: "chore(release): bump CLI version to 0.7.0", number: 152, url: "https://github.com/dodopayments/billingsdk/pull/152", date: "2025-09-08" },
            { title: "fixes", number: 151, url: "https://github.com/dodopayments/billingsdk/pull/151", date: "2025-09-08" },
            { title: "update useBilling hook", number: 133, url: "https://github.com/dodopayments/billingsdk/pull/133", date: "2025-09-05" },
            { title: "fixes and doc update", number: 131, url: "https://github.com/dodopayments/billingsdk/pull/131", date: "2025-09-05" },
            { title: "fix PH top banner", number: 120, url: "https://github.com/dodopayments/billingsdk/pull/120", date: "2025-09-04" },
            { title: "ShadCN CLI v3 support with registry and MCP", number: 101, url: "https://github.com/dodopayments/billingsdk/pull/101", date: "2025-09-03" },
            { title: "update docs", number: 99, url: "https://github.com/dodopayments/billingsdk/pull/99", date: "2025-09-02" },
            { title: "update to v0.6.0", number: 98, url: "https://github.com/dodopayments/billingsdk/pull/98", date: "2025-09-02" },
            { title: "Update docs with new cli command", number: 97, url: "https://github.com/dodopayments/billingsdk/pull/97", date: "2025-09-02" },
            { title: "minor fixes", number: 94, url: "https://github.com/dodopayments/billingsdk/pull/94", date: "2025-09-01" },
            { title: "Fix next template", number: 93, url: "https://github.com/dodopayments/billingsdk/pull/93", date: "2025-09-01" },
            { title: "feat: New CLI tool and Next.js templates for billing integration", number: 86, url: "https://github.com/dodopayments/billingsdk/pull/86", date: "2025-09-01" },
            { title: "regenerate registry", number: 88, url: "https://github.com/dodopayments/billingsdk/pull/88", date: "2025-08-29" },
            { title: "Add component credits to docs", number: 75, url: "https://github.com/dodopayments/billingsdk/pull/75", date: "2025-08-27" },
            { title: "Minor fixes", number: 66, url: "https://github.com/dodopayments/billingsdk/pull/66", date: "2025-08-27" },
            { title: "enhance components docs", number: 46, url: "https://github.com/dodopayments/billingsdk/pull/46", date: "2025-08-25" },
            { title: "Fix imports", number: 43, url: "https://github.com/dodopayments/billingsdk/pull/43", date: "2025-08-24" },
            { title: "fix eslint", number: 36, url: "https://github.com/dodopayments/billingsdk/pull/36", date: "2025-08-23" },
            { title: "update registry and docs links to use the new billing SDK domain", number: 35, url: "https://github.com/dodopayments/billingsdk/pull/35", date: "2025-08-22" },
            { title: "updates", number: 34, url: "https://github.com/dodopayments/billingsdk/pull/34", date: "2025-08-22" },
            { title: "fix docs", number: 32, url: "https://github.com/dodopayments/billingsdk/pull/32", date: "2025-08-21" },
            { title: "Landing update", number: 31, url: "https://github.com/dodopayments/billingsdk/pull/31", date: "2025-08-21" },
            { title: "Landing update", number: 30, url: "https://github.com/dodopayments/billingsdk/pull/30", date: "2025-08-21" },
            { title: "feat open in V0", number: 28, url: "https://github.com/dodopayments/billingsdk/pull/28", date: "2025-08-21" },
            { title: "Update docs", number: 27, url: "https://github.com/dodopayments/billingsdk/pull/27", date: "2025-08-21" },
            { title: "Fix ai docs", number: 23, url: "https://github.com/dodopayments/billingsdk/pull/23", date: "2025-08-20" },
            { title: "update styles, LLM support, icons support", number: 20, url: "https://github.com/dodopayments/billingsdk/pull/20", date: "2025-08-20" },
            { title: "Fix/config name", number: 19, url: "https://github.com/dodopayments/billingsdk/pull/19", date: "2025-08-20" },
            { title: "Update pricing tables", number: 18, url: "https://github.com/dodopayments/billingsdk/pull/18", date: "2025-08-20" },
            { title: "update links", number: 17, url: "https://github.com/dodopayments/billingsdk/pull/17", date: "2025-08-19" },
            { title: "update docs + few fixes in comps", number: 16, url: "https://github.com/dodopayments/billingsdk/pull/16", date: "2025-08-19" },
            { title: "add top banner component", number: 15, url: "https://github.com/dodopayments/billingsdk/pull/15", date: "2025-08-18" },
            { title: "docs update", number: 14, url: "https://github.com/dodopayments/billingsdk/pull/14", date: "2025-08-18" },
            { title: "Add new themings", number: 11, url: "https://github.com/dodopayments/billingsdk/pull/11", date: "2025-08-14" },
            { title: "updates", number: 10, url: "https://github.com/dodopayments/billingsdk/pull/10", date: "2025-08-14" },
            { title: "add cancle sub docs", number: 9, url: "https://github.com/dodopayments/billingsdk/pull/9", date: "2025-08-14" },
            { title: "delete sub dialog", number: 8, url: "https://github.com/dodopayments/billingsdk/pull/8", date: "2025-08-14" },
            { title: "feat: theming", number: 6, url: "https://github.com/dodopayments/billingsdk/pull/6", date: "2025-08-14" },
            { title: "Feat/preview docs", number: 5, url: "https://github.com/dodopayments/billingsdk/pull/5", date: "2025-08-14" },
            { title: "add 2 pricing components", number: 3, url: "https://github.com/dodopayments/billingsdk/pull/3", date: "2025-08-13" },
            { title: "Add HelloWorld component and registry files", number: 2, url: "https://github.com/dodopayments/billingsdk/pull/2", date: "2025-08-12" },
        ],
    },
    {
        id: "gumroad",
        repo: "gumroad",
        repoFull: "antiwork/gumroad",
        company: "Antiwork",
        repoUrl: "https://github.com/antiwork/gumroad",
        description: "Contributed fixes and a Sass → Tailwind migration to the Gumroad codebase.",
        bounty: "$3k",
        prs: [
            { title: "fix: payments form state validation", number: 1953, url: "https://github.com/antiwork/gumroad/pull/1953", date: "2025-11-13" },
            { title: "migrated _stats.scss to tailwind", number: 1816, url: "https://github.com/antiwork/gumroad/pull/1816", date: "2025-11-07" },
            { title: "migrate _comment.scss to tailwind", number: 1663, url: "https://github.com/antiwork/gumroad/pull/1663", date: "2025-10-17" },
        ],
    },
    {
        id: "gumboard",
        repo: "gumboard",
        repoFull: "antiwork/gumboard",
        company: "Antiwork",
        repoUrl: "https://github.com/antiwork/gumboard",
        description: "Added Zod validation to backend API routes, componentized the boards UI, and hardened e2e tests.",
        bounty: "$1.5k",
        prs: [
            { title: "Add Zod Validation to Backend API Routes and fix notes e2e tests", number: 694, url: "https://github.com/antiwork/gumboard/pull/694", date: "2025-09-10" },
            { title: "fix: e2e flaky tests", number: 618, url: "https://github.com/antiwork/gumboard/pull/618", date: "2025-08-20" },
            { title: "Componentize UI: introduce Note + ChecklistItem components, and refactor boards page", number: 136, url: "https://github.com/antiwork/gumboard/pull/136", date: "2025-08-08" },
        ],
    },
    {
        id: "shadcn-ui",
        repo: "ui",
        repoFull: "shadcn-ui/ui",
        company: "shadcn",
        repoUrl: "https://github.com/shadcn-ui/ui",
        description: "Added @billingsdk to the trusted registries in shadcn/ui.",
        // bounty: "",
        prs: [
            { title: "add @billingsdk to trusted registries", number: 8148, url: "https://github.com/shadcn-ui/ui/pull/8148", date: "2025-09-04" },
        ],
    },
    {
        id: "openstatus",
        repo: "openstatus",
        repoFull: "openstatusHQ/openstatus",
        company: "OpenStatus",
        repoUrl: "https://github.com/openstatusHQ/openstatus",
        description: "Fixed a mobile alignment issue on the login page of the OpenStatus dashboard.",
        // bounty: "",
        prs: [
            { title: "fix(mobile): component alignment issue on left side of login page", number: 900, url: "https://github.com/openstatusHQ/openstatus/pull/900", date: "2024-06-29" },
        ],
    },
];

// flattened, newest first - used by the logs page
export const allPrs = contributions
    .flatMap((c) => c.prs.map((pr) => ({ ...pr, contribution: c })))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
