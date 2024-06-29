/**
  - Utilize o evento de onSubmit para emitir um alerta quando o 
  formulário for submetido
  - Utilize o evento de onChange para emitir um alerta quando o checkbox
  mudar seu valor
 */

import * as React from "react";
import "./styles.css";
import Item from "./components/Item";
import Form from "./components/Form";
import todos from "../data";

export default function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form />
      {todos.map((todo, index) => (
        <Item key={index} title={todo.title} />
      ))}
    </div>
  );
}
