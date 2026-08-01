import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getMuiTheme } from './theme/muiTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [resumeOpen, setResumeOpen] = useState(false);

  const theme = getMuiTheme(mode);

  const handleToggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', color: 'text.primary' }}>
        <Navbar
          mode={mode}
          onToggleMode={handleToggleMode}
          onOpenResume={() => setResumeOpen(true)}
        />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <SkillsSection />
          <ProjectsSection />
          <EducationCertifications />
          <InteractiveTerminal />
          <ContactSection />
        </Box>

        <Footer />

        <ResumeModal
          open={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </Box>
    </ThemeProvider>
  );
}
