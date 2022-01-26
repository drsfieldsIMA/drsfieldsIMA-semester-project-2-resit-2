
  /** @format */

  import { useState, useContext } from "react";
  import { useForm } from "react-hook-form";
  import Head from 'next/head';
  import * as yup from "yup";
  import NextLink from 'next/link';
  import { yupResolver } from "@hookform/resolvers/yup";
  import axios from "axios";
  import { API_URL,API_MONGOOSE_URL, EXT_LOGIN } from './comps/config/index'
  import router from "next/router";
  import nookies from 'nookies';
  import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import { useEffect } from "react";
  import AuthContext, {AuthProvider}  from "./comps/config/AuthContext";
  import useLocalStorage from "./comps/config/useLocalStorage"
  
  const url = API_URL+ EXT_LOGIN;
   
  const schema = yup.object().shape({
    username: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });
  
  export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);
  
    //const history = useHistory();
  
    const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema),
    });
  
    const [isValid, setIsValid] = useState(false);
    const [focusMessage, setMessage] = useState("");
    const [loginisValid, setloginisValid] = useState(false);
    const [focusLoginMessage, setFocusMessage] = useState("");
    const [auth, setAuth] = useState("");
    console.log("auth line 43",auth)
    
  // const {user,jwt, login, logout}=useContext(AuthContext)
  //const {user, login, logout}=useAuth()
    const nameRegex = /\S/;
  
    const validateName = (event) => {
      const name = event.target.value;
      if (nameRegex.test(name) && name.length > 4) {
        setIsValid(true);
        setMessage("Your Name looks good");
      } else {
        setIsValid(false);
        setMessage("Please enter a name with more than 3 characters!");
      }
    };
  
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [focusMessagePassword, setFocusMessagePassword] = useState("");
  
    const passwordRegex = /\S/;
  
    const validatePassword = (event) => {
      const pass = event.target.value;
      if (passwordRegex.test(pass) && pass.length > 2) {
        setIsValidPassword(true);
        setFocusMessagePassword("Your password looks good");
      } else {
        setIsValidPassword(false);
        setFocusMessagePassword("Please enter a Password with more than 2 characters!");
      }
    };
  
    async function onSubmit(data) {
      console.log(" data ", data)
      setSubmitting(true);
      setLoginError(null);
      setIsValid(false);
      const loginInfo = {
        identifier:data.username,
        password: data.password
    }
     
  console.log(" login info", loginInfo)
  
      try {
        const login = await fetch(`${API_MONGOOSE_URL}/auth/local`, {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginInfo)
      })
      console.log(" login", login)
      const loginResponse = await login.json();
  
        console.log(" response", loginResponse)
        setIsValid(true);
        setloginisValid(true);
        setFocusMessage("You will now log in in 2 seconds");
        setMessage("");
        setAuth(loginResponse)
       // AuthProvider(loginResponse)
        console.log("auth line 117",auth)
       // useEffect(() => {
          // storing input name
          localStorage.setItem("auth", JSON.stringify( loginResponse));
      //  }, [auth]);

        nookies.set(null, 'jwt', loginResponse.jwt ,{
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })
      //		AuthProvider(response.data)
      //		history.push("/dashboard");
      } catch (error: unknown) {
                if (error instanceof Error) {
                      console.error(error.message); // It's an Error instance.
                    } else {
                      console.error("🤷‍♂️"); // Who knows?
                    }
        }finally {
      setTimeout(() => {
          router.push("/admin/articles/add");
        }, 2000); 
        setSubmitting(false);
      }
    }
  
    return (
      <>
      <Head>
          <title>Login | Level Up News</title>
        </Head>
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
          }}
          className="height-75"
        >
          <Container    sx={{
            backgroundColor:'white',
          }} maxWidth="sm">
            <NextLink
              href="/"
              passHref
            >
              <Button
                component="a"
                startIcon={<ArrowBackIcon fontSize="small" />}
              >
                Home
              </Button>
            </NextLink>
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`message ${loginisValid ? "success" : "error"}`}>
          {focusLoginMessage}
        </div>
        
        <fieldset disabled={submitting}>
          <div>
            <input
              placeholder="username"
              className="formInput"
              type="text"
              {...register('username')}
              onChange={validateName}
            />
            
  
            <div className={`message ${isValid ? "success" : "error"}`}>
              {focusMessage}
            </div>
          </div>
  
          <div>
            <input
              placeholder="password"
            {...register('password')}
              onChange={validatePassword}
              type="password"
            />
            <div className={`message ${isValidPassword ? "success" : "error"}`}>
              {focusMessagePassword}
            </div>
          </div>
          <Button type="submit">{submitting ? "Logging in..." : "Login"}</Button>
        </fieldset>
      </form>
      </Container>
      </Box>
      </>
    );
  }
  
  LoginForm.defaultProps = {
    register: () => {},
  };