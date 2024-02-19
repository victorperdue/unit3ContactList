export default function SelectedContact({setSelectedContactId,selectedContactId}) { 
    const [contact, setContact] = useState(null)
  
  useEffect(()=>{
    async function fetchContact() {
      try {
        const response = await fetch(
            (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        );
        const result = await response.json();
        setContact(result);
        //const data = await response.json();
        //setSelectedContact(data);

      } catch (error) {
        console.error(error);
      }
  }
  fetchContact()
},[]);
return (<>

    </>);
}