import { ImageResponse } from "next/og";

// Apple's expected touch-icon size (home-screen/bookmark on iOS) — same
// mark as icon.tsx, separate file because Apple looks for apple-icon
// specifically rather than reusing rel="icon". See icon.tsx for why this
// is static/build-time, not a runtime cost.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0a0a0a",
                    border: "7px solid rgba(255,255,255,0.18)",
                    boxSizing: "border-box",
                }}
            >
                <span
                    style={{
                        color: "#f5f5f5",
                        fontSize: 76,
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        fontFamily: "sans-serif",
                    }}
                >
                    AS
                </span>
            </div>
        ),
        { ...size }
    );
}
