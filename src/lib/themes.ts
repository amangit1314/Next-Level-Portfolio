/**
 * Theme Configurations
 * 
 * Defines all available themes with their color palettes.
 * Includes 6 dark themes and 1 light theme (Coffee Latte).
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

    // 2. Golden Void
    {
        id: 'golden-void',
        name: 'Golden Void',
        emoji: '✨',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#FCD34D', rgb: '252, 211, 77' },   // amber-300
            primary: { hex: '#FBBF24', rgb: '251, 191, 36' },        // amber-400
            primaryDark: { hex: '#F59E0B', rgb: '245, 158, 11' },    // amber-500

            secondaryLight: { hex: '#7DD3FC', rgb: '125, 211, 252' }, // sky-300
            secondary: { hex: '#38BDF8', rgb: '56, 189, 248' },      // sky-400
            secondaryDark: { hex: '#0EA5E9', rgb: '14, 165, 233' },  // sky-500

            accent: { hex: '#34D399', rgb: '52, 211, 153' },         // emerald-400

            bgPrimary: '#080600',
            bgSecondary: '#100E00',
            bgTertiary: '#1A1600',
            bgHover: '#262000',
            bgLight: '#332C00',

            textPrimary: '#FAFAFA',
            textSecondary: '#E4E4E7',
            textMuted: '#A1A1AA',

            border: '#2A2200',
            borderLight: '#3D3300',
        },
    },

    // 4. Ocean Breeze
    {
        id: 'ocean-breeze',
        name: 'Ocean Breeze',
        emoji: '🌊',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#38BDF8', rgb: '56, 189, 248' },   // sky-400
            primary: { hex: '#0EA5E9', rgb: '14, 165, 233' },        // sky-500
            primaryDark: { hex: '#0284C7', rgb: '2, 132, 199' },     // sky-600

            secondaryLight: { hex: '#22D3EE', rgb: '34, 211, 238' }, // cyan-400
            secondary: { hex: '#06B6D4', rgb: '6, 182, 212' },       // cyan-500
            secondaryDark: { hex: '#0891B2', rgb: '8, 145, 178' },   // cyan-600

            accent: { hex: '#14B8A6', rgb: '20, 184, 166' },         // teal-500

            bgPrimary: '#020617',    // slate-950
            bgSecondary: '#0F172A',  // slate-900
            bgTertiary: '#1E293B',   // slate-800
            bgHover: '#334155',      // slate-700
            bgLight: '#475569',      // slate-600

            textPrimary: '#F8FAFC',  // slate-50
            textSecondary: '#CBD5E1', // slate-300
            textMuted: '#94A3B8',    // slate-400

            border: '#334155',
            borderLight: '#475569',
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

    // 7. Sakura (Light Theme)
    {
        id: 'sakura',
        name: 'Sakura',
        emoji: '🌸',
        mode: 'light',
        colors: {
            mode: 'light',

            primaryLight: { hex: '#F43F5E', rgb: '244, 63, 94' },    // rose-500
            primary: { hex: '#E11D48', rgb: '225, 29, 72' },         // rose-600
            primaryDark: { hex: '#BE123C', rgb: '190, 18, 60' },     // rose-700

            secondaryLight: { hex: '#A855F7', rgb: '168, 85, 247' }, // purple-500
            secondary: { hex: '#9333EA', rgb: '147, 51, 234' },      // purple-600
            secondaryDark: { hex: '#7E22CE', rgb: '126, 34, 206' },  // purple-700

            accent: { hex: '#F97316', rgb: '249, 115, 22' },         // orange-500

            bgPrimary: '#FFF8F9',    // near-white with barely-there rose tint
            bgSecondary: '#FFE8ED',  // soft petal pink
            bgTertiary: '#FFD6DE',   // blush
            bgHover: '#FFC1CC',      // light sakura
            bgLight: '#FFABB8',      // mid sakura

            textPrimary: '#1A0008',  // near-black with rose undertone
            textSecondary: '#4A0015', // deep rose-dark
            textMuted: '#8B2040',    // muted rose

            border: '#F9A8B8',       // soft rose border
            borderLight: '#FFC1CC',  // light rose border
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
