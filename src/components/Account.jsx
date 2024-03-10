import { useAccountQuery } from "../redux/api";

function Account(props) {

  if (!props.token) {
    return <h3>You must be logged in to perform this action.</h3>
  }

  const { data, error, isLoading } = useAccountQuery(props.token);

  if (isLoading) {
    return <p>Loading Account Details...</p>
  }

  if (error) {
    return <p>Unable to retrieve account details. Please try again later.</p>
  }

  return (
    <>
      <h2>Welcome back!</h2>
      <ul>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Email</li>
        <li>Username</li>
        <li>Password</li>
        <li>Address</li>
      </ul>
    </>
  )
}

export default Account;