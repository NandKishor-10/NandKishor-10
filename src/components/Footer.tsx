import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
  Button,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowUp as TopIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#171717',
        color: '#94a3b8',
        pt: 6,
        pb: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 4 }}
        >
          {/* Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                bgcolor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0f172a',
              }}
            >
              <CodeIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ color: '#fff', lineHeight: 1.2, fontWeight: 800 }}>
                NAND KISHOR GORAIN
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                Android & Web Developer Portfolio
              </Typography>
            </Box>
          </Box>

          {/* Social Icons */}
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <IconButton
              component="a"
              href={`mailto:${profileData.email}`}
              sx={{ color: '#cbd5e1', '&:hover': { color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#cbd5e1', '&:hover': { color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#cbd5e1', '&:hover': { color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 3 }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            © {new Date().getFullYear()} Nand Kishor Gorain. Built with React, TypeScript & Material UI.
          </Typography>

          <Button
            size="small"
            onClick={handleScrollTop}
            endIcon={<TopIcon fontSize="small" />}
            sx={{
              color: '#94a3b8',
              fontSize: '0.775rem',
              textTransform: 'none',
              '&:hover': { color: '#fff' },
            }}
          >
            Back to top
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
