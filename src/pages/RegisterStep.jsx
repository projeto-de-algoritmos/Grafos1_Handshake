import React, { useState } from 'react'
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography
} from '@mui/material'
import { generateNameList } from '../utils/randNames';

export function RegisterStep({ individuals, setIndividuals }) {

    const [newIndividual, setNewIndividual] = useState('')
    const [hasError, setHasError] = useState(false);

    function handleClick() {
        if (individuals.includes(newIndividual))
            setHasError(true)
        else {
            setHasError(false);
            setIndividuals([...individuals, newIndividual]);
            setNewIndividual('')
        }

    }

    function setRandomList() {
        const randList = generateNameList();
        setIndividuals([...randList]);
        console.log(individuals);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2} />

                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="nome-membro"
                        autoComplete='off'
                        label="Membro"
                        variant="outlined"
                        value={newIndividual}
                        onChange={(event) => { setNewIndividual(event.target.value) }}
                        error={hasError}
                        helperText={hasError ? 'Nome já existe na lista de individuals' : ''}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={!newIndividual}
                    >
                        Adicionar
                    </Button>
                </Grid>

                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={setRandomList}
                        sx={{ height: '3.5rem', width: '100%' }}
                    >
                        Gerar Lista Aleatória
                    </Button>
                </Grid>

                <Grid item xs={3} />
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={4} sx={{
                    my: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {individuals.map((item, index) => {
                        return (<Typography sx={{ textAlign: 'center' }} mt={1.5} key={index}>{item}</Typography>)
                    })}
                </Grid>

                <Grid item xs={5} />
            </Grid>
        </Box>
    )
}