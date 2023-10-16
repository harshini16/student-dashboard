import React from 'react'
import { useState } from 'react';
import {Avatar, Button, Grid, Paper, TextField , Typography,  Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const Login = ({setIsAuthenticated }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const paperStyle={padding :20, height: '50vh' , width: 280 , margin: "0 auto"}
    const avatarStyle = {backgroundColor:'#31708E'}
    const textStyle = {margin:'8px 0'}
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // This ensures that the container takes the full viewport height.
      };
    
    const handleLogin = () => {
        setError('');
        // Send a POST request to the login endpoint on your backend
        axios.post('http://localhost:8081/login', { email, password })
          .then((response) => {
            console.log(response);
            // const token = response.data.token; // Assuming the server responds with a token
            // Store the token securely (e.g., in local storage) for future requests
            if (response.data === 'Login Successfull') {
                setIsAuthenticated(true);
            } else {
                setError('Wrong email or password. Please try again.');
            }
          })
          .catch((error) => {
            console.error(error);
            // Handle login error, e.g., display a message to the user
            setError('Login failed. Please try again.')
          });
      };

    return ( 
        <div className='login-container' style={containerStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Grid align = "center">
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>SIGN IN</h2>
                    </Grid>
                    <TextField id="outlined-basic" variant="outlined" label='Email-id' placeholder="enter email-id" fullWidth required style={textStyle} value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <TextField id="outlined-basic" variant="outlined" label='Password' placeholder="enter password" type='password' fullWidth required style={textStyle} value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <Button type='submit' color='primary' variant='contained' fullWidth style={textStyle} onClick={handleLogin}> Sign in</Button> 
                    <Typography>
                    <Link href="#" >
                        Forgot password?
                    </Link>
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: 'red', marginTop: '8px' }}>{error}
                    </Typography>
                </Grid>
            </Paper>
        </div>
     );
}
 
export default Login;