import { createSlice } from "@reduxjs/toolkit";

import { depthItemModified } from "../config/utils";

const initialState = {
  deliveryCountries: [],
  deliveryDetail: {},
  deliveryPrice: 0,
  receiverInfo: {},
  token: "",
  userInfo: {},
  userAddress: [],
  updateAddress: {},
  selectedAddress: {},
  productDetailInfo: {},
  isPaymentAddress: true,
  orderId: "",
};

const DeliveryDetail = createSlice({
  name: "deliveryDetail",
  initialState,
  reducers: {
    modifiedData: (state, action) => {
      state[action.payload.name] = action.payload.data;
    },
    depthModifiedData: (state, action) =>
      depthItemModified(
        state,
        action.payload.name,
        action.payload.depth,
        action.payload.data
      ),
    setInitialState: () => initialState,
  },
});

export const { modifiedData, depthModifiedData, setInitialState } =
  DeliveryDetail.actions;
export default DeliveryDetail.reducer;
