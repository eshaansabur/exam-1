import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [contacts2, setContacts2] = useState([]);
    useEffect(()=>{
        fetch('https://contact.mediusware.com/api/contacts/?format=json')
        .then(res => res.json())
        .then(data=>setContacts(data.results))
    }, [])

    useEffect(()=>{
        fetch('https://contact.mediusware.com/api/country-contacts/usa/?format=json')
        .then(res => res.json())
        .then(data=>setContacts2(data.results))
    }, [])

    const navigate = useNavigate();
    const getUsaContacts= ()=>{
        navigate('/usa');
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">All Contacts</button>
                <button onClick={getUsaContacts} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

                <h2 className='py-3'>All Contacts</h2>
                <div>
                    {
                        contacts.map(contact => <h5 contact={contact}>ID: {contact.id} Phone: {contact.phone}</h5>)
                    }
                </div>
                
                
            </div>
        </div>
    );
};

export default Problem2;