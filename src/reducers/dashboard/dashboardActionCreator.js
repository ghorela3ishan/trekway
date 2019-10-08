
export const dashboardActionCreator = (selectedQuantity) => {
    return {
        type : "ADD_TO_CART_DATA_REQUEST",
        payload : selectedQuantity
    }
}

export const loadCartItemsRequest = () => {
    return {
        type : "LOAD_CART_DATA_REQUEST",
    }
}

export const loaderActionCreator = () => {
    return {
        type : "SHOW_LOADER"
    }
}