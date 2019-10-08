import React, { Component } from 'react';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/core/Menu';
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import  Typography from '@material-ui/core/Typography';
import  IconButton from '@material-ui/core/IconButton';
import  Menu from '@material-ui/core/Menu';
import  MenuItem from '@material-ui/core/MenuItem';
import  Button from '@material-ui/core/Button';


import { withStyles } from '@material-ui/core/styles';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';
import { logoutActionCreator } from '../reducers/login/loginActionCreators';

const styles = {
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class AppTopbar extends Component {
    constructor(props){
        super(props);
        this.state = {
           anchorEl : null
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);

    }
    handleClose(){
        this.setState({
            anchorEl: null
        })
    }
    handleLogout(){
        this.props.onLogoutHandler();
      };
    
    handleMenu(e) {
       this.setState({
           anchorEl: e.currentTarget
       })
    };
    
    render() {
        let { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position="fixed">
                 <Toolbar>
                    <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                        Trekway
                    </Typography>
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}><Link to='/dashboard'>Dashboard</Link></MenuItem>
                                <MenuItem onClick={this.handleClose}><Link to='/products'>Products</Link></MenuItem>
                                <MenuItem>
                                    <Button variant="outlined" color="primary"
                                        onClick={this.handleLogout}>Logout</Button>
                                </MenuItem>
                            </Menu>
                        </div>
                </Toolbar>
            </AppBar> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logOut : state.sessionData
    }
}

const mapDispatchToProps = dispatch => {
return {
    onLogoutHandler : () => dispatch(logoutActionCreator()),
}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(AppTopbar));
