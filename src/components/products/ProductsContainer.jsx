import React,{Component} from 'react';
import Products from './Products';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../loader/LoaderComponent';
import {qIncrementActionCreator, qDecrementActionCreator, productDataRequest ,
        loaderActionCreators, hideCartNotification} from '../../reducers/products/productsActionCreator';
import {dashboardActionCreator} from '../../reducers/dashboard/dashboardActionCreator';

class ProductsContainer extends Component{   
    constructor(props){
       
        super(props);
        this.state = {
            data : [],
        }
        this.onIncrementQuantity=this.onIncrementQuantity.bind(this);
        this.onDecrementQuantity=this.onDecrementQuantity.bind(this);
        this.addToCartHandler = this.addToCartHandler.bind(this);
    }
    onIncrementQuantity(productName){
        this.props.onIncrementQuantityHandler(productName);
    }
    onDecrementQuantity(productName){
        this.props.onDecrementQuantityHandler(productName);
    }
    addToCartHandler(selectedQuant){
        this.props.setLoader();
        this.props.onAddtoCartHandler(selectedQuant);
    }
    componentDidMount(){
        this.props.setLoader();
        this.props.productDataRequest();
    }
    componentWillUnmount(){
        this.props.hideCartNotification();
    }
    render(){
        return(
            <div>
                {this.props.productsData.isLoading ? (<Loader/>) :
                    (<div>
                        <Products
                            products={this.props.productsData.products}
                            onIncrementQuantity={this.onIncrementQuantity}
                            onDecrementQuantity={this.onDecrementQuantity}
                            addToCart = {this.addToCartHandler}
                            cartAddAlert={this.props.productsData.cartAddAlert}>
                        </Products>      
                    </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productsData: state.productsData,
    }
}
const mapDispatchToProps  = dispatch => {
    return{
        onIncrementQuantityHandler : (productName) => {
            dispatch(qIncrementActionCreator(productName))
        },
        onDecrementQuantityHandler : (productName) => {
            dispatch(qDecrementActionCreator(productName))
        },
        onAddtoCartHandler : (selectedQuant) => {
            dispatch(dashboardActionCreator(selectedQuant))
        },
        productDataRequest : () => {
            dispatch(productDataRequest())
        },
        setLoader : () => {
            dispatch(loaderActionCreators())
        },
        hideCartNotification : () => {
            dispatch(hideCartNotification())
        }
    }   
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);