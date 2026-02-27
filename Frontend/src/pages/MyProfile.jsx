import React from "react";
import { useState } from "react";
import profile from "../assets/profile.png";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Hardi Sathvara",
    email: "hardi.sathvara@example.com",
    image: profile,
    phone: "+91 98765 43210",
    address: { Line1: "Bopal Area", Line2: "Ahmedabad, Gujarat, India" },
    gender: "Female",
    dob: "15 Aug 2003",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-md flex flex-col gap-2 p-5 text-sm">
      <img className='w-36 rounded' src={userData.image} alt="" />
      {isEdit ? (
        <input className="bg-gray-100 text-2xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-2xl text-neutral-800 mt-4">{userData.name}</p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none"/>

      <div>
        <p className="text-neutral-500 underline mt-2"> CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 ">
          <p className="font-medium">Email id:</p>
          {isEdit ? (
            <input className="bg-gray-100 max-w-52"
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.email}</p>
          )}
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input className="bg-gray-100 max-w-52 "
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, address: e.target.value }))
                }
                value={userData.address.Line1}
              />{" "}
              <br />
              <input className="bg-gray-100 "
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, address: e.target.value }))
                }
                value={userData.address.Line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.Line1} <br /> {userData.address.Line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-2" >BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select className="max-w-20 bg-gray-100 "
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}
          <p className="font-medium">DOB:</p>
          {isEdit ? (
            <input className="max-w-28 bg-gray-100"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : 
            <p className="text-gray-500">{userData.dob}</p>
          }
        </div>
      </div>
      <div className="mt-10 ">
        {
          isEdit
          ? <button className=" hover:bg-blue-500 hover:text-white transition-all border border-blue-500 px-8 py-2 rounded-full" onClick={()=>setIsEdit(false)}>Save info</button>
          : <button className=" hover:bg-blue-500 hover:text-white transition-all border border-blue-500 px-8 py-2 rounded-full" onClick={()=> setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
