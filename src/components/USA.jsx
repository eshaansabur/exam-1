import React, { useEffect, useState } from 'react';

const USA = () => {
    const [contacts2, setContacts2] = useState([]);
    useEffect(()=>{
        fetch('https://contact.mediusware.com/api/country-contacts/usa/?format=json')
        .then(res => res.json())
        .then(data=>setContacts2(data.results))
    }, [])
    return (
        <div>
            <h2>USA Contacts</h2>
                    {
                        contacts2.map(contact => <h5 contact={contact}>ID: {contact.id} Phone: {contact.phone}</h5>)
                    }
                </div>
    );
};

export default USA;