
import cuid from 'cuid';
import { combineReducers } from 'redux'
export const cuidFn = cuid;

const rootReducer = combineReducers({
    restaurants: manageRestaurants, 
    reviews: manageReviews
});

export default rootReducer;


function manageRestaurants(state = [], action) {
    let idx; 
    switch (action.type) {
        case "ADD_RESTAURANT":
            const newR = {
                id: cuid(),
                text: action.text
            }
            // console.log(newR)
            return [...state, newR]
        case "DELETE_RESTAURANT": 
            // console.log(action.id)
            idx = state.findIndex(restaurant => restaurant.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
            // return {
            //     restaurants: state.restaurants.filter(restaurant => { 
            //         return restaurant.id !== action.id 
            //     })
            // }
        default: 
            return state 
    }
}

function manageReviews(state = [], action) {
    let idx; 
    switch (action.type) {
        case 'ADD_REVIEW': 
            const newB = {
                id: cuid(), 
                restaurantId: action.review.restaurantId, 
                text: action.review.text
            }
            return [...state, newB]
        case 'DELETE_REVIEW':
            idx = state.findIndex(review => review.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
        default: 
            return state;
    }
}
