import React from 'react';

// Components
import LogoArea from './LogoArea';

// Icons
import { FaUserSecret } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { FaClipboardList } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';


const SidebarList = () => {


	return (
		<div className="sidebar-container">
			<LogoArea />
			<nav className="sidebar-list">
				<ul className="list-group">

					<li className="list list-group-item">
						<a href="#about" className="float-left">
							<FaUserSecret />
							<span className="link-name">About</span>
						</a>
					</li>
					<li className="list list-group-item">
						<a href="#skills" className="float-left">
							<GoTools />
							<span className="link-name">Skills</span>
						</a>
					</li>
					<li className="list list-group-item">
						<a href="#projects" className="float-left">
							<FaClipboardList />
							<span className="link-name">Projects</span>
						</a>
					</li>
					<li className="list list-group-item">
						<a href="#experience" className="float-left">
							<IoMdTrendingUp />
							<span className="link-name">Experience</span>
						</a>
					</li>
					<li className="list list-group-item">
						<a href="#education" className="float-left">
							<IoMdSchool />
							<span className="link-name">Education</span>
						</a>
					</li>
					<li className="list list-group-item">
						<a href="#contact" className="float-left">
							<IoIosMail />
							<span className="link-name">Contact</span>
						</a>
					</li>

					<li className="list list-group-item blank-list"></li>

				</ul>
			</nav>
		</div>
	);
	
};


export default SidebarList;