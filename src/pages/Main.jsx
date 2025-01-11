import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'
import Image1 from '../images/i1.svg'
const Main = () => {
  const MainSection = styled.section`
    background-color: #e2e8f0;
  `
  const InnerTitle = styled.h5`
    color: #754ffe;
    padding-top: 10rem;
    margin-bottom: 1rem;
  `
  const InnerH1 = styled.h1`
    color: #1e293b;
    margin-bottom: 1rem;
  `
  const InnerP1 = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    margin: auto;
    margin-bottom: 4rem;
  `
  const Card1 = styled.div`
    padding: 3rem;
    background-color: #ffffff;
  `
  const ImageDiv = styled.div`
    width: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: blue;
  `
  const Introduction = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      Course: 'Courses - 1 ',
      lesson: '6 Lessons',
      hour: '1 HOUR 12 MIN',
      isFree: true,
      p: 'In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare',
      Ateg: 'View Chapter Details +'
    }
  ]

  const InnerH4 = styled.h4``
  return (
    <MainSection>
      <Container>
        <InnerTitle className='text-center'>Course Description</InnerTitle>
        <InnerH1 className='text-center'>What will you learn?</InnerH1>
        <InnerP1 className='text-black-50 text-center w-50'>
          Vanilla JS is a fast, lightweight, cross-platformframework for
          building incredible, powerful JavaScript applications.
        </InnerP1>
        <Row>
          <Col {...{ md: 6 }}>
            <Card1 className='d-flex align-items-center '>
              <ImageDiv className='me-4'>
                <img src={Image1} alt='' />
              </ImageDiv>
            </Card1>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </MainSection>
  )
}

export default Main
