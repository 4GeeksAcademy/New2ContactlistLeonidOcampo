import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { ContactCard } from "../component/ContactCard";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Contact List</h1>
		<div className="list-group contact-list">
			<ContactCard
			  name={"leo"}
			  address={"calle numio"}
			  email={"leo@office.com"}
			  phone={"+579856321"}
			  img={rigoImage}
			/>
		</div>

		<div className="list-group contact-list">
			<ContactCard
			  name={"Sumerce"}
			  address={"calle numio"}
			  email={"sumerce@office.com"}
			  phone={"+5745623125"}
			  img={rigoImage}
			/>
		</div>

		<div className="list-group contact-list">
			<ContactCard
			  name={"parce"}
			  address={"calle rigomontoya"}
			  email={"parce@office.com"}
			  phone={"+574523652"}
			  img={rigoImage}
			/>
		</div>



		
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
