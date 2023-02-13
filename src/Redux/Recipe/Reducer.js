import * as types from "./ActionTypes"
const InitialData = {
    Product:[],
    isLoading : false,
    isError : false
}

export  function RecipeReducer (state=InitialData, action) {
    const {payload,type} = action;
    switch(type){
        case types.GET_Product_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_Product_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                Product: payload,
                isError : false
            }
        }

        case types.GET_Product_FAILURE : {
            return {
                ...state,
                isLoading : false,
                Product : [],
                isError : true
            }
        }

        default :
        return state
    }
    
}