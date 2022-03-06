import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;

  const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200pt",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <>
      <div style={style}>
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
