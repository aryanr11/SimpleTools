import { Box, Button, Container, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import React, { useState } from 'react';

const generatePassword = (length = 12) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * chars.length);
      password += chars[randIndex];
    }
    return password;
  };

const PassGen = (length = 12) => {
    
      const [password, setPassword] = useState(generatePassword());
      const [copied, setCopied] = useState(false);
    
      const handleGenerate = () => {
        setPassword(generatePassword());
        setCopied(false);
      };
    
      const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      };
  return (
    <Box className="section section-4">
        <Container sx={{textAlign: 'center',zIndex: '99'}}>
            <Grid container>
                <Typography variant='h2' sx={{width: '100%', paddingBottom: '8px'}}>Password Generator 🔐</Typography>
                <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, textAlign: 'center' }}>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" mb={2}>
                        <TextField
                        value={password}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        />
                        <Tooltip title={copied ? 'Copied!' : 'Copy'}>
                        <IconButton onClick={handleCopy} color="primary">
                            <ContentCopyIcon />
                        </IconButton>
                        </Tooltip>
                    </Stack>

                    <Button
                        onClick={handleGenerate}
                        variant="contained"
                        startIcon={<AutorenewIcon />}
                    >
                        Generate New Password
                    </Button>
                </Box>
            </Grid>
        </Container>
    </Box>
  );
};

export default PassGen;
