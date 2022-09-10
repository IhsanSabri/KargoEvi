import React from "react";

import { Box, Flex } from "rebass";
import { QuestionCircleOutlined } from "@ant-design/icons";

import {
  MainProductCover,
  WeightFormatSpan,
  PriceSelect,
} from "./style";

import { LabelText, InputText, SelectOption } from "../../../styles/styles";

const Product = ({ register }) => {
  return (
    <Box>
      <MainProductCover>
        <Box width={1 / 6} mr={2}>
          <LabelText>ADET (*)</LabelText>
          <SelectOption required {...register("piece")}>
            <option value="" defaultValue="">
              Seçiniz
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </SelectOption>
        </Box>
        <Box width={1 / 6} mr={2}>
          <LabelText>ÜRÜN TANIMI (*)</LabelText>
          <InputText
            required
            {...register("prodcutDescription")}
            type="text"
          ></InputText>
        </Box>
        <Box width={1 / 6} mr={2}>
          <LabelText>AĞIRLIK (*)</LabelText>
          <Flex>
            <InputText
              required
              {...register("weight")}
              type="text"
              style={{ borderRightWidth: "0" }}
            ></InputText>
            <WeightFormatSpan>KG</WeightFormatSpan>
          </Flex>
        </Box>
        <Box width={1 / 6} mr={2}>
          <LabelText style={{ display: "flex", alignItems: "center" }}>
            HS(GTIP)(*)
            <QuestionCircleOutlined
              style={{ fontSize: "14px", marginLeft: "5px" }}
            />
          </LabelText>
          <InputText required {...register("hs(gtip)")} type="text"></InputText>
        </Box>
        <Box width={1 / 6} mr={2}>
          <LabelText>MENŞEİ (*)</LabelText>
          <SelectOption required {...register("origin")}>
            <option value="" defaultValue="">
              Seçiniz
            </option>
            <option value="Turkey">Türkiye</option>
            <option value="Germany">Almanya</option>
          </SelectOption>
        </Box>
        <Box width={1 / 6} mr={2}>
          <LabelText>BİRİM DEĞERİ</LabelText>
          <Flex>
            <InputText
              required
              {...register("price")}
              type="text"
              style={{ borderRightWidth: "0" }}
            ></InputText>
            <PriceSelect {...register("currency")}>
              <option value="$" defaultValue="$">
                $
              </option>
              <option value="€">€</option>
            </PriceSelect>
          </Flex>
        </Box>
      </MainProductCover>
    </Box>
  );
};

export default Product;
