import React from 'react';
import { Box, Tabs, Tab } from '@mui/material'

export function Abas({pagina, setPagina}) {

  const handleChange = (event, newValue) => {
    setPagina(newValue)
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Tabs value={pagina} onChange={handleChange} centered>
            <Tab label="Etapa 1" />
            <Tab label="Etapa 2" />
            <Tab label="Etapa 3" />
        </Tabs>
    </Box>
  )
}

