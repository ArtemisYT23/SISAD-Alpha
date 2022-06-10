const initialState = {
    options: [],
}

const SUCCESS = "SUCCESS";

export default function OptionReducer (state = initialState, action) {
    switch (action.type){
    case SUCCESS:
        return action.payload;
    default:
        return state;
    }
}

