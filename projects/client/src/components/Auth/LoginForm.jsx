import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import LOGO from "../../assets/MajesticMixer.png";
import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {useNavigate} from 'react-router-dom'
import { loginSuccess } from "../../redux/reducers/authReducer";
import {useSelector, useDispatch} from "react-redux";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Link as LinkChakra,
} from "@chakra-ui/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      bgImage={
        "https://images.unsplash.com/photo-1468072114808-903e572b8ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80"
      }
      bgPosition="center"
      bgRepeat="no-repeat"
      h="800px"
    >
      <Box bg={"rgba(0,0,0, 0.7)"} w={"full"} h={"full"} pt={5}>
        <center>
          <a href="/">
            <img src={LOGO} alt="Logo" width="300px" />
          </a>
        </center>
        <Box
          m="auto"
          borderWidth="3px"
          borderRadius="md"
          borderColor={"white"}
          backgroundColor={'rgba(0,0,0, 0.1)'}
          textColor={'white'}
          p={6}
          w={"30%"}
          marginTop={5}
        >
          <Heading as="h2" size="lg" mb={6} textAlign={"center"}>
            Log in to your account
          </Heading>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required("username is required"),
              password: Yup.string()
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                  "Password must contain at least 6 characters, 1 symbol, and 1 uppercase letter"
                )
                .required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => { 
              axios
                .post(
                  "http://localhost:8000/auth/login",
                  {
                    username: values.username,
                    password: values.password,
                  }
                )
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                  dispatch(loginSuccess(response.data.token))
                  if(response.data.role === "Cashier"){
                    navigate('/cashier')
                  }else if (response.data.role === "Admin"){
                    navigate('/admin')
                  }

                  // alert(response.data.message)
                  // navigate('/')
                  setSubmitting(false);
                })
                .catch(function (error) {
                  console.log(error);
                  setSubmitting(false);
                });
            }}
          >
            <Form>
              <FormControl id="email" mb={3}>
                <FormLabel>Email</FormLabel>
                <Field
                  type="text"
                  name="username"
                  as={Input}
                  placeholder="Enter your email address"
                  // borderColor={"black"}
                />
                <ErrorMessage name="username" component={Text} color="red" />
              </FormControl>
              <FormControl id="password" mb={6}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    as={Input}
                    placeholder="Enter your password"
                    // borderColor={"black"}
                  />
                  <InputRightElement width="3rem">
                    <Button
                      // variant="link"
                      // colorScheme="black"
                      h="1.5rem"
                      size="sm"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <ViewOffIcon  />
                      ) : (
                        <ViewIcon  />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="password" component={Text} color="red" />
              </FormControl>
              <Button
                type="submit"
                colorScheme="white"
                mb={6}
                width="full"
                variant={"outline"}
                // borderColor={"black"}
              >
                Log in
              </Button>
            </Form>
          </Formik>
          <Text>
            Forgot your password?{" "}
            <LinkChakra textColor={'#f05641'}>
            <Link to="/forgotpasword" Color={"teal"}>
              Reset Password <ExternalLinkIcon mx="2px" />
            </Link>
            </LinkChakra>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
