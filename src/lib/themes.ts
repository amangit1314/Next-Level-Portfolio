/**
 * Theme Configurations
 * 
 * Defines all available themes with their color palettes.
 * Includes 6 dark themes and 1 light theme (Coffee Latte).
 */

import { Theme } from '@/types/theme';

export const themes: Theme[] = [
    // 1. Purple Dream (Default - matches current design)
    {
        id: 'purple-dream',
        name: 'Purple Dream',
        emoji: '🎨',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#C084FC', rgb: '192, 132, 252' },  // purple-400
            primary: { hex: '#A855F7', rgb: '168, 85, 247' },        // purple-500
            primaryDark: { hex: '#9333EA', rgb: '147, 51, 234' },    // purple-600

            secondaryLight: { hex: '#F472B6', rgb: '244, 114, 182' }, // pink-400
            secondary: { hex: '#EC4899', rgb: '236, 72, 153' },       // pink-500
            secondaryDark: { hex: '#DB2777', rgb: '219, 39, 119' },   // pink-600

            accent: { hex: '#F97316', rgb: '249, 115, 22' },          // orange-500

            bgPrimary: '#09090B',    // zinc-950
            bgSecondary: '#18181B',  // zinc-900
            bgTertiary: '#27272A',   // zinc-800
            bgHover: '#3F3F46',      // zinc-700
            bgLight: '#52525B',      // zinc-600

            textPrimary: '#FAFAFA',  // zinc-50
            textSecondary: '#D4D4D8', // zinc-300
            textMuted: '#A1A1AA',    // zinc-400

            border: '#3F3F46',       // zinc-700
            borderLight: '#52525B',  // zinc-600
        },
    },

    // 2. Ocean Breeze
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

    // 3. Sunset Blaze
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

    // 4. Forest Emerald
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

    // 5. Cyber Neon
    {
        id: 'cyber-neon',
        name: 'Cyber Neon',
        emoji: '⚡',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#F0ABFC', rgb: '240, 171, 252' },  // fuchsia-300
            primary: { hex: '#E879F9', rgb: '232, 121, 249' },       // fuchsia-400
            primaryDark: { hex: '#D946EF', rgb: '217, 70, 239' },    // fuchsia-500

            secondaryLight: { hex: '#93C5FD', rgb: '147, 197, 253' }, // blue-300
            secondary: { hex: '#60A5FA', rgb: '96, 165, 250' },      // blue-400
            secondaryDark: { hex: '#3B82F6', rgb: '59, 130, 246' },  // blue-500

            accent: { hex: '#A78BFA', rgb: '167, 139, 250' },        // violet-400

            bgPrimary: '#030712',    // gray-950
            bgSecondary: '#111827',  // gray-900
            bgTertiary: '#1F2937',   // gray-800
            bgHover: '#374151',      // gray-700
            bgLight: '#4B5563',      // gray-600

            textPrimary: '#F9FAFB',
            textSecondary: '#D1D5DB',
            textMuted: '#9CA3AF',

            border: '#374151',
            borderLight: '#4B5563',
        },
    },

    // 6. Midnight Aurora
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

    // 7. Coffee Latte (Light Theme)
    {
        id: 'coffee-latte',
        name: 'Coffee Latte',
        emoji: '☕',
        mode: 'light',
        colors: {
            mode: 'light',

            primaryLight: { hex: '#D2A679', rgb: '210, 166, 121' },  // Tan
            primary: { hex: '#C19A6B', rgb: '193, 154, 107' },       // Caramel
            primaryDark: { hex: '#A68A64', rgb: '166, 138, 100' },   // Dark tan

            secondaryLight: { hex: '#C9B299', rgb: '201, 178, 153' }, // Light beige
            secondary: { hex: '#B8956A', rgb: '184, 149, 106' },     // Beige brown
            secondaryDark: { hex: '#9C825A', rgb: '156, 130, 90' },

            accent: { hex: '#C17855', rgb: '193, 120, 85' },         // Terracotta

            // Light backgrounds
            bgPrimary: '#F5F5DC',    // Beige
            bgSecondary: '#FFF8E7',  // Cream/Cornsilk
            bgTertiary: '#FFEBCD',   // Blanched almond
            bgHover: '#F5E6D3',      // Light tan
            bgLight: '#EAD6BD',      // Darker tan

            // Dark text (inverted)
            textPrimary: '#3E2723',  // Coffee brown (very dark)
            textSecondary: '#4E342E', // Brown 800
            textMuted: '#6D4C41',    // Brown 600

            border: '#D7C0AE',       // Tan border
            borderLight: '#C9B39C',  // Darker tan
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
 * Get the default theme (Purple Dream)
 */
export const getDefaultTheme = (): Theme => {
    return themes[0]; // Purple Dream
};
