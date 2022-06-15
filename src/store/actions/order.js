export const GET_ALL_ORDER = 'GET_ALL_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';

export const fetchOrderWithUserID = id => {
    return async dispatch => {
      try {
        const response = await fetch(
          'http://localhost:5000/order/user/' + id,
        );
        if (response.error) {
          throw new Error(response.msg);
        }
        const resData = await response.json();
        const loadOrders = [];
  
        for (const key in resData) {
  
            loadOrders.push(
            new OrderModel({
              orderID: resData[key].id,
              userID: resData[key].user_id,
              name: resData[key].product_name,
              gender: resData[key].gender,
              phone: resData[key].phone,
              province: resData[key].province,
              district: resData[key].district,
              ward: resData[key].ward,
              street: resData[key].street,
              quantity: resData[key].quantity,
              totalCost: resData[key].totalCost,
              status: resData[key].status,
              payment: resData[key].payment,
              paid: resData[key].paid,
              createTime: resData[key].create_time,
              updateTime: resData[key].update_time,
            }),
          );
        }
        dispatch({type: GET_ALL_ORDER, cartItems: loadOrders});
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
  };

export const fetchOrderWithAdminRoles = () => {
    return async dispatch => {
      try {
        const response = await fetch(
          'http://localhost:5000/order/user/' + id,
        );
        if (response.error) {
          throw new Error(response.msg);
        }
        const resData = await response.json();
        const loadOrders = [];
  
        for (const key in resData) {
  
            loadOrders.push(
            new OrderModel({
              orderID: resData[key].id,
              userID: resData[key].user_id,
              name: resData[key].product_name,
              gender: resData[key].gender,
              phone: resData[key].phone,
              province: resData[key].province,
              district: resData[key].district,
              ward: resData[key].ward,
              street: resData[key].street,
              quantity: resData[key].quantity,
              totalCost: resData[key].totalCost,
              status: resData[key].status,
              payment: resData[key].payment,
              paid: resData[key].paid,
              createTime: resData[key].create_time,
              updateTime: resData[key].update_time,
            }),
          );
        }
        dispatch({type: GET_ALL_ORDER, cartItems: loadOrders});
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
  };