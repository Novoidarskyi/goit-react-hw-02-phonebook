import React, { Component } from 'react'

export default class Phonebook extends Component {
  state = {  
    name: '',
  };

   handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

    handleSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state)
   this.setState ({ name: '' })
  };
  
  render() {
    return (
      <div>
          <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Add contact</button>
          </form>
        </div>
    
    )
  }
}
