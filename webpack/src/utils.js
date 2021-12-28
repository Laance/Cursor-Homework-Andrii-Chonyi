export const getTotal = (products) =>{
    return products.reduce(
        (total,product)=>product.count * product.price + total,0);
};