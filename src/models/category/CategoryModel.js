class CategoryModel{
    productID = [];
    constructor(id, name, discount, image, createTime, updateTime){
        this.id = id;
        this.name = name;
        this.discount = discount;       
        this.image = image;       
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}

export default CategoryModel;