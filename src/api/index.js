import axios from "axios";

const url = "http://localhost:5000/notice";

export const fetchNotice = axios.get(url);
export const createNotice = (newNotice) =>
	axios.post(`${url}/create`, newNotice);
export const updateNotice = (id, updatedNotice) =>
	axios.patch(`${url}/update/${id}`, updatedNotice);

export const deleteNotice = (id) => axios.delete(`${url}/delete/${id}`);
