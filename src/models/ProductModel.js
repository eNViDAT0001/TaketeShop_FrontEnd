class ProductModel {
  userID = 'DefaultProvider';
  liked = false;

  constructor(
    productID,
    categoryID,
    userID,
    name,
    description,
    price,
    quantity,
    discount,
    liked,
    image,
    sold,
    createTime,
    updateTime,
  ) {
    this.productID = productID;
    this.categoryID = categoryID;
    this.userID = userID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.discountPrice = price - (discount / 100).toFixed(2) * price;
    this.image = image;
    this.liked = liked;
    this.sold = sold;
    this.createTime = createTime ? createTime : new Date();
    this.updateTime = updateTime ? updateTime : new Date();
  }
}
export default ProductModel;
