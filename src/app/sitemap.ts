import type { MetadataRoute } from "next";

const BASE = "https://sahil.wtf";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: BASE, changeFrequency: "weekly", priority: 1 },
        { url: `${BASE}/projects`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/logs`, changeFrequency: "weekly", priority: 0.6 },
    ];
}
