/** @format */

import { API_MONGOOSE_URL } from "utils";
import router from "next/router";
import { useState } from "react";
import { parseCookies } from "nookies";
import PropTypes from "prop-types";

export default function DeletePostButton({ articleID }) {
	const [errorMessage, setError] = useState("");
	console.log("");
	const url = `{${API_MONGOOSE_URL}/articles/${articleID}}`;

	async function handleDelete() {
		const cookies = parseCookies();
		const jwt = cookies?.jwt;
		const doDelete = confirm("Are you sure?");
		console.log("url ===>", url);
		if (doDelete) {
			try {
				const deleteArticle = await fetch(url, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${jwt}`,
						"Content-Type": "application/json",
					},
				});
				console.log("deleted articles ==>", deleteArticle);
				alert("Success article deleted");
				setTimeout(() => {
					router.push("/admin");
				}, 2000);
			} catch (error) {
				setError(errorMessage);
			}
		}
	}

	return (
		<button type='button' className='delete' onClick={handleDelete}>
			{errorMessage ? "Error" : "Delete"}
		</button>
	);
}

DeletePostButton.propTypes = {
	slug: PropTypes.string,
};
