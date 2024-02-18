import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import TitleCard from "./TitleCard";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar/>
			<TitleCard/>
			<div>
				<div className="row">
				<Card/>
				</div>
			</div>

		</div>
	);
};

export default Home;
