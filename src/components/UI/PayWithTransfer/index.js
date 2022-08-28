import React, { useState } from "react";
import { Collapse, Radio } from "antd";
import { Flex, Image, Text } from "rebass/styled-components";

import akbank from "../../../assests/akbank.png";
import isbankasi from "../../../assests/isbankasi.png";
import ziraat from "../../../assests/ziraat.png";

import { TransferContainer } from "./style";
import { Box } from "rebass";

const { Panel } = Collapse;

const PayWithTransfer = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const icons = {
    akbank: akbank,
    isbankasi: isbankasi,
    ziraat: ziraat,
  };

  const handleOnChange = (key) => {
    setSelectedValue(key);
  };

  return (
    <>
      <Text color={"black"} fontSize={"13px"}>
        Havale bilgilerini görmek için banka seçiniz
      </Text>
      <TransferContainer>
        <Radio.Group value={selectedValue}>
          <Collapse
            ghost
            onChange={handleOnChange}
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
              style={{
                border:
                  selectedValue === "akbank"
                    ? "1px solid #50749c"
                    : "1px solid #f0f0f0",
              }}
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
              style={{
                border:
                  selectedValue === "isbankasi"
                    ? "1px solid #50749c"
                    : "1px solid #f0f0f0",
              }}
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
              style={{
                border:
                  selectedValue === "ziraat"
                    ? "1px solid #50749c"
                    : "1px solid #f0f0f0",
              }}
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
