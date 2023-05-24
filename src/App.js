import logo from "./logo.svg";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="leftcolumn">
          <Sidebar />
        </div>
        <div className="rightcolumn">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
