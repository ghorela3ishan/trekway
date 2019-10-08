import React, { Component } from 'react';
import Cart from './Cart';
import Invoice from './Invoice';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Loader from '../loader/LoaderComponent';
import  {loadCartItemsRequest, loaderActionCreator} from '../../reducers/dashboard/dashboardActionCreator'

const styles = theme => ({
    invoiceButton: {
        position: 'fixed',
        right: '3%',
        bottom: '5%'
    }
  });

 class DashBoardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isInvoiceVisible: true
        }
        this.toggleInvoice=this.toggleInvoice.bind(this);
    }
    componentDidMount(){
        this.props.setLoader();
        this.props.cartItemsLoad();
    }
    toggleInvoice(){
        this.setState({
            isInvoiceVisible : !this.state.isInvoiceVisible
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                { this.props.cartItems.isLoading ? ( <Loader/> ) :
                     (<div>
                            {this.props.cartItems.cartItems.length > 0 ?
                            <div>
                                <Cart cartItems={this.props.cartItems.cartItems}></Cart>
                                <hr></hr>
                                <Invoice isInvoiceVisible={!this.state.isInvoiceVisible} totalBill={this.props.cartItems.totalInvoice}
                                        toggleInvoice ={this.toggleInvoice}
                                ></Invoice> 
                                <Button variant="contained" color="secondary" className={classes.invoiceButton}
                                    onClick={this.toggleInvoice}>Show Invoice</Button>
                            </div> :  
                            <div>No items in your cart </div> }
                     </div> ) }
             </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
            cartItems : state.cartItems,
            billingAmount : state.totalInvoice,
        }
}

const mapDispatchToProps = dispatch => {
    return {
        cartItemsLoad : () => dispatch(loadCartItemsRequest()),
        setLoader : () => dispatch(loaderActionCreator())

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(DashBoardContainer));