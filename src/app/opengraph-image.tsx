import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sahil Tiwaskar - Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background:
                        "radial-gradient(120% 120% at 0% 0%, #15151a 0%, #0a0a0b 55%)",
                    color: "#fafafa",
                    padding: "72px 80px",
                    fontFamily: "sans-serif",
                }}
            >
                {/* top row */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 24,
                        color: "#71717a",
                        letterSpacing: 2,
                    }}
                >
                    <span style={{ textTransform: "uppercase" }}>portfolio</span>
                    <span>sahil.wtf</span>
                </div>

                {/* center */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: 28,
                            color: "#a1a1aa",
                            marginBottom: 12,
                        }}
                    >
                        <span style={{ color: "#3f3f46", marginRight: 10 }}>/</span>
                        building for the web
                    </div>
                    <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
                        Sahil Tiwaskar
                    </div>
                    <div style={{ display: "flex", fontSize: 38, color: "#a1a1aa", marginTop: 14 }}>
                        Frontend Engineer @ Dodo Payments
                    </div>
                    <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
                        {["BillingSDK maintainer", "open source", "TypeScript · React · Next.js"].map(
                            (t) => (
                                <div
                                    key={t}
                                    style={{
                                        display: "flex",
                                        fontSize: 22,
                                        color: "#a1a1aa",
                                        background: "#18181b",
                                        border: "1px solid #27272a",
                                        borderRadius: 10,
                                        padding: "8px 16px",
                                    }}
                                >
                                    {t}
                                </div>
                            ),
                        )}
                    </div>
                </div>

                {/* bottom */}
                <div
                    style={{
                        display: "flex",
                        fontSize: 22,
                        color: "#52525b",
                        borderTop: "1px solid #27272a",
                        paddingTop: 24,
                    }}
                >
                    <span style={{ color: "#3f3f46", marginRight: 8 }}>{"//"}</span>
                    ship fast, break things.
                </div>
            </div>
        ),
        { ...size },
    );
}
