/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, useContext } from "react";
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
import { AuthContext } from "../config/AuthContext";
import useKeyPress from "../hooks/useKeyPress";
import { Pageview } from "@material-ui/icons";

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

const Header: any = ({ articles }: { articles: any }) => {
	const [auth, setAuth] = useContext(AuthContext);
	let adminName: any = null;

	console.log(" header articles==>", articles);

	const [inputValue, setInputValue] = React.useState("");
	const [searchTerm, setSearchTerm] = React.useState("");
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	if (typeof auth !== "undefined") {
		adminName = auth?.user?.username;
	}

	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);

	const [width, height] = useDeviceSize();

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	const toggleLogo = () => {
		router.pathname === "/" ? toggleNav() : null;
	};

	const eventToSearch: boolean = useKeyPress("Enter");
	const eventToClose: boolean = useKeyPress("Esc");
	if (eventToSearch == true) {
		if (inputValue.length > 0 && !modalIsOpen) {
			setSearchTerm(inputValue);
			setModalIsOpen(true);
		}
	}

	if (eventToClose == true) {
		if (modalIsOpen) {
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

	const renderResultList = (searchTerm, data, setModalIsOpen) => {
		if (data) {
			return (
				<ArticleSearchResult
					searchTerm={searchTerm}
					articles={data}
					setModalIsOpen={setModalIsOpen}
				/>
			);
		}
		return <></>;
	};

	return (
		<div>
			<nav className='header'>
				<Link href='/'>
					<a className='logo-link' onClick={() => toggleLogo()}>
						<div className='logo'></div>
					</a>
				</Link>
				{/* <div className='tagline'>Providing good news to a global market!</div> */}
				<div className='tagline'>
					<input
						className='header-input'
						onChange={(e) => setInputValue(e.target.value)}></input>
					<IconButton
						onClick={() => (setModalIsOpen(true), setSearchTerm(inputValue))}
						className='header-input__btn'
						component='a'
						size='large'
						color='inherit'>
						<Pageview />
					</IconButton>
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
					<MenuIcon sx={{ fontSize: "3rem" }} />
				</IconButton>
				{(toggleMenu || width > 768) && (
					<ul className='list'>
						<li className='items'>
							<Link href='/'>
								<a className='items__link' onClick={() => toggleNav()}>
									Home
								</a>
							</Link>
						</li>
						{auth && auth?.jwt ? (
							<>
								<li className='items'>
									<Link href='/search'>
										<a className='items__link' onClick={() => toggleNav()}>
											Articles
										</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/admin'>
										<a className='items__link' onClick={() => toggleNav()}>
											Dashboard
										</a>
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
										<a className='items__link' onClick={() => toggleNav()}>
											Sport
										</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/science'>
										<a className='items__link' onClick={() => toggleNav()}>
											Science
										</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/culture'>
										<a className='items__link' onClick={() => toggleNav()}>
											Culture & Nature
										</a>
									</Link>
								</li>
								<li className='items'>
									<Link href='/authors'>
										<a className='items__link' onClick={() => toggleNav()}>
											Authors
										</a>
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
				{searchTerm.length > 0
					? renderResultList(searchTerm, data, setModalIsOpen)
					: null}
				<button onClick={() => setModalIsOpen(false)}>Go Back</button>
			</Modal>
		</div>
	);
};

Header.propTypes = {
	onSidebarOpen: PropTypes.func,
	articles: PropTypes.any,
};

export default Header;
