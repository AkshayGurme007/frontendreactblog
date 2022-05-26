import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bollywood from "./components/Bollywood";
import Fitness from "./components/Fitness";
import Head from "./components/Head";
import Api from "./components/Api";
import Fapi from "./components/Fapi";
import Food from "./components/Food";
import Home from "./components/Home";
import Torisum from "./components/Torisum";
import Fooapi from "./components/Fooapi";
import Torapi from "./components/Torapi";
import Latestapi from "./components/Latestapi";
import Topapi from "./components/Topapi";
import Articalapi from "./components/Articalapi";

function App() {
  return (
    <Topapi>
      <Articalapi>
        <Latestapi>
          <Torapi>
            <Fooapi>
              <Fapi>
                <Api>
                  <>
                    <BrowserRouter>
                      <Head />
                      <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/torisum" element={<Torisum />} />
                        <Route path="/bollywood" element={<Bollywood />} />
                        <Route path="/fitness" element={<Fitness />} />
                        <Route path="/food" element={<Food />} />
                      </Routes>
                    </BrowserRouter>
                  </>
                </Api>
              </Fapi>
            </Fooapi>
          </Torapi>
        </Latestapi>
      </Articalapi>
    </Topapi>
  );
}

export default App;
