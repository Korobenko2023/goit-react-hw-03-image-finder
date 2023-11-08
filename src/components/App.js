import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';


const storageKey = 'list-contacts';
export class App extends Component {
    state = {
      contacts: [],
      filter: '',
  }; 

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'list-contacts',
        JSON.stringify(this.state.contacts));
    }    
  }

  addContact = newContact => {
    const { contacts } = this.state;
    const { name, number } = newContact;

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

     this.setState(prevState => ({
      contacts: [...prevState.contacts,{ id: nanoid(), name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

    handleFilterChange = (filter) => {
        this.setState({ filter });
  };
   
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
        
    return (
      <div>
        <h1>Phonebook</h1>
        <div addContact={this.addContact} />

        {contacts.length > 0 ? (
          <>
             <h2>Contacts list</h2>
             <div filter={filter} onChange={this.handleFilterChange} />       
             <div contacts={filteredContacts} onDelete={this.deleteContact} />
          </>
        ) : null}
            
        <GlobalStyle />
      </div>
    );
  }
}
