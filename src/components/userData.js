const UserData = ({ feedData }) => {
  return (
    <>
      {feedData.map((item) => {
        return (
          <tr>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
