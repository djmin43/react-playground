import React from "react";
import withHoc from "../components/hoc/withHoc";
import BaseTodoList from "../components/BaseTodoList";

const TodoListPage = () => {
  const { data } = fetchData();

  return <TodoList data={data} />;
};

const fetchData = () => {
  return { data: TODOS };
};

const TodoList = withHoc(BaseTodoList);

const TODOS: TodoItemType[] = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

export type TodoItemType = {
  id: string;
  task: string;
  completed: boolean;
};

export default TodoListPage;
