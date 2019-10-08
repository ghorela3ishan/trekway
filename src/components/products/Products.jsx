import React, { Component } from 'react';
import  Card  from '@material-ui/core/Card';
import  CardHeader  from '@material-ui/core/CardHeader';
import  CardMedia  from '@material-ui/core/CardMedia';
import  CardContent  from '@material-ui/core/CardContent';
import  Button  from '@material-ui/core/Button';
import  Snackbar  from '@material-ui/core/Snackbar';
import  IconButton from '@material-ui/core/IconButton';
import  CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing.unit,
    },
    card: {
        maxWidth: 300,
    },
    cartButton: {
        position: 'fixed',
        right: '3%',
        bottom: '5%'
    },
    button: {
        marginLeft: '5%',
        margin: theme.spacing.unit,
        height : '30%'
        
    },
    media: {
        height: 0,
        backgroundSize: 'contain',
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    itemsFlex: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    cardContainer: {
        padding: '1.5%'
    },
});

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldDisplayMessage : false,
            message: null
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleClose = this.handleClose.bind(this)
    }
    onClickHandler() {
        let selectedQuant = this.props.products.filter((products)=>products.quantity > 0 );
        if (selectedQuant.length == 0 ) {
            this.setState({
                shouldDisplayMessage : true,
                message: "You haven't selected any items. Please select atleast one item to add to your cart."
             })
        } 
        if (selectedQuant.length > 0 ) {
            this.props.addToCart(selectedQuant);
        }
         
    }

    componentDidMount() {
        if(this.props.cartAddAlert) {
            this.setState({
                shouldDisplayMessage : true,
                message: <span>Products added to cart. Visit <Link to='/dashboard/'><span style={{ color: 'red' }}>Dashboard</span></Link> to view your cart.</span>
             })
        } 
    }

    componentWillUnmount() {
        this.setState({
            shouldDisplayMessage : true,
         })
    }
    handleClose() {
        this.setState({
            shouldDisplayMessage : false,
         })
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <div className={classes.root}>{"CHOOSE YOUR PRODUCT"}</div>
                <div className={classes.itemsFlex} >
                    {this.props.products.map((product) => (
                        <div className={classes.cardContainer}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={product.name}
                                />
                                <CardMedia className={classes.media}
                                    image={product.imgSource}
                                    title={product.name}
                                />
                                <div className={classes.actions}>
                                    <CardContent>{'Rs ' + product.price}</CardContent>
                                    <Button className={classes.button} variant="contained" color="primary" size="small"
                                        onClick={() => this.props.onIncrementQuantity(product.name)}>+</Button>
                                    <CardContent>{product.quantity}</CardContent>
                                    <Button className={classes.button} variant="contained" color="primary" size="small"
                                        onClick={() => {
                                            if (product.quantity > 0) {
                                                this.props.onDecrementQuantity(product.name)
                                            }
                                        }}>-</Button>
                                </div>
                            </Card>
                        </div>
                    ))}
                    <Button variant="contained" color="secondary" className={classes.cartButton} onClick={this.onClickHandler}>Add to Cart</Button>
                    <Snackbar   anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                        }}
                                open={this.state.shouldDisplayMessage} 
                                autoHideDuration={6000} 
                                onRequestClose={this.handleClose} 
                                onClose={this.handleClose}
                                ContentProps={{
                                    'aria-describedby': 'message-id',
                                        }}
                                message={this.state.message}
                                variant="success"
                                action={[
                                    <IconButton
                                      key="close"
                                      aria-label="Close"
                                      color="inherit"
                                      onClick={this.handleClose}
                                    >
                                      <CloseIcon />
                                    </IconButton>,
                                  ]}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Products);