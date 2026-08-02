import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Chip,
  Avatar,
  Stack,
  useTheme,
  Paper,
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  LocationOn as LocationIcon,
  Launch as LaunchIcon,
  CheckCircle as CheckIcon,
  Download as DownloadIcon,
  Terminal as TerminalIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import { motion } from 'motion/react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const theme = useTheme();

  return (
    <Box
      id="summary"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at 15% 15%, rgba(148, 163, 184, 0.08) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(100, 116, 139, 0.06) 0%, transparent 45%)'
          : 'radial-gradient(circle at 15% 15%, rgba(100, 116, 139, 0.04) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(148, 163, 184, 0.04) 0%, transparent 45%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          {/* Main Info Header */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Stack direction="row" spacing={1} sx={{ mb: 2.5, alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                <Chip
                  icon={<CheckIcon sx={{ fontSize: '0.9rem !important', color: 'inherit' }} />}
                  label="Available for Frontend & Web Roles"
                  size="small"
                  sx={{
                    fontWeight: 600,
                    px: 1,
                    py: 0.5,
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(226, 232, 240, 0.12)' : 'rgba(30, 41, 59, 0.08)',
                    color: 'text.primary',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                />
                <Chip
                  icon={<LocationIcon sx={{ fontSize: '0.9rem !important' }} />}
                  label={profileData.location}
                  variant="outlined"
                  size="small"
                  sx={{
                    fontWeight: 500,
                    borderColor: 'divider',
                    color: 'text.secondary',
                  }}
                />
              </Stack>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', sm: '3.1rem', md: '3.75rem' },
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  mb: 2,
                  color: 'text.primary',
                  wordBreak: 'break-word',
                }}
              >
                {profileData.name}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.45rem' },
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  flexWrap: 'wrap',
                }}
              >
                <span>{profileData.title}</span>
                <Box
                  component="span"
                  sx={{
                    display: { xs: 'none', sm: 'inline-block' },
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                  }}
                />
                <Typography component="span" variant="subtitle1" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  Kotlin • Jetpack Compose • React • Next.js • TypeScript
                </Typography>
              </Typography>

              {/* Summary Card */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.25, sm: 3 },
                  mb: 3.5,
                  borderRadius: 3,
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', sm: '1.025rem' }, lineHeight: 1.7 }}>
                  {profileData.summary}
                </Typography>
              </Paper>

              {/* Quick Social & Contact Badges */}
              <Stack direction="row" spacing={1.5} sx={{ mb: 4, flexWrap: 'wrap', gap: 1.25 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<EmailIcon fontSize="small" />}
                  href={`mailto:${profileData.email}`}
                  sx={{ borderRadius: 2, color: 'text.primary', minHeight: 40, px: 2, fontSize: '0.825rem' }}
                >
                  {profileData.email}
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<LinkedInIcon fontSize="small" />}
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<LaunchIcon sx={{ fontSize: '0.8rem !important' }} />}
                  sx={{ borderRadius: 2, color: 'text.primary', minHeight: 40, px: 2, fontSize: '0.825rem' }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon fontSize="small" />}
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<LaunchIcon sx={{ fontSize: '0.8rem !important' }} />}
                  sx={{ borderRadius: 2, color: 'text.primary', minHeight: 40, px: 2, fontSize: '0.825rem' }}
                >
                  GitHub
                </Button>
              </Stack>

              {/* Action Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={motion.a}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowIcon />}
                  href="#projects"
                  sx={{
                    px: 3.5,
                    py: 1.4,
                    fontSize: '0.95rem',
                    borderRadius: 2.5,
                    minHeight: 48,
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  Explore Featured Projects
                </Button>
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<DownloadIcon />}
                  onClick={onOpenResume}
                  sx={{
                    px: 3,
                    py: 1.4,
                    fontSize: '0.95rem',
                    borderRadius: 2.5,
                    minHeight: 48,
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  View Resume
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right Stats & Identity Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                {/* Profile Header */}
                <Stack direction="row" spacing={2.5} sx={{ pb: 3, borderBottom: 1, borderColor: 'divider', alignItems: 'center' }}>
                  <Avatar
                    src='/logo.png'
                    sx={{
                      width: 68,
                      height: 68,
                      color: 'primary.contrastText',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 0 20px rgba(226, 232, 240, 0.2)'
                        : '0 4px 16px rgba(15, 23, 42, 0.15)',
                    }}
                  >
                    NK
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Nand Kishor Gorain
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      BCA Graduate (2022–2025)
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                      Binod Bihari Mahto Kolyanchal University
                    </Typography>
                  </Box>
                </Stack>

                {/* Grid of Key Highlights */}
                <Grid container spacing={2} sx={{ pt: 3 }}>
                  {profileData.stats.map((stat, idx) => (
                    <Grid size={{ xs: 6 }} key={idx}>
                      <Box
                        component={motion.div}
                        whileHover={{ y: -2 }}
                        sx={{
                          p: 2,
                          borderRadius: 2.5,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(15, 23, 42, 0.02)',
                          border: 1,
                          borderColor: 'divider',
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            color: 'text.primary',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2, my: 0.25 }}>
                          {stat.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {stat.sublabel}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Quick Terminal Shortcut Callout */}
                <Box
                  component={motion.a}
                  whileHover={{ y: -2 }}
                  href="#terminal"
                  sx={{
                    mt: 3,
                    p: 1.75,
                    borderRadius: 2.5,
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#000',
                    color: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <TerminalIcon sx={{ color: '#cbd5e1' }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', fontFamily: 'monospace' }}>
                        Interactive CLI
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace', color: '#f8fafc', fontWeight: 600 }}>
                        $ run nandkishor.sh
                      </Typography>
                    </Box>
                  </Stack>
                  <Chip
                    label="Try CLI"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                    }}
                  />
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
