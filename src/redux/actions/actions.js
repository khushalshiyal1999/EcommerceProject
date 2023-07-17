export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}
// Checkout Dialog 
export const CHECKOUT = (iteam) => {
    return {
        type: "CHECKOUT",
        payload: iteam
    }
}
// Checkout Form Data
export const CHECKOUT_FORM = (iteam) => {
    return {
        type: "CHECKOUT_FORM",
        payload: iteam
    }
}

export const PAYMENT_METHOD = (iteam) => {
    return {
        type: "PAYMENT_METHOD",
        payload: iteam
    }
}

export const ADD_USER = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}

export const LOGIN_USER = (user) => {
    return { 
        type:'LOGIN_USER',
        payload:user
    }
}
export const GET_USERS = (users) => {
    return { 
        type:'GET_USERS',
        payload:users
    }
}