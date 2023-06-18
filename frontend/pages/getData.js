import userAPI from "./api/userAPI";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  const onClickGetData = () => {
    userAPI
      .getData()
      .then((response) => {
        console.log(response.data);

        router.push("/profile");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <div>
      <button onClick={onClickGetData}>Get Data</button>
    </div>
  );
}
