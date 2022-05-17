import { useState } from "react";
import ContactCard from "./ContactCard";
const initState = [
  {
    id: 1,
    img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg",
    name: "Nrupul Dev",
    email: "nrupul@gmail.com",
    mbno: "9374830275",
  },
  {
    id: 2,
    img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg",
    name: "Yogesh Bhat",
    email: "Yogesh@gmail.com",
    mbno: "6492749323",
  },
  {
    id: 3,
    img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Arjun_3848ab5fe7.jpg",
    name: "Arjun Thakur",
    email: "Arjun@gmail.com",
    mbno: "95673928355",
  },
  {
    id: 4,
    img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Ritesh_Firodiya_4_8a667ac9c8.jpg",
    name: "Ritesh Firodiya",
    email: "Ritesh@gmail.com",
    mbno: "9923221604",
  },
  {
    id: 5,
    img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg",
    name: "Albert Sebastian",
    email: "Albert@gmail.com",
    mbno: "9854731822",
  },
  {
    id: 6,
    img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/swanand_d399feddf5.jpeg",
    name: "Swanand kadam",
    email: "Swanand@gmail.com",
    mbno: "8423763828",
  },
];

function ContactList() {
  const [contactList, setContactLists] = useState(initState);

  return (
    <div className="App">
      <h1>Contact Details</h1>
      <br></br>
      {contactList.map((item) => (
        <div key={item.id}>
          <ContactCard
            id={item.id}
            img={item.img}
            name={item.name}
            phone={item.mbno}
            email={item.email}
          ></ContactCard>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
