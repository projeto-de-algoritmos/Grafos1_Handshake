import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Grid, Typography, MenuItem, Stack } from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';

export function Etapa3({membros}) {
    const [ primeiroNome, setPrimeiroNome ] = useState('')
    const [ segundoNome, setSegundoNome ] = useState('')
    const [ toggle, setToggle ] = useState(false)

    return (
        <>
            <Box sx={{ width: '100%', mt: '5rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3} />
        
                        <Grid item xs={2}>
                            <TextField 
                                select
                                fullWidth 
                                id="primeiro-membro" 
                                label="Primeiro membro" 
                                variant="outlined"
                                value={primeiroNome}
                                onChange={(event) => {setPrimeiroNome(event.target.value)}}
                                error={toggle}
                                helperText={toggle ? 'Nomes iguais, escolha outro nome': ''}
                            >
                                {membros.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField 
                                select
                                fullWidth 
                                id="segundo-membro" 
                                label="Segundo membro" 
                                variant="outlined"
                                value={segundoNome}
                                onChange={(event) => {setSegundoNome(event.target.value)}}
                                error={toggle}
                                helperText={toggle ? 'Nomes iguais, escolha outro nome': ''}
                            >
                                {membros.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </TextField> 
                        </Grid>

                        <Grid item xs={2}>
                            <Button 
                                variant="contained" 
                                // onClick={handleClick}
                                sx={{height: '3.5rem', width: '100%' }}
                            >
                                Procurar
                            </Button>
                        </Grid>

                        <Grid item xs={3} />
                    </Grid>
            </Box>
        </>
    )
}