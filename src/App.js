import "./App.css";
import AddContact from "./components/AddContact/AddContacts";
import ContactList from "./components/ContactList/ContactList";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Route path="/addContact" component={AddContact} />
      <Route path="/" exact component={ContactList} />
    </div>
  );
}

export default App;
