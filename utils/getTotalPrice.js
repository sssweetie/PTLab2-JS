const getTotalPrice = async (name, count, model) => {
    const product = await model.findOneAndUpdate({ name }, { $inc: { count: -count } }, { new: true });

    return count * product.price;
}

module.exports = getTotalPrice;