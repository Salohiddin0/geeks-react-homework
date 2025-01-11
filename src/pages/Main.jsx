import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'
import Image1 from '../images/i1.svg'
import Image2 from '../images/i2.svg'
import Image3 from '../images/i3.svg'
import Image4 from '../images/i4.svg'
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
    border-radius: 10px;
    padding: 3rem;
    background-color: #ffffff;
  `
  const ImageDiv = styled.div`
    width: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: blue;
  `
  const Header = styled.section``

  const Span1 = styled.span`
    color: black;
    font-weight: bold;
    margin-right: 1rem;
  `
  const Span2 = styled.span`
    font-weight: bold;
    margin-right: 1rem;
  `
  const Span3 = styled.span`
    font-weight: bold;
  `
  const Secttion2 = styled.section``

  const Link = styled.a``

  const CardP = styled.p``

  const CardValues = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      Course: 'Courses - 1 ',
      lesson: '6 Lessons',
      hour: '1 HOUR 12 MIN',
      isFree: true,
      p: 'In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare',
      link: 'View Chapter Details +',
      image: Image1
    },
    {
      id: 2,
      title: 'Variables and Constants',
      Course: 'Courses - 3 ',
      lesson: '8 Lessons',
      hour: '10 MIN',
      isFree: true,
      p: 'Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs.',
      link: 'View Chapter Details +',
      image: Image2
    },
    {
      id: 3,
      title: 'JavaScript Beginning',
      Course: 'Courses - 2',
      lesson: '4 Lessons',
      hour: '32 MIN',
      isFree: true,
      p: 'Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada.',
      link: 'View Chapter Details +',
      image: Image3
    },
    {
      id: 4,
      title: 'Types and Operators',
      Course: 'Courses - 4',
      lesson: '10 Lessons',
      hour: '32 MIN',
      isFree: true,
      p: 'In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl',
      link: 'View Chapter Details +',
      image: Image4
    }
  ]

  const InnerH3 = styled.h3``
  return (
    <MainSection>
      <Container>
        <InnerTitle className='text-center'>Course Description</InnerTitle>
        <InnerH1 className='text-center'>What will you learn?</InnerH1>
        <InnerP1 className='text-black-50 text-center w-50'>
          Vanilla JS is a fast, lightweight, cross-platformframework for
          building incredible, powerful JavaScript applications.
        </InnerP1>
        <Row className='g-4'>
          {CardValues.map(card => {
            const { id, title, Course, lesson, hour, isFree, p, link, image } =
              card
            return (
              <>
                <Col {...{ md: 6 }}>
                  <Card1 className='d-flex align-items-center'>
                    <ImageDiv className='me-4'>
                      <img src={image} alt='' />
                    </ImageDiv>
                    <Header className=''>
                      <InnerH3>{title}</InnerH3>
                      <Span1>{Course}</Span1>
                      <Span2 className='text-black-50'>{lesson}</Span2>
                      <Span3 className='text-black-50'>{hour}</Span3>
                      <Secttion2 className=''>
                        <CardP className='text-black-50'>{p}</CardP>
                        <Link>{link}</Link>
                      </Secttion2>
                    </Header>
                  </Card1>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
    </MainSection>
  )
}

export default Main
