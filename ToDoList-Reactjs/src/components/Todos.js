import React, {Component} from 'react';
import TodoItem from './TodoItem';
//import Prototypes from 'prop-types';

class Todos extends Component{


    render(){
        return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}/>
        ));
    }
    
}


/*Todos.prototype={
    todos:Prototypes.array.isRequired
}*/

export default Todos;
