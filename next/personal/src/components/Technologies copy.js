import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Technologies = () => {
  const theme = useTheme();

  const [technologies, setTechnologies] = useState([]);

  // const fetchTechnologies = () => {
  //   axios
  //     .get('/technologies', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Access-Control-Allow-Origin': process.env.BACKEND_URL,
  //       },
  //     })
  //     .then((response) => {
  //       setTechnologies(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchTechnologies();
  // }, []);

  return (
    <div id='technologies'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant='h3'
              align='center'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              data-aos='fade-up'
              gutterBottom
            >
              Technologies
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              data-aos='fade-up'
              marginTop={4}
              marginBottom={6}
            >
              Technologies we use to build our products
            </Typography>
          </Box>

        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Technologies;
