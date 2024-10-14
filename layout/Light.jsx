"use client";

import React, {useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {  useTheme } from '@mui/material/styles';
import ColorModeContext from '../components/ColorModeContext';
import Box from '@mui/material/Box';



function Light() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);


    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <IconButton
                    onClick={colorMode.toggleColorMode}
                    aria-label='Theme Mode'
                    color={theme.palette.mode === 'dark' ? 'warning' : 'inherit'}
                >
                    {theme.palette.mode === 'dark' ? (
                        <LightModeIcon fontSize='medium' />
                    ) : (
                        <DarkModeIcon
                            fontSize='medium'
                            sx={{ color: theme.palette.text.primary }}
                        />
                    )}
                </IconButton>
            </Box>
        </>
    );
}

export default Light;