class ProductModel{

    category = 'DefaultCategory';
    provider = 'DefaultProvider';
    liked = false;


    image = 'https://image-us.24h.com.vn/upload/1-2019/images/2019-02-22/1550810773-63-loai-trung-ca-duoc-vi-nhu-3-1550800928-width640height401.jpg';

    constructor(productID, categoryID, providerID, name, description, price, quantity, discount){
        this.productID = productID;
        this.categoryID = categoryID;
        this.providerID = providerID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
        this.discountPrice = (price - (discount/100).toFixed(2)*price);
    }
    // constructor(productID, categoryID, providerID, name, category, provider, description, price, quantity, discount, image){
    //     this.productID = productID;
    //     this.categoryID = categoryID;
    //     this.providerID = providerID;
    //     this.name = name;
    //     this.category = category;
    //     this.provider = provider;
    //     this.description = description;
    //     this.price = price;
    //     this.quantity = quantity;
    //     this.discount = discount;
    //     this.image = image;
    //     this.discountPrice = price - (discount/100).toFixed(2)*price;
    // }

}
export default ProductModel;
