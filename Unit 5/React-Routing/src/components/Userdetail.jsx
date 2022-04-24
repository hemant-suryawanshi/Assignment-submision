import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

export const Userdetail = () => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUsers(data.data);
    });
  }, []);

  return (
    <div>
      <p style={{ color: "green" }}> User ID : {id} </p>

      <img src={users.avatar} alt="" />

      <div>First Name :{users.first_name} </div>

      <div>Last Name :{users.last_name} </div>
    </div>
  );
};
