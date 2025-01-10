import React from 'react'
import { Col, Container, Row, Button, Form, FormGroup, Input } from 'reactstrap'
import { GoClock } from 'react-icons/go'
import { LiaVideoSolid } from 'react-icons/lia'
import { LuUsers } from 'react-icons/lu'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <Container className='my-5'>
      <Row className='align-items-center'>
        <Col md={6}>
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
              backgroundColor: '#1f9e5a',
              border: 'none',
              height: '50px',
              width: '150px'
            }}
          >
            Watch Preview
          </Button>
        </Col>

        <Col md={5}>
          <div className='p-4 border rounded shadow'>
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
                Twitter
              </Button>
              <Button
                style={{
                  backgroundColor: '#ededed',
                  border: 'none',
                  color: 'black',
                  fontFamily: 'inherit'
                }}
                className='flex-fill'
              >
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
              <a href='#terms' className='text-primary'>
                Terms of Use
              </a>
              ,{' '}
              <a href='#privacy' className='text-primary'>
                Privacy Policy
              </a>
              , and{' '}
              <a href='#data' className='text-primary'>
                Data Policy
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
