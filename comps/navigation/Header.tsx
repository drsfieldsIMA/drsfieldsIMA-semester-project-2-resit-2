/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import useDeviceSize from "./DeviceSize";
import Link from "next/link";
import theme from "../../theme/theme";
import { destroyCookie, parseCookies } from "nookies";
import useLocalStorage from "comps/config/useLocalStorage";
import router from "next/router";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { NextComponentType } from "next";
import { LoginTwoTone } from "@mui/icons-material";
import { PersonRounded } from "@mui/icons-material";
import Modal from "react-modal";
import { ReactQueryDevtools } from "react-query-devtools";
import searchArticles from "../../comps/common/lists/renderResultList";
import useSWR, { SWRConfig } from "swr";
import { API_MONGOOSE_URL } from "utils";
import ArticleSearchResult from "../ArticlesSearchResults";
import { useQuery } from "react-query";
import { useAuth } from "../config/AuthContext";
import useKeyPress from "../hooks/useKeyPress";
Modal.setAppElement("#__next");

function logOut() {
	const doLogout = confirm("Are you sure?");
	if (doLogout) {
		window.localStorage.clear();
		// Destroy
		destroyCookie(null, "jwt");
		setTimeout(() => {
			router.push("/");
		}, 1000);
	}
}

const Header: any = ({
	articles,
	cookies,
}: {
	articles: any;
	cookies: any;
}) => {
	const auth = useAuth();
	let adminName: any = null;

	console.log(" header articles==>", articles);

	const [inputValue, setInputValue] = React.useState("");
	const [searchTerm, setSearchTerm] = React.useState("");
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	if (typeof auth !== "undefined") {
		adminName = auth?.user?.username;
		if (typeof auth[0] !== "undefined") {
			adminName = auth[0]?.user?.username;
		}
	}

	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);

	const [width, height] = useDeviceSize();

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	const eventToSearch: boolean = useKeyPress("Enter");

	if (eventToSearch == true) {
		if (inputValue.length > 0 && !modalIsOpen) {
			setSearchTerm(inputValue);
			setModalIsOpen(true);
		}
	}

	const { isLoading, isError, isSuccess, data, status } = useQuery(
		searchTerm && ["searchArticles", searchTerm],
		() => searchArticles(searchTerm, articles),
		{
			enabled: searchTerm.length > 0,
		}
	);

	const renderResultList = (searchTerm, data) => {
		if (data) {
			return <ArticleSearchResult articles={data} />;
		}
		return <></>;
	};
	return (
		<div>
			<ReactQueryDevtools />
			<nav className='header'>
				<div className='logo'></div>
				{/* <div className='tagline'>Providing good news to a global market!</div> */}
				<div className='tagline'>
					<input onChange={(e) => setInputValue(e.target.value)} />
					<button
						onClick={() => (setModalIsOpen(true), setSearchTerm(inputValue))}>
						Search
					</button>
				</div>

				<IconButton
					size='large'
					edge='end'
					color='inherit'
					aria-label='menu'
					onClick={toggleNav}
					className='toogle-nav'
					sx={{
						display: {
							mr: 2,
							xs: "inline-flex",
							lg: "none",
						},
					}}>
					<MenuIcon />
				</IconButton>
				{(toggleMenu || width > 768) && (
					<ul className='list'>
						<li className='items'>
							<Link href='/'>
								<a className='items__link'>Home</a>
							</Link>
						</li>
						{auth && auth?.jwt ? (
							<>
								<li className='items'>
									<Link href='/filter'>
										<a className='items__link'>Articles</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/admin'>
										<a className='items__link'>Dashboard</a>
									</Link>
								</li>
								<Button
									onClick={logOut}
									className='items logout-btn'
									component='a'
									startIcon={<PersonRounded fontSize='small' />}>
									Logout
								</Button>
							</>
						) : (
							<>
								<li className='items'>
									<Link href='/sport'>
										<a className='items__link'>Sport</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/science'>
										<a className='items__link'>Science</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/culture'>
										<a className='items__link'>Culture & Nature</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/authors'>
										<a className='items__link'>Authors</a>
									</Link>
								</li>
								<Button
									onClick={() => router.push("/login")}
									className='items login-btn'
									component='a'
									startIcon={<LoginTwoTone fontSize='small' />}>
									Login
								</Button>
							</>
						)}
					</ul>
				)}
			</nav>
			<Modal isOpen={modalIsOpen}>
				<strong>Searching Articles for {searchTerm}</strong>
				{searchTerm.length > 0 ? renderResultList(searchTerm, data) : null}
				<button onClick={() => setModalIsOpen(false)}>Go Back</button>
			</Modal>
		</div>
	);
};

Header.propTypes = {
	onSidebarOpen: PropTypes.func,
	articles: PropTypes.any,
	cookies: PropTypes.node,
};

export default Header;
