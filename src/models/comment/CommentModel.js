class CommentModel{
    constructor(commentID, productID, userID, comment, rating, image, createTime, updateTime){
        this.commentID = commentID;
        this.productID = productID;
        this.userID = userID;
        this.comment = comment;
        this.rating = rating;
        this.image = image;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}