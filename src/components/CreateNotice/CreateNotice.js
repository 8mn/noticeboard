import React, {useState, useEffect} from "react";
import styles from "./CreateNotice.module.css";
import Nav from "../Nav/Nav";
import { fetchNotice } from "../../api/index";

function CreateNotice() {
		const [noticelist, setNoticelist] = useState([]);

		useEffect(() => {
			async function getNotice() {
				try {
					const { data } = await fetchNotice;
					setNoticelist(data);
				} catch (error) {
					console.log(error);
				}
			}
			getNotice();
		}, []);



	return (
		<div className={styles.container}>
			<Nav hide />
			<div className={styles.formContainer}>
				<form>
					<div className={styles.formField}>
						<label htmlFor="Title">Title</label>
						<input type="text" />
					</div>
					<div className={`${styles.formField} ${styles.description}`}>
						<label htmlFor="Title">Description</label>
						<textarea className={styles.textarea}></textarea>
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
			<div className={styles.createdNotice}>
				<h1>Created notice</h1>
				{noticelist.map((notice) => (
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
				))}
			</div>
		</div>
	);
}

export default CreateNotice;
