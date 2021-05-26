import React, {useEffect} from 'react'
import { useDispatch, /*useSelector*/ } from 'react-redux'
import { /*Button,*/ Card, Col, /*Form,*/ ListGroup, /*ListGroupItem*/ } from 'react-bootstrap'
import {  createProductReview } from '../actions/productActions'
// import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const ProductReview = ({match}) => {

    const dispatch = useDispatch()

        useEffect(() => {
        dispatch(createProductReview(match.params.id))
    }, [dispatch, match])


    return (
        <>
         <Col md={6}>
            <ListGroup>
                <ListGroup.Item>Reviews</ListGroup.Item>
            </ListGroup>
         </Col>
         <Col md={6}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>Review Form</ListGroup.Item>
                </ListGroup>
            </Card>
         </Col>
        </>
    )
}

export default ProductReview
