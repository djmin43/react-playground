import React from "react";
import { TodoItemType } from "../pages/todo-list";

interface TodoItemProps {
  item: TodoItemType;
}

const BaseTodoList = ({ data }: { data: TodoItemType[] }) => {
  return (
    <ul>
      {data.map((item) => (
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

export default BaseTodoList;
