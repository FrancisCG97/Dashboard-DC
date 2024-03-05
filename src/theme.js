import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';

// Color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            black: {
                100: "#cccccc",
                200: "#999999",
                300: "#666666",
                400: "#333333",
                500: "#000000",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000"
            },
            red: {
                100: "#eeccd2",
                200: "#de99a5",
                300: "#cd6678",
                400: "#bd334b",
                500: "#ac001e",
                600: "#8a0018",
                700: "#670012",
                800: "#45000c",
                900: "#220006"
            },
            yellow: {
                100: "#fefbd8",
                200: "#fdf7b1",
                300: "#fbf48a",
                400: "#faf063",
                500: "#f9ec3c",
                600: "#c7bd30",
                700: "#958e24",
                800: "#645e18",
                900: "#322f0c"
            },
            blue: {
                100: "#cdd5e9",
                200: "#9babd4",
                300: "#6880be",
                400: "#3656a9",
                500: "#042c93",
                600: "#032376",
                700: "#021a58",
                800: "#02123b",
                900: "#01091d"
            },
            green: {
                100: "#d3e0d5",
                200: "#a7c1ab",
                300: "#7aa280",
                400: "#4e8356",
                500: "#22642c",
                600: "#1b5023",
                700: "#143c1a",
                800: "#0e2812",
                900: "#071409"
            },
            lightGreen: {
                100: "#ccfccc",
                200: "#99f899",
                300: "#66f566",
                400: "#33f133",
                500: "#00ee00",
                600: "#00be00",
                700: "#008f00",
                800: "#005f00",
                900: "#003000"
            },
        } : {
            black: {
                100: "#000000",
                200: "#000000",
                300: "#000000",
                400: "#000000",
                500: "#000000",
                600: "#333333",
                700: "#666666",
                800: "#999999",
                900: "#cccccc",
            },
            red: {
                100: "#220006",
                200: "#45000c",
                300: "#670012",
                400: "#8a0018",
                500: "#ac001e",
                600: "#bd334b",
                700: "#cd6678",
                800: "#de99a5",
                900: "#eeccd2",
            },
            yellow: {
                100: "#322f0c",
                200: "#645e18",
                300: "#958e24",
                400: "#c7bd30",
                500: "#f9ec3c",
                600: "#faf063",
                700: "#fbf48a",
                800: "#fdf7b1",
                900: "#fefbd8",
            },
            blue: {
                100: "#01091d",
                200: "#02123b",
                300: "#021a58",
                400: "#032376",
                500: "#042c93",
                600: "#3656a9",
                700: "#6880be",
                800: "#9babd4",
                900: "#cdd5e9",
            },
            green: {
                100: "#071409",
                200: "#0e2812",
                300: "#143c1a",
                400: "#1b5023",
                500: "#22642c",
                600: "#4e8356",
                700: "#7aa280",
                800: "#a7c1ab",
                900: "#d3e0d5",
            },
            lightGreen: {
                100: "#003000",
                200: "#005f00",
                300: "#008f00",
                400: "#00be00",
                500: "#00ee00",
                600: "#33f133",
                700: "#66f566",
                800: "#99f899",
                900: "#ccfccc",
            },
        }
    )
});

// MUI theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.black[500],
                    },
                    secondary: {
                        main: colors.green[500],
                    },
                    neutral: {
                        dark: colors.blue[700],
                        main: colors.blue[500],
                        light: colors.blue[100],
                    },
                    background: {
                        default: colors.black[500]
                    }
                } : {
                    primary: {
                        main: colors.black[100],
                    },
                    secondary: {
                        main: colors.green[500],
                    },
                    neutral: {
                        dark: colors.blue[700],
                        main: colors.blue[500],
                        light: colors.blue[100],
                    },
                    background: {
                        default: colors.black[500]
                    },
                }),
        },
        typography: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    };
};

// Context for color mode 

export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};






