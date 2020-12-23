import React, { useContext, useEffect, useState } from "react";
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
    const newTodoItem = {
      todoTxt,
      time,
      selectedDate: selectedDate.toLocaleDateString(),
    };
    arr.push(newTodoItem);
    localStorage.setItem(
      selectedDate.toLocaleDateString(),
      JSON.stringify(arr)
    );
    setTodoArr(arr);
  };
  const deleteTodo = (i) => {
    const arr = [];
    arr.push(...todoArr);
    arr.splice(i, 1);
    localStorage.setItem(
      selectedDate.toLocaleDateString(),
      JSON.stringify(arr)
    );
    setTodoArr(arr);
  };
  useEffect(() => {
    const selectedDateTodoArr = JSON.parse(
      localStorage.getItem(selectedDate.toLocaleDateString())
    );
    selectedDateTodoArr ? setTodoArr(selectedDateTodoArr) : setTodoArr([]);
  }, [selectedDate]);

  const value = {
    handelAddTodo,
    selectedDate,
    setSelectedDate,
    todoArr,
    setTodoArr,
    deleteTodo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
