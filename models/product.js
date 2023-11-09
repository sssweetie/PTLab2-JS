class Product {
    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price
    }

    buy(countToBuy) {
        this.count -= countToBuy;
        return countToBuy * this.price
    }
}

class Products {
    constructor(products) {
        this.products = products
    }

    getAllProducts() {
        return this.products
    }
}

const products = new Products([new Product("chair", 95, 2000), new Product("desk", 50, 4000)])

const getTotalPrice = (name, count) => {
    const product = products.getAllProducts().find(product => product.name === name)
    return product.buy(count)
}

module.exports = { products, getTotalPrice }

