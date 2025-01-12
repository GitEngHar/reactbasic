import {createRoot} from "react-dom/client";
import React,{StrictMode} from "react";
import {Learn} from "./Learn";
import {Todo} from "./Todo";
import styles from "./style.css";
const rootElement = document.getElementById("root")
const root = createRoot(rootElement);


root.render(
    // 厳密な記述になる
    // 推奨
    <StrictMode>
        <Todo />
    </StrictMode>
);