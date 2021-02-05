import express from 'express';
import { products } from '../db/db';
import { response } from '../utils/response';
const router = express();

router.get('/allProducts', async(req, res) => {
    try {
        const prods = products;
        response(res, 200, prods);

    } catch (error) {
        console.log(error, 'Error in getting all products !');
        response(res, 500, 'Error in getting all products !')
    }
})

router.get('/productByCategory/:category', async(req, res) => {
    try {
        const { category } = req.params;
        if(!category) {
            return response(res, 400, 'Please provide category name !')
        }
        const data = {
            products: [], count: 0
        }
        const prods = products.find(p => p.category.parent.name.toLowerCase() === category.toLowerCase());
        if(prods && Object.keys(prods).length > 0) {
            data.products = prods;
            data.count = prods.length;
        }
        response(res, 200, data);
    } catch (error) {
        console.log(error, 'Error in getting product by category');
        response(res, 500, 'Error in getting product by category !')
    }
});

export {
    router as productRouter
}