import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { VscGistSecret } from "react-icons/vsc";
import { BsCalendar2Date } from "react-icons/bs";
function UserShowCard({ user }) {
  console.log("user is ", user);
  const { avatar_url, login, name, public_repos, public_gists, created_at } =
    user;
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={avatar_url} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <div className="flex items-center gap-3 mb-3">
            <BiUser className="text-2xl text-white font-bold" />
            <p className="  font-normal text-white  text-2xl font-mono">
              {login}
            </p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaGithub className="text-3xl text-white font-bold" />

            <p className=" font-normal text-white  text-2xl font-mono">
              Git Repositories {public_repos}
            </p>
          </div>
          <div className="flex items-cente gap-3 mb-3">
            <VscGistSecret className="text-3xl text-white font-bold" />
            <p className=" font-normal text-white  text-2xl font-mono">
              {public_gists}
            </p>
          </div>
          <div className="flex items-cente gap-3 mb-3">
            <BsCalendar2Date className="text-3xl text-white font-bold" />
            <p className=" font-normal text-white  text-2xl font-mono">
              {created_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(UserShowCard);
