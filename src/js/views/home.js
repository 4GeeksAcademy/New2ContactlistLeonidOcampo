import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"

import { ContactCard } from "../component/ContactCard";

export const Home = () => {

	const {store,actions}=useContext(Context)
	const {contacts}=store

	return (
	 <div className="text-center mt-5">
	   <div className="container">
		 <h1>Contact List</h1>
		  <div className="list-group contact-list">
			{contacts.map((contact, index)=>
			<ContactCard
			  name={contact.name}
			  address={contact.address}
			  email={contact.email}
			  phone={contact.phone}
			  img={rigoImage}
			  key={index}
			/>
		   )}
		  </div>


		  <a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		  </a>
	   </div>	
	</div>
	)

};
