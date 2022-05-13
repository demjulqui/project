import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBBtn,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBDropdownLink,
	MDBCollapse
} from 'mdb-react-ui-kit';
import { fetchTopRatedPopular } from '../../API';
import { API_KEY } from '../../API';

export default function Navvb(props) {
	const [ showBasic, setShowBasic ] = useState(false);

	return (
		<MDBNavbar expand="lg" dark bgColor="dark">
			<MDBContainer fluid>
				<MDBNavbarBrand href="#">
					{' '}
					Netflix   <SiHomeassistant />
				</MDBNavbarBrand>

				<MDBNavbarToggler
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowBasic(!showBasic)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>

				<MDBCollapse navbar show={showBasic}>
					<MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current="page" href="#">
								Home
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="#">varieta</MDBNavbarLink>
						</MDBNavbarItem>

						<MDBNavbarItem>
							<MDBDropdown>
								<MDBDropdownToggle tag="a" className="nav-link">
									Generi
								</MDBDropdownToggle>
								<MDBDropdownMenu>
									<MDBDropdownItem>
										<MDBDropdownLink>Action</MDBDropdownLink>
									</MDBDropdownItem>
									<MDBDropdownItem>
										<MDBDropdownLink>Another action</MDBDropdownLink>
									</MDBDropdownItem>
									<MDBDropdownItem>
										<MDBDropdownLink>Something else here</MDBDropdownLink>
									</MDBDropdownItem>
									<MDBDropdownItem divider />
									<MDBDropdownItem>
										<MDBDropdownLink>Separated link</MDBDropdownLink>
									</MDBDropdownItem>
								</MDBDropdownMenu>
							</MDBDropdown>
						</MDBNavbarItem>

						<MDBNavbarItem>
							<MDBNavbarLink disabled href="#" tabIndex={-1} aria-disabled="true">
								Disabled
							</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>

					<form className="d-flex input-group w-auto">
						<input type="search" className="form-control" placeholder="Type query" aria-label="Search" />
						<MDBBtn color="primary">Search</MDBBtn>
					</form>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
