import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageSearchIcon from '@mui/icons-material/ManageSearchOutlined';
import { useGetInfoQuery } from '@/redux/services/main/about';
import { saveAs } from 'file-saver';


const HeroButtons = () => {
  const { data } = useGetInfoQuery();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  const cvDownload = () => {
    const fileUrl = data[0]?.cv;
  const filename = 'Rashin_Latify_Full_Stack.pdf';
  
  saveAs(fileUrl, filename);
  };

  return (
    <>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent='left'
        marginTop={4}
      >
        <Button
          component='a'
          variant='contained'
          color='primary'
          size='large'
          onClick={cvDownload}
          endIcon={<AssignmentIcon />}
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{

            padding: '10px 25px',
            // marginRight: '15px',
            fontSize: '16px',
            textTransform: 'none',
            border: '2px solid ' + theme.palette.primary.main,
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: '2px solid ' + theme.palette.primary.main,
            },
          }}
        >
          View My CV
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: '100%', md: 'auto' }}
        >
        </Box>
      </Box>
    </>
  );
};

export default HeroButtons;
