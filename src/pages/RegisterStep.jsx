import React, { useState } from 'react'
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography
} from '@mui/material'

export function RegisterStep({ individuals, setIndividuals }) {

    const [nomeMembro, setNomeMembro] = useState('')
    const [hasError, setHasError] = useState(false);

    function handleClick() {
        if (individuals.includes(nomeMembro))
            setHasError(true)
        else {
            setHasError(false);
            setIndividuals([...individuals, nomeMembro]);
            setNomeMembro('')
        }

    }

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="nome-membro"
                        autoComplete='off'
                        label="Membro"
                        variant="outlined"
                        value={nomeMembro}
                        onChange={(event) => { setNomeMembro(event.target.value) }}
                        error={hasError}
                        helperText={hasError ? 'Nome já existe na lista de individuals' : ''}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={!nomeMembro}
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
                    {individuals.map((item, index) => {
                        return (<Typography sx={{ textAlign: 'center' }} mt={1.5} key={index}>{item}</Typography>)
                    })}
                </Grid>

                <Grid item xs={5} />
            </Grid>
        </Box>
    )
}