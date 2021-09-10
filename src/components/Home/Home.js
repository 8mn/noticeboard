import React, { useState,useEffect } from "react";
import Nav from "../Nav/Nav";
import "./Home.css";
import { fetchNotice } from "../../api/index";
import {useLocation} from "react-router-dom"


function Home() {

	const location = useLocation();

	const [noticelist, setNoticelist] = useState([]);
	async function getNotice() {
		try {
			const { data } = await fetchNotice;
			setNoticelist(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getNotice();
		console.log(location);
	},[location]);

	return (
		<div className="App">
			<Nav />
			<p className="org">SOME COLLEGE NAME</p>
			<div className="noticeBoard">
				{noticelist.length? noticelist.map((notice) => (
					<div className="notice" key={notice._id}>
						{console.log(noticelist)}
						<div className="noticeContent">
							<span className="heading">{notice.title}</span>
							<div className="noticeInfo">
								<span className="creator">By {notice.creator}</span>
								<span className="createdAt">{notice.createdAt}</span>
							</div>
							<span className="noticeText">{notice.description}</span>
						</div>
					</div>
				)):<div className="emptyState">No new notices today!</div>}
			</div>
		</div>
	);
}

export default Home;
