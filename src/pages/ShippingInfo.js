import React from "react";

const ShippingInfo = () => {
  return (
    <div id="shippingInfo">
      <form>
        <label>Adet</label>
        <select type="select" id="1" name="number" placeholder="1"></select>
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
      </form>
    </div>
  );
};

export default ShippingInfo;
