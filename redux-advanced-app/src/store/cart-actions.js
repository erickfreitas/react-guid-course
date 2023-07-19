
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        "https://movies-react-app-ebf33-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Loading cart data failed!");
      }

      const data = response.json();

      return data;
    };

    try{
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Loading...",
          message: "Loading cart data!",
        })
      );

      fetchCartData();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Loading cart data successfully!",
        })
      );

    }
    catch(error){
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://movies-react-app-ebf33-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }

      const responseData = await response.json();
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};