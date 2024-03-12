// React
import { useState } from 'react';

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
    <div className="account">
      <h2>Welcome Back</h2>
      {
        data?.map((user) => {
          return user.username === props.userInfo.username?
          (
            <div key={user.id}>
              <div className="userDetail">
                <h3>First Name:</h3>
                <p>{user.name.firstname}</p>
              </div>

              <div className="userDetail">
                <h3>Last Name:</h3>
                <p>{user.name.lastname}</p>
              </div>

              <div className="userDetail">
                <h3>Username:</h3>
                <p>{user.username}</p>
              </div>

              <div className="userDetail">
                <h3>Password:</h3>
                <p>{user.password}</p>
              </div>

              <div className="userDetail">
                <h3>Email:</h3>
                <p>{user.email}</p>
              </div>
            </div>
          ) : ( 
            <span/>
          )
        })
      }

      <button>Edit</button>
    </div>
  )
}

export default Account;