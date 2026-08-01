import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Paper,
  Stack,
  useTheme,
  Button,
} from '@mui/material';
import {
  School as EducationIcon,
  VerifiedUser as CertIcon,
  Launch as LaunchIcon,
  EmojiEvents as AwardIcon,
} from '@mui/icons-material';
import { motion } from 'motion/react';
import { educationData, certificationsData } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  const theme = useTheme();

  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column: Education */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Stack direction="row" spacing={1.5} sx={{ mb: 4, alignItems: 'center' }}>
                <Box
                  sx={{
                    p: 1.25,
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                  }}
                >
                  <EducationIcon />
                </Box>
                <Box id="certifications">
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    Education
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Academic qualifications & core coursework
                  </Typography>
                </Box>
              </Stack>

              <Stack spacing={3}>
                {educationData.map((edu, idx) => (
                  <Card
                    key={idx}
                    component={motion.div}
                    whileHover={{ y: -3 }}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      position: 'relative',
                      borderLeft: 4,
                      borderLeftColor: 'primary.main',
                    }}
                  >
                    <Stack direction="row" sx={{ mb: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        {edu.degree}
                      </Typography>
                      <Chip
                        label={edu.score}
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 700, borderRadius: 1.5 }}
                      />
                    </Stack>

                    <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {edu.institution}
                    </Typography>

                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2, fontWeight: 500 }}>
                      Period: {edu.period}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {edu.description}
                    </Typography>

                    {edu.relevantCoursework && (
                      <Box>
                        <Typography variant="caption" color="text.primary" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                          Key Coursework:
                        </Typography>
                        <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                          {edu.relevantCoursework.map((course, cIdx) => (
                            <Chip key={cIdx} label={course} size="small" variant="outlined" sx={{ fontSize: '0.75rem' }} />
                          ))}
                        </Stack>
                      </Box>
                    )}
                  </Card>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Right Column: Certifications */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Stack direction="row" spacing={1.5} sx={{ mb: 4, alignItems: 'center' }}>
                <Box
                  sx={{
                    p: 1.25,
                    borderRadius: 2,
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                  }}
                >
                  <CertIcon />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    Certifications & Training
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Verified achievements & coding challenges
                  </Typography>
                </Box>
              </Stack>

              <Stack spacing={3}>
                {certificationsData.map((cert) => (
                  <Card
                    key={cert.id}
                    component={motion.div}
                    whileHover={{ y: -3 }}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      borderLeft: 4,
                      borderLeftColor: cert.badgeColor || 'secondary.main',
                    }}
                  >
                    <Stack direction="row" sx={{ mb: 1, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          {cert.title}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                          Issued by {cert.issuer}
                        </Typography>
                      </Box>
                      {cert.duration && (
                        <Chip
                          label={cert.duration}
                          size="small"
                          color="secondary"
                          variant="outlined"
                          sx={{ fontWeight: 600 }}
                        />
                      )}
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, mt: 1 }}>
                      {cert.details}
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<AwardIcon />}
                      endIcon={<LaunchIcon sx={{ fontSize: '0.85rem !important' }} />}
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ borderRadius: 2 }}
                    >
                      View Verified Certificate
                    </Button>
                  </Card>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
