import { remove,done,edit} from '../action/action';
import { connect } from 'react-redux';
import { useState } from 'react';
const Task =(props)=> {
    const [state, setState] = useState({
        id: props.todo.id,
        description:props.todo.description,
        isDone: props.todo.isDone
        
    })
    const [disabled , setDisabled] = useState (true)
    const handleChange = e => {setState({...state , description: e.target.value})}
    const fcEdit = () => { 
        setDisabled( !disabled)
    }
    const Edit = ( ) => {
        props.edit(state)
        setDisabled( !disabled)
    }
    return (
        <div key={props.todo.id} style={{display:"flex",width:"300px",marginLeft:25,padding:20,border:"1px",borderRadius:"8px" }}>
            <button onClick={()=>props.completed(state.id)}>{props.todo.isDone?'notDone':'isDone'}</button>
            <input className="form-control" onChange={handleChange} type="text" value={disabled ? props.todo.description :state.description} disabled={disabled } />           
            <button onClick={ disabled ?  fcEdit : Edit}>edit</button>
            <button onClick={()=>props.deleteTodo(props.todo.id)}>delete</button>            
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => dispatch(remove(id)),
        completed: x => dispatch(done(x)),
        edit: x => dispatch(edit(x))
    };
};
export default connect(null, mapDispatchToProps)(Task);