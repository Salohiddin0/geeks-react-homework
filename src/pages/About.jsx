import React from 'react'
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Context
} from 'reactstrap'
import { GoClock } from 'react-icons/go'
import { LiaVideoSolid } from 'react-icons/lia'
import { LuUsers } from 'react-icons/lu'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoLogoGoogle } from 'react-icons/io'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TiTick } from 'react-icons/ti'
import styled from 'styled-components'
// import Bgsvg from '../images/bg.svg'

const About = () => {
  const Componies = [
    {
      name: 'Shareable Certificate'
    },
    {
      name: 'Flexible Deadlines'
    },
    {
      name: '100% Online Courses'
    },
    {
      name: 'Shareable Certificate'
    }
  ]

  return (
    <Container className='my-5'>
      <Row className='align-items-center'>
        <Col style={{ paddingTop: '4rem' }} md={6}>
          <h1
            style={{ fontSize: '3.5rem', fontWeight: '700' }}
            className='mb-3'
          >
            Become a Vanilla <br /> JavaScript Developer
          </h1>
          <p
            className='text-black-50 mb-4'
            style={{ fontSize: '1.25rem', fontWeight: '500' }}
          >
            In this tutorial, we are going to learn about JavaScript (Vanilla
            JS) - for building incredible, powerful JavaScript applications.
          </p>
          <div className='mb-1'>
            <span
              className='me-3'
              style={{ color: '#F59E0B', fontSize: '1.4rem' }}
            >
              <GoClock />
            </span>
            <span className='text-black-50'>4 Hours</span>
          </div>
          <div className='mb-1'>
            <span
              className='me-3'
              style={{ color: '#F59E0B', fontSize: '1.4rem' }}
            >
              <LiaVideoSolid />
            </span>
            <span className='text-black-50'>12 Videos</span>
          </div>
          <div className='mb-1'>
            <span
              className='me-3'
              style={{ color: '#F59E0B', fontSize: '1.4rem' }}
            >
              <LuUsers />
            </span>
            <span className='text-black-50'>10,234+ Enrolled</span>
          </div>
          <br />
          <Button
            style={{
              marginTop: '20px',
              backgroundColor: '#1f9e5a',
              border: 'none',
              height: '50px',
              width: '150px'
            }}
          >
            Watch Preview
          </Button>
        </Col>

        <Col
          style={{ paddingTop: '9rem' }}
          className='ms-auto position-relative'
          md={5}
        >
          <div
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.24) 4px 6px 25px',
              borderRadius: '8px'
            }}
            className='p-4 '
          >
            <h2 className='mb-4'>Create Free Account</h2>
            <div className='d-flex justify-content-between mb-3'>
              <Button
                style={{
                  backgroundColor: '#ededed',
                  border: 'none',
                  color: 'black',
                  fontFamily: 'inherit'
                }}
                className='flex-fill me-2'
              >
                <IoLogoGoogle className='me-2 text-danger' />
                Google
              </Button>
              <Button
                style={{
                  backgroundColor: '#ededed',
                  border: 'none',
                  color: 'black',
                  fontFamily: 'inherit'
                }}
                className='flex-fill me-2'
              >
                <svg
                  style={{ marginRight: '5px' }}
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='20'
                  height='20'
                  viewBox='0 0 48 48'
                >
                  <path
                    fill='#03A9F4'
                    d='M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429'
                  ></path>
                </svg>
                Twitter
              </Button>
              <Button
                style={{
                  backgroundColor: '#ededed',
                  border: 'none',
                  color: 'black',
                  fontFamily: 'inherit'
                }}
                className='flex-fill me-2'
              >
                <svg
                  style={{ marginRight: '5px' }}
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='20'
                  height='20'
                  viewBox='0 0 48 48'
                >
                  <path
                    fill='#3f51b5'
                    d='M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z'
                  ></path>
                  <path
                    fill='#fff'
                    d='M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z'
                  ></path>
                </svg>
                Facebook
              </Button>
            </div>
            <p className='text-center'>OR</p>
            <Form>
              <FormGroup controlId='formEmail' className='mb-3'>
                <Input type='email' placeholder='Email' />
              </FormGroup>
              <FormGroup controlId='formPassword' className='mb-3'>
                <Input type='password' placeholder='Password' />
              </FormGroup>
              <Button
                type='submit'
                style={{ backgroundColor: '#6343D8' }}
                className='w-100 mb-5'
              >
                Start Courses for Free
              </Button>
              <hr />
            </Form>
            <p
              className='mt-3 text-center text-muted'
              style={{ fontSize: '0.9rem' }}
            >
              By continuing you accept the{' '}
              <span
                style={{
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
                className='text-black'
              >
                Terms of Use
              </span>
              ,{' '}
              <span
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                className='text-black'
              >
                Privacy Policy
              </span>
              , and{' '}
              <span
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                className='text-black'
              >
                Data Policy
              </span>
              .
            </p>
          </div>
        </Col>
      </Row>
      <Footer>
        <ul className='list-unstyled d-flex justify-content-between'>
          {Componies.map(c => {
            return (
              <li className='d-flex align-items-center gap-2'>
                <GoldTag>
                  <TiTick />
                </GoldTag>
                {c.name}
              </li>
            )
          })}
        </ul>
      </Footer>
    </Container>
  )
}

const GoldTag = styled.span`
  color: gold;
`
const Footer = styled.footer`
  padding: 150px 0 10px 0;
`

export default About
