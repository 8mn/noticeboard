import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({hide}) {
	return (
		<nav className={styles.nav}>
			<ul>
				<Link to="/">
					<li className={styles.logo}>NOTICEBOARD</li>
				</Link>
				<Link to="/dashboard">
					<li className={styles.CreateNotice}>
						{hide ? "" : "Dashboard"}
					</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
