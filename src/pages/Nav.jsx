import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  Input
} from 'reactstrap'
import { ChevronDown, Menu, Moon, Search } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavbarComponent () {
  const [isDark, setIsDark] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => setIsOpen(!isOpen)

  return (
    <Navbar
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
      }}
      light
      expand='md'
      className=''
    >
      <div className='container'>
        <NavbarBrand href='/' className='d-flex align-items-center'>
          {/* <div
            className='bg-primary rounded-lg'
            style={{ width: '32px', height: '32px' }}
            ></div> */}
          <img src='../images/logo.svg' alt='Logo' />
          <span className='ms-2 fs-4 fw-bold'>Geeks</span>
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar}>
          <Menu className='w-5 h-5' />
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink href='#' className='d-flex align-items-center'>
                Browse
                <ChevronDown className='ms-1 w-25' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='d-flex align-items-center'>
                Landings
                <ChevronDown className='ms-1 w-25' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='d-flex align-items-center'>
                Pages
                <ChevronDown className='ms-1 w-25' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='d-flex align-items-center'>
                Accounts
                <ChevronDown className='ms-1 w-25' />
              </NavLink>
            </NavItem>
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
              className='p-2 text-dark'
              onClick={() => setIsDark(!isDark)}
            >
              <Moon className='w-5 h-5' />
            </Button>

            <div className='d-none d-md-flex align-items-center gap-2'>
              <Button
                style={{
                  fontFamily: 'initial',
                  boxShadow: 'none',
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
