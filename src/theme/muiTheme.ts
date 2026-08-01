import { createTheme, ThemeOptions } from '@mui/material/styles';

export const getMuiTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: isDark ? '#f4f4f5' : '#18181b', // Crisp High-Contrast Silver White / Deep Obsidian
        light: isDark ? '#ffffff' : '#27272a',
        dark: isDark ? '#e4e4e7' : '#09090b',
        contrastText: isDark ? '#0f0f0f' : '#ffffff',
      },
      secondary: {
        main: isDark ? '#a1a1aa' : '#52525b', // Refined Zinc Grey
        light: isDark ? '#d4d4d8' : '#71717a',
        dark: isDark ? '#71717a' : '#3f3f46',
        contrastText: isDark ? '#0f0f0f' : '#ffffff',
      },
      background: {
        default: isDark ? '#0f0f0f' : '#f8fafc', // Modern #0f0f0f Dark Canvas / Pure Light
        paper: isDark ? '#171717' : '#ffffff', // Slightly lighter #171717 for depth cards
      },
      text: {
        primary: isDark ? '#fafafa' : '#0f172a',
        secondary: isDark ? '#a1a1aa' : '#52525b',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.08)',
    },
    typography: {
      fontFamily: [
        '"Plus Jakarta Sans"',
        '"Inter"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ].join(','),
      h1: {
        fontSize: '3rem',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.25,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
      },
      h4: {
        fontSize: '1.35rem',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h5: {
        fontSize: '1.15rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: '1.05rem',
        lineHeight: 1.6,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.65,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.01em',
      },
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '9px 22px',
            boxShadow: 'none',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            '&:hover': {
              boxShadow: 'none',
              transform: 'translateY(-1px)',
            },
          },
        },
        variants: [
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              background: isDark ? '#f4f4f5' : '#18181b',
              color: isDark ? '#0f0f0f' : '#ffffff',
              '&:hover': {
                background: isDark ? '#ffffff' : '#09090b',
              },
            },
          },
          {
            props: { variant: 'contained', color: 'secondary' },
            style: {
              background: isDark ? '#27272a' : '#52525b',
              color: '#ffffff',
              '&:hover': {
                background: isDark ? '#3f3f46' : '#3f3f46',
              },
            },
          },
          {
            props: { variant: 'outlined', color: 'primary' },
            style: {
              borderColor: isDark ? 'rgba(244, 244, 245, 0.25)' : 'rgba(24, 24, 27, 0.25)',
              color: isDark ? '#fafafa' : '#0f172a',
              '&:hover': {
                borderColor: isDark ? '#ffffff' : '#0f172a',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.04)',
              },
            },
          },
        ],
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            backgroundImage: 'none',
            backgroundColor: isDark ? '#171717' : '#ffffff',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: isDark
              ? '0 4px 20px rgba(0, 0, 0, 0.4)'
              : '0 4px 20px rgba(0, 0, 0, 0.03)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontWeight: 600,
            fontSize: '0.8125rem',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(16px)',
            backgroundColor: isDark
              ? 'rgba(15, 15, 15, 0.88)'
              : 'rgba(248, 250, 252, 0.90)',
            borderBottom: isDark
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: 'none',
            color: isDark ? '#fafafa' : '#0f172a',
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
