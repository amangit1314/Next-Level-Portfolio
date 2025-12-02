'use client';

/**
 * Theme Context Provider
 * 
 * Provides theme state and switching functionality to the entire application.
 * Handles localStorage persistence and CSS variable application.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextType } from '@/types/theme';
import { themes, getDefaultTheme, getThemeById } from '@/lib/themes';
import { applyThemeVariables } from '@/lib/themeUtils';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(getDefaultTheme());
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize theme from localStorage on mount
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Disable transitions during initial load to prevent flash
        document.body.classList.add('no-transitions');

        // Load saved theme from localStorage
        const savedThemeId = localStorage.getItem('portfolio-theme');
        const theme = savedThemeId ? getThemeById(savedThemeId) || getDefaultTheme() : getDefaultTheme();

        // Apply theme immediately
        applyThemeVariables(theme);
        setCurrentTheme(theme);
        setIsInitialized(true);

        // Re-enable transitions after a short delay
        setTimeout(() => {
            document.body.classList.remove('no-transitions');
        }, 100);
    }, []);

    const setTheme = (themeId: string) => {
        const theme = getThemeById(themeId);
        if (!theme) {
            console.warn(`Theme with id "${themeId}" not found`);
            return;
        }

        // Apply CSS variables
        applyThemeVariables(theme);

        // Update state
        setCurrentTheme(theme);

        // Persist to localStorage
        localStorage.setItem('portfolio-theme', themeId);
    };

    const value: ThemeContextType = {
        currentTheme,
        setTheme,
        availableThemes: themes,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/**
 * Hook to access theme context
 * Must be used within ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
