import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Stack spacing={2}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 800 }}>
          Page not found
        </Typography>

        <Typography variant="body2" color="text.secondary">
          The page you requested is unavailable.
        </Typography>

        <Box>
          <Button variant="contained" href="/" sx={{ textTransform: 'none' }}>
            Go Home
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
