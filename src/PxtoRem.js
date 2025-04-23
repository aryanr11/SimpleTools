import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const PxtoRem = () => {
  const [px, setPx] = useState(16);
  const [rem, setRem] = useState(px / 16);

  const handlePxChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;

    setPx(value);
    setRem(value / 16);
  };

  const handleRemChange = (e) => {
    let value = parseFloat(e.target.value);
    if (isNaN(value)) value = 0;

    setRem(value);
    setPx(value * 16);
  };

  return (
    <Box className="section section-5">
      <Container sx={{ textAlign: 'center', zIndex: '99' }}>
        <Grid container>
          <Typography variant="h2" sx={{ width: '100%', paddingBottom: '8px' }}>
            PX ↔ REM Converter
          </Typography>

          <Grid item xs={12} md={6} sx={{ justifyContent: 'center', display: 'flex', width: '100%', marginTop: '8px' }}>
            <Box sx={{ textAlign: 'start' }}>
              <Typography variant="h6" gutterBottom>Pixel Size (px)</Typography>
              <TextField
                label="PX Size"
                fullWidth
                value={px}
                onChange={handlePxChange}
                type="number"
                inputProps={{ min: 0 }}
                placeholder="16"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ justifyContent: 'center', display: 'flex', width: '100%', marginTop: '8px' }}>
            <Box sx={{ textAlign: 'start' }}>
              <Typography variant="h6" gutterBottom>Rem Size (rem)</Typography>
              <TextField
                label="REM Size"
                fullWidth
                value={rem}
                onChange={handleRemChange}
                type="number"
                inputProps={{ step: 0.1 }}
                placeholder="1"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PxtoRem;
