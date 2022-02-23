// import logo from './logo.svg';
import "./App.css";
import contacts from "./contacts.json";
import React from "react";

function App() {
  const [getContacts, setGetContacts] = React.useState(contacts.slice(0, 5));
  const [ascending, setAscending] = React.useState(true);

  //Adding random contacts
  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 1));
    const newContacts = [...getContacts, contacts[randomIndex]];
    //to avoid repeating the same contacts
    if (!getContacts.includes(contacts[randomIndex])) {
      setGetContacts(newContacts);
    } else {
      addRandom();
    }
  };

//Sort By Name
  const sortByName = () => {
    let nameArray = [...getContacts];
    if (ascending) {
      nameArray.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      nameArray.sort((a, b) => b.name.localeCompare(a.name));
    }
    setGetContacts(nameArray);
    setAscending(!ascending);
  };

  //sort by popularity
  const sortByPopularity = () => {
    const sortPopularity = [...getContacts].sort(
      (a, b) => (b.popularity - a.popularity)
    );
    setGetContacts(sortPopularity);
  };

  //deleting contacts
  const deleteContact = (id) => {
    let filteredContacts = getContacts.filter((contact) => {
      return contact.id !== id;
    });
    setGetContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contacts</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>

      {/* Listing Contacts */}
      <div className="contact-table">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {getContacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td className="contact-picture">
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      className="contact-img"
                    />
                  </td>
                  <td className="contact-name"> {contact.name}</td>
                  <td className="contact-pop"> {contact.popularity}</td>
                  <td className="contact-oscar">
                    {" "}
                    {contact.wonOscar && <p>🏆</p>}
                  </td>
                  <td className="contact-emmy">
                    {" "}
                    {contact.wonEmmy && <p>🏆</p>}
                  </td>
                  <td>
                    <button onClick={() => deleteContact(contact.id)}>
                      Delete Contact
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
