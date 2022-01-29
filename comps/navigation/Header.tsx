/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useDeviceSize from "./DeviceSize";
import Link from "next/link";
import theme from "../../theme/theme";

const Header: any = () => {
	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);

	const [width, height] = useDeviceSize();

	const toggleNav = () => {
		console.log("Toogle Nav===>", toggleMenu);
		setToggleMenu(!toggleMenu);
		console.log("Toogle Nav===>", toggleMenu);
	};

	return (
		<nav className='header'>
			<div className='logo'></div>
			<div className='tagline'>Providing good news to a global market!</div>
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
							<a className='items__link'>Events & Culture</a>
						</Link>
					</li>
					<li className='items'>
						<Link href='/about'>
							<a className='items__link'>About</a>
						</Link>
					</li>
					<Button
						onClick={() => router.push("/login")}
						className='items login-btn'>
						Login
					</Button>
				</ul>
			)}
		</nav>
	);
};

Header.propTypes = {
	onSidebarOpen: PropTypes.func,
};

export default Header;
