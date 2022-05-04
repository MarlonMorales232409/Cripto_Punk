import React, { useState, useEffect } from "react";
import instagram from "../assets/owner/instagram.png";
import twitter from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
const Main = ({ selectedPunk, punkListData }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0]);

	useEffect(() => {
		setActivePunk(punkListData[selectedPunk]);
	}, [punkListData, selectedPunk]);

	return (
		<div className="main">
			<div className="mainContent">
				<div className="punkHighlight">
					<div className="punkContainer">
						<img
							className="selectedPunk"
							src={activePunk.image_preview_url}
							alt="selectedPunk"
						/>
					</div>
				</div>
				<div className="punkDetails" style={{ color: "#fff" }}>
					<div className="title">
						{activePunk.name}
						<span className="itemNumber">
							•#{activePunk.token_id}
						</span>
					</div>

					<div className="owner">
						<div className="ownerImageContainer">
							<img
								src={activePunk.owner.profile_img_url}
								alt="owner"
							/>
						</div>
						<div className="ownerNameAndHandle">
							<div>{activePunk.owner.address}</div>
							<div className="ownerHandle">
								{activePunk.owner.user.username
									? activePunk.owner.user.username
									: "@MarlonMorales"}
							</div>
						</div>
						<div className="ownerDetails">
							<div className="ownerLink">
								<img src={instagram} alt="instagram" />
							</div>
							<div className="ownerLink">
								<img src={twitter} alt="twitter" />
							</div>
							<div className="ownerLink">
								<img src={moreIcon} alt="moreIcon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
