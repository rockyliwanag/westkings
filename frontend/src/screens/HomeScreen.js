import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import ProductCarousel from '../components/ProductCarousel'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import cat from '../sr-logo-anim.svg'
import bg_mp4 from '../assets/vid-bg.mp4'
import bg_webm from '../assets/vid-bg.webm'
import logo from '../assets/wk-logo.svg'

const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword
    const dispatch = useDispatch()

    const pageNumber = match.params.pageNumber || 1

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])


    return (
        <>
            <Meta />
            <section className='section-hero'>
                <div className='bg-video'>
                    <video className='bg-video__content' autoPlay preLoad muted loop>
                        <source src={bg_mp4} type='video/mp4'/>
                        <source src={bg_webm} type='video/webm'/>
                            Your browser is not supported!
                    </video>
                </div>
                <div className='bg-video__logo'>
                    <object type="image/svg+xml" data={logo}>svg-animation</object>
                    <span>WEST KINGS</span>
                </div>
            </section>
            <section className='section-shop'>
                <Container>
                    <h1>Top Rated Products</h1>
                    {!keyword && <ProductCarousel />}
                    <h1>Latest Products</h1>
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <Message variant='danger'>{error}</Message>
                    ) : (
                        <>
                            <Row>

                                <object type="image/svg+xml" data={cat}>svg-animation</object>
                                {products.map(product => (
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={product} />
                                    </Col>
                                ))}
                            </Row>
                            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                        </>
                    )}
                </Container>
            </section>

        </>
    )
}

export default HomeScreen
