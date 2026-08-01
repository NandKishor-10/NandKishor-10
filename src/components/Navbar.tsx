import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Code as CodeIcon,
  Description as ResumeIcon,
} from '@mui/icons-material';
import { motion } from 'motion/react';

interface NavbarProps {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
  onOpenResume: () => void;
}

const navItems = [
  { label: 'About', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ mode, onToggleMode, onOpenResume }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" elevation={0} id="navbar">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
          {/* Brand / Name */}
          <Box
            component={motion.a}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'text.primary',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2,
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.contrastText',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 0 16px rgba(226, 232, 240, 0.15)'
                  : '0 4px 12px rgba(15, 23, 42, 0.15)',
              }}
            >
              <CodeIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', fontSize: '1.05rem' }}>
                NAND KISHOR GORAIN
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 500, fontSize: '0.75rem' }}>
                Android & Web Developer
              </Typography>
            </Box>
          </Box>

          {/* Desktop Links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item, idx) => (
                <Box
                  key={item.label}
                  component={motion.div}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Button
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: 'text.primary',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      px: 1.75,
                      py: 0.75,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.06)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          {/* Right Action Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Resume Button */}
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ResumeIcon fontSize="small" />}
              onClick={onOpenResume}
              size={isMobile ? 'small' : 'medium'}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              Resume
            </Button>

            {/* Theme Toggle */}
            <Tooltip title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`}>
              <IconButton
                onClick={onToggleMode}
                color="inherit"
                sx={{
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.04)',
                  p: 1,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.08)',
                  },
                }}
              >
                {mode === 'dark' ? <LightIcon sx={{ color: '#e2e8f0', fontSize: '1.25rem' }} /> : <DarkIcon sx={{ color: '#1e293b', fontSize: '1.25rem' }} />}
              </IconButton>
            </Tooltip>

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                color="inherit"
                sx={{
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.04)',
                  borderRadius: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              p: 2.5,
              bgcolor: 'background.paper',
              backgroundImage: 'none',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Navigation
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item.href)}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{ primary: { sx: { fontWeight: 500, fontSize: '0.95rem' } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Chip
            label="Available for Opportunities"
            color="secondary"
            size="small"
            sx={{ width: '100%', mb: 2, fontWeight: 600 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<ResumeIcon />}
            onClick={() => {
              setMobileOpen(false);
              onOpenResume();
            }}
          >
            View Full Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};
