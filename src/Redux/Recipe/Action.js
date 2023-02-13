import * as types from "./ActionTypes"
export const GetProductRequest = ( ) =>{
    return {
        type : types.GET_Product_REQUEST
    }
}

export const GetProductcatSuccess = (payload) =>{
    return {
        type : types.GET_Product_SUCCESS,
        payload
    }
}

export const GetProductFailure = ( ) =>{
    return {
        type : types.GET_Product_FAILURE
    }
}

