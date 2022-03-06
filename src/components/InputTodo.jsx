import React from "react";

export const InputTodos = (props) => {
  const { todoText, onChange, onClick } = props;

  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  console.log(style);

  return (
    <div style={style}>
      <input placeholder="TODoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
