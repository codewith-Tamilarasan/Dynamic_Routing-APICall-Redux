import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Components/apiUser";
import { Provider } from "react-redux";
import MealInfo from "./Components/MealInfo";
import store from "./Components/apiStore";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/:param" element={<MealInfo/>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
