import React, { Component } from 'react';
import  TextField  from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
// import loginBgImage from './loginBgImage.jpg';

const styles = {
    textFieldContainer : {
       width : '80%'
    },
    paperContainer : {
        paddingBottom : '2%',
        textAlign : "center",
        width : '50%',
        position: 'absolute',
        top: '20%',
        left: '25%',
    },
    loginPageContainer : {
        backgroundImage: "url(https://bereanfamily.com/wp-content/uploads/2017/12/Foggy-Mountains.jpg?w=640)",
        backgroundRepeat: "no-repeat",
        height: "100vh"
    }
}

class Login extends Component {    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.loginPageContainer} >
                <Paper className={classes.paperContainer}>
                    <div><h2>Trekway</h2></div>
                    <TextField className={classes.textFieldContainer} id="username" label="Username" margin="normal"
                                name="username"
                                placeholder="Enter your username" variant="outlined"
                                value={ this.props.username }
                                onChange={ this.props.onValueChange }
                    />
                    <br/>
                    <TextField className={classes.textFieldContainer} id= "password" label="Password" margin="normal"
                                name="password" type = 'password'
                                placeholder = "Enter your password" variant="outlined"
                                value = { this.props.password }
                                onChange= { this.props.onValueChange }
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={this.props.onSignIn}>Sign In</Button>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Login);