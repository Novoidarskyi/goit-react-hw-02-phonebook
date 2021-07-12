

const Contacts = ({ contacts }) => {
console.log(contacts)

  return (
    <div>
      <h1>Contacts</h1>
      <ol>
        {contacts.map(({id, name, number}) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ol>
      

    </div>
  )
}

export default Contacts
