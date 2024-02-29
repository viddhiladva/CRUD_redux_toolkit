import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUserName } from "../Redux/Userslice";
import { MdDelete } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [changeName,setChageName] = useState("");
  const dispatch = useDispatch();
  const userlist = useSelector((state) => state.users.value);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setName('');
    setUsername('');
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-80">
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => {
              dispatch(
                addUser({
                  id: userlist[userlist.length - 1].id + 1,
                  name,
                  username,
                })
              );
            }}
            className="block mx-auto px-4 py-2 mt-4 text-white bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800"
          >
            Add User
          </button>
          </form>
          
        </div>
      </div>
      {/* displaing users in the card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {userlist.map((user, index) => (
          <div
            key={index}
            className="relative bg-gray-300 shadow-md rounded-md p-4"
          >
            <h1 className="text-lg font-semibold">{user.name}</h1>
            <p className="text-gray-600">{user.username}</p>

            {/* edit user */}
            <div className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                placeholder="New User name"
                onChange={(e) => setNewUsername(e.target.value)}
                className="flex-1 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
              />
              </div>
              <div className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                placeholder="New name"
                onChange={(e) => setChageName(e.target.value)}
                className="flex-1 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
              />
              <button
                className = "text-green-900 "
                onClick={() => {
                  dispatch(
                    updateUserName({ id: user.id, username: newUsername , name : changeName })  
                  );
                }}
              >
                <IoMdRefresh/>
              </button>
            </div> 
            {/* delete user */}
            <div className="flex items-center space-x-4 mb-4">
            <button className="absolute top-2 right-2 ">
              <MdDelete
                className="text-red-600"
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                  toast.error("Deleted...!");
                }}
              />
            </button>
            </div>  
          </div>
        ))}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </div>
  );
}

export default Home;
