import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './ducks/reducer';
// import { getUsers } from './ducks/reducer';


class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault() // using this prevents the form from refreshing the page on submit
    let user = {
      name: this.name.value,
      age: this.age.value
    }
    this.name.value = '';
    this.age.value = '';
    this.props.addUser(user)
  }

  render() {
    const users = this.props.users.map((user, i) => (
      <div key={i}>
        <h2>Name: { user.name }</h2>
        <h3>Age: { user.age }</h3>
      </div>
    ))
    return (
      <div>
        <h1>Add new user:</h1>
        <form onSubmit={ this.handleSubmit }>
          <input 
            placeholder='Name'
            ref={(input) => this.name = input} />
          <input 
            placeholder='Age'
            ref={(input) => this.age = input} />
          <button value='submit'>Submit</button>
        </form>
        <button onClick={ this.props.getUsers }>Get All Users (disabled)</button>
         { users }
      </div>
    )
  }
}

function mapStateToProps(state) { // What you return from this function will do two things. First, the name of the property will be the name of the data on props. Second, the value of the property should be from state and tells the store what part of state you are subscribing to.
  return {
    users: state.users
  }
}

let actionCreator = { // When passing an object with the action creators as key value pairs, the dispath method will be wrapped around the action creator methods for you so you don't have to worry about it.
// NOTE: DON'T FORGET to import the action creator above!
  addUser: addUser
  // getUsers: getUsers
}

let connectionToStore = connect(mapStateToProps, actionCreator) // This connect function is what is connecting our component to the store so that it can receive data from the state tree and so it can also dispatch an action. When you invoke the connect function, it returns another function.
export default connectionToStore(App) // When invoking the returned function from the invoked connect function... pass in the component name that you are connecting.
// NOTE: The result of this invoked function is a NEW class that is connected to the store and has all the needed data and actions to dispatch on props. 


// This is the common way to do above. The method is called currying. 
// export default connect(mapStateToProps, { addUser })(App)
