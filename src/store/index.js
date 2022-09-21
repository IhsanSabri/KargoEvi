import { configureStore } from "@reduxjs/toolkit";

import deliveryReducer from "./DeliveryDetail";

const store = configureStore({
  reducer: {
    delivery: deliveryReducer,
  },
});

export default store;
