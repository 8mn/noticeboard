import React, { useState } from 'react'
import { useEffect } from 'react';
import Nav from '../Nav/Nav';
import "./Home.css"
import {fetchNotice} from "../../api/index"



function Home() {
	// const [notice,setNotice] = useState({
	// 	notice:{
	// 		title:"",
	// 		description:"",
	// 		creator:"",
	// 		createdAt:"",
	// 		tags:[]
	// 	}
	// })

	const [noticelist, setNoticelist] = useState([])




	useEffect(() => {
		async function getNotice(){
			try {
				const { data } = await fetchNotice;
				setNoticelist(data)
			} catch (error) {
				console.log(error);
			}
		};
		getNotice()
	},[])


    return (
				<div className="App">
                    <Nav />
					<p className="org">MES COLLEGE OF ENGINEERING</p>
					<div className="noticeBoard">
						{
							noticelist.map(notice => (
								<div className="notice" key={notice._id}>
									{console.log(noticelist)}
									<div className="noticeContent">
										<span className="heading">{notice.title}</span>
										<span className="noticeText">{notice.description}</span>
										<span className="creator">{notice.creator}</span>
										<span className="createdAt">{notice.createdAt}</span>
									</div>
									<div className="reactions"></div>
								</div>
							))
						}
					</div>
				</div>
		);
}

export default Home
