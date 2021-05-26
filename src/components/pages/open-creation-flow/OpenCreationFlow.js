import React from "react";
import './OpenCreationFlow.scss'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ThemeProvider, useMediaQuery } from "@material-ui/core";


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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const darkTheme = React.useMemo(
    () =>
        createMuiTheme({
            palette: {
                type: prefersDarkMode ? 'dark' : 'light',
            },
        }),
    [prefersDarkMode],
);
    return (
        <div className="open-creation-flow">
            <ThemeProvider theme={darkTheme}>
                <div className="drawer">
                    <FormControl className={classes.formControl + ' w-100per m-0'}>
                        <InputLabel id="demo-simple-select-label">Number of Adults</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="content">
                    <p>content</p>
                </div>
            </ThemeProvider>
        </div>
    )
}
