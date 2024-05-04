import React from 'react';
// import axios from 'axios';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useGetAboutQuery } from '@/redux/services/main/about';

const About = () => {
  const { data } = useGetAboutQuery();
  const theme = useTheme();

  // const [about, setAbout] = useState([]);

  // const fetchAbout = () => {
  //   axios
  //     .get('/about', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Access-Control-Allow-Origin': process.env.BACKEND_URL,
  //       },
  //     })
  //     .then((response) => {
  //       setAbout(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchAbout();
  // }, []);

  return (
    <div id='about'>
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
              About Me
            </Typography>
            <Typography
              variant='h6'
              color={theme.palette.text.secondary}
              align='center'
              data-aos='fade-up'
              marginTop={4}
              marginBottom={6}
            >
              Stay informed and engaged throughout your project with our open and clear communication channels.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {data && data.map((about)=>
              <Grid item xs={12} sm={6} md={4} >
                <ListItem
                  component='div'
                  disableGutters
                  sx={{
                    alignItems: 'flex-start',
                    padding: 0,
                  }}
                >
                  <ListItemAvatar>
                    <Box color={theme.palette.primary.main}>
                      <Icon sx={{ fontSize: '40px' }}>{about.icon}</Icon>
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={about.title}
                    secondary={about.description}
                    primaryTypographyProps={{
                      variant: 'h4',
                      gutterBottom: true,
                      sx: { fontWeight: 700 },
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                      gutterBottom: true,
                    }}
                    sx={{
                      margin: 0,
                    }}
                  />
                </ListItem>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default About;
