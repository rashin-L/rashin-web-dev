import React, { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';
import dynamic from 'next/dynamic';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@mui/material/styles';
import { useFormik } from "formik";
import { useCreateContactPostMutation } from '@/redux/services/main/contact';
import Swal from 'sweetalert2';
import queryString from 'query-string';
import HeadShake from 'react-reveal/HeadShake';
import Button from '@mui/material/Button';
import axios from 'axios'




export default function Contact () {
  const theme = useTheme();

  const [createContactPost, { error, isError }] = useCreateContactPostMutation();
  // const navigate = useNavigate();
  const form = useFormik({
    initialValues: { first_name: "", last_name: "", email: "",mobile_number:"", subject: "", message: "" },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await console.log('isSubmitting')
      console.log(form.isSubmitting)
      console.log(values);
      if (isError) {
        console.log(error.data)
      }
      else {
        const response = await createContactPost(queryString.stringify({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          mobile_number: values.mobile_number,
          subject: values.subject,
          message: values.message,
        }));
        console.log(response)

        if (response.data) {
          Swal.fire({
            icon: 'success',
            // title: 'Yes...',
            text: response.data,
            // footer: '<a href="">Why do I have this issue?</a>'
          })

          // navigate('/verify');
          setTimeout(() => {
            setSubmitting(false)
          }, 2000);
        } else {
          Swal.fire({
            icon: 'warning',
            // title: 'Yes...',
            text: response.error.data,
          })
        }
        resetForm()


      }

    },
    validate: (values) => {
      const errors = {};
      if (!values.first_name) {
        errors.first_name = 'write your name please'
      } else if (values.first_name.length < 2) {
        errors.first_name = 'complete your name'
      }
      if (!values.last_name) {
        errors.last_name = 'write your family please'
      } else if (values.last_name.length < 2) {
        errors.last_name = 'complete your family'
      }
      if (!values.email) {
        errors.email = 'write your email please'
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'invalid email address'
      }
      if (!/^\d+$/.test(values.mobile_number)) {
        errors.mobile_number = 'invalid mobile number';
      }
      if (!values.subject) {
        errors.subject = 'write subject please'

      }
      if (!values.message) {
        errors.message = 'write message please'

      }
      return errors
    }
  })
  return (
    <div id='contact'>
      <Box position='relative' marginBottom={15}>
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin='0 auto'
          paddingX={2}
          paddingY={{ xs: 4, sm: 6, md: 8 }}
          paddingBottom={10}
        >
          <Box marginBottom={4}>
            <Typography
              variant='h3'
              align='center'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              data-aos='fade-up'
              gutterBottom
            >
              Get in touch
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              data-aos='fade-up'
              marginTop={4}
              // marginBottom={6}
            >
              We would love to hear from you
            </Typography>
          </Box>

          <div className="   relative py-3  max-w-xs md:max-w-xl sm:mx-auto m-auto ">
            <Box sx={{
              backgroundColor: theme.palette.primary.main,
            }} className="absolute inset-0 bg-gradient-to-r shadow-lg transform  skew-y-0 -rotate-6 rounded-2xl"></Box>
            <div className="relative px-4 py-10 bg-white shadow-lg rounded-2xl ">
              <div className="max-w-md mx-auto">
                <div className="divide-y divide-gray-200">
                  <form id='my-form' onSubmit={()=>form.handleSubmit}>
                    <div className="pt-6  leading-6 space-y-4 text-gray-700  sm:leading-7   text-sm child:text-white child:md:text-light-blue child:md:dark:text-white  ">
                      <div className="md:flex gap-1 w-full flex-wrap  justify-between">
                        <div>
                          <div className="relativeA ">
                            <input
                              autocomplete="off"
                              id="first_name"
                              name="first_name"
                              type="text"
                              value={form.values.first_name}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className="pl-5 rounded-[0.7rem]   h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-y-[#a177a0]" placeholder="First Name" />
                          </div>
                          <HeadShake bottom >
                            {form.errors.first_name && form.touched.first_name &&
                              <span className=" block pl-5  ">
                                <Box sx={{
                                  color: theme.palette.primary.main,
                                }}>{form.errors.first_name}
                                </Box>
                              </span>}
                          </HeadShake>
                        </div>
                        <div>
                          <div className="relative">
                            <input
                              autocomplete="off"
                              id="last_name"
                              name="last_name"
                              type="text"
                              value={form.values.last_name}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className="mt-3 md:mt-0 pl-5 rounded-[0.7rem]   h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-y-[#a177a0]" placeholder="Last Name" />
                          </div>
                          <HeadShake bottom >
                            {form.errors.last_name && form.touched.last_name &&
                              <span className=" block pl-5  ">
                                <Box sx={{
                                  color: theme.palette.primary.main,
                                }}>{form.errors.last_name}
                                </Box>
                              </span>}
                          </HeadShake>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          autocomplete="off"
                          id="mobile_number"
                          name="mobile_number"
                          type="text"
                          value={form.values.mobile_number}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className="pl-5 rounded-[0.7rem]   h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-y-[#a177a0]" placeholder="Mobile Number" />
                      </div>
                      <HeadShake bottom >
                        {form.errors.mobile_number && form.touched.mobile_number &&
                          <span className=" block pl-5  ">
                            <Box sx={{
                              color: theme.palette.primary.main,
                            }}>{form.errors.mobile_number}
                            </Box>
                          </span>}
                      </HeadShake>
                      <div className="relative">
                        <input
                          autocomplete="off"
                          id="email"
                          name="email"
                          type="text"
                          value={form.values.email}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className="pl-5 rounded-[0.7rem]   h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-y-[#a177a0]" placeholder="Email address" />
                      </div>
                      <HeadShake bottom >
                        {form.errors.email && form.touched.email &&
                          <span className=" block pl-5  ">
                            <Box sx={{
                              color: theme.palette.primary.main,
                            }}>{form.errors.email}
                            </Box>
                          </span>}
                      </HeadShake>
                      <div className="relative">
                        <input
                          autocomplete="off"
                          id="subject"
                          name="subject"
                          type="text"
                          value={form.values.subject}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className="pl-5 rounded-[0.7rem]   h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-y-[#a177a0]" placeholder="Subject" />
                      </div>
                      <HeadShake bottom >
                        {form.errors.subject && form.touched.subject &&
                          <span className=" block pl-5  ">
                            <Box sx={{
                              color: theme.palette.primary.main,
                            }}>{form.errors.subject}
                            </Box>
                            </span>}
                      </HeadShake>
                      <div className="relative">
                        <textarea
                          rows="4"
                          cols="50"
                          autocomplete="off"
                          id="message"
                          name="message"
                          type="text"
                          value={form.values.message}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className="pl-5 rounded-[0.7rem]  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-y-[#a177a0]" placeholder="Message"  ></textarea>
                      </div>
                      <HeadShake bottom >
                        {form.errors.message && form.touched.message &&
                          <span className=" block pl-5  ">
                            <Box sx={{
                              color: theme.palette.primary.main,
                            }}>{form.errors.message}
                            </Box></span>}
                      </HeadShake>
                      <div className="relative">
                        <Button
                          component='a'
                          variant='contained'
                          color='primary'
                          size='large'
                          disableElevation={true}
                          sx={{

                            padding: '7px 18px',
                            // marginRight: '15px',
                            fontSize: '14px',
                            textTransform: 'none',
                            border: '2px solid ' + theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: 'transparent',
                              color: theme.palette.primary.main,
                              border: '2px solid ' + theme.palette.primary.main,
                            },
                          }}
                          type="submit"
                          disabled={form.isSubmitting}
                        >Submit</Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

// export default Contact;
