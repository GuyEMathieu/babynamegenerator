import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Button, Grid, FormControl, Typography,
    FormLabel, RadioGroup, Radio,
    Paper, Box, FormControlLabel, TextField
} from '@mui/material'



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),

    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function FullWidthGrid(props) {
    const { handleChange, params, generateName } = props;

    const { nationality, gender, name, includeLastName } = params;


    return (
        <Box sx={{ flexGrow: 1, padding: 2, position: 'absolute', bottom: '10vh', left: '10vw', width: '80vw', margin: 0 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align='left' component="legend">Gender</FormLabel>
                            <RadioGroup row
                                aria-label="gender" defaultValue="Male"
                                name="gender" value={gender} onChange={handleChange}
                            >
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align='left' component="legend">Nationality</FormLabel>
                            <RadioGroup row
                                aria-label="nationality"
                                defaultValue="American" name="nationality"
                                value={nationality} onChange={handleChange}
                            >
                                <FormControlLabel value="American" control={<Radio />} label="American" />
                                <FormControlLabel value="Chinese" control={<Radio />} label="Chinese" />
                            </RadioGroup>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align='left' component="legend">Include Last Name</FormLabel>
                            <RadioGroup row
                                aria-label="includeLastName"
                                defaultValue={false} name="includeLastName"
                                value={includeLastName} onChange={handleChange}
                            >
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Item>
                </Grid>

                <Grid item xs={12} style={{marginLeft: '0'}}>
                    <Item >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={3}>
                                <Button
                                    fullWidth size='large' onClick={generateName} variant='contained'>Generate</Button>
                            </Grid>
                            <Grid item xs={12} md={6} lg={9}>
                                <TextField
                                    InputLabelProps={{ shrink: true }} 
                                    label='Name' size='small'
                                    disabled fullWidth value={name} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align='center' variant={'subtitle2'}>
                                    Copyright &copy; {new Date().getFullYear()} Guy Mathieu. All rights reserved!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
