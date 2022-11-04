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
import { useSelector } from "react-redux";

const Product = ({ register, indexNum }) => {
  const {
    deliveryCountries,
    deliveryPrice,
    deliveryDetail: { destination, weight, country },
  } = useSelector(({ delivery }) => delivery);
  return (
    <Box>
      <MainProductCover>
        <Box width={1 / 6} mr={2}>
          <LabelText>ADET (*)</LabelText>
          <SelectOption
            defaultValue="1"
            required
            {...register(`${indexNum}.total.value`)}
          >
            <option value="">Seçiniz</option>
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
            {...register(`${indexNum}.description.value`)}
            type="text"
          ></InputText>
        </Box>
        <Box width={1 / 6}>
          <LabelText>AĞIRLIK (*)</LabelText>
          <Flex>
            <InputText
              defaultValue={weight}
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
            {...register(`${indexNum}.GTIP.value`)}
            type="number"
            defaultValue=""
          ></InputText>
        </Box>
        <Box width={1 / 6} mr={2}>
          <LabelText>MENŞEİ (*)</LabelText>
          <SelectOption
            defaultValue={destination === "fromTr" ? "Türkiye" : country}
            required
            {...register(`${indexNum}.origin.value`)}
          >
            <option value="">Seçiniz</option>
            <option value="Türkiye">Türkiye</option>
            {deliveryCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </SelectOption>
        </Box>
        <Box width={1 / 6}>
          <LabelText>BİRİM DEĞERİ</LabelText>
          <Box style={{ display: "-webkit-box" }}>
            <InputText
              required
              defaultValue={deliveryPrice}
              {...register(`${indexNum}.price.value`)}
              type="text"
            ></InputText>
            <PriceFormatSelect
              {...register(`${indexNum}.currency.value`)}
              disabled
            >
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
