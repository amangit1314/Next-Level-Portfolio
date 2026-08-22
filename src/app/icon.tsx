import { ImageResponse } from "next/og";

// Next.js App Router special file — programmatically generates the
// favicon via next/og's ImageResponse (satori under the hood), rendered
// once at build time since Icon() takes no per-request params (Next
// treats it as static, not a dynamic route handler) — no runtime cost,
// no load-time risk. Mirrors HudIdentity.tsx's monogram badge (sharp
// bordered square, "AS", dark bg) so the browser tab matches the site's
// own identity mark instead of a generic default.
//
// 256x256 (not the traditional 32x32) for genuine high-definition —
// browsers downscale for the ~16px tab display but render crisp on
// retina/high-DPI screens; Next emits the matching sizes="256x256"
// attribute automatically from this export.
export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
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
                    border: "10px solid rgba(255,255,255,0.18)",
                    boxSizing: "border-box",
                }}
            >
                <span
                    style={{
                        color: "#f5f5f5",
                        fontSize: 108,
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
