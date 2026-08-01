import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  Stack,
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  PlayArrow as PlayIcon,
  AutoAwesome as AiIcon,
  Check as CheckIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();

  const categories = ['All', 'AI SaaS', 'Canvas & Graphics', 'Generative AI'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.mode === 'dark' ? '#0f0f0f' : '#f1f5f9' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 6, textAlign: 'center' }}
        >
          <Chip
            label="Featured Portfolio Projects"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700, mb: 1.5, borderRadius: 2 }}
          />
          <Typography variant="h2" sx={{ letterSpacing: '-0.02em', mb: 1.5, fontWeight: 800 }}>
            Production SaaS & AI Platforms
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto' }}>
            Full-stack web applications featuring real-time HTML5 Canvas engines, AI video generation pipelines, and generative fill platforms.
          </Typography>
        </Box>

        {/* Category Filters */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={categories.indexOf(selectedCategory)}
            onChange={(_, val) => setSelectedCategory(categories[val])}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              bgcolor: 'background.paper',
              p: 0.5,
              borderRadius: 3,
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              border: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                borderRadius: 2.5,
                fontWeight: 600,
                minHeight: 38,
                px: 2.25,
                fontSize: '0.875rem',
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <Grid container spacing={4} key={selectedCategory}>
            {filteredProjects.map((project, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Visual Header / Banner */}
                  <Box
                    sx={{
                      height: 170,
                      background: project.imagePlaceholder || 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
                      p: 2.5,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                    }}
                  >
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.25)',
                          color: '#fff',
                          backdropFilter: 'blur(8px)',
                          fontWeight: 700,
                        }}
                      />
                      {project.featured && (
                        <Chip
                          icon={<AiIcon sx={{ color: '#e2e8f0 !important', fontSize: '0.9rem !important' }} />}
                          label="Featured"
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 0, 0, 0.4)',
                            color: '#fff',
                            backdropFilter: 'blur(8px)',
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Stack>

                    <Typography variant="h5" color="#fff" sx={{ fontWeight: 800, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                      {project.title}
                    </Typography>
                  </Box>

                  {/* Content Body */}
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600, mb: 2, minHeight: 40 }}>
                      {project.tagline}
                    </Typography>

                    {/* Bullet Highlights */}
                    <Stack spacing={1} sx={{ mb: 3 }}>
                      {project.bulletPoints.slice(0, 2).map((pt, i) => (
                        <Stack key={i} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                          <CheckIcon color="primary" sx={{ fontSize: 16, mt: 0.3, flexShrink: 0 }} />
                          <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                            {pt}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Box sx={{ mt: 'auto' }}>
                      <Stack direction="row" spacing={0.75} sx={{ mb: 2, flexWrap: 'wrap', gap: 0.75 }}>
                        {project.techStack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.725rem', height: 22 }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>

                  {/* Actions Footer */}
                  <CardActions sx={{ p: 2.5, pt: 0, gap: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      startIcon={<PlayIcon />}
                      onClick={() => handleOpenModal(project)}
                      sx={{ borderRadius: 2, py: 0.9, fontWeight: 600 }}
                    >
                      Demo & Details
                    </Button>
                    {project.codeUrl && (
                      <Button
                        variant="outlined"
                        color="inherit"
                        size="small"
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ minWidth: 40, p: 0.9, borderRadius: 2 }}
                      >
                        <GitHubIcon fontSize="small" />
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ minWidth: 40, p: 0.9, borderRadius: 2 }}
                      >
                        <LaunchIcon fontSize="small" />
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </Container>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
};
