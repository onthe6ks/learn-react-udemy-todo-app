import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODoを入力" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>todo1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p>todo2</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>いいい</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
