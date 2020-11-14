
var initialState = [
  {
    "id": 1,
    "name": "Iphone 5",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJ6IXc7nZwycs15SKEDqMFMICr9UV96jn2TA&usqp=CAU",
    "description": "Sản phẩm do APPLE sản xuất",
    "price": 5000000,
    "inventory": 10,
    "rating":3
  },
  {
    "id": 2,
    "name": "SAMSUNG GALAXY",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWBP72LfAMGZKRRHcdkOzcu9IGmNjfQgbu8A&usqp=CAU",
    "description": "Sản phẩm do công ty SAMSUNG sản xuất",
    "price": 9000000,
    "inventory": 7,
    "rating":5
  },
  {
    "id": 3,
    "name": "NOKIA",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThuPWGK21rxcNOYd31-hthP82k9Hb9LejQXQ&usqp=CAU",
    "description": "Sản phẩm do NOKIA sản xuất",
    "price": 7000000,
    "inventory": 14,
    "rating":4
  }
]

const products = (state = initialState, action) => {
  switch(action.type){
    default:
      return [...state];
  }
}

export default products;





// import * as Types from "./../constants/ActionType";

// // var initialState = [];

// var initialState = [
//   {
//     "id": 1,
//     "name": "Iphone 5",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJ6IXc7nZwycs15SKEDqMFMICr9UV96jn2TA&usqp=CAU",
//     "description": "Sản phẩm do APPLE sản xuất",
//     "price": 5000000,
//     "inventory": 10,
//     "rating":3
//   },
//   {
//     "id": 2,
//     "name": "SAMSUNG GALAXY",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWBP72LfAMGZKRRHcdkOzcu9IGmNjfQgbu8A&usqp=CAU",
//     "description": "Sản phẩm do công ty SAMSUNG sản xuất",
//     "price": 9000000,
//     "inventory": 7,
//     "rating":5
//   },
//   {
//     "id": 3,
//     "name": "NOKIA",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThuPWGK21rxcNOYd31-hthP82k9Hb9LejQXQ&usqp=CAU",
//     "description": "Sản phẩm do NOKIA sản xuất",
//     "price": 7000000,
//     "inventory": 14,
//     "rating":4
//   }
// ]

// const products = (state = initialState, action) => {
//   switch(action.type){
//     case Types.FETCH_PRODUCTS:
//       state = action.products;
//       return [...state];
//     default: return [...state];
//   }
// }

// export default products;


