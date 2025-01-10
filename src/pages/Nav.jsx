import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Button,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { ChevronDown, Menu, Moon, Search } from 'lucide-react'
import Logo from '../images/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavbarComponent () {
  const [isDark, setIsDark] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState({
    browse: false,
    landings: false,
    pages: false,
    accounts: false
  })

  const toggleNavbar = () => setIsOpen(!isOpen)

  const toggleDropdown = menu => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }))
  }

  const handleMouseEnter = menu => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [menu]: true
    }))
  }

  const handleMouseLeave = menu => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [menu]: false
    }))
  }

  const dropdownItems = [
    'Web Development',
    'Design',
    'Mobile App',
    'IT Software',
    'Marketing',
    'Music',
    'Life Style',
    'Business',
    'Photography'
  ]
  const dropdownItems2 = [
    'Mentor',
    'Education',
    'Home Academy',
    'Courses',
    'Lead Course',
    'Request Accesss',
    'SaaS',
    'Job Listing'
  ]
  const dropdownItems3 = [
    'Courses',
    'Paths',
    'Blog',
    'Career',
    'Portolio',
    'Mentor',
    'Job',
    'Specialty',
    <hr />,
    'About',
    'Help Center',
    'Pricing',
    'Compare Plan',
    'Contact'
  ]

  const dropdownItems4 = [
    'Instructor',
    'Students',
    'Admin',
    <hr />,
    'Sign in',
    'Sing up',
    'Forgot Password',
    'Edit Profile',
    'Security',
    'Social Profiles',
    'Notifications',
    'Privacy Settings',
    'Delete Profile',
    'Linked Accounts'
  ]

  return (
    <Navbar
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
      }}
      light
      expand='md'
    >
      <img className='' src={Logo} alt='Logo' />
      <div className='container'>
        <NavbarBrand
          href='/'
          className='d-flex align-items-center'
        ></NavbarBrand>

        <NavbarToggler onClick={toggleNavbar}>
          <Menu className='w-5 h-5' />
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            {['Browse', 'Landings', 'Pages', 'Accounts'].map(menu => (
              <Dropdown
                key={menu.toLowerCase()}
                nav
                isOpen={dropdownOpen[menu.toLowerCase()]}
                toggle={() => toggleDropdown(menu.toLowerCase())}
                onMouseEnter={() => handleMouseEnter(menu.toLowerCase())}
                onMouseLeave={() => handleMouseLeave(menu.toLowerCase())}
              >
                <DropdownToggle
                  nav
                  className='d-flex align-items-center'
                  style={{ fontWeight: '500', color: '#18113c' }}
                >
                  {menu}
                  <ChevronDown className='ms-1 w-25' />
                </DropdownToggle>
                <DropdownMenu className='mt-5'>
                  {/* <span className='text-black-50 ms-3'>Accounts</span> */}

                  {menu === 'Landings'
                    ? dropdownItems2.map((item, idx) => (
                        <DropdownItem key={idx}>{item}</DropdownItem>
                      ))
                    : menu === 'Pages'
                    ? dropdownItems3.map((item, idx) => (
                        <DropdownItem key={idx}>{item}</DropdownItem>
                      ))
                    : menu === 'Accounts'
                    ? dropdownItems4.map((item, idx) => (
                        <DropdownItem key={idx}>{item}</DropdownItem>
                      ))
                    : dropdownItems.map((item, idx) => (
                        <DropdownItem key={idx}>{item}</DropdownItem>
                      ))}
                </DropdownMenu>
              </Dropdown>
            ))}
            <div className='d-md-flex position-relative me-3'>
              <Search
                style={{ width: '18px', height: '18px' }}
                className='position-absolute top-50 start-0 translate-middle-y text-muted ms-2'
              />
              <Input
                type='search'
                placeholder='Search Courses'
                className='ps-5'
              />
            </div>
          </Nav>
          <Nav navbar>
            <Button
              color='link'
              className='p-2 text-black-50 me-3'
              onClick={() => setIsDark(!isDark)}
            >
              <Moon className='w-5 h-5' />
            </Button>

            <div className='d-none d-md-flex align-items-center gap-3'>
              <Button
                style={{
                  fontFamily: 'initial',
                  boxShadow: '1px 2px 2px 1px rgba(0, 0, 0, 0.1)',
                  color: 'black',
                  backgroundColor: 'white',
                  border: 'none'
                }}
              >
                Sign In
              </Button>
              <Button color='primary'>Sign Up</Button>
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}
