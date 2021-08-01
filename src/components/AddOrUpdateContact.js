import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddOrUpdateContact(props) {

    // var [contact, setContact] = useState()
    var contact;

    if(props.contactToBeViewed) {
        var contactsArr = props.contactsArray
        var contactDetails = contactsArr.filter(contact => contact.id === props.contactToBeViewed)
        // setContact(contactDetails[0])
        contact = contactDetails[0]
    }
    
    return (
        <AddOrUpdateWrapper>
            { props.contactToBeViewed ? 
            <ContactContainer>
                <div className="contact-details">

                    <table className="table contact-table">
                        <thead>
                            <tr>
                                <td><label for="fname" class="form-label">First Name</label></td>
                                <td><label for="lname" class="form-label">Last Name</label></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input name="fname" type="text" class="form-control fname" id="fname" placeholder="First Name" value={contact ? contact.firstName : ""}/>
                                </td>
                                <td>
                                    <input name="lname" type="text" class="form-control lname" id="lname" placeholder="Last Name" value={contact ? contact.lastName : ""}/>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <table className="table table-borderless">
                        <thead>
                            <tr>              
                                <td><label class="form-label">Emails</label></td>
                            </tr>
                        </thead>
                        <tbody>
                                {   
                                    contact.emails.map((email) => 
                                    <tr><td>{email}<RemoveCircleIcon className="remove-icon"/></td></tr>
                                )}
                                <tr><td style={{color: "#428bff"}}><AddCircleIcon className="add-icon"/> add email</td></tr>
                        </tbody>
                    </table>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <td><label class="form-label">Contact Numbers</label></td>
                            </tr>
                        </thead>
                        <tbody>
                            {   contact.phone_numbers
                                ?
                                contact.phone_numbers.map((email) => 
                                <tr><td>{email}<RemoveCircleIcon className="remove-icon"/></td></tr>
                                )
                                :
                                <tr></tr>
                            }
                            <tr><td style={{color: "#428bff"}}><AddCircleIcon className="add-icon"/>add phone number</td></tr>

                        </tbody>
                    </table>
                </div>
                <ContactButtons>
                    <div className="delete">
                        <input type="button" className="btn btn-danger" value="Delete"/>
                    </div>
                    <div className="cancel-save">
                        <input type="button" className="btn btn-default " value="Cancel"/>
                        <input type="button" className="btn btn-primary " value="Save"/>
                    </div>
                </ContactButtons>
            </ContactContainer>
            :
            <ContactContainer>
                <p>Select or Add a Contact Name</p>
            </ContactContainer>
            }
        </AddOrUpdateWrapper>
    )
}

export default AddOrUpdateContact

const AddOrUpdateWrapper = styled.div`
    background-color: #f0f0f0;
    color: black;
    font-size: 15px;
    height: 105vh;
`
const ContactContainer = styled.div`
    padding: 50px;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: auto 20%;

    .container-details {
        width: 100%;

    }

    .add-icon {
        font-size: 1.2em;
        color: #428bff;
    }
    
    .remove-icon {
        font-size: 1.2em;
        color: red;

    }

`
const ContactButtons = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    width: 100%;

    .delete {
        width: 100%;
        display: flex;
        justify-contact: flex-start;
        justify-contact: flex-start;
        place-items: center;
    }
    .cancel-save {
        width: 100%;
        display: flex;
        justify-contact: flex-end;
        justify-content: space-around;
        place-items: center;
    }
    input {
        width: 90px;
        height: 25px;
        padding: 0;
        border-radius: 0px;
        font-size: 15px;
    }
`
