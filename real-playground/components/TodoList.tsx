import React from "react";

const TODOS: TodoItemType[] = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

type TodoItemType = {
  id: string;
  task: string;
  completed: boolean;
};

interface TodoItemProps {
  item: TodoItemType;
}

const TodoList = () => {
  return (
    <ul>
      {TODOS.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
};

export default TodoList;
