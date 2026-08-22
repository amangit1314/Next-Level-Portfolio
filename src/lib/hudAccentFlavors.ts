/**
 * HUD accent flavors — v2's theme system, deliberately NOT the same shape
 * as v1's `Theme` in themes.ts (which stays untouched — see that file's
 * comment history). saifullah.dev's "theme" isn't a full re-skin: the
 * background/text/border stay fixed dark HUD, only an accent color swaps.
 * These are v1's original palette colors (primary/secondary/accent only —
 * no bg/text/border) repurposed as that thin accent layer, applied via
 * applyAccentVariables() in themeUtils.ts.
 */
import { ColorWithRGB } from "@/types/theme";

export interface AccentFlavor {
    id: string;
    name: string;
    emoji: string;
    primaryLight: ColorWithRGB;
    primary: ColorWithRGB;
    primaryDark: ColorWithRGB;
    secondaryLight: ColorWithRGB;
    secondary: ColorWithRGB;
    secondaryDark: ColorWithRGB;
    accent: ColorWithRGB;
}

export const accentFlavors: AccentFlavor[] = [
    {
        id: "hud-mono",
        name: "Mono",
        emoji: "◻️",
        primaryLight: { hex: "#FAFAFA", rgb: "250, 250, 250" },
        primary: { hex: "#F5F5F5", rgb: "245, 245, 245" },
        primaryDark: { hex: "#E5E5E5", rgb: "229, 229, 229" },
        secondaryLight: { hex: "#FAFAFA", rgb: "250, 250, 250" },
        secondary: { hex: "#F5F5F5", rgb: "245, 245, 245" },
        secondaryDark: { hex: "#E5E5E5", rgb: "229, 229, 229" },
        accent: { hex: "#F5F5F5", rgb: "245, 245, 245" },
    },
    {
        id: "crimson-abyss",
        name: "Crimson Abyss",
        emoji: "🩸",
        primaryLight: { hex: "#FB7185", rgb: "251, 113, 133" },
        primary: { hex: "#F43F5E", rgb: "244, 63, 94" },
        primaryDark: { hex: "#E11D48", rgb: "225, 29, 72" },
        secondaryLight: { hex: "#FCD34D", rgb: "252, 211, 77" },
        secondary: { hex: "#FBBF24", rgb: "251, 191, 36" },
        secondaryDark: { hex: "#F59E0B", rgb: "245, 158, 11" },
        accent: { hex: "#F97316", rgb: "249, 115, 22" },
    },
    {
        id: "sunset-blaze",
        name: "Sunset Blaze",
        emoji: "🌅",
        primaryLight: { hex: "#FB923C", rgb: "251, 146, 60" },
        primary: { hex: "#F97316", rgb: "249, 115, 22" },
        primaryDark: { hex: "#EA580C", rgb: "234, 88, 12" },
        secondaryLight: { hex: "#F87171", rgb: "248, 113, 113" },
        secondary: { hex: "#EF4444", rgb: "239, 68, 68" },
        secondaryDark: { hex: "#DC2626", rgb: "220, 38, 38" },
        accent: { hex: "#F59E0B", rgb: "245, 158, 11" },
    },
    {
        id: "forest-emerald",
        name: "Forest Emerald",
        emoji: "🌲",
        primaryLight: { hex: "#34D399", rgb: "52, 211, 153" },
        primary: { hex: "#10B981", rgb: "16, 185, 129" },
        primaryDark: { hex: "#059669", rgb: "5, 150, 105" },
        secondaryLight: { hex: "#4ADE80", rgb: "74, 222, 128" },
        secondary: { hex: "#22C55E", rgb: "34, 197, 94" },
        secondaryDark: { hex: "#16A34A", rgb: "22, 163, 74" },
        accent: { hex: "#84CC16", rgb: "132, 204, 22" },
    },
    {
        id: "midnight-aurora",
        name: "Midnight Aurora",
        emoji: "🌌",
        primaryLight: { hex: "#818CF8", rgb: "129, 140, 248" },
        primary: { hex: "#6366F1", rgb: "99, 102, 241" },
        primaryDark: { hex: "#4F46E5", rgb: "79, 70, 229" },
        secondaryLight: { hex: "#60A5FA", rgb: "96, 165, 250" },
        secondary: { hex: "#3B82F6", rgb: "59, 130, 246" },
        secondaryDark: { hex: "#2563EB", rgb: "37, 99, 235" },
        accent: { hex: "#0EA5E9", rgb: "14, 165, 233" },
    },
    {
        id: "alpine-frost",
        name: "Alpine Frost",
        emoji: "🏔️",
        primaryLight: { hex: "#6FA3C7", rgb: "111, 163, 199" },
        primary: { hex: "#3D6E93", rgb: "61, 110, 147" },
        primaryDark: { hex: "#2C5271", rgb: "44, 82, 113" },
        secondaryLight: { hex: "#7FBCB3", rgb: "127, 188, 179" },
        secondary: { hex: "#4E958A", rgb: "78, 149, 138" },
        secondaryDark: { hex: "#397168", rgb: "57, 113, 104" },
        accent: { hex: "#C9A876", rgb: "201, 168, 118" },
    },
    {
        id: "sage-linen",
        name: "Sage Linen",
        emoji: "🌿",
        primaryLight: { hex: "#8FAF93", rgb: "143, 175, 147" },
        primary: { hex: "#5F7F63", rgb: "95, 127, 99" },
        primaryDark: { hex: "#496649", rgb: "73, 102, 73" },
        secondaryLight: { hex: "#A3AF80", rgb: "163, 175, 128" },
        secondary: { hex: "#7C8A5A", rgb: "124, 138, 90" },
        secondaryDark: { hex: "#616D45", rgb: "97, 109, 69" },
        accent: { hex: "#C9A227", rgb: "201, 162, 39" },
    },
    {
        id: "velvet-blush",
        name: "Velvet Blush",
        emoji: "💋",
        primaryLight: { hex: "#C4436A", rgb: "196, 67, 106" },
        primary: { hex: "#9F1239", rgb: "159, 18, 57" },
        primaryDark: { hex: "#7A0E2C", rgb: "122, 14, 44" },
        secondaryLight: { hex: "#A737B0", rgb: "167, 55, 176" },
        secondary: { hex: "#86198F", rgb: "134, 24, 143" },
        secondaryDark: { hex: "#6B1373", rgb: "107, 19, 115" },
        accent: { hex: "#D4A017", rgb: "212, 160, 23" },
    },
    {
        id: "coffee-latte",
        name: "Coffee Latte",
        emoji: "☕",
        primaryLight: { hex: "#D08644", rgb: "208, 134, 68" },
        primary: { hex: "#B8621C", rgb: "184, 98, 28" },
        primaryDark: { hex: "#8F4B15", rgb: "143, 75, 21" },
        secondaryLight: { hex: "#BA8058", rgb: "186, 128, 88" },
        secondary: { hex: "#A06030", rgb: "160, 96, 48" },
        secondaryDark: { hex: "#7C4B25", rgb: "124, 75, 37" },
        accent: { hex: "#E8A030", rgb: "232, 160, 48" },
    },
];

export const getAccentFlavorById = (id: string): AccentFlavor | undefined =>
    accentFlavors.find((f) => f.id === id);

export const getDefaultAccentFlavor = (): AccentFlavor => accentFlavors[0];
