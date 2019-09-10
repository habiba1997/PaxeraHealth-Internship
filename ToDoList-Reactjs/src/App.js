import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
//      <img src={logo} className="App-logo" alt="logo" />
class App extends Component{
state={
  todos:[
      {
          id:1,
          title:'Programming for all',
          completed: false
      },
      {
          id:2,
          title:'ISC',
          completed: true
      },
      {
          id:3,
          title:'ReactJs',
          completed: true
      }
  ]
}
delTodo=(id)=>
{
  this.setState({todos: [...this.state.todos.filter(todo=> todo.id!==id)]});
}
markComplete=(id)=>
{
  this.setState({ todos:this.state.todos.map( todo=> 
    {
      if (todo.id===id)
      {
        todo.completed = !todo.completed;
      }
      return todo;

    }

  ) });
}

render() {
  console.log(this.state.todos)

  return (
    <div className="App">
<Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>

    </div>
  );
}
}



export default App;
