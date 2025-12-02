/**
 * Theme Utility Functions
 * 
 * Helper functions for theme operations and CSS variable management.
 */

import { Theme, ColorWithRGB } from '@/types/theme';

/**
 * Convert camelCase to kebab-case for CSS variable names
 * Example: primaryLight -> primary-light
 */
export const camelToKebab = (str: string): string => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
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
            // ColorWithRGB type
            const cssKey = camelToKebab(key);
            root.style.setProperty(`--theme-${cssKey}`, value.hex);
            root.style.setProperty(`--theme-${cssKey}-rgb`, value.rgb);

            // Create opacity variants for common use cases
            root.style.setProperty(`--theme-${cssKey}-10`, `rgba(${value.rgb}, 0.1)`);
            root.style.setProperty(`--theme-${cssKey}-20`, `rgba(${value.rgb}, 0.2)`);
            root.style.setProperty(`--theme-${cssKey}-30`, `rgba(${value.rgb}, 0.3)`);
            root.style.setProperty(`--theme-${cssKey}-50`, `rgba(${value.rgb}, 0.5)`);
            root.style.setProperty(`--theme-${cssKey}-70`, `rgba(${value.rgb}, 0.7)`);
            root.style.setProperty(`--theme-${cssKey}-90`, `rgba(${value.rgb}, 0.9)`);
        } else if (typeof value === 'string') {
            // Simple string color
            const cssKey = camelToKebab(key);
            root.style.setProperty(`--theme-${cssKey}`, value);
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
