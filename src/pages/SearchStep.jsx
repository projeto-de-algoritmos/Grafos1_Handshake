import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    Grid,
    MenuItem,
    Typography
} from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import Graph from '../utils/graph';


export function SearchStep({ membros, listaConexoesMembros }) {
    const [primeiroNome, setPrimeiroNome] = useState('')
    const [segundoNome, setSegundoNome] = useState('')
    const [toggle, setToggle] = useState(false)
    const [resultadoBFS, setResultadoBFS] = useState([])
    const [lista, setLista] = useState([])
    const [botao, setBotao] = useState(true);


    function handleBFS() {
        const g = new Graph(membros.length);

        for (var i = 0; i < membros.length; i++) {
            g.addVertex(membros[i]);
        }

        for (var i = 0; i < listaConexoesMembros.length; i++) {
            g.addEdge(listaConexoesMembros[i].primeiroNome, listaConexoesMembros[i].segundoNome)
        }

        setResultadoBFS(g.bfs(primeiroNome))
    }

    useEffect(() => {
        setLista(resultadoBFS.slice(0, resultadoBFS.indexOf(segundoNome) + 1))
        console.log(lista);
    }, [resultadoBFS])

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
                        onClick={handleBFS}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={botao}
                    >
                        Procurar
                    </Button>
                </Grid>

                <Grid item xs={3} />
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={6} sx={{
                    mt: 8,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    {lista.map((item, index) => {
                        return (
                            <>
                                <Typography>{item}</Typography>

                                {index < (lista.length - 1) ?
                                    <HandshakeIcon sx={{ mr: 2, ml: 2 }} /> :
                                    ''}
                            </>
                        )
                    })}
                </Grid>

                <Grid item xs={3} />
            </Grid>
        </Box>
    )
}


// - refatoração de nomenclaturas
// - code smells
// - adicionar descrições/instruções
// - tornar utils funcional
// - CLICK DE BOTAO NO ENTER
// - data setter automatico
// - limpar dados sem F5
// - implementar parada no algoritmo??
// - refatorar o algoritmo se viavel (list, struct?)