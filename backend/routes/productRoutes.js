import express from 'express'
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct, createProductReview } from '../controllers/productController.js'
// import { getMyOrders } from '../controllers/orderController'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)
router.route('/:id/reviews')
    .post( protect, createProductReview)
router.route('/:id')
    .get(getProductById)
    // .get(getMyOrders)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)
    

export default router