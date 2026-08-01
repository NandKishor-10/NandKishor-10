import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  IconButton,
  Stack,
  useTheme,
  Button,
} from '@mui/material';
import {
  Terminal as TerminalIcon,
  ContentCopy as CopyIcon,
  Check as CheckIcon,
  Delete as ClearIcon,
  PlayArrow as RunIcon,
} from '@mui/icons-material';
import { motion } from 'motion/react';
import { profileData, projectsData, skillCategoriesData, educationData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <Box sx={{ color: '#94a3b8' }}>
          <Typography variant="body2" sx={{ color: '#f8fafc', fontWeight: 700, fontFamily: 'monospace' }}>
            Nand Kishor Gorain — CLI v1.0.0
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block', mt: 0.5 }}>
            Type <span style={{ color: '#cbd5e1' }}>'help'</span> to view available commands, or click quick buttons below.
          </Typography>
        </Box>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <Box sx={{ fontFamily: 'monospace', color: '#e2e8f0', fontSize: '0.825rem' }}>
            <Typography variant="caption" sx={{ color: '#f8fafc', display: 'block', mb: 1, fontWeight: 700 }}>
              Available Terminal Commands:
            </Typography>
            <div>• <strong style={{ color: '#cbd5e1' }}>whoami</strong> — View short developer intro & role</div>
            <div>• <strong style={{ color: '#cbd5e1' }}>skills</strong> — List core technical stack & frameworks</div>
            <div>• <strong style={{ color: '#cbd5e1' }}>projects</strong> — Display production SaaS & AI projects</div>
            <div>• <strong style={{ color: '#cbd5e1' }}>education</strong> — View BCA degree & GPA details</div>
            <div>• <strong style={{ color: '#cbd5e1' }}>contact</strong> — Get email and social profiles</div>
            <div>• <strong style={{ color: '#cbd5e1' }}>stats</strong> — Key metrics (GFG streak, SaaS projects)</div>
            <div>• <strong style={{ color: '#cbd5e1' }}>clear</strong> — Wipe terminal screen</div>
          </Box>
        );
        break;

      case 'whoami':
        outputNode = (
          <Box sx={{ fontFamily: 'monospace', color: '#cbd5e1' }}>
            <div>Name: {profileData.name}</div>
            <div>Role: {profileData.title}</div>
            <div>Location: {profileData.location}</div>
            <div>Summary: {profileData.summary}</div>
          </Box>
        );
        break;

      case 'skills':
        outputNode = (
          <Box sx={{ fontFamily: 'monospace' }}>
            {skillCategoriesData.map((cat, i) => (
              <div key={i} style={{ marginBottom: 6 }}>
                <span style={{ color: '#f8fafc', fontWeight: 'bold' }}>[{cat.title}]</span>:{' '}
                {cat.skills.map((s) => s.name).join(', ')}
              </div>
            ))}
          </Box>
        );
        break;

      case 'projects':
        outputNode = (
          <Box sx={{ fontFamily: 'monospace' }}>
            {projectsData.map((p, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <span style={{ color: '#f8fafc', fontWeight: 'bold' }}>{p.title}</span> ({p.category})<br />
                <span style={{ color: '#94a3b8' }}>• {p.tagline}</span><br />
                <span style={{ color: '#cbd5e1' }}>Tech: {p.techStack.join(', ')}</span>
              </div>
            ))}
          </Box>
        );
        break;

      case 'education':
        outputNode = (
          <Box sx={{ fontFamily: 'monospace' }}>
            {educationData.map((e, i) => (
              <div key={i} style={{ marginBottom: 6 }}>
                <span style={{ color: '#f8fafc', fontWeight: 'bold' }}>{e.degree}</span> — {e.institution}<br />
                <span style={{ color: '#cbd5e1' }}>{e.scoreType}: {e.score} | Period: {e.period}</span>
              </div>
            ))}
          </Box>
        );
        break;

      case 'contact':
        outputNode = (
          <Box sx={{ fontFamily: 'monospace' }}>
            <div>Email: <a href={`mailto:${profileData.email}`} style={{ color: '#e2e8f0' }}>{profileData.email}</a></div>
            <div>LinkedIn: {profileData.linkedin}</div>
            <div>GitHub: {profileData.github}</div>
          </Box>
        );
        break;

      case 'stats':
        outputNode = (
          <Box sx={{ fontFamily: 'monospace', color: '#cbd5e1' }}>
            {profileData.stats.map((s, i) => (
              <div key={i}>
                • {s.label}: <strong>{s.value}</strong> ({s.sublabel})
              </div>
            ))}
          </Box>
        );
        break;

      default:
        outputNode = (
          <Typography variant="caption" sx={{ color: '#f87171', fontFamily: 'monospace' }}>
            Command not recognized: '{trimmed}'. Type <span style={{ color: '#cbd5e1' }}>'help'</span> for list.
          </Typography>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInput('');
  };

  const handleCopyHistory = () => {
    const text = history.map((h) => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box id="terminal" sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.mode === 'dark' ? '#0f0f0f' : '#f1f5f9' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 4, textAlign: 'center' }}
        >
          <Chip

            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700, mb: 1.5, borderRadius: 2 }}
            icon={<TerminalIcon sx={{ color: 'primary !important' }} />}
            label="Interactive Developer CLI"
          // sx={{
          //   bgcolor: 'rgba(255, 255, 255, 0.08)',
          //   color: '#e2e8f0',
          //   fontWeight: 700,
          //   mb: 1.5,
          //   borderRadius: 2,
          //   border: '1px solid rgba(255, 255, 255, 0.15)',
          // }}
          />
          <Typography variant="h3" color="#fff" sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 1 }}>
            Query Portfolio via CLI
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#94a3b8', maxWidth: 550, mx: 'auto' }}>
            Experience an interactive terminal interface. Run commands to inspect candidate credentials, projects, and skills.
          </Typography>
        </Box>

        {/* Quick Command Bar */}
        <Stack direction="row" spacing={1} sx={{ mb: 2.5, justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          {['whoami', 'skills', 'projects', 'education', 'contact', 'stats', 'help'].map((cmd) => (
            <Button
              key={cmd}
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              size="small"
              onClick={() => handleCommand(cmd)}
              startIcon={<RunIcon sx={{ fontSize: '0.85rem !important' }} />}
              sx={{
                bgcolor: '#1e293b',
                color: '#e2e8f0',
                fontFamily: 'monospace',
                fontSize: '0.775rem',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                '&:hover': {
                  bgcolor: '#334155',
                },
              }}
            >
              $ {cmd}
            </Button>
          ))}
        </Stack>

        {/* Terminal Window Box */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          elevation={6}
          sx={{
            borderRadius: 4,
            bgcolor: '#000',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Header Controls */}
          <Box
            sx={{
              p: 1.5,
              px: 2.5,
              bgcolor: '#090d16',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} />
              <Typography variant="caption" sx={{ color: '#94a3b8', fontFamily: 'monospace', ml: 1 }}>
                bash — nandkishor@portfolio:~
              </Typography>
            </Stack>

            <IconButton size="small" onClick={() => handleCommand('clear')} sx={{ color: '#94a3b8' }}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Terminal Body */}
          <Box
            ref={terminalBodyRef}
            sx={{
              p: 3,
              minHeight: 300,
              maxHeight: 440,
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
            }}
          >
            {history.map((item, idx) => (
              <Box key={idx} sx={{ mb: 2 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 0.5 }}>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', fontFamily: 'monospace', fontWeight: 700 }}>
                    guest@nandkishor:~$
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#f8fafc', fontFamily: 'monospace' }}>
                    {item.command}
                  </Typography>
                </Stack>
                <Box sx={{ pl: 2, pt: 0.5, borderLeft: '2px solid rgba(255, 255, 255, 0.08)' }}>
                  {item.output}
                </Box>
              </Box>
            ))}

            {/* Input Line */}
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mt: 1 }}>
              <Typography variant="body2" sx={{ color: '#cbd5e1', fontFamily: 'monospace', fontWeight: 700 }}>
                guest@nandkishor:~$
              </Typography>
              <Box
                component="input"
                ref={inputRef}
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') handleCommand(input);
                }}
                placeholder="type 'help' or command..."
                sx={{
                  flexGrow: 1,
                  bgcolor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#e2e8f0',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  caretColor: '#e2e8f0',
                }}
              />
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
