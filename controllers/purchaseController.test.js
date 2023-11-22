const { getProducts } = require('./purchaseController.js');
const Product = require('../models/product.js');

jest.mock('../models/product.js');

describe('getProducts', () => {
    it('should render index.hbs with products', async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            render: jest.fn(),
        };

        const products = [
            { name: "First product", count: "10", price: "1000" },
            { name: "Second product", count: "20", price: "2000" }
        ]

        Product.find.mockResolvedValue(products)
        await getProducts(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.render).toHaveBeenCalledWith('index.hbs', {
            products,
        });
    });

    it('should send 500 status on error', async () => {
        const req = {};
        const res = {
            sendStatus: jest.fn(),
        };

        Product.find.mockRejectedValue(new Error('Some error'));

        await getProducts(req, res);

        expect(res.sendStatus).toHaveBeenCalledWith(500);
    });
});