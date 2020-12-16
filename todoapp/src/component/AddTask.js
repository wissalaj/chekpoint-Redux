import { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../action/action';
import {v4 as uuidv4} from 'uuid';
const AddTask=(props)=>{
    const [state,setState]=useState({
        id:uuidv4(),
        description:"",
        isDone:false
    });
    const handle=(e)=>{setState({...state,description : e.target.value})}
    const add=()=>{
        props.addNewTodo({...state, id: uuidv4()} )
        setState({description: ''})
    }
    return ( 
        <div  style={{display:"flex",padding:"20px",width:"150px"}}>               
            <input type="text" className="form-control" placeholder="Add a new todo"  onChange={handle} value={state.description} style={{height:37}} />               
            <button style={{borderRadius:"8px",width:"70px",border:"1px hidden",marginLeft:"10px"}} onClick={add} > Add </button>                    
        </div>   
    )
}
const mapDispatchToProps = dispatch => {
    return{
        addNewTodo: x => dispatch(add(x))
    }
}
export default connect(null, mapDispatchToProps)(AddTask);