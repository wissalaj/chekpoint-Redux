import {FILTER} from '../action/type'
const filter="all"
const filterReducer=(state=filter,action)=>{
    switch(action.type){ 
case FILTER:
    return action.payload
    default:
    return state;
}
}
export default filterReducer;
