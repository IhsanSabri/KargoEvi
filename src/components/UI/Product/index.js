import React from "react";

import { Box, Flex } from "rebass";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { MainProductCover, PriceFormatSelect } from "./style";

import {
  LabelText,
  InputText,
  SelectOption,
  WeightFormatSpan,
} from "../../../styles/styles";

const Product = ({ register, indexNum }) => {
  return (
    <Box>
      <MainProductCover>
        <Box width={1 / 6} mr={2}>
          <LabelText>ADET (*)</LabelText>
          <SelectOption required {...register(`${indexNum}.piece.value`)}>
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
            {...register(`${indexNum}.prodcutDescription.value`)}
            type="text"
          ></InputText>
        </Box>
        <Box width={1 / 6}>
          <LabelText>AĞIRLIK (*)</LabelText>
          <Flex>
            <InputText
              required
              {...register(`${indexNum}.weight.value`)}
              type="text"
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
          <InputText
            required
            {...register(`${indexNum}.hs(gtip).value`)}
            type="text"
          ></InputText>
        </Box>
        <Box width={1 / 6} mr={2}>
          <LabelText>MENŞEİ (*)</LabelText>
          <SelectOption required {...register(`${indexNum}.origin.value`)}>
            <option value="" defaultValue="">
              Seçiniz
            </option>
            <option value="Turkey">Türkiye</option>
            <option value="Germany">Almanya</option>
          </SelectOption>
        </Box>
        <Box width={1 / 6}>
          <LabelText>BİRİM DEĞERİ</LabelText>
          <Box style={{ display: "-webkit-box" }}>
            <InputText
              required
              {...register(`${indexNum}.price.value`)}
              type="text"
            ></InputText>
            <PriceFormatSelect {...register(`${indexNum}.currency.value`)}>
              <option defaultValue="$">$</option>
              <option>€</option>
            </PriceFormatSelect>
          </Box>
        </Box>
      </MainProductCover>
    </Box>
  );
};

export default Product;
