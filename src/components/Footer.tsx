import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
  Button,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowUp as TopIcon,
  X as XIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
const theme = useTheme();
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
            <Avatar
              src='/logo.png'
              sx={{
                width: 56,
                height: 56,
                color: 'primary.contrastText',
                fontSize: '1.5rem',
                fontWeight: 800,
                mb: 0.5,
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 0 20px rgba(226, 232, 240, 0.2)'
                  : '0 4px 16px rgba(15, 23, 42, 0.15)',
              }}
            >
              NK
            </Avatar>

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
            <IconButton
              component="a"
              href={profileData.x}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#cbd5e1', '&:hover': { color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              <XIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={profileData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#cbd5e1', '&:hover': { color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 3 }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            If you are seeing this message, it means you have reached the end of the page.
            <br />
            Can't thank you enough for your time.
            <br />
            I also love watching anime BTW.
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
