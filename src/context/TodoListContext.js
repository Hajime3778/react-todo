import { createContext, useState } from 'react'

export const TodoListContext = createContext({});

const sampleTodoList = [
  {
    id: 0,
    title: 'これはサンプル１です',
    description: 'これはサンプル１です',
  },
  {
    id: 1,
    title: 'これはサンプル２です',
    description: 'これはサンプル２です',
  }
];

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(sampleTodoList);
  return (
    <TodoListContext.Provider 
      value={{
        todoList,
        setTodoList,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
