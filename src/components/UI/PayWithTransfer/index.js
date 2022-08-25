import React from "react";
import { Collapse, Radio } from "antd";
import { Flex, Image, Text } from "rebass/styled-components";

import akbank from "../../../assests/akbank.png";
import isbankasi from "../../../assests/isbankasi.png";
import ziraat from "../../../assests/ziraat.png";

import { TransferContainer } from "./style";
import { Box } from "rebass";

const { Panel } = Collapse;

const PayWithTransfer = () => {
  const icons = {
    akbank: akbank,
    isbankasi: isbankasi,
    ziraat: ziraat,
  };

  return (
    <>
      <Text color={"black"} fontSize={"13px"}>
        Havale bilgilerini görmek için banka seçiniz
      </Text>
      <TransferContainer>
        <Radio.Group>
          <Collapse
            ghost
            accordion
            expandIcon={({ panelKey }) => (
              <Flex>
                <Radio value={panelKey}>
                  <Image
                    src={icons[panelKey]}
                    width={"55px"}
                    height={"35px"}
                    className="bank_icon"
                  />
                </Radio>
              </Flex>
            )}
          >
            <Panel
              header={
                <>
                  <Box>Akbank</Box>
                  <Box className="soft_text">Havale / EFT Hesap bilgileri</Box>
                </>
              }
              key="akbank"
            >
              <Box className="IBAN_Soft">
                Server Global Lojistik Tic. Ltd. Şti.
              </Box>
              <Box className="IBAN_Soft">
                Akbank - TRY - Maltepe Şube Kodu: 1037, Hesap No:2063832
              </Box>
              <Box className="IBAN_Soft">
                IBAN: TR08 1111 1111 1111 1111 1111 11
              </Box>
            </Panel>
            <Panel
              header={
                <>
                  <Box>İş banksı</Box>
                  <Box className="soft_text">Havale / EFT Hesap bilgileri</Box>
                </>
              }
              key="isbankasi"
            >
              <Box className="IBAN_Soft">
                Server Global Lojistik Tic. Ltd. Şti.
              </Box>
              <Box className="IBAN_Soft">
                Akbank - TRY - Maltepe Şube Kodu: 1037, Hesap No:2063832
              </Box>
              <Box className="IBAN_Soft">
                IBAN: TR08 1111 1111 1111 1111 1111 11
              </Box>
            </Panel>
            <Panel
              header={
                <>
                  <Box>Ziraat banksı</Box>
                  <Box className="soft_text">Havale / EFT Hesap bilgileri</Box>
                </>
              }
              key="ziraat"
            >
              <Box className="IBAN_Soft">
                Server Global Lojistik Tic. Ltd. Şti.
              </Box>
              <Box className="IBAN_Soft">
                Akbank - TRY - Maltepe Şube Kodu: 1037, Hesap No:2063832
              </Box>
              <Box className="IBAN_Soft">
                IBAN: TR08 1111 1111 1111 1111 1111 11
              </Box>
            </Panel>
          </Collapse>
        </Radio.Group>
      </TransferContainer>
    </>
  );
};
export default PayWithTransfer;
