// import logo from './logo.svg';
import "./App.css";
import contacts from "./contacts.json";
import React from "react";

function App() {
  const [getContacts, setGetContacts] = React.useState(contacts.slice(0, 5));
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {getContacts.map((contact) => {
            return (
              <tr>
                <td className="contact-picture">
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    className="contact-img"
                  />
                </td>
                <td className="contact-name"> {contact.name}</td>
                <td className="contact-pop"> {contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
