import React, { useState } from "react";
import './OpenCreationFlow.scss'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box, CssBaseline, MuiThemeProvider, ThemeProvider, Typography, useMediaQuery } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function OpenCreationFlow(props) {
    const classes = useStyles();
    // const [noOfAdults, setNoOfAdults] = useState(0);
    const [noOfAdults, setNoOfAdults] = React.useState('');
    const [noOfKids, setNoOfKids] = React.useState('');

    const handleChange = (event) => {
        setNoOfAdults(event.target.value);
    };

    const handleKidsNoChange = (event) => {
        setNoOfKids(event.target.value);
    };

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });

    const lightTheme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: 'light',
                },
                spacing: 8,
            }),
    );
    return (
        <div className="open-creation-flow">
            <MuiThemeProvider theme={darkTheme}>
                <CssBaseline>
                    <div className="drawer">
                        <Box mb={2}>
                            <Typography variant="h5" gutterBottom align="center" className="ocf-drawer-h" >Pick your characters</Typography>
                        </Box>
                        <FormControl className={classes.formControl + ' w-100per m-0'}>
                            <InputLabel id="no-of-adults-label">Number of Adults</InputLabel>
                            <Select
                                labelId="no-of-adults-labe"
                                value={noOfAdults}
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl + ' w-100per m-0'}>
                            <InputLabel id="no-of-kids-label">Number of Kids</InputLabel>
                            <Select
                                labelId="no-of-kids-label"
                                value={noOfKids}
                                onChange={handleKidsNoChange}
                                fullWidth
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={2}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </CssBaseline>
            </MuiThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline>
                    <div className="content">
                        <p>{noOfAdults}</p>
                        <p>{noOfKids}</p>
                    </div>
                </CssBaseline>
            </ThemeProvider>
        </div>
    )
}
