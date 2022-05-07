class BannerModel{
    constructor(id, title, discount, endTime, image, createTime, updateTime){
        this.id = id;
        this.title = title;
        this.discount = discount;
        this.endTime = endTime;
        this.image = image;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}

export default BannerModel;