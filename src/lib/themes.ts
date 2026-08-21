/**
 * Theme Configurations
 *
 * v2 (feat/hud-chrome) is a single fixed-monochrome HUD theme — the
 * multi-theme switcher lived on the v1 site (master branch) and its UI
 * (ThemeSwitcher.tsx) isn't rendered anymore (HudChrome.tsx replaced
 * Header.tsx's render output). Keeping this a `Theme[]` of one entry,
 * rather than deleting the theme system outright, means ThemeContext/
 * ThemeProvider/useSanityQuery consumers need zero changes — and a stale
 * `portfolio-theme` id in a returning visitor's localStorage safely falls
 * back to this one via `getThemeById(...) || getDefaultTheme()`.
 *
 * Values mirror globals.css's `--hud-*` tokens (see the "HUD chrome"
 * comment block there) so `bg-theme-*`/`text-theme-*`/`border-theme-*`
 * utilities used throughout the section components resolve to the same
 * fixed monochrome palette without per-file edits.
 */

import { Theme } from '@/types/theme';

export const themes: Theme[] = [
    {
        id: 'hud-mono',
        name: 'HUD Mono',
        emoji: '◻️',
        mode: 'dark',
        colors: {
            mode: 'dark',

            primaryLight: { hex: '#FAFAFA', rgb: '250, 250, 250' },
            primary: { hex: '#F5F5F5', rgb: '245, 245, 245' },
            primaryDark: { hex: '#E5E5E5', rgb: '229, 229, 229' },

            secondaryLight: { hex: '#FAFAFA', rgb: '250, 250, 250' },
            secondary: { hex: '#F5F5F5', rgb: '245, 245, 245' },
            secondaryDark: { hex: '#E5E5E5', rgb: '229, 229, 229' },

            accent: { hex: '#F5F5F5', rgb: '245, 245, 245' },

            bgPrimary: '#0A0A0A',
            bgSecondary: '#141414',
            bgTertiary: '#1A1A1A',
            bgHover: '#202020',
            bgLight: '#2A2A2A',

            textPrimary: '#F5F5F5',
            textSecondary: '#C7C7C7',
            textMuted: '#8F8F8F',

            border: '#272727',
            borderLight: '#3B3B3B',
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
 * Get the default theme (HUD Mono — the only theme on this branch)
 */
export const getDefaultTheme = (): Theme => {
    return themes[0];
};
