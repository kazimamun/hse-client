import React from 'react';
import './Header.css';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
			<div class="clear"></div>
			<div class="container_12">
				<div class="grid_12">
					<h1>
                        <Link to="/">Home</Link>
                    </h1>
					<div class="menu_block">
						<nav class="horizontal-nav full-width horizontalNav-notprocessed">
							<ul class="sf-menu">
								<li>
									<a href="index.html">Home</a>
									<ul>
										<li><a href="#">history</a></li>
										<li><a href="#">offers</a></li>
										<li>
											<a href="#">news</a>
											<ul>
												<li><a href="#">fresh </a></li>
												<li><a href="#">archive</a></li>
											</ul>
										</li>
									</ul> 
								</li>
								<li class="current"><a href="index-1.html">Videos </a></li>
								<li><a href="index-2.html">Campaigns</a></li>
								<li><a href="index-3.html">Volunteer </a></li>
								<li><a href="index-4.html">Contacts</a></li>
							</ul>
						</nav>
						<div class="clear"></div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
    );
};

export default Header;