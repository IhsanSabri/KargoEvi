import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Flex } from "rebass";

import { calculatePrice } from "../../../config/utils";
import { modifiedData } from "../../../store/DeliveryDetail";

import {
  LabelText,
  InputText,
  SelectOption,
  WeightFormatSpan,
  RadioInput,
} from "../../../styles/styles";

const CourierDelivery = ({ register }) => {
  const dispatch = useDispatch();
  const inputValues = useRef({});
  const [from, setFrom] = useState("NEREYE");
  const { deliveryCountries } = useSelector(({ delivery }) => delivery);

  const handleInputChange = (event) => {
    inputValues.current = {
      ...inputValues.current,
      [event.target.name]: Number(event.target.value),
    };

    let totalPrice = calculatePrice(inputValues.current);

    dispatch(modifiedData({ name: "deliveryPrice", data: totalPrice }));
  };

  const handleDirectionSelection = (event) => {
    event.target.value === "fromTr" ? setFrom("NEREYE") : setFrom("NEREDEN");
  };

  return (
    <Box px={4} py={2}>
      <Flex mb={4}>
        <LabelText style={{ color: "black", marginRight: "15px" }}>
          <RadioInput
            {...register("destination")}
            type="radio"
            value="fromTr"
            id="fromTr"
            required
            onClick={handleDirectionSelection}
            defaultChecked
          />
          <span style={{ position: "relative", top: "-5px" }}>
            Türkiye'den Gönder
          </span>
        </LabelText>
        <LabelText style={{ color: "black" }}>
          <RadioInput
            {...register("destination")}
            type="radio"
            value="toTr"
            id="toTr"
            required
            onClick={handleDirectionSelection}
          />
          <span style={{ position: "relative", top: "-5px" }}>
            Türkiye'ye Gönder
          </span>
        </LabelText>
      </Flex>
      <Box width={1} textAlign={"left"}>
        <LabelText style={{ color: "#000000" }}>{from}</LabelText>
        <SelectOption required {...register("country")}>
          <option hidden>Seçiniz</option>
          {deliveryCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </SelectOption>
      </Box>
      <Flex width={1} my={4}>
        <Box width={1 / 4}>
          <LabelText>AĞIRLIK</LabelText>
          <Flex>
            <InputText
              required
              {...register("weight")}
              type="text"
              onChange={handleInputChange}
            ></InputText>
            <WeightFormatSpan>KG</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4}>
          <LabelText>UZUNLUK</LabelText>
          <Flex>
            <InputText
              required
              {...register("length")}
              type="text"
              onChange={handleInputChange}
            ></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4}>
          <LabelText>GENİŞLİK</LabelText>
          <Flex>
            <InputText
              required
              {...register("width")}
              type="text"
              onChange={handleInputChange}
            ></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4}>
          <LabelText>YÜKSEKLİK</LabelText>
          <Flex>
            <InputText
              required
              {...register("height")}
              type="text"
              onChange={handleInputChange}
            ></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CourierDelivery;
