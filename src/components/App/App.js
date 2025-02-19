import React, {useState} from "react";
import "./App.css";
import Layout from "../Layout/Layout";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Tutorials from "../Tutorials/Tutorials";
import COURSES from "./COURSES.json";
import Blog from "../Blog/Blog";
import ThemeContext from "../../contexts/ThemeContext";
import theme from "../../configs/theme";
import SingleCourse from "../SingleCourse/SingleCourse";
import {
  BrowserRouter, Route, Routes,
} from "react-router";
import EmojiSearch from "../EmojiSearch/EmojiSearch";
import Cryptoccurency from "../Cryptocurrency/Cryptocurrency";


const App = () => {
  const [activeTheme, setActiveTheme] = useState('pink');

  return (
    <ThemeContext.Provider value={{theme: theme[activeTheme], setActiveTheme }}>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>

              <Route path="/" element={ <Tutorials data={COURSES}/> }>
              </Route>

              <Route path="/blog" element={ <Blog /> }>
              </Route>

              <Route path="/about" element={ <About /> }>
              </Route>

              <Route path="/contact" element={ <Contact /> }>
              </Route>

              <Route path="/emoji" element={ <EmojiSearch />}>
              </Route>

              <Route path="/course/:id" element={ <SingleCourse />}>
              </Route>

              <Route path="/crypto" element={ <Cryptoccurency />}>
              </Route>

            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
