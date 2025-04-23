import { Box, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const HextoRgb = () => {
    const [hex, setHex] = useState('');
      const [rgb, setRgb] = useState({ r: '0', g: '0', b: '0' });
    
      const hexToRgb = (hex) => {
        const cleanHex = hex.replace('#', '');
        const bigint = parseInt(cleanHex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
      };
    
      const rgbToHex = ({ r, g, b }) => {
        const toHex = (n) => {
          const hex = parseInt(n).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      };
    
      const handleHexChange = (e) => {
        let value = e.target.value.replace('#', '');
        if (value.length > 6) return;
        const fullHex = `#${value}`;
        setHex(fullHex);
        if (/^[0-9A-Fa-f]{6}$/.test(value)) {
          setRgb(hexToRgb(fullHex));
        }
      };
    
      const handleRgbChange = (e) => {
        const { name, value } = e.target;
        let val = parseInt(value);
    
        // Limit to 0–255 and prevent NaN
        if (isNaN(val) || val < 0) val = 0;
        if (val > 255) val = 255;
    
        const newRgb = { ...rgb, [name]: val };
        setRgb(newRgb);
    
        if (newRgb.r !== '' && newRgb.g !== '' && newRgb.b !== '') {
          setHex(rgbToHex(newRgb));
        }
      };
  return (
    <Box className="section section-3">
        <Container sx={{textAlign: 'center',zIndex: '99'}}>
            <Grid container>
                <Typography variant='h2' sx={{width: '100%', paddingBottom: '8px'}}>Hex ↔ RGB Converter</Typography>
                <Grid size={{xs: 12,md: 6}} sx={{justifyContent: 'center', display: 'flex', width: '100%', marginTop: '8px'}}>
                    <Box sx={{textAlign: 'start'}}>
                        <Typography variant="h6" gutterBottom>HEX Code</Typography>
                        <TextField
                            label="Hex Color"
                            fullWidth
                            value={hex.replace('#', '')}
                            onChange={handleHexChange}
                            placeholder="FFFFFF"
                            InputProps={{
                            startAdornment: <InputAdornment position="start">#</InputAdornment>,
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={{xs: 12,md: 6}} sx={{justifyContent: 'center', display: 'flex', width: '100%', marginTop: '8px'}}>
                    <Box sx={{textAlign: 'start'}}>
                        <Typography variant="h6" gutterBottom>RGB</Typography>
                        <Grid container spacing={2}>
                        {['r', 'g', 'b'].map((color) => (
                            <Grid xs={4} key={color}>
                            <TextField
                                label={color.toUpperCase()}
                                name={color}
                                value={rgb[color]}
                                onChange={handleRgbChange}
                                type="number"
                                inputProps={{ min: 0, max: 255, step: 1 }}
                                fullWidth
                            />
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Box
                sx={{
                    mt: 4,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: hex,
                    border: '1px solid #ccc',
                    transition: 'background 0.3s ease',
                }}
            />
        </Container>
    </Box>
  );
};

export default HextoRgb;
