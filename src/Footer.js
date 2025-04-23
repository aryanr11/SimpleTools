import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith('image/')) {
          alert('Please upload a valid image file');
          return;
        }
    
        const fileType = file.type;
        const extension = file.name.split('.').pop();
        const baseName = file.name.replace(/\.[^/.]+$/, "");
    
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
    
            // Resize logic
            const maxWidth = 800;
            const scale = Math.min(1, maxWidth / img.width);
            const width = img.width * scale;
            const height = img.height * scale;
    
            canvas.width = width;
            canvas.height = height;
    
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
              const resizedFileName = `${baseName}-resize.${extension}`;
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = resizedFileName;
              link.click();
            }, fileType);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);    
    };
  return (
    <Box className="section section-6">
        <Container sx={{textAlign: 'center',zIndex: '99'}}>
            <Grid container>
                <Typography variant='h2' sx={{width: '100%', paddingBottom: '8px'}} color='white'>More Magic Coming Soon!</Typography>
                <Typography variant='h6' sx={{width: '100%', paddingBottom: '8px'}} color='white'>Think We’re Missing Something? Let Us Know! <br /> mailTo: aryandrathod99@gmail.com</Typography>
            </Grid>
        </Container>
    </Box>
  );
};

export default Footer;
