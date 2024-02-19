export default function ContactRow({ contact,setSelectedContactId }) {
    console.log(contact.id);
    return(

    <tr onClick={() => {setSelectedContactId(contact.id)}}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
    );
}