import { useAccountQuery } from "../redux/api";

function Account(props) {

  // {
  //   "address": {
  //       "geolocation": {
  //           "lat": "-37.3159",
  //           "long": "81.1496"
  //       },
  //       "city": "kilcoole",
  //       "street": "new road",
  //       "number": 7682,
  //       "zipcode": "12926-3874"
  //   },
  //   "id": 1,
  //   "email": "john@gmail.com",
  //   "username": "johnd",
  //   "password": "m38rmF$",
  //   "name": {
  //       "firstname": "john",
  //       "lastname": "doe"
  //   },
  //   "phone": "1-570-236-7033",
  //   "__v": 0
  // }

  const { data, error, isLoading } = useAccountQuery(props.token);

  console.log('data', data);

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