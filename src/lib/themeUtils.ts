/**
 * Theme Utility Functions
 * 
 * Helper functions for theme operations and CSS variable management.
 */

import { Theme, ColorWithRGB } from '@/types/theme';
import { AccentFlavor } from '@/lib/hudAccentFlavors';

/**
 * Convert camelCase to kebab-case for CSS variable names
 * Example: primaryLight -> primary-light
 */
export const camelToKebab = (str: string): string => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

/** Sets --theme-{key}, --theme-{key}-rgb, and the -10/20/30/50/70/90 opacity
 * variants for one ColorWithRGB — the shared step both applyThemeVariables
 * (v1, full theme) and applyAccentVariables (v2, accent-only) need. */
const setColorVariable = (root: HTMLElement, key: string, value: ColorWithRGB): void => {
    const cssKey = camelToKebab(key);
    root.style.setProperty(`--theme-${cssKey}`, value.hex);
    root.style.setProperty(`--theme-${cssKey}-rgb`, value.rgb);
    root.style.setProperty(`--theme-${cssKey}-10`, `rgba(${value.rgb}, 0.1)`);
    root.style.setProperty(`--theme-${cssKey}-20`, `rgba(${value.rgb}, 0.2)`);
    root.style.setProperty(`--theme-${cssKey}-30`, `rgba(${value.rgb}, 0.3)`);
    root.style.setProperty(`--theme-${cssKey}-50`, `rgba(${value.rgb}, 0.5)`);
    root.style.setProperty(`--theme-${cssKey}-70`, `rgba(${value.rgb}, 0.7)`);
    root.style.setProperty(`--theme-${cssKey}-90`, `rgba(${value.rgb}, 0.9)`);
};

/**
 * Apply a theme by setting CSS custom properties on the root element
 */
export const applyThemeVariables = (theme: Theme): void => {
    const root = document.documentElement;

    // Set theme mode data attribute
    root.setAttribute('data-theme-mode', theme.mode);
    root.setAttribute('data-theme-id', theme.id);

    // Apply all color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
        if (typeof value === 'object' && 'hex' in value && 'rgb' in value) {
            setColorVariable(root, key, value as ColorWithRGB);
        } else if (typeof value === 'string') {
            root.style.setProperty(`--theme-${camelToKebab(key)}`, value);
        }
    });

    // Update body classes for light/dark mode
    if (theme.mode === 'light') {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    } else {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    }
};

/**
 * v2's theme application — an accent-only layer. Sets ONLY the primary,
 * secondary, and accent CSS variables (the 7 color keys on AccentFlavor).
 * Deliberately does NOT touch the bg, text, border, or mode variables —
 * those stay driven by the fixed hud-mono base theme (see themes.ts) so
 * the background/text/borders never change, only the accent color does.
 * See hudAccentFlavors.ts for why.
 */
const ACCENT_COLOR_KEYS = [
    'primaryLight', 'primary', 'primaryDark',
    'secondaryLight', 'secondary', 'secondaryDark',
    'accent',
] as const;

/** Relative luminance (WCAG formula) of a "r, g, b" string, 0 (black) to 1
 * (white) — used to pick a foreground color that actually reads against
 * the accent, instead of assuming "dark text" (only true for Mono, whose
 * primary happens to be near-white; every saturated flavor — orange,
 * green, indigo, magenta — needs white on top, not dark-on-dark). */
const relativeLuminance = (rgb: string): number => {
    const [r, g, b] = rgb.split(',').map((n) => {
        const c = parseInt(n.trim(), 10) / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const applyAccentVariables = (flavor: AccentFlavor): void => {
    const root = document.documentElement;
    root.setAttribute('data-accent-flavor', flavor.id);
    ACCENT_COLOR_KEYS.forEach((key) => setColorVariable(root, key, flavor[key]));

    // --theme-on-primary: the foreground color for anything sitting on a
    // theme-primary/theme-gradient-primary surface (buttons, icon chips,
    // badges, tooltips) — computed per flavor instead of hardcoded, so a
    // future flavor doesn't silently repeat this bug.
    const onPrimary = relativeLuminance(flavor.primary.rgb) > 0.5 ? '#0a0a0a' : '#f5f5f5';
    root.style.setProperty('--theme-on-primary', onPrimary);
};

/**
 * Get gradient CSS string for primary gradient
 */
export const getPrimaryGradient = (): string => {
    return `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`;
};

/**
 * Get gradient CSS string for accent gradient (3-color)
 */
export const getAccentGradient = (): string => {
    return `linear-gradient(to right, var(--theme-primary-dark), var(--theme-secondary-dark), var(--theme-accent))`;
};

/**
 * Get text gradient CSS string
 */
export const getTextGradient = (): string => {
    return `linear-gradient(to right, var(--theme-primary-light), var(--theme-secondary-light))`;
};
