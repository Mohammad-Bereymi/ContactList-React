import "./App.css";
import AddContact from "./components/AddContact/AddContacts";
import ContactList from "./components/ContactList/ContactList";
import { Route, Switch } from "react-router-dom";
import EditComponent from "./components/EditComponent/EditComponent";
function App() {
  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Switch>
        <Route path="/edit/:id" component={EditComponent} />
        <Route path="/addContact" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </div>
  );
}

export default App;
