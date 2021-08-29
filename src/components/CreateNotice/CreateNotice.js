import React, { useState, useEffect } from "react";
import styles from "./CreateNotice.module.css";
import Nav from "../Nav/Nav";
import {
	fetchNotice,
	createNotice,
	deleteNotice,
	updateNotice,
} from "../../api/index";

//two problems
//1. update below posts after creating new notice or updating a new notice

function CreateNotice() {
	const [noticelist, setNoticelist] = useState([]);
	const [id, setid] = useState(null);
	const [Notice, setNotice] = useState({
		title: "",
		description: "",
		creator: "Principal",
		tags: [],
	});

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

	const makeNewNotice = () => {
		if (id) {
			console.log(Notice);
			updateNotice(id, Notice);
		} else if (!Notice.title) {
			alert("Title cant be empty");
		} else {
			console.log(Notice);
			createNotice(Notice);
		}
	};

	return (
		<div className={styles.container}>
			<Nav hide />
			<div className={styles.formContainer}>
				<form>
					<div className={styles.formField}>
						<label htmlFor="Title">Title</label>
						<input
							type="text"
							value={Notice.title ? Notice.title : ""}
							onChange={(e) => setNotice({ ...Notice, title: e.target.value })}
						/>
					</div>
					<div className={`${styles.formField} ${styles.description}`}>
						<label htmlFor="Title">Description</label>
						<textarea
							className={styles.textarea}
							value={Notice.description ? Notice.description : ""}
							onChange={(e) =>
								setNotice({ ...Notice, description: e.target.value })
							}
						></textarea>
					</div>
				</form>
				<button
					onClick={() => {
						makeNewNotice();
					}}
					className={styles.publishBtn}
				>
					{id ? "Re-Publish" : "Publish"}
				</button>
			</div>
			<div className={styles.createdNotice}>
				<p className={styles.tag}>Created notice</p>
				{noticelist.map((notice) => (
					<div className={styles.notice} key={notice._id}>
						<div className={styles.options}>
							<button onClick={() => deleteNotice(notice._id)}>DELETE</button>
							<button
								onClick={() => {
									console.log(notice._id);
									setid(notice._id);
									setNotice(notice);
								}}
							>
								UPDATE
							</button>
						</div>
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
