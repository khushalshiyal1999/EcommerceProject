const INIT_STATE = {
  carts: JSON.parse(localStorage.getItem("carts")) || []
};

const SIGNUP_DATA = {
  users: JSON.parse(localStorage.getItem('users')) || []
}
export const cartreducer = (state = INIT_STATE, action) => {
  const loginUser = JSON.parse(localStorage.getItem("userData")) || {}
  const getCartData = JSON.parse(localStorage.getItem('carts')) || []
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id && item.user === loginUser.username);
      if (action.payload.package) {
        state.carts[itemIndex].package = 50.000
      }
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
        localStorage.setItem("carts", JSON.stringify(state.carts));
        return {
          ...state,
          carts: [...state.carts]
        };
      } else {
        const data = { ...action.payload, qnty: 1, user: loginUser.username };
        localStorage.setItem("carts", JSON.stringify([...state.carts, data]));
        return {
          ...state,
          carts: [...state.carts, data]
        };
      }

    case "RMV_CART":
      const updatedData = state.carts.filter((el) => el.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(updatedData));
      return {
        ...state,
        carts: updatedData
      };

    case "RMV_ONE":
      const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

      if (state.carts[itemIndex_dec].qnty >= 1) {
        state.carts[itemIndex_dec].qnty -= 1;
        localStorage.setItem("carts", JSON.stringify(state.carts));
        return {
          ...state,
          carts: [...state.carts]
        };
      } else if (state.carts[itemIndex_dec].qnty === 1) {
        const updatedData = state.carts.filter((el) => el.id !== action.payload.id);
        localStorage.setItem("carts", JSON.stringify(updatedData));
        return {
          ...state,
          carts: updatedData
        };
      }

    case 'CHECKOUT':
      const checkoutData = { sub_total: action.payload.subTotal, promocode: action.payload.promocode,date:action.payload.date }
      localStorage.setItem('checkoutData', JSON.stringify(checkoutData))
      return state

    case 'CHECKOUT_FORM':
      localStorage.setItem('checkoutFormData', JSON.stringify(action.payload))
      return state
    case "PAYMENT_METHOD":
      return {
        ...state,
        payment_method: action.payload,
      };
    default:
      return state;
  }
};


export const signUpreducer = (state = SIGNUP_DATA, action) => {
  switch (action.type) {
    case "ADD_USER":
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers
      };
    case 'LOGIN_USER':
      console.log(action.payload)
      localStorage.setItem("userData", JSON.stringify({username:`${action.payload.firstName} ${action.payload.lastName}`, token:action.payload.token}));
      return {...state, loginResponse:action.payload}

    case 'GET_USERS':
      console.log(action.payload)
    default:
      return state;
  }
};