import React, { useState } from 'react'
import styled from 'styled-components'

import AddCircleIcon from '@material-ui/icons/AddCircle';

function ContactList(props) {


    return (
        <ContactListWrapper>
            <div className="contacts-title">
                <div className="contacts-subtitle">
                    <h2>Contacts</h2>
                    <AddCircleIcon className="add-icon"/>
                </div>
            </div>
            {
                props.contactsArray.map((contact)=> (
                    <p onClick={() => props.selectContact(contact.id)} className={contact.id === props.contactToBeViewed ? "contact select-contact" : "contact"} >{contact.fname} {contact.lname}</p>
                ))
            }
        </ContactListWrapper>
    )
}

export default ContactList

const ContactListWrapper = styled.div`

    background-color: #e3eeff;

    .add-icon {
        font-size: 25px;
        color: #428bff;
        margin-top: 7px;

    }
    .contacts-title {
        height: 70px;
        display: flex;
        align-items: center;
        margin-left: 20px;
        h2 {
            margin: 0px;
        }
    }

    .contacts-subtitle {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    p {
        margin: 0px;
    }

    .contact {
        display: flex;
        height: 50px;
        width: 100%;
        border-bottom: 0.1px solid lightgray;
        font-size: 23px;
        align-items: center;
        padding-left: 25px;

    }
    .contact:hover {
        background-color: #7cabf7;
        color: white
    }
    .select-contact {
        background-color: #428bff;
        color: white;
        font-weight: bold;
    }
`