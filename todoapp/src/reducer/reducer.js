import {v4 as uuidv4} from 'uuid';
import {ADD_TODO,DELETE,DONE,EDIT} from '../action/type'
const initState =  [
        {
            id:uuidv4(),
            description:'Pass the exams',
            isDone:true,
            complete:"true"
        },
        {
            id:uuidv4(),
            description:'"Walk the dog',
            isDone:false,
            complete:"false"
        },
        {
            id:uuidv4(),
            description:'Read a book',
            isDone:false,
            complete:"false"
        },
        {
            id:uuidv4(),
            description:'Draws a painting',
            isDone:true,
            complete:"true"
        }
    ]
const reducer=(state=initState,action)=>{
    switch(action.type){        
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE:
            return state.filter(el => el.id !== action.payload)
        case DONE:
            return state.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el)  
        case EDIT:
            return state.map(el => el.id === action.payload.id ? action.payload : el )      
        default:
            return state;
        }
}
export default reducer;