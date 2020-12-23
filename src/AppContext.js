import React, { useContext, useState } from "react";
const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todoArr, setTodoArr] = useState([]);
  const handelAddTodo = (todoTxt, time) => {
    const arr = [];
    arr.push(...todoArr);
    const newTodoItem = { todoTxt, time, selectedDate };
    arr.push(newTodoItem);
    setTodoArr(arr);
  };

  const value = {
    handelAddTodo,
    selectedDate,
    setSelectedDate,
    todoArr,
    setTodoArr,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
