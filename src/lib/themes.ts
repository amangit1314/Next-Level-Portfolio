/**
 * Theme Configurations
 * 
 * Defines all available themes with their color palettes.
 * Includes 4 dark themes and 4 light themes.
 */

import { Theme } from '@/types/theme';

export const themes: Theme[] = [
    // 1. Crimson Abyss (Default)
    {
        id: 'crimson-abyss',
        name: 'Crimson Abyss',
        emoji: '🩸',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#FB7185', rgb: '251, 113, 133' },  // rose-400
            primary: { hex: '#F43F5E', rgb: '244, 63, 94' },         // rose-500
            primaryDark: { hex: '#E11D48', rgb: '225, 29, 72' },     // rose-600

            secondaryLight: { hex: '#FCD34D', rgb: '252, 211, 77' }, // amber-300
            secondary: { hex: '#FBBF24', rgb: '251, 191, 36' },      // amber-400
            secondaryDark: { hex: '#F59E0B', rgb: '245, 158, 11' },  // amber-500

            accent: { hex: '#F97316', rgb: '249, 115, 22' },         // orange-500

            bgPrimary: '#0C0002',
            bgSecondary: '#150005',
            bgTertiary: '#1F000A',
            bgHover: '#2D000F',
            bgLight: '#420018',

            textPrimary: '#FAFAFA',
            textSecondary: '#E4E4E7',
            textMuted: '#A1A1AA',

            border: '#3D0012',
            borderLight: '#5E0020',
        },
    },

    // 5. Sunset Blaze
    {
        id: 'sunset-blaze',
        name: 'Sunset Blaze',
        emoji: '🌅',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#FB923C', rgb: '251, 146, 60' },   // orange-400
            primary: { hex: '#F97316', rgb: '249, 115, 22' },        // orange-500
            primaryDark: { hex: '#EA580C', rgb: '234, 88, 12' },     // orange-600

            secondaryLight: { hex: '#F87171', rgb: '248, 113, 113' }, // red-400
            secondary: { hex: '#EF4444', rgb: '239, 68, 68' },       // red-500
            secondaryDark: { hex: '#DC2626', rgb: '220, 38, 38' },   // red-600

            accent: { hex: '#F59E0B', rgb: '245, 158, 11' },         // amber-500

            bgPrimary: '#0A0A0A',    // neutral-950
            bgSecondary: '#171717',  // neutral-900
            bgTertiary: '#262626',   // neutral-800
            bgHover: '#404040',      // neutral-700
            bgLight: '#525252',      // neutral-600

            textPrimary: '#FAFAFA',
            textSecondary: '#D4D4D4',
            textMuted: '#A3A3A3',

            border: '#404040',
            borderLight: '#525252',
        },
    },

    // 6. Forest Emerald
    {
        id: 'forest-emerald',
        name: 'Forest Emerald',
        emoji: '🌲',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#34D399', rgb: '52, 211, 153' },   // emerald-400
            primary: { hex: '#10B981', rgb: '16, 185, 129' },        // emerald-500
            primaryDark: { hex: '#059669', rgb: '5, 150, 105' },     // emerald-600

            secondaryLight: { hex: '#4ADE80', rgb: '74, 222, 128' }, // green-400
            secondary: { hex: '#22C55E', rgb: '34, 197, 94' },       // green-500
            secondaryDark: { hex: '#16A34A', rgb: '22, 163, 74' },   // green-600

            accent: { hex: '#84CC16', rgb: '132, 204, 22' },         // lime-500

            bgPrimary: '#0C0A09',    // stone-950
            bgSecondary: '#1C1917',  // stone-900
            bgTertiary: '#292524',   // stone-800
            bgHover: '#44403C',      // stone-700
            bgLight: '#57534E',      // stone-600

            textPrimary: '#FAFAF9',
            textSecondary: '#D6D3D1',
            textMuted: '#A8A29E',

            border: '#44403C',
            borderLight: '#57534E',
        },
    },

    // 7. Alpine Frost (Light Theme)
    {
        id: 'alpine-frost',
        name: 'Alpine Frost',
        emoji: '🏔️',
        mode: 'light',
        colors: {
            mode: 'light',

            primaryLight: { hex: '#6FA3C7', rgb: '111, 163, 199' },  // soft glacier blue
            primary: { hex: '#3D6E93', rgb: '61, 110, 147' },        // steel blue
            primaryDark: { hex: '#2C5271', rgb: '44, 82, 113' },     // deep alpine blue

            secondaryLight: { hex: '#7FBCB3', rgb: '127, 188, 179' }, // soft teal (analogous to blue)
            secondary: { hex: '#4E958A', rgb: '78, 149, 138' },      // pine teal
            secondaryDark: { hex: '#397168', rgb: '57, 113, 104' },  // deep teal

            accent: { hex: '#C9A876', rgb: '201, 168, 118' },        // warm champagne (single restrained accent)

            bgPrimary: '#FAFBFC',    // cool off-white
            bgSecondary: '#EFF3F6',  // frost gray
            bgTertiary: '#E3E9EE',
            bgHover: '#D2DCE3',
            bgLight: '#B8C6D0',

            textPrimary: '#16232C',  // deep slate blue, near-black
            textSecondary: '#33475A',
            textMuted: '#64798C',

            border: '#D7E1E8',
            borderLight: '#E8EEF2',
        },
    },

    // 10. Sage Linen (Light Theme)
    {
        id: 'sage-linen',
        name: 'Sage Linen',
        emoji: '🌿',
        mode: 'light',
        colors: {
            mode: 'light',

            primaryLight: { hex: '#8AA88E', rgb: '138, 168, 142' },  // muted sage
            primary: { hex: '#5F7F63', rgb: '95, 127, 99' },         // sage green
            primaryDark: { hex: '#4A6B4E', rgb: '74, 107, 78' },     // deep moss

            secondaryLight: { hex: '#A3AD82', rgb: '163, 173, 130' }, // olive (analogous to sage)
            secondary: { hex: '#7C8A5A', rgb: '124, 138, 90' },      // muted olive
            secondaryDark: { hex: '#606B44', rgb: '96, 107, 68' },   // deep olive

            accent: { hex: '#C9A227', rgb: '201, 162, 39' },         // warm mustard gold (single restrained accent)

            bgPrimary: '#FAF8F3',    // warm linen white
            bgSecondary: '#F2EEE3',  // linen
            bgTertiary: '#E8E1D0',
            bgHover: '#DCD3BA',
            bgLight: '#C7BB98',

            textPrimary: '#1C2419',  // deep charcoal-green, near-black
            textSecondary: '#3A4530',
            textMuted: '#6B7860',

            border: '#DCD3BA',
            borderLight: '#E8E1D0',
        },
    },

    // 11. Velvet Blush (Light Theme)
    {
        id: 'velvet-blush',
        name: 'Velvet Blush',
        emoji: '💋',
        mode: 'light',
        colors: {
            mode: 'light',

            primaryLight: { hex: '#FB7185', rgb: '251, 113, 133' },  // rose-400
            primary: { hex: '#9F1239', rgb: '159, 18, 57' },         // rose-800 (wine/burgundy)
            primaryDark: { hex: '#881337', rgb: '136, 19, 55' },     // rose-900

            secondaryLight: { hex: '#E9A6C4', rgb: '233, 166, 196' }, // orchid pink
            secondary: { hex: '#86198F', rgb: '134, 24, 143' },      // fuchsia-800 (plum)
            secondaryDark: { hex: '#701A75', rgb: '112, 26, 117' },  // fuchsia-900

            accent: { hex: '#D4A017', rgb: '212, 160, 23' },         // champagne gold

            bgPrimary: '#FFF7F5',    // blush cream
            bgSecondary: '#FCE7EC',  // soft rose
            bgTertiary: '#F9D4DE',   // deeper blush
            bgHover: '#F3B6C6',
            bgLight: '#E894AC',

            textPrimary: '#2A0410',  // near-black wine
            textSecondary: '#4A0E1F', // deep burgundy
            textMuted: '#7A3348',    // muted mauve

            border: '#EFC2D0',
            borderLight: '#F9D4DE',
        },
    },

    // 8. Midnight Aurora
    {
        id: 'midnight-aurora',
        name: 'Midnight Aurora',
        emoji: '🌌',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#818CF8', rgb: '129, 140, 248' },  // indigo-400
            primary: { hex: '#6366F1', rgb: '99, 102, 241' },        // indigo-500
            primaryDark: { hex: '#4F46E5', rgb: '79, 70, 229' },     // indigo-600

            secondaryLight: { hex: '#60A5FA', rgb: '96, 165, 250' }, // blue-400
            secondary: { hex: '#3B82F6', rgb: '59, 130, 246' },      // blue-500
            secondaryDark: { hex: '#2563EB', rgb: '37, 99, 235' },   // blue-600

            accent: { hex: '#0EA5E9', rgb: '14, 165, 233' },         // sky-500

            bgPrimary: '#09090B',
            bgSecondary: '#18181B',
            bgTertiary: '#27272A',
            bgHover: '#3F3F46',
            bgLight: '#52525B',

            textPrimary: '#FAFAFA',
            textSecondary: '#D4D4D8',
            textMuted: '#A1A1AA',

            border: '#3F3F46',
            borderLight: '#52525B',
        },
    },

    // 9. Coffee Latte (Light Theme)
    {
        id: 'coffee-latte',
        name: 'Coffee Latte',
        emoji: '☕',
        mode: 'light',
        colors: {
            mode: 'light',

            primaryLight: { hex: '#D4893A', rgb: '212, 137, 58' },   // Golden caramel
            primary: { hex: '#B8621C', rgb: '184, 98, 28' },         // Burnt caramel / light espresso
            primaryDark: { hex: '#8B4010', rgb: '139, 64, 16' },     // Deep espresso

            secondaryLight: { hex: '#C49050', rgb: '196, 144, 80' }, // Hazelnut / toffee
            secondary: { hex: '#A06030', rgb: '160, 96, 48' },       // Mocha
            secondaryDark: { hex: '#784020', rgb: '120, 64, 32' },   // Dark mocha

            accent: { hex: '#E8A030', rgb: '232, 160, 48' },         // Golden crema / honey

            // Warm cream backgrounds — proper warmth, not greenish beige
            bgPrimary: '#FDF6EE',    // Warm cream (like fresh milk)
            bgSecondary: '#F5E9D8',  // Latte cream
            bgTertiary: '#EAD8C0',   // Cappuccino cream
            bgHover: '#DEC9A8',      // Light mocha
            bgLight: '#D0B890',      // Medium tan

            // Deep espresso text for contrast on cream
            textPrimary: '#1A0800',  // Near-black espresso
            textSecondary: '#3D1C00', // Dark roast
            textMuted: '#6B4226',    // Medium coffee

            border: '#C9A882',       // Warm tan border
            borderLight: '#DFCBAF',  // Light tan border
        },
    },
];

/**
 * Get a theme by its ID
 */
export const getThemeById = (id: string): Theme | undefined => {
    return themes.find(theme => theme.id === id);
};

/**
 * Get the default theme (Crimson Abyss)
 */
export const getDefaultTheme = (): Theme => {
    return themes[0]; // Crimson Abyss
};
