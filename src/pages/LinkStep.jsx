import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography,
    MenuItem,
    Stack
} from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';

export function LinkStep({ membros, listaConexoesMembros, setListaConexoesMembros }) {
    const [primeiroNome, setPrimeiroNome] = useState('')
    const [segundoNome, setSegundoNome] = useState('')
    const [toggle, setToggle] = useState(false)
    const [botao, setBotao] = useState(true);

    var conexao = {}

    function handleClick() {
        conexao.primeiroNome = primeiroNome;
        conexao.segundoNome = segundoNome;

        setListaConexoesMembros([...listaConexoesMembros, conexao]);

        setPrimeiroNome('');
        setSegundoNome('');
    }

    useEffect(() => {
        if ((primeiroNome && segundoNome) !== '')
            setBotao(false);
        else
            setBotao(true);

        if ((primeiroNome == segundoNome) && (primeiroNome && segundoNome !== '')) {
            setBotao(true);
            setToggle(true);
        }
        else
            setToggle(false);
    }, [primeiroNome, segundoNome])

    return (
        <Box sx={{ width: '100%' }}>
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
                        onChange={(event) => { setPrimeiroNome(event.target.value) }}
                        error={toggle}
                        helperText={toggle ? 'Nomes iguais, escolha outro nome' : ''}
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
                        onChange={(event) => { setSegundoNome(event.target.value) }}
                        error={toggle}
                        helperText={toggle ? 'Nomes iguais, escolha outro nome' : ''}
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
                        onClick={handleClick}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={botao}
                    >
                        Adicionar
                    </Button>
                </Grid>

                <Grid item xs={3} />
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={4} sx={{
                    mt: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {listaConexoesMembros.map((item, index) => {
                        return (
                            <>
                                <Stack
                                    sx={{ mt: 2, justifyContent: 'space-evenly', alignItems: 'center' }}
                                    direction="row"
                                    spacing={2}
                                >
                                    <Typography>{item.primeiroNome}</Typography>
                                    <HandshakeIcon />
                                    <Typography>{item.segundoNome}</Typography>
                                </Stack>
                            </>
                        )
                    })}
                </Grid>

                <Grid item xs={5} />
            </Grid>
        </Box>
    )
}