import * as Types from "./../constants/ActionType";

import callAPI from "./../utils/apiCaller";
// ==========================================Fetch products===========================================
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callAPI("products", "GET", null).then(res => {
      console.log("actFetchProductsRequest -> res", res);
      dispatch(actFetchProducts(res.data))
    });
  };
} 

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  }
} 




export const actAddToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product:product,
    quantity: quantity
  }
}

export const actChangeMessage = (message) => {
  return {
    type : Types.CHANGE_MESSAGE,
    message: message
  }
}  

export const actDeleteProductInCart = (product) => { 
  return {
    type: Types.DELETE_PRODUCT_IN_CART,
    product: product
  }
}

export const actUpdateProductInCart = (product, quantity) => {
  return {
    type: Types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
  }
}