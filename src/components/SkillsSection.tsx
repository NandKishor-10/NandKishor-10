import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  LinearProgress,
  Paper,
  Stack,
  useTheme,
  Button,
} from '@mui/material';
import {
  Search as SearchIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Terminal as TerminalIcon,
  CheckCircle as CheckIcon,
  ContentCopy as CopyIcon,
  Smartphone as SmartphoneIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategoriesData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const theme = useTheme();

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const filteredCategories = skillCategoriesData.map((category) => ({
    ...category,
    skills: category.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  })).filter((cat) => cat.skills.length > 0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <SmartphoneIcon fontSize="small" />;
      case 'Code':
        return <CodeIcon fontSize="small" />;
      case 'Palette':
        return <PaletteIcon fontSize="small" />;
      case 'Database':
        return <StorageIcon fontSize="small" />;
      default:
        return <BuildIcon fontSize="small" />;
    }
  };

  const codeSnippets = [
    {
      title: "Real-time HTML5 Canvas Filters (PixxelAI)",
      language: "TypeScript",
      code: `// Real-Time HTML5 Canvas Image Processing Engine
export function applyCanvasEnhancements(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  settings: { brightness: number; contrast: number; blur: number }
) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const factor = (259 * (settings.contrast + 255)) / (255 * (259 - settings.contrast));

  for (let i = 0; i < data.length; i += 4) {
    // Red, Green, Blue pixel modification
    data[i] = factor * (data[i] - 128) + 128 + settings.brightness;
    data[i + 1] = factor * (data[i + 1] - 128) + 128 + settings.brightness;
    data[i + 2] = factor * (data[i + 2] - 128) + 128 + settings.brightness;
  }
  ctx.putImageData(imageData, 0, 0);
}`
    },
    {
      title: "Context-Aware AI Generative Fill (LoveEdit)",
      language: "TypeScript",
      code: `// Generative Fill API Request & Mask Rendering
export async function handleGenerativeFill({ image, maskCanvas, prompt }: GenerativeFillParams) {
  const maskDataUrl = maskCanvas.toDataURL('image/png');
  const response = await fetch('/api/ai/generative-fill', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      imageUri: image,
      maskUri: maskDataUrl,
      userPrompt: prompt,
      quality: 'hd',
    }),
  });
  if (!response.ok) throw new Error('AI Generation failed');
  return await response.json();
}`
    }
  ];

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 6, textAlign: 'center' }}
        >
          <Chip
            label="Technical Expertise"
            color="primary"
            variant="outlined"
            sx={{ mb: 1.5, borderRadius: 2, fontWeight: 600 }}
          />
          <Typography variant="h2" sx={{ letterSpacing: '-0.02em', mb: 1.5, fontWeight: 800 }}>
            Skills & Competencies
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 650, mx: 'auto' }}>
            Comprehensive technical skills acquired through BCA coursework, hands-on production SaaS development, and 160+ days of DSA problem solving.
          </Typography>
        </Box>

        {/* Search & Category Filter Bar */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ mb: 4, justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Tabs
            value={searchQuery ? false : activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '0.9rem',
                minHeight: 44,
                borderRadius: 2,
                px: 2.25,
              },
            }}
          >
            <Tab label="All Categories" />
            {skillCategoriesData.map((cat, idx) => (
              <Tab key={idx} label={cat.title} />
            ))}
          </Tabs>

          <TextField
            placeholder="Search skills (React, Canvas, Node...)"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              width: { xs: '100%', md: 300 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2.5,
                bgcolor: 'background.paper',
              },
            }}
          />
        </Stack>

        {/* Skills Display Cards */}
        {searchQuery ? (
          <Grid container spacing={3}>
            {filteredCategories.flatMap((cat) =>
              cat.skills.map((skill, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`${cat.title}-${idx}`}>
                  <SkillCard skill={skill} category={cat.title} />
                </Grid>
              ))
            )}
          </Grid>
        ) : (
          <AnimatePresence mode="wait">
            <Box
              key={activeTab}
              component={motion.div}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 0 ? (
                <Grid container spacing={3}>
                  {skillCategoriesData.map((category, catIdx) => (
                    <Grid size={{ xs: 12, md: 6 }} key={catIdx}>
                      <Card
                        component={motion.div}
                        whileHover={{ y: -3 }}
                        sx={{
                          p: 3,
                          height: '100%',
                          borderRadius: 3,
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Stack direction="row" spacing={1.5} sx={{ mb: 2.5, alignItems: 'center' }}>
                          <Box
                            sx={{
                              p: 1,
                              borderRadius: 2,
                              bgcolor: 'primary.main',
                              color: 'primary.contrastText',
                              display: 'flex',
                            }}
                          >
                            {getCategoryIcon(category.icon)}
                          </Box>
                          <Typography variant="h5" sx={{ fontWeight: 800 }}>
                            {category.title}
                          </Typography>
                        </Stack>

                        <Grid container spacing={2}>
                          {category.skills.map((skill, skillIdx) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={skillIdx}>
                              <Box
                                sx={{
                                  p: 1.5,
                                  borderRadius: 2,
                                  border: '1px solid',
                                  borderColor: skill.highlight ? 'primary.main' : 'divider',
                                  bgcolor: skill.highlight
                                    ? (theme.palette.mode === 'dark' ? 'rgba(226, 232, 240, 0.08)' : 'rgba(30, 41, 59, 0.04)')
                                    : 'transparent',
                                }}
                              >
                                <Stack direction="row" sx={{ mb: 0.5, justifyContent: 'space-between', alignItems: 'center' }}>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                    {skill.name}
                                  </Typography>
                                  {skill.highlight && (
                                    <Chip label="Core" size="small" color="primary" sx={{ height: 18, fontSize: '0.65rem' }} />
                                  )}
                                </Stack>
                                {skill.description && (
                                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, fontSize: '0.75rem' }}>
                                    {skill.description}
                                  </Typography>
                                )}
                                <LinearProgress
                                  variant="determinate"
                                  value={skill.level}
                                  color={skill.highlight ? 'primary' : 'inherit'}
                                  sx={{ height: 4, borderRadius: 2 }}
                                />
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Grid container spacing={3}>
                  {skillCategoriesData[activeTab - 1].skills.map((skill, idx) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                      <SkillCard skill={skill} category={skillCategoriesData[activeTab - 1].title} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </AnimatePresence>
        )}

        {/* Code Showcase Section */}
        <Box sx={{ mt: 8 }}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: theme.palette.mode === 'dark' ? '#121212' : '#0f172a',
              color: '#f8fafc',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Stack direction="row" sx={{ mb: 3, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Stack direction="row" spacing={1} sx={{ mb: 0.5, alignItems: 'center' }}>
                  <TerminalIcon sx={{ color: '#cbd5e1' }} />
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>
                    Production Code Snippets
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Real implementation logic written by Nand Kishor for Canvas rendering & AI image pipelines.
                </Typography>
              </Box>
            </Stack>

            <Grid container spacing={3}>
              {codeSnippets.map((snippet, idx) => (
                <Grid size={{ xs: 12, md: 6 }} key={idx}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      bgcolor: '#101010',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Stack direction="row" sx={{ mb: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ color: '#e2e8f0', fontFamily: 'monospace', fontWeight: 700 }}>
                        {snippet.title}
                      </Typography>
                    </Stack>
                    <Box
                      component="pre"
                      sx={{
                        m: 0,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: '#090909',
                        color: '#e2e8f0',
                        fontSize: '0.8rem',
                        fontFamily: 'monospace',
                        overflowX: 'auto',
                        lineHeight: 1.5,
                        flexGrow: 1,
                      }}
                    >
                      {snippet.code}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

// Helper Component for Individual Skill Item
const SkillCard: React.FC<{ skill: { name: string; level: number; highlight?: boolean; description?: string }; category: string }> = ({
  skill,
  category,
}) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -3 }}
      sx={{ p: 2.5, height: '100%', borderRadius: 3 }}
    >
      <Stack direction="row" sx={{ mb: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {skill.name}
        </Typography>
        <Chip label={category} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
      </Stack>
      {skill.description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.825rem' }}>
          {skill.description}
        </Typography>
      )}
      <Stack direction="row" sx={{ mb: 0.5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
          Proficiency Level
        </Typography>
        <Typography variant="caption" color="primary" sx={{ fontWeight: 700 }}>
          {skill.level}%
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={skill.level}
        color={skill.highlight ? 'primary' : 'inherit'}
        sx={{ height: 5, borderRadius: 2 }}
      />
    </Card>
  );
};
