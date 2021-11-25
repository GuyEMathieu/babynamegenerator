// import React from 'react';
// import {
//     Grid, Paper,
//     Container, FormContral, FormLabel, Radio,
//     RadioGroup, FormControl, FormControlLabel
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// import baby from '../assets/images/baby.jpg'
// import twins2 from '../assets/images/twins2.jpg'
// import basket from '../assets/images/Baby-basket.jpg'
// import feet from '../assets/images/feet.jpg'
// import { grid } from '@mui/system';

// const useStyles = makeStyles({
//     img: {
//         width: '100vw',
//         height: '99vh',
//         opacity: '0.5',
//         position: 'relative',
//         zIndex: -1
//     },
//     container: {
//         position: 'relative'
//     },
//     form: {
//         position: 'absolute',
//         top: '10vw',
//         left: '10vw',
//         width: '80vw'
//     },
//     paper: {
//         padding: '16px',
//         opacity: '0.5'
//     }
// })


// const Main = () => {
//     const classes = useStyles();

//     function randomPicture() {

//         const arr = [baby, twins2, basket, feet];

//         return arr[Math.floor(Math.random() * arr.length)]
//     }


//     return (

//         // <Container className={classes.container} style={style}>
//         //     <div className='form'>
//         //         <FormControl component="fieldset">
//         //             <FormLabel component="legend">Gender</FormLabel>
//         //             <RadioGroup
//         //                 aria-label="gender"
//         //                 defaultValue="female"
//         //                 name="radio-buttons-group"
//         //             >
//         //                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//         //                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//         //                 <FormControlLabel value="other" control={<Radio />} label="Other" />
//         //             </RadioGroup>
//         //         </FormControl>
//         //     </div>
//         // </Container>

//         <div class="container">
//             <img src={randomPicture()} alt="Cinque Terre" className={classes.img} />
//             <Grid container spacing={2} class={classes.form}>
//                 <Grid item xs={8}>
//                     <Pape>xs=8</Pape>
//                 </Grid>
//                 <Grid item xs={4}>
//                     <Item>xs=4</Item>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }

// export default Main
