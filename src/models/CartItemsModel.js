class CartItemsModel{
    constructor(id, cartID, productID, name, quantity , price, discount, image, createTime, updateTime){
        this.id = id;
        this.cartID = cartID;
        this.productID = productID;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.discount = discount;
        this.image = image;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}

export default CartItemsModel;