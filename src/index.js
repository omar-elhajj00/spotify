import React from "react";
import App from "./App"
import { createRoot } from 'react-dom/client';

//react dom render
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); 