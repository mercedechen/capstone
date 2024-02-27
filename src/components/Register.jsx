function Register() {

  function eventHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <h2>Create an Account</h2>
      <form onSubmit={eventHandler}>
        <label>First Name
          <input type="text" placeholder="First Name"></input>
        </label>
        <label>Last Name
          <input type="text" placeholder="Last Name"></input>
        </label>
        <label>Email
          <input type="text" placeholder="Email"></input>
        </label>
        <label>Password
          <input type="password"></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Register