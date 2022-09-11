import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box, Flex } from "rebass";

import {
  LabelText,
  InputText,
  SelectOption,
  WeightFormatSpan,
  RadioInput,
} from "../../../styles/styles";

const CourierDelivery = ({ register }) => {
  const [directions, setDirections] = useState({});
  const [selectedDirections, setSelectedDirections] = useState("");

  useEffect(() => {
    axios
      .get("/mockData/directions.json")
      .then(function (response) {
        setDirections(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
            onClick={() => setSelectedDirections("fromTurkey")}
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
            onClick={() => setSelectedDirections("toTurkey")}
          />
          <span style={{ position: "relative", top: "-5px" }}>
            Türkiye'ye Gönder
          </span>
        </LabelText>
      </Flex>
      <Box width={1} textAlign={"left"}>
        <LabelText style={{ color: "#000000" }}>NEREYE</LabelText>
        <SelectOption required {...register("city")}>
          <option hidden>
            Seçiniz
          </option>
          {directions[selectedDirections] &&
            directions[selectedDirections].map((citie) => (
              <option key={citie} value={citie}>
                {citie}
              </option>
            ))}
        </SelectOption>
      </Box>
      <Flex width={1} my={4}>
        <Box width={1 / 4} mr={2}>
          <LabelText>AĞIRLIK</LabelText>
          <Flex>
            <InputText required {...register("weight")} type="text"></InputText>
            <WeightFormatSpan>KG</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4} mr={2}>
          <LabelText>UZUNLUK</LabelText>
          <Flex>
            <InputText required {...register("length")} type="text"></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4} mr={2}>
          <LabelText>GENİŞLİK</LabelText>
          <Flex>
            <InputText required {...register("width")} type="text"></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4} mr={2}>
          <LabelText>YÜKSEKLİK</LabelText>
          <Flex>
            <InputText required {...register("height")} type="text"></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CourierDelivery;
