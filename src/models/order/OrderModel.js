
class OrderModel{
    constructor(orderID, userID, addressID, quantity, totalCost, status, createTime, updateTime){
        this.orderID = orderID;
        this.userID = userID;
        this.addressID = addressID;
        this.quantity = quantity;
        this.totalCost = totalCost;
        this.status = status;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}