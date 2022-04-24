class ProductItemsModel{

    category = 'DefaultCategory';
    provider = 'DefaultProvider';
    liked = false;


    constructor(productID, name, price, quantity, discount, image){
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
        this.discountPrice = (price - (discount/100).toFixed(2)*price);
        this.image = image;
    }

}
export default ProductItemsModel;
