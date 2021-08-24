import React from 'react'
import { Route, Router, Link } from 'react-router-dom'
import CreateNotice from '../CreateNotice/CreateNotice';
import "./Home.css"

function Home() {
    return (
				<div className="App">
					<nav className="nav">
						<ul>
							<li className="logo">NOTICEBOARD</li>
							<Link to="/create-notice">
								<li className="CreateNotice">Create a Notice</li>
							</Link>
						</ul>
					</nav>
					<p className="org">MES COLLEGE OF ENGINEERING</p>
					<div className="noticeBoard">
						<div className="notice">
							<div className="noticeContent">
								<span className="heading"></span>
								<span className="noticeText"></span>
							</div>
							<div className="reactions"></div>
						</div>
					</div>
				</div>
		);
}

export default Home
