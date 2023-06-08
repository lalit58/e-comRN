import axios from "axios";
import { server } from "../store";

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePasswordRequest   ",
      });
      // Axios here

      const { data } = await axios.put(
        `${server}/user/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "updatePasswordSucess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailed",
        payload: error.response.data.message,
      });
    }
  };

export const updateProfile =
  (name, email, address, city, country, pincode) => async (dispatch) => {
    try {
      dispatch({
        type: "updateProfileRequest",
      });
      // Axios here

      const { data } = await axios.put(
        `${server}/user/updateprofile`,
        {
          name,
          email,
          address,
          city,
          country,
          pincode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "updateProfileSucess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProfileFailed",
        payload: error.response.data.message,
      });
    }
  };
