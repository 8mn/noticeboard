import React from "react";
import styles from "./CreateNotice.module.css";
import Nav from "../Nav/Nav";

function CreateNotice() {
	return (
		<div className={styles.container}>
			<Nav hide />
			<div className={styles.formContainer}>
				<form>
					<div className={styles.formField}>
						<label htmlFor="Title">Title</label>
						<input type="text"/>
					</div>
					<div className={styles.formField}>
						<label htmlFor="Title">Description</label>
						<input type="text" />
					</div>
				</form>
				<button
					onClick={() => {
						console.log("Hello");
					}}
					className={styles.publishBtn}
				>
					Publish
				</button>
			</div>
		</div>
	);
}

export default CreateNotice;
