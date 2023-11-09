const getTotalPrice = async (name, count, model) => {
    const modelCount = await model.findOne({ name })
    if (modelCount.count >= count) {
        const product = await model.findOneAndUpdate({ name }, { $inc: { count: -count } }, { new: true });
        return count * product.price;
    } else {
        return 0;
    }
}

module.exports = getTotalPrice;