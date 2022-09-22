import "./App.css";
import Bootstrap from "./components/Bootstrap";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Fetch from "./components/Fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ClassComponent
                title="Hello Epicoders from CLASS COMPONENT"
                subtitle="what an amazing lecture"
              />
            }
          />

          <Route
            path="/functional"
            element={
              <>
                <FunctionalComponent
                  title="Another Title from Functional"
                  subtitle="I'm the subtitle"
                />
                <FunctionalComponent title="Second Title from Functional" />
              </>
            }
          />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
