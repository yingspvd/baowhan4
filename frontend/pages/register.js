import userAPI from "./api/userAPI";

export default function Register() {
  const onClickRegister = () => {
    const data = {
      username: "dbhelper2",
      email: "helper2@mail.com",
      name: "Helper2",
    };

    userAPI
      .register(data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <div>
      <button onClick={onClickRegister}>Register</button>
    </div>
  );
}
