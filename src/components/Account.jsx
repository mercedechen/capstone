// Redux
import { useAccountQuery } from "../redux/api";

function Account(props) {

  if (!props.token) {
    return <h3>You must be logged in to perform this action.</h3>
  }

  // data is an [] of {} and data[0].username is johnd
  const { data, error, isLoading } = useAccountQuery(props.token);

  if (isLoading) {
    return <p>Loading Account Details...</p>
  }

  if (error) {
    return <p>Unable to retrieve account details. Please try again later.</p>
  }

  return (
    <div className="container">
      <div className="account">
        <h2>Welcome Back</h2>
        <div>
          {
            data?.map((user) => {
              return user.username === props.userInfo.username?
              (
                <div key={user.id}>
                  <h3>First Name:</h3>
                  <p>{user.name.firstname}</p>
                  <h3>Last Name:</h3>
                  <p>{user.name.lastname}</p>
                  <h3>Username:</h3>
                  <p>{user.username}</p>
                  <h3>Password:</h3>
                  <p>******</p>
                  <h3>Email:</h3>
                  <p>{user.email}</p>
                </div>
              ) : (
                <span key={user.id}/>
              )
            })
          }
        </div>
        <button>Edit</button>
      </div>
      <div className="orders">
        <h2>Order History</h2>
      </div>
    </div>
  )
}

export default Account;