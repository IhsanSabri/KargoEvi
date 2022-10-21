import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  orderId: '',
};

const DeliveryDetail = createSlice({
  name: "deliveryDetail",
  initialState,
  reducers: {
    modifiedData: (state, action) => {
      state[action.payload.name] = action.payload.data;
    },
    setInitialState: () => initialState,
  },
});

export const { modifiedData, setInitialState } = DeliveryDetail.actions;
export default DeliveryDetail.reducer;
