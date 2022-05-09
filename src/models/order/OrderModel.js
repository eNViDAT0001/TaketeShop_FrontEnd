
class OrderModel{
    constructor(orderID, userID, addressID, name, gender, phone, province, district, ward, quantity, totalCost, status, createTime, updateTime){
        this.orderID = orderID;
        this.userID = userID;
        this.addressID = addressID;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.province = province;
        this.district = district;
        this.ward = ward;
        this.quantity = quantity;
        this.totalCost = totalCost;
        this.status = status;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}