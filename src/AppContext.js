import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todoArr, setTodoArr] = useState([]);
  const [state, setState] = useState({});

  const make12hr = (time) => {
    const timeString12hr = new Date(
      "1970-01-01T" + time + "Z"
    ).toLocaleTimeString(
      {},
      { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
    );
    return timeString12hr;
  };

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
    make12hr,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
