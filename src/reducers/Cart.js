import * as Types from "./../constants/ActionType";

var data = JSON.parse(localStorage.getItem('CART')); // get data from localStorage
var initialState = data ? data : [];


const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch(action.type){
    case Types.ADD_TO_CART:
      index = findProductInCart(state,product);
      if(index !== -1){ // cong them so luong cua product trong gio hang
        state[index].quantity += quantity;
      }else{
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:    
      index = findProductInCart(state, product);
      if(index !== -1) {
        state.splice(index, 1);
      }  
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default: return [...state];
  }
}

var findProductInCart = (cart, product) => { // duyet tim pt chung ta click, neu =-1 la trug ten da co trong cart
  var index = -1;
  if(cart.length > 0){
    for(var i=0; i<cart.length; i++){
      if(cart[i].product.id === product.id){
        index = i;
        break;
      }
    }
  }
  return index;
}
export default cart;