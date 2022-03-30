class BannerModel{
    categoryID = 1;
    constructor(id, category, discount, endTime, image){
        this.id = id;
        this.category = category;
        this.discount = discount;
        this.endTime = endTime;
        this.image = image;
    }
}

export default BannerModel;