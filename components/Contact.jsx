"use client";

import React from 'react';
// import axios from 'axios';
import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useFormik } from "formik";
import { useCreateContactPostMutation } from '@/redux/services/main/contact';
import Swal from 'sweetalert2';
import queryString from 'query-string';
import HeadShake from 'react-reveal/HeadShake';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";
import { Zoom } from "react-awesome-reveal";







function Contact() {
  const { t } = useTranslation(['translation'])
  const selectedLang = Cookies.get('selectedLang');

  const theme = useTheme();

  const [createContactPost, { error, isError }] = useCreateContactPostMutation();
  // const navigate = useNavigate();
  const form = useFormik({
    initialValues: { first_name: "", last_name: "", email: "", mobile_number: "", subject: "", message: "" },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
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

        if (response.data ) {
          Swal.fire({
            icon: "success",
            // title: 'Yes...',
            // text: response.data.en,
            // text:`${selectedLang === "fa" ? response.data.fa : response.data.en}`
            text: `${
              selectedLang === "fa" && response.data.fa
                ? response.data.fa
                : selectedLang === "ar" && response.data.ar
                ? response.data.ar
                : response.data.en
                ? response.data.en
                : response.data.en
            }`,
            // footer: '<a href="">Why do I have this issue?</a>'
          });

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
        errors.first_name = `${ t("components.contact.errors.name") } `
      } else if (values.first_name.length < 2) {
        errors.first_name = `${ t("components.contact.errors.complete_name") } `
      }
      if (!values.last_name) {
        errors.last_name = `${ t("components.contact.errors.family") } `
      } else if (values.last_name.length < 2) {
        errors.last_name = `${ t("components.contact.errors.complete_family") } `
      }
      if (!values.email) {
        errors.email = `${t("components.contact.errors.email")} `;
      } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(values.email)) {
        // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = `${t("components.contact.errors.invalid_email")} `;
      }
      if (!/^\d+$/.test(values.mobile_number)) {
        errors.mobile_number = `${ t("components.contact.errors.mobile") } ` ;
      }
      if (!values.subject) {
        errors.subject = `${ t("components.contact.errors.subject") } `  

      }
      if (!values.message) {
        errors.message = `${ t("components.contact.errors.message") } `  

      }
      return errors
    }
  })
  return (
    <div id="contact" className={`${selectedLang === "fa" ? "rtl" : ""}`}>
      <Box position="relative" marginBottom={15}>
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin="0 auto"
          paddingX={2}
          paddingY={{ xs: 4, sm: 6, md: 8 }}
          paddingBottom={10}
        >
          <Box marginBottom={4}>
            <Typography
              variant="h3"
              align="center"
              fontWeight={700}
              marginTop={theme.spacing(1)}
              data-aos="fade-up"
              gutterBottom
            >
              <Zoom>{t("components.contact.title")}</Zoom>
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color={theme.palette.text.secondary}
              data-aos="fade-up"
              marginTop={4}
              // marginBottom={6}
            >
              {/* I would love to hear from you */}
              {t("components.contact.text")}
            </Typography>
          </Box>

          <div className="   relative py-3 max-w-md md:max-w-xl sm:mx-auto m-auto ">
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
              }}
              className=" right-4 left-4 absolute inset-0 bg-gradient-to-r shadow-lg transform  skew-y-0 -rotate-6 rounded-2xl"
            ></Box>
            <div className="relative px-4 py-10 bg-white shadow-lg rounded-2xl ">
              <div className="max-w-md mx-auto">
                <div className="divide-y divide-gray-200">
                  <form id="my-form" onSubmit={form.handleSubmit}>
                    <div className="pt-6  leading-6  text-gray-700  sm:leading-7   text-sm child:text-white child:md:text-light-blue child:md:dark:text-white  ">
                      <div className="md:flex gap-1 w-full flex-wrap  justify-between">
                        <div>
                          <div className="relativeA ">
                            <input
                              autoComplete="off"
                              id="first_name"
                              name="first_name"
                              type="text"
                              value={form.values.first_name}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={`${
                                selectedLang === "fa"
                                  ? "pr-5 text-right "
                                  : "pl-5 text-left"
                              }    rounded-[0.7rem]   h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-md`}
                              placeholder={t("components.contact.first")}
                            />
                          </div>
                          <HeadShake bottom>
                            {form.errors.first_name &&
                              form.touched.first_name && (
                                <span className=" block pl-5  ">
                                  <Box
                                    sx={{
                                      color: theme.palette.primary.main,
                                    }}
                                  >
                                    <div className=" text-md font-bold md:text-md">
                                      {form.errors.first_name}
                                    </div>
                                  </Box>
                                </span>
                              )}
                          </HeadShake>
                        </div>
                        <div>
                          <div className="relative">
                            <input
                              autoComplete="off"
                              id="last_name"
                              name="last_name"
                              type="text"
                              value={form.values.last_name}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={` ${
                                selectedLang === "fa"
                                  ? "pr-5 text-right"
                                  : "pl-5 text-left"
                              }  mt-3 md:mt-0  rounded-[0.7rem]   h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-md`}
                              placeholder={t("components.contact.last")}
                            />
                          </div>
                          <HeadShake bottom>
                            {form.errors.last_name &&
                              form.touched.last_name && (
                                <span className=" block pl-5  ">
                                  <Box
                                    sx={{
                                      color: theme.palette.primary.main,
                                    }}
                                  >
                                    <div className=" text-md font-bold md:text-md">
                                      {form.errors.last_name}
                                    </div>
                                  </Box>
                                </span>
                              )}
                          </HeadShake>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="mobile_number"
                          name="mobile_number"
                          type="text"
                          value={form.values.mobile_number}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={` mt-3 ${
                            selectedLang === "fa"
                              ? "pr-5 text-right"
                              : "pl-5 text-left"
                          }  h-10 rounded-[0.7rem]    w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-md`}
                          placeholder={t("components.contact.mobile")}
                        />
                      </div>
                      <HeadShake bottom>
                        {form.errors.mobile_number &&
                          form.touched.mobile_number && (
                            <span className=" block pl-5  ">
                              <Box
                                sx={{
                                  color: theme.palette.primary.main,
                                }}
                              >
                                <div className=" text-md font-bold md:text-md">
                                  {form.errors.mobile_number}
                                </div>
                              </Box>
                            </span>
                          )}
                      </HeadShake>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="email"
                          name="email"
                          type="text"
                          value={form.values.email}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={` mt-3 ${
                            selectedLang === "fa"
                              ? "pr-5 text-right"
                              : "pl-5 text-left"
                          }   rounded-[0.7rem]   h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-md`}
                          placeholder={t("components.contact.email")}
                        />
                      </div>
                      <HeadShake bottom>
                        {form.errors.email && form.touched.email && (
                          <span className=" block pl-5  ">
                            <Box
                              sx={{
                                color: theme.palette.primary.main,
                              }}
                            >
                              <div className=" text-md font-bold md:text-md">
                                {form.errors.email}
                              </div>
                            </Box>
                          </span>
                        )}
                      </HeadShake>
                      <div className="relative">
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={form.values.subject}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={` mt-3 ${
                            selectedLang === "fa"
                              ? "pr-5 text-right"
                              : "pl-5 text-left"
                          }   rounded-[0.7rem]   h-10 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-md`}
                          placeholder={t("components.contact.subject")}
                        />
                      </div>
                      <HeadShake bottom>
                        {form.errors.subject && form.touched.subject && (
                          <span className=" block pl-5  ">
                            <Box
                              sx={{
                                color: theme.palette.primary.main,
                              }}
                            >
                              <div className=" text-md font-bold md:text-md">
                                {form.errors.subject}
                              </div>
                            </Box>
                          </span>
                        )}
                      </HeadShake>
                      <div className="relative">
                        <textarea
                          rows="4"
                          cols="50"
                          autoComplete="off"
                          id="message"
                          name="message"
                          type="text"
                          value={form.values.message}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={`mt-3 ${
                            selectedLang === "fa"
                              ? "pr-5 text-right"
                              : "pl-5 text-left"
                          }   rounded-[0.7rem]  w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-md`}
                          placeholder={t("components.contact.message")}
                        ></textarea>
                      </div>
                      <HeadShake bottom>
                        {form.errors.message && form.touched.message && (
                          <span className=" block pl-5  ">
                            <Box
                              sx={{
                                color: theme.palette.primary.main,
                              }}
                            >
                              <div className=" text-md font-bold md:text-md">
                                {form.errors.message}
                              </div>
                            </Box>
                          </span>
                        )}
                      </HeadShake>
                      <div className="relative">
                        <Button
                          component="a"
                          variant="contained"
                          color="primary"
                          size="large"
                          disableElevation={true}
                          sx={{
                            marginTop: "1.5rem",

                            padding: "7px 18px",
                            // marginRight: '15px',
                            fontSize: "14px",
                            textTransform: "none",
                            border: "2px solid " + theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: theme.palette.primary.main,
                              border: "2px solid " + theme.palette.primary.main,
                            },
                          }}
                          type="submit"
                          onClick={form.submitForm}
                          disabled={form.isSubmitting || isError}
                        >
                          {" "}
                          {t("components.contact.submit")}
                        </Button>
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

export default React.memo(Contact);
