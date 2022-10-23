import "./App.css";
import AddContact from "./components/AddContact/AddContacts";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Route path="/addContact" component={AddContact} />
    </div>
  );
}

export default App;
