import React from "react";
import { useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'
import './Main.css'; // Подключаем файл стилей

function Main() {
  const [user, setUser] = useLocalStorage("USER", "");
  const [inputValue, setinputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser(inputValue);
  };

  return (
    <div className="container">
      {user ? (
        <div className="form">
          <div>Приветствуем тебя, {user}</div>
          <button onClick={() => setUser('')}>Выйти</button>
        </div>
      ) : (
        <div className="form">
          <label>Введи своё имя</label>
          <input
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button onClick={handleFormSubmit}>Войти</button>
        </div>
      )}
    </div>
  );
}

export default Main;
