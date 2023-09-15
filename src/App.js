import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      newTask: "",
    };
  }

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      const tasks = this.state.tasks;
      tasks.push(this.state.newTask);

      this.setState({ tasks });
      this.setState({ ...this.state, newTask: "" });
    }
  };

  handleChange = (e) => {
    const { value: newTask } = e.target;
    this.setState({ ...this.state, newTask });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.newTask}
              onKeyUp={this.handleKeyUp}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
