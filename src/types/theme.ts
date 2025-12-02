/**
 * Theme System Type Definitions
 * 
 * Defines the structure for the multi-theme system supporting both
 * dark and light color schemes with CSS variable integration.
 */

export type ThemeMode = 'dark' | 'light';

export interface ColorWithRGB {
    hex: string;
    rgb: string;  // Format: "r, g, b" for use with rgba()
}

export interface ThemeColors {
    // Theme mode
    mode: ThemeMode;

    // Primary gradient colors
    primaryLight: ColorWithRGB;
    primary: ColorWithRGB;
    primaryDark: ColorWithRGB;

    // Secondary gradient colors
    secondaryLight: ColorWithRGB;
    secondary: ColorWithRGB;
    secondaryDark: ColorWithRGB;

    // Accent color
    accent: ColorWithRGB;

    // Background colors (inverted for light mode)
    bgPrimary: string;      // Main background
    bgSecondary: string;    // Card backgrounds
    bgTertiary: string;     // Elevated surfaces
    bgHover: string;        // Hover states
    bgLight: string;        // Lighter surfaces

    // Text colors (inverted for light mode)
    textPrimary: string;    // Main text
    textSecondary: string;  // Secondary text
    textMuted: string;      // Muted/disabled text

    // Border colors
    border: string;
    borderLight: string;
}

export interface Theme {
    id: string;
    name: string;
    emoji: string;
    mode: ThemeMode;
    colors: ThemeColors;
}

export interface ThemeContextType {
    currentTheme: Theme;
    setTheme: (themeId: string) => void;
    availableThemes: Theme[];
}
