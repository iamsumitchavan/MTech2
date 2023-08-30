import { useCallback, useState } from "react";
import { useEffect } from "react";
import { getUserList } from "../Api";
import UserShowCard from "./UserShowCard";
import SearchBar from "./SearchBar";
import NoResult from "./NoResult";

function User() {
  const [user, setUser] = useState({});
  const [uname, setUname] = useState("");

  useEffect(() => {
    getUserList(uname).then((response) => {
      setUser(response.data);
    });
  }, [uname]);

  const handleUsername = useCallback(
    (event) => {
      setUname(event.target.value);
    },
    [uname]
  );

  if (!user) {
    return <NoResult />;
  }
  return (
    <div>
      <div>
        <SearchBar onchange={handleUsername} />
      </div>
      <div className="flex h-screen justify-center items-center">
        {uname && <UserShowCard user={user} />}
      </div>
    </div>
  );
}

export default User;
