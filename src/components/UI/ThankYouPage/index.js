import React from "react";

import { Box } from "rebass";

import thankYouPage from "../../../assests/thankYouPage.png";

import {
  MainBox,
  MainTitle,
  OrderInfo,
  DeliveryInfo,
  CopyButton,
  CopyIcon,
  MainContent,
  OrderText,
} from "./style";

const ThankYou = () => {
  return (
    <>
      <MainTitle>
        <b>Tebrikler!</b> Siparişiniz Oluşturuldu.
      </MainTitle>
      <MainBox justifyContent="center" width={"60%"} m="30px auto">
        <MainContent>
          <OrderInfo width={"70%"}>
            <DeliveryInfo>
              <Box opacity="0.6" fontSize="12px" lineHeight="16px">
                Kargo Takip Numarası
              </Box>
              <Box opacity="0.95" fontSize="32px" lineHeight="44px">
                35467-34567
              </Box>
            </DeliveryInfo>
            <CopyButton>
              <CopyIcon transform={"scaleX(-1)"} />
              Kopyala
            </CopyButton>
          </OrderInfo>
          <OrderText>
            Odeme yapildiktan sonra kullaniciya kargosunu teslim etmesi icin
            kargo takip numarasi, kargoyu bizim yurtdisi yapabilmemiz icin
            airwaybill ( konsimento) ile proforma ve son olarak pazaryerlerinde
            satis yapan kullanicilar icin gonderisini pazaryerine entegre etmesi
            icin imkan vermeliyiz. Bilgi amacli olarak; ‘’urun icerik bilgileri
            ‘’ ve ‘’ alici bilgileri’’ nin girildigi alandaki datalarin bir
            kismini proforma, bir kisminida airwaybill uzerinden kullanacagiz.
          </OrderText>
          <img src={thankYouPage}></img>
        </MainContent>
      </MainBox>
    </>
  );
};

export default ThankYou;
