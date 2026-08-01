import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Stack,
  Chip,
  Button,
  Grid,
  Tabs,
  Tab,
  Paper,
  Slider,
  TextField,
  CircularProgress,
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon,
  PlayArrow as PlayIcon,
  AutoAwesome as AiIcon,
  Check as CheckIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();

  // Interactive Simulator States
  // PixxelAI Canvas
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [blur, setBlur] = useState(0);
  const [aiBgRemoved, setAiBgRemoved] = useState(false);

  // CreatorsAI Video Clips
  const [selectedClip, setSelectedClip] = useState(0);
  const [generatingClips, setGeneratingClips] = useState(false);

  // LoveEdit Generative Fill
  const [prompt, setPrompt] = useState('Add golden sunset lighting with futuristic neon background');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string | null>(null);

  if (!project) return null;

  const handleSimulateAiFill = () => {
    setIsGenerating(true);
    setGeneratedResult(null);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedResult('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop');
    }, 1500);
  };

  const handleGenerateClips = () => {
    setGeneratingClips(true);
    setTimeout(() => {
      setGeneratingClips(false);
    }, 1200);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            maxHeight: '90vh',
            backgroundImage: 'none',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              {project.title}
            </Typography>
            <Chip label={project.category} size="small" color="primary" />
          </Stack>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
            {project.tagline}
          </Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        <Tabs value={tabIndex} onChange={(_, val) => setTabIndex(val)} sx={{ mb: 3 }}>
          <Tab label="Interactive Demo Simulator" icon={<PlayIcon fontSize="small" />} iconPosition="start" />
          <Tab label="Project Overview & Impact" icon={<AiIcon fontSize="small" />} iconPosition="start" />
          <Tab label="Code Snippet" icon={<CodeIcon fontSize="small" />} iconPosition="start" />
        </Tabs>

        {/* Tab 0: Interactive Simulator */}
        {tabIndex === 0 && (
          <Box>
            {project.id === 'pixxel-ai' && (
              <Paper sx={{ p: 3, borderRadius: 3, bgcolor: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AiIcon color="primary" /> HTML5 Canvas Image Filter Engine Simulator
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Test PixxelAI's real-time client-side image filter engine below.
                </Typography>

                <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: 260,
                        borderRadius: 3,
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        bgcolor: aiBgRemoved ? 'transparent' : '#000',
                        backgroundImage: aiBgRemoved
                          ? 'radial-gradient(#94a3b8 1px, transparent 1px)'
                          : 'none',
                        backgroundSize: '12px 12px',
                      }}
                    >
                      <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                        alt="Canvas Sample"
                        sx={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          filter: `brightness(${brightness}%) contrast(${contrast}%) blur(${blur}px)`,
                          opacity: aiBgRemoved ? 0.85 : 1,
                          transition: 'filter 0.1s ease',
                        }}
                      />
                      {aiBgRemoved && (
                        <Chip
                          label="AI Background Removed"
                          color="secondary"
                          size="small"
                          sx={{ position: 'absolute', top: 12, right: 12, fontWeight: 700 }}
                        />
                      )}
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <Stack spacing={2.5}>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>
                          Brightness ({brightness}%)
                        </Typography>
                        <Slider
                          value={brightness}
                          min={50}
                          max={150}
                          onChange={(_, v) => setBrightness(v as number)}
                        />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>
                          Contrast ({contrast}%)
                        </Typography>
                        <Slider
                          value={contrast}
                          min={50}
                          max={150}
                          onChange={(_, v) => setContrast(v as number)}
                        />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>
                          Blur ({blur}px)
                        </Typography>
                        <Slider
                          value={blur}
                          min={0}
                          max={10}
                          onChange={(_, v) => setBlur(v as number)}
                        />
                      </Box>

                      <Button
                        variant={aiBgRemoved ? 'contained' : 'outlined'}
                        color="secondary"
                        onClick={() => setAiBgRemoved(!aiBgRemoved)}
                        startIcon={<AiIcon />}
                        fullWidth
                      >
                        {aiBgRemoved ? 'Restore Background' : 'Simulate AI BG Removal'}
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            )}

            {project.id === 'creators-ai' && (
              <Paper sx={{ p: 3, borderRadius: 3, bgcolor: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AiIcon color="primary" /> Long-Form Video to Shorts Clip Extractor
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Simulate CreatorsAI auto-detecting high-retention 9:16 short clips & animated captions from podcasts.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  <Button
                    variant="contained"
                    startIcon={generatingClips ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon />}
                    onClick={handleGenerateClips}
                    disabled={generatingClips}
                  >
                    {generatingClips ? 'Analyzing Video...' : 'Analyze Video & Extract Highlights'}
                  </Button>
                </Stack>

                <Grid container spacing={2}>
                  {[
                    { title: "Key Moment #1 — The AI Breakthrough", duration: "00:42", hookScore: "98% Virality" },
                    { title: "Key Moment #2 — Future of SaaS Development", duration: "00:55", hookScore: "94% Virality" },
                    { title: "Key Moment #3 — React vs Next.js Architecture", duration: "00:38", hookScore: "91% Virality" },
                  ].map((clip, idx) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                      <Paper
                        onClick={() => setSelectedClip(idx)}
                        sx={{
                          p: 2,
                          borderRadius: 2.5,
                          cursor: 'pointer',
                          border: 2,
                          borderColor: selectedClip === idx ? 'primary.main' : 'transparent',
                          bgcolor: selectedClip === idx
                            ? theme.palette.mode === 'dark' ? 'rgba(41, 121, 255, 0.15)' : 'rgba(41, 121, 255, 0.08)'
                            : 'background.paper',
                        }}
                      >
                        <Chip label={clip.hookScore} color="success" size="small" sx={{ mb: 1, fontWeight: 700 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          {clip.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Duration: {clip.duration} • Auto 9:16 Crop
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            )}

            {project.id === 'loveedit' && (
              <Paper sx={{ p: 3, borderRadius: 3, bgcolor: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AiIcon color="secondary" /> Context-Aware Generative Fill Engine
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Enter a text prompt below to simulate loveedit.art in-browser Generative Fill and image expansion.
                </Typography>

                <Stack spacing={2}>
                  <TextField
                    label="Generative Prompt"
                    fullWidth
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    size="small"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSimulateAiFill}
                    disabled={isGenerating}
                    startIcon={isGenerating ? <CircularProgress size={18} color="inherit" /> : <AiIcon />}
                  >
                    {isGenerating ? 'Generating AI Fill Pipeline...' : 'Generate AI Image Fill'}
                  </Button>

                  <Box
                    sx={{
                      height: 220,
                      borderRadius: 3,
                      bgcolor: '#000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    {isGenerating ? (
                      <Stack spacing={1} sx={{ alignItems: 'center' }}>
                        <CircularProgress color="secondary" />
                        <Typography variant="caption" color="#fff">
                          Running Generative Model & Inpainting...
                        </Typography>
                      </Stack>
                    ) : (
                      <Box
                        component="img"
                        src={generatedResult || "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop"}
                        alt="Generative Fill Result"
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                  </Box>
                </Stack>
              </Paper>
            )}
          </Box>
        )}

        {/* Tab 1: Project Overview */}
        {tabIndex === 1 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Key Accomplishments & Architecture
            </Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              {project.bulletPoints.map((bullet, idx) => (
                <Stack key={idx} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                  <CheckIcon color="primary" sx={{ fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body1" sx={{ fontSize: '0.95rem' }}>
                    {bullet}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Tech Stack Used
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
              {project.techStack.map((tech) => (
                <Chip key={tech} label={tech} color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
              ))}
            </Stack>
          </Box>
        )}

        {/* Tab 2: Code Snippet */}
        {tabIndex === 2 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Core Implementation Logic
            </Typography>
            <Box
              component="pre"
              sx={{
                p: 2.5,
                borderRadius: 3,
                bgcolor: '#090d16',
                color: '#e2e8f0',
                fontSize: '0.85rem',
                fontFamily: 'Roboto Mono, monospace',
                overflowX: 'auto',
                lineHeight: 1.6,
              }}
            >
              {project.demoSnippet || '// Implementation details available on GitHub'}
            </Box>
          </Box>
        )}
      </DialogContent>

      <Box sx={{ p: 2.5, pt: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          {project.metrics}
        </Typography>
        <Stack direction="row" spacing={1.5}>
          {project.codeUrl && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<GitHubIcon />}
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="contained"
              size="small"
              startIcon={<LaunchIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </Stack>
      </Box>
    </Dialog>
  );
};
