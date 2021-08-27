import React from "react";
import styles from "../CreateNotice/CreateNotice";
import Nav from "../Nav/Nav";

function CreateNotice() {
	return (
		<div className={styles.container}>
			<Nav />
			<div className="container">
				<form >
					<div className="formField">
						<label htmlFor="Title">Title</label>
						<input type="text" placeholder="Title" />
					</div>
					<div className="formFieled">
						<label htmlFor="Title">Description</label>
						<input type="text" placeholder="Description" />
					</div>
				</form>
				<button
					onClick={() => {
						console.log("Hello");
					}}
				>
					Publish
				</button>
			</div>
		</div>
	);
}

export default CreateNotice;
