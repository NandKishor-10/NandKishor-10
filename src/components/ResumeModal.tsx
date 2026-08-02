import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Stack,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  Print as PrintIcon,
} from '@mui/icons-material';
import { profileData, projectsData, educationData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose }) => {
  const theme = useTheme();

  const handlePrint = () => {
    window.print();
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
            borderRadius: { xs: 3, sm: 4 },
            m: { xs: 1, sm: 2.5 },
            maxHeight: '94vh',
            backgroundImage: 'none',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: { xs: 1.75, sm: 2.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: '0.95rem', sm: '1.25rem' } }}>
          Nand Kishor Gorain — Digital Resume
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{ fontWeight: 600, borderRadius: 2, minHeight: 36, px: { xs: 1.25, sm: 2 }, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}
          >
            Print / Save PDF
          </Button>
          <IconButton onClick={onClose} aria-label="close" sx={{ minWidth: 38, minHeight: 38 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ p: { xs: 2, sm: 4 }, bgcolor: theme.palette.mode === 'dark' ? '#0b0f19' : '#f8fafc' }}>
        {/* Printable Resume Document Container */}
        <Paper
          id="printable-resume"
          elevation={4}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            bgcolor: '#ffffff',
            color: '#1e293b',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            maxWidth: 820,
            mx: 'auto',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', pb: 1.5, borderBottom: '2px solid #0f172a' }}>
            <Typography variant="h4" className="resume-header-name" sx={{ color: '#0f172a', textTransform: 'uppercase', fontWeight: 900, letterSpacing: 1 }}>
              NAND KISHOR GORAIN
            </Typography>
            <Typography variant="subtitle1" className="resume-header-sub" sx={{ color: '#475569', fontStyle: 'italic', my: 0.25, fontWeight: 500 }}>
              Android & Full-Stack Web Developer
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              className="resume-contact-info"
              sx={{ fontSize: '0.85rem', color: '#334155', mt: 0.75, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 0.75 }}
            >
              <span>{profileData.email}</span>
              <span>|</span>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: 600 }}>LinkedIn</a>
              <span>|</span>
              <a href={profileData.github} target="_blank" rel="noreferrer" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: 600 }}>GitHub</a>
              <span>|</span>
              <span>{profileData.location}</span>
            </Stack>
          </Box>

          {/* Professional Summary */}
          <Box className="resume-section" sx={{ mt: 2 }}>
            <Typography
              variant="subtitle2"
              className="resume-section-title"
              sx={{ color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', pb: 0.25, mb: 1, fontWeight: 800, letterSpacing: 1 }}
            >
              PROFESSIONAL SUMMARY
            </Typography>
            <Typography variant="body2" className="resume-text" sx={{ color: '#334155', lineHeight: 1.5 }}>
              {profileData.summary}
            </Typography>
          </Box>

          {/* Technical Skills */}
          <Box className="resume-section" sx={{ mt: 2 }}>
            <Typography
              variant="subtitle2"
              className="resume-section-title"
              sx={{ color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', pb: 0.25, mb: 1, fontWeight: 800, letterSpacing: 1 }}
            >
              TECHNICAL SKILLS
            </Typography>
            <Stack spacing={0.5} className="resume-text" sx={{ fontSize: '0.825rem', color: '#334155', lineHeight: 1.4 }}>
              <div><strong>Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3, Python, Kotlin, Java</div>
              <div><strong>Frontend & Frameworks:</strong> React.js, Next.js, React Native, Redux, Zustand, TanStack Query (React Query)</div>
              <div><strong>UI & Styling:</strong> Tailwind CSS, shadcn/ui, Material UI, Framer Motion, Responsive Design</div>
              <div><strong>Backend & Database:</strong> Node.js, REST APIs, MongoDB, PostgreSQL, Firebase, Ktor</div>
              <div><strong>Tools & Concepts:</strong> Git, GitHub, Vite, Vercel, MVVM, CI/CD, SEO Fundamentals</div>
            </Stack>
          </Box>

          {/* Projects */}
          <Box className="resume-section" sx={{ mt: 2 }}>
            <Typography
              variant="subtitle2"
              className="resume-section-title"
              sx={{ color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', pb: 0.25, mb: 1, fontWeight: 800, letterSpacing: 1 }}
            >
              PROJECTS
            </Typography>
            <Stack spacing={1.5}>
              {projectsData.map((project) => (
                <Box key={project.id}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography variant="subtitle2" className="resume-text" sx={{ color: '#0f172a', fontWeight: 800 }}>
                      {project.title}{' '}
                      <Typography component="span" variant="caption" sx={{ fontStyle: 'italic', color: '#64748b' }}>
                        | {project.techStack.join(', ')}
                      </Typography>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ fontSize: '0.775rem' }}>
                      {project.codeUrl && (
                        <a href={project.codeUrl} target="_blank" rel="noreferrer" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: 600 }}>Code</a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: 600 }}>Live</a>
                      )}
                    </Stack>
                  </Stack>
                  <Box component="ul" className="resume-bullets" sx={{ m: 0, pl: 2, pt: 0.25, color: '#334155', fontSize: '0.8rem', lineHeight: 1.45 }}>
                    {project.bulletPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Education */}
          <Box className="resume-section" sx={{ mt: 2 }}>
            <Typography
              variant="subtitle2"
              className="resume-section-title"
              sx={{ color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', pb: 0.25, mb: 1, fontWeight: 800, letterSpacing: 1 }}
            >
              EDUCATION
            </Typography>
            <Stack spacing={1}>
              {educationData.map((edu, idx) => (
                <Box key={idx}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2" className="resume-text" sx={{ color: '#0f172a', fontWeight: 800 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="caption" color="#475569" sx={{ fontWeight: 600 }}>
                      {edu.period}
                    </Typography>
                  </Stack>
                  <Typography variant="caption" color="#475569" sx={{ display: 'block', fontWeight: 500 }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="caption" color="#334155" sx={{ display: 'block', mt: 0.1, fontWeight: 600 }}>
                    {edu.scoreType}: {edu.score}{' '}
                    {edu.relevantCoursework && `| Relevant Coursework: ${edu.relevantCoursework.slice(0, 4).join(', ')}`}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Certifications */}
          <Box className="resume-section" sx={{ mt: 2 }}>
            <Typography
              variant="subtitle2"
              className="resume-section-title"
              sx={{ color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', pb: 0.25, mb: 1, fontWeight: 800, letterSpacing: 1 }}
            >
              CERTIFICATIONS
            </Typography>
            <Box component="ul" className="resume-bullets" sx={{ m: 0, pl: 2, color: '#334155', fontSize: '0.8rem', lineHeight: 1.45 }}>
              {certificationsData.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.title}</strong> — {cert.duration}, {cert.issuer} ({cert.details})
                </li>
              ))}
            </Box>
          </Box>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};
