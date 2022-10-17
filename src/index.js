import React from "react";
// import ReactDom from "react-dom";
import App from "./App"
import { createRoot } from 'react-dom/client';

//react dom render
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); 