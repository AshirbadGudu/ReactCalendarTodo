import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todoArr, setTodoArr] = useState([]);
  const [state, setState] = useState({});

  const handelAddTodo = (todoTxt, time) => {
    const data = { ...state };
    const newTodoItem = {
      todoTxt,
      time,
    };
    if (data[selectedDate.toLocaleDateString()]) {
      data[selectedDate.toLocaleDateString()].push(newTodoItem);
    } else {
      data[selectedDate.toLocaleDateString()] = [newTodoItem];
    }
    setState(data);
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
    state,
    setState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
