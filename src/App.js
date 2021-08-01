import React, { useEffect, useState } from "react";
import './App.css'
import styled from 'styled-components'
import axios from 'axios'

import ContactList from "./components/ContactList";
import AddOrUpdateContact from "./components/AddOrUpdateContact";

function App() {
  const [contactToBeViewed, setContactToBeViewed] = useState()
  const [isSelected, setIsSeleted] = useState(false)


  const [contactsArray, setContactsArray] = useState([])

  const selectContact = (contact_id) => {
    setContactToBeViewed(contact_id);
    setIsSeleted(true);
  }

  useEffect(()=> {
    axios.get('https://avb-contacts-api.herokuapp.com/contacts')
      .then(response => setContactsArray(response.data))
      .catch(error => console.log(error))
  }, [])

  
  return (
    <MainContainer>
      {console.log(contactsArray)}
        <Body>
            <ContactList contactsArray={contactsArray} selectContact={selectContact} isSelected={isSelected} contactToBeViewed={contactToBeViewed}/>
            <AddOrUpdateContact contactsArray={contactsArray} contactToBeViewed={contactToBeViewed}/>
        </Body>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  
`
const Body = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  overflow-y: hidden;

`

