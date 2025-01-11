import {createRoot} from "react-dom/client";
import React,{StrictMode} from "react";
import {App} from "./App";

const rootElement = document.getElementById("root")
const root = createRoot(rootElement);



root.render(
    // 厳密な記述になる
    // 推奨
    <StrictMode>
        <App />
    </StrictMode>
);