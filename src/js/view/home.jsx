import React from "react";

//include images into your bundle
import Contador from "../component/Contador.jsx";

//create your first component
const Home = () => {
	return <Contador digitOne="0" digitTwo="0" digitThree="0" digitFour="0" />;
};

export default Home;
