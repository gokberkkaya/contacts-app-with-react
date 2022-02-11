import {useState, useEffect} from 'react';
import List from "./List";
import Form from "./Form"; 
import "./styles.css";

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: 'Berk',
      phone_number:'12345'
    },
    {
      fullname: 'Ayşe',
      phone_number:'23454'
    },
    {
      fullname: 'Tuncay',
      phone_number:'67894'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  },[contacts]);

  return (
    <div id='container'>
        <h1>Contacts App</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts