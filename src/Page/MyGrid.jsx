import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    Grid, FormControl, FormLabel, RadioGroup,
    Radio, Paper, Box, FormControlLabel, TextField
} from '@mui/material'

import baby from '../assets/images/baby.jpg'
import twins2 from '../assets/images/twins2.jpg'
import basket from '../assets/images/Baby-basket.jpg'
import feet from '../assets/images/feet.jpg'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {

    function randomPicture() {
        const arr = [baby, twins2, basket, feet];
        return arr[Math.floor(Math.random() * arr.length)]
    }


    return (
        <div style={{ position: 'relative' }}>
            <img src={randomPicture()} alt="Cinque Terre" style={{ width: '100vw', height: '99vh', opacity: '0.5' }} />
            <Box sx={{ flexGrow: 1, padding: 2, position: 'absolute', top: '10vh', left: '10vw', width: '80vw', margin: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <FormControl component="fieldset">
                                <FormLabel align='left' component="legend">Gender</FormLabel>
                                <RadioGroup row
                                    aria-label="gender"
                                    defaultValue="Male"
                                    name="gender"
                                >
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <FormControl component="fieldset">
                                <FormLabel align='left' component="legend">Nationality</FormLabel>
                                <RadioGroup row
                                    aria-label="nationality"
                                    defaultValue="American"
                                    name="nationality"
                                >
                                    <FormControlLabel value="American" control={<Radio />} label="American" />
                                    <FormControlLabel value="Chinese" control={<Radio />} label="Chinese" />
                                </RadioGroup>
                            </FormControl>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item>
                            <TextField label='Name' size='small' disabled fullWidth />
                        </Item>
                    </Grid>


                </Grid>
            </Box>
        </div>
    );
}
