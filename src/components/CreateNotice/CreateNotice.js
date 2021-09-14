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
//1. fetch the notice when
//a. someone publishes/republishes a notice
//b. deletes a notice

function CreateNotice() {
	const [noticelist, setNoticelist] = useState([]);
	const [id, setid] = useState(null);
	const [Notice, setNotice] = useState({
		title: "",
		description: "",
		creator: "Principal",
		tags: [],
	});


	

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
	}, [])

	const makeNewNotice = () => {
		if (id) {
			console.log(Notice);
			updateNotice(id, Notice)
			.then(res => console.log(res));
		} else if (!Notice.title) {
			alert("Title cant be empty");
		} else {
			console.log(id);
			createNotice(Notice)
				.then((res) => setNoticelist([...noticelist, res.data]))
				.catch((err) => console.log(err));
		}
	};

	let afterRemoved; 

	const handleDelete = (id) => {
		deleteNotice(id)
			.then(() => {
				afterRemoved = noticelist.filter((notice) => notice._id !== id);
				setNoticelist(afterRemoved);
			})
			.catch((err) => console.log(err));
	}
 
	return (
		<div className={styles.container} id="PublishNotice">
			<Nav hide />
			<div className={!id ? `${styles.formContainer}` : `${styles.republish}`}>
				<form>
					<div className={styles.formField}>
						<label htmlFor="Title">{!id ? "Title" : "New Title"}</label>
						<input
							type="text"
							value={Notice.title ? Notice.title : ""}
							onChange={(e) => setNotice({ ...Notice, title: e.target.value })}
						/>
					</div>
					<div className={`${styles.formField} ${styles.description}`}>
						<label htmlFor="Title">{!id ? "Description" : "New Description"}</label>
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
					{/* Publish */}
				</button>
			</div>
			<div className={styles.createdNotice}>
				<p className={styles.tag}>Created notice</p>
				{noticelist.map((notice) => (
					<div className={styles.notice} key={notice._id}>
						<div className={styles.options}>
							<button
								onClick={(id) => {
									handleDelete(notice._id)
								}}
							>
								Delete
							</button>
							<button
								onClick={() => {
									console.log(notice._id);
									setid(notice._id);
									setNotice(notice);
								}}
							>
								{/* {id? "Re-publish":"Update"} */}
								<a href="#PublishNotice">Update</a>
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
