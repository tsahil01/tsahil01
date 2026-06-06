import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const LASTFM_ENDPOINT = "https://ws.audioscrobbler.com/2.0/";

export async function GET() {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = process.env.LASTFM_USERNAME;

    if (!apiKey || !username) {
        return NextResponse.json({ isPlaying: false, configured: false });
    }

    const url =
        `${LASTFM_ENDPOINT}?method=user.getrecenttracks` +
        `&user=${encodeURIComponent(username)}` +
        `&api_key=${apiKey}&format=json&limit=1`;

    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return NextResponse.json({ isPlaying: false });

        const data = await res.json();

        const raw = data?.recenttracks?.track;
        const track = Array.isArray(raw) ? raw[0] : raw;
        if (!track) return NextResponse.json({ isPlaying: false });

        const images: { "#text": string }[] = track.image || [];
        const albumArt = images[images.length - 1]?.["#text"] || "";

        return NextResponse.json({
            isPlaying: track["@attr"]?.nowplaying === "true",
            title: track.name as string,
            artist: track.artist?.["#text"] as string,
            album: track.album?.["#text"] as string,
            albumArt,
            url: track.url as string,
        });
    } catch {
        return NextResponse.json({ isPlaying: false });
    }
}
