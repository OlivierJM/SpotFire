import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// class Header extends Component {
//   render() {
//     return (
//       <div>
//       <header></header>
//         <nav>
//           <ul>
//             <li><a class="active" href="#home">Home</a></li>
//             <li><a href="#firewatch">Fire Watch</a></li>
//             <li><a href="#reports">Reports</a></li>
//             <li><a href="#alerts">Alerts</a></li>
//             <li><a href="#community">Community</a></li>
//             <li><a href="#tips">Tips</a></li>
//           </ul>
//         </nav>
//       </div>
//     );
//   }
// }
class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="light" light expand="md">
          <NavbarBrand href="/">Spotfire</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink href="/components/">Home</NavLink></NavItem>
              <NavItem><NavLink href="#">Fire Watch</NavLink></NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem><NavLink href="#">Reports</NavLink></NavItem>
              <NavItem><NavLink href="#">Alerts</NavLink></NavItem>
              <NavItem><NavLink href="#">Tips</NavLink></NavItem>
              <NavItem><NavLink href="#">Community</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
