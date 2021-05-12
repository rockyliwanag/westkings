import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'
import { ORDER_LIST_RESET } from '../constants/orderConstants'

const OrderListScreen = ({ history }) => {
    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList
   
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({type: ORDER_LIST_RESET})
        if(!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }
            dispatch(listOrders())

    }, [dispatch, history, userInfo,])


    return (
        <>

            <h1>Orders</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.name}</td>
                                <td>
                                    <LinkContainer to={`/order/${order._id}`}>
                                        <Button variant='light' className='btn-sm'>
           
                                            Details
                                        </Button>
                                    </LinkContainer>
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default OrderListScreen
