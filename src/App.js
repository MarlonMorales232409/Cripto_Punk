import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import dummy from "./assets/5.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import { CircleLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function App() {
	const [punkListData, setPunkListData] = useState([]);
	const [selectedPunk, setSelectedPunk] = useState(0);

	useEffect(() => {
		const getMyNfts = async () => {
			const openSeaData = await axios.get(
				"https://testnets-api.opensea.io/api/v1/assets?owner=0xE56e3DC76a7b0525EC286E85cB7656e0D7D42b2f&order_direction=desc&offset=0&limit=20"
			);

			const data = openSeaData.data.assets;

			const sortedPunk = [];

			for (let i = 0; i < data.length; i++) {
				data.filter((punk) =>
					Number(punk.token_id) === i ? sortedPunk.push(punk) : punk
				);
			}

			setPunkListData(sortedPunk);
		};

		getMyNfts();
	}, []);

	console.log(punkListData);

	return (
		<div className="App">
			<Header />
			{punkListData.length > 0 ? (
				<>
					<Main
						punkListData={punkListData}
						selectedPunk={selectedPunk}
					/>
					<PunkList
						punkListData={punkListData}
						setSelectedPunk={setSelectedPunk}
					/>
				</>
			) : (
				<CircleLoader color={"#ffffff"} css={override} size={50} />
			)}
		</div>
	);
}

export default App;
