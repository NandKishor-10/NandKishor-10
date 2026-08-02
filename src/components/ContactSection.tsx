import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
  Chip,
  useTheme,
  Paper,
  CircularProgress,
  IconButton,
  Tooltip,
  Collapse,
  Divider,
} from '@mui/material';
import {
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  ContentCopy as CopyIcon,
  Check as CheckIcon,
  History as HistoryIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';
import { motion } from 'motion/react';
import { profileData } from '../data/portfolioData';

interface SentMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorAlert, setErrorAlert] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [copiedFormatted, setCopiedFormatted] = useState(false);
  const [sentMessages, setSentMessages] = useState<SentMessage[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_sent_messages');
      if (saved) {
        setSentMessages(JSON.parse(saved));
      }
    } catch {
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyFormattedMessage = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setErrorAlert('Please fill in Name, Email, and Message first to copy formatted message.');
      return;
    }
    const text = `To: ${profileData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedFormatted(true);
    setTimeout(() => setCopiedFormatted(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorAlert(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorAlert('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorAlert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newMessage: SentMessage = {
        id: Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'Portfolio Inquiry',
        message: formData.message.trim(),
        timestamp: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      const updatedHistory = [newMessage, ...sentMessages];
      setSentMessages(updatedHistory);
      try {
        localStorage.setItem('portfolio_sent_messages', JSON.stringify(updatedHistory));
      } catch {
      }

      const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`);
      const mailtoBody = encodeURIComponent(
        `Hi Nand Kishor,\n\n${formData.message.trim()}\n\n---\nSender Name: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}`
      );
      const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      window.location.href = mailtoUrl;

      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
            label="Get in Touch"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 600, mb: 1.5, borderRadius: 2 }}
          />
          <Typography variant="h2" sx={{ letterSpacing: '-0.02em', mb: 1.5, fontWeight: 800 }}>
            Let's Build Something Great Together
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Looking for a dedicated Android & Full-Stack Web Developer? Send a message below or reach out directly via email.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Direct Contact Cards */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Stack spacing={3}>
                <Card
                  component={motion.div}
                  whileHover={{ y: -3 }}
                  sx={{ p: 3, borderRadius: 3, position: 'relative' }}
                >
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        display: 'flex',
                      }}
                    >
                      <EmailIcon />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                        Direct Email Address
                      </Typography>
                      <Typography
                        variant="h6"
                        component="a"
                        href={`mailto:${profileData.email}`}
                        sx={{ textDecoration: 'none', color: 'text.primary', display: 'block', fontWeight: 700, wordBreak: 'break-all' }}
                      >
                        {profileData.email}
                      </Typography>
                    </Box>
                    <Tooltip title={emailCopied ? 'Copied!' : 'Copy Email'}>
                      <IconButton onClick={handleCopyEmail} color={emailCopied ? 'success' : 'default'} size="small">
                        {emailCopied ? <CheckIcon fontSize="small" /> : <CopyIcon fontSize="small" />}
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Card>

                <Card
                  component={motion.div}
                  whileHover={{ y: -3 }}
                  sx={{ p: 3, borderRadius: 3 }}
                >
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: 'secondary.main',
                        color: 'secondary.contrastText',
                        display: 'flex',
                      }}
                    >
                      <LocationIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                        Location
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {profileData.location}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>

                {/* Social Profiles */}
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(15, 23, 42, 0.02)',
                    border: 1,
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2 }}>
                    Connect on Social Profiles
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<LinkedInIcon />}
                      endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    >
                      GitHub
                    </Button>
                  </Stack>
                </Paper>

                {/* Sent Messages History Toggle if available */}
                {sentMessages.length > 0 && (
                  <Paper
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      border: '1px border-dashed',
                      borderColor: 'primary.main',
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.03)',
                    }}
                  >
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <HistoryIcon color="primary" fontSize="small" />
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          Messages Sent ({sentMessages.length})
                        </Typography>
                      </Stack>
                      <Button size="small" onClick={() => setShowHistory(!showHistory)}>
                        {showHistory ? 'Hide' : 'View'}
                      </Button>
                    </Stack>

                    <Collapse in={showHistory}>
                      <Divider sx={{ my: 1.5 }} />
                      <Stack spacing={1.5} sx={{ maxHeight: 200, overflowY: 'auto', pr: 0.5 }}>
                        {sentMessages.map((msg) => (
                          <Box key={msg.id} sx={{ p: 1.5, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 600 }}>
                              {msg.timestamp}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                              {msg.subject}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap sx={{ fontSize: '0.8rem' }}>
                              {msg.message}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Collapse>
                  </Paper>
                )}
              </Stack>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card sx={{ p: { xs: 3, sm: 4 }, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                  Send a Direct Message
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Fill in the form below to send an inquiry directly to <strong>{profileData.email}</strong>.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Your Name"
                        fullWidth
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        slotProps={{
                          input: { sx: { borderRadius: 2 } }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Your Email"
                        type="email"
                        fullWidth
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        slotProps={{
                          input: { sx: { borderRadius: 2 } }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Subject"
                        fullWidth
                        placeholder="e.g. Project Opportunity / Hiring Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        slotProps={{
                          input: { sx: { borderRadius: 2 } }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Your Message"
                        fullWidth
                        required
                        multiline
                        rows={4}
                        placeholder="Hi Nand Kishor, I loved your portfolio..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        slotProps={{
                          input: { sx: { borderRadius: 2 } }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          disabled={loading}
                          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                          fullWidth
                          sx={{ py: 1.5, fontSize: '0.95rem', fontWeight: 700 }}
                        >
                          {loading ? 'Opening Email Client...' : 'Send Message'}
                        </Button>

                        <Button
                          type="button"
                          variant="outlined"
                          color="inherit"
                          size="large"
                          onClick={handleCopyFormattedMessage}
                          startIcon={copiedFormatted ? <CheckIcon color="success" /> : <CopyIcon />}
                          sx={{ py: 1.5, fontSize: '0.85rem', fontWeight: 600, minWidth: { sm: '180px' } }}
                        >
                          {copiedFormatted ? 'Copied Text!' : 'Copy Text'}
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Feedback Snackbars */}
      <Snackbar
        open={submitted}
        autoHideDuration={7000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSubmitted(false)} variant="filled" sx={{ width: '100%', fontWeight: 600 }}>
          Message saved and opened in your email client! You can also email directly to {profileData.email}.
        </Alert>
      </Snackbar>

      <Snackbar
        open={Boolean(errorAlert)}
        autoHideDuration={5000}
        onClose={() => setErrorAlert(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setErrorAlert(null)} variant="filled" sx={{ width: '100%', fontWeight: 600 }}>
          {errorAlert}
        </Alert>
      </Snackbar>
    </Box>
  );
};

