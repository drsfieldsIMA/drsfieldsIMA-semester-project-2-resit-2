/** @format */

import { API_HEROKU_URL } from "utils/env";
import router from "next/router";
import { useState } from "react";
import { parseCookies } from "nookies";
import PropTypes from "prop-types";

export default function DeletePostButton({ articleID }) {
	const [errorMessage, setError] = useState("");
	const url = `{${API_HEROKU_URL}/articles/${articleID}}`;

	async function handleDelete() {
		const cookies = parseCookies();
		const jwt = cookies?.jwt;
		const doDelete = confirm("Are you sure?");
		if (doDelete) {
			try {
				const deleteArticle = await fetch(url, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${jwt}`,
						"Content-Type": "application/json",
					},
				});
				const deletedPost = await deleteArticle.json();

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
