import React from "react";
import { useForm } from "react-hook-form";

import { Box, Flex } from "rebass";
import { Radio } from "antd";

import {
  LabelText,
  InputText,
  SelectOption,
  WeightFormatSpan,
} from "../../../styles/styles";

const CourierDelivery = () => {
  const { register } = useForm();

  return (
    <Box px={4} py={2}>
      <Flex mb={4}>
        <Radio.Group defaultValue={"1"}>
          <Radio value="1">Türkiye'den Gönder</Radio>
          <Radio value="2">Türkiye'ye Gönder</Radio>
        </Radio.Group>
      </Flex>
      <Box width={1} textAlign={"left"}>
        <LabelText style={{ color: "#000000" }}>NEREYE</LabelText>
        <SelectOption required {...register("city")}>
          <option value="" defaultValue="">
            Seçiniz
          </option>
          <option value="Istanbul">İstanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="Izmir">İzmir</option>
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
            <InputText required {...register("weight")} type="text"></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4} mr={2}>
          <LabelText>GENİŞLİK</LabelText>
          <Flex>
            <InputText required {...register("weight")} type="text"></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 4} mr={2}>
          <LabelText>YÜKSEKLİK</LabelText>
          <Flex>
            <InputText required {...register("weight")} type="text"></InputText>
            <WeightFormatSpan>CM</WeightFormatSpan>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CourierDelivery;
