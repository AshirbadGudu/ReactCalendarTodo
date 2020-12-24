import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [allTodo, setAllTodo] = useState({});

  // Utility Function For Time Formatting With AM / PM
  const make12hr = (time) => {
    const timeString12hr = new Date(
      "1970-01-01T" + time + "Z"
    ).toLocaleTimeString(
      {},
      { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
    );
    return timeString12hr;
  };

  // Handel Add Todo Functionality
  const handelAddTodo = (todoTxt, time) => {
    const data = { ...allTodo };
    const newTodoItem = {
      todoTxt,
      time,
    };
    if (data[selectedDate.toLocaleDateString()]) {
      data[selectedDate.toLocaleDateString()].push(newTodoItem);
    } else {
      data[selectedDate.toLocaleDateString()] = [newTodoItem];
    }
    setAllTodo(data);
    localStorage.setItem("AllTodo", JSON.stringify(data));
  };

  // Fetch All Todo From Local Storage
  const fetchAllLocalTodo = () => {
    JSON.parse(localStorage.getItem("AllTodo")) &&
      setAllTodo(JSON.parse(localStorage.getItem("AllTodo")));
  };

  // Clear All Todo
  const handelClearAll = () => {
    setAllTodo({});
    localStorage.removeItem("AllTodo");
  };

  // Handel Delete Todo Functionality
  const deleteTodo = (todo) => {
    const data = { ...allTodo };
    data[todo.date].splice([todo.key], 1);
    setAllTodo(data);
    localStorage.setItem("AllTodo", JSON.stringify(data));
  };

  // Handel Todo Modifications
  const handleChanges = (selectedTodo, selectedTodoTxt, selectedTodoTime) => {
    const data = { ...allTodo };
    data[selectedTodo.date][selectedTodo.key].todoTxt = selectedTodoTxt;
    data[selectedTodo.date][selectedTodo.key].time = selectedTodoTime;
    setAllTodo(data);
    localStorage.setItem("AllTodo", JSON.stringify(data));
  };

  useEffect(() => {
    fetchAllLocalTodo();
  }, []);

  const value = {
    handelAddTodo,
    selectedDate,
    setSelectedDate,
    allTodo,
    setAllTodo,
    make12hr,
    handelClearAll,
    deleteTodo,
    handleChanges,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
