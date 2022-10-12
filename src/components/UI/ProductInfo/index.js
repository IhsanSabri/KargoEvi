import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex, Box, Text } from "rebass";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Product from "../Product";
import Footer from "../Footer";
import Steps from "../Steps";
import ExcelImporting from "../ExcelImporting";
import AntCollapse from "../CollapseMenu";
import OrderSummary from "../OrderSummary";

import { Download, AddProduct } from "./style";
import { ContinueButton } from "../../../styles/styles";
import { DiffOutlined } from "@ant-design/icons";

const ProductInfo = ({ nextPageLink }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, getValues } = useForm();
  const asd = formState.dirtyFields;
  const [product, setProduct] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);

  const productArr = [
    <Product
      key={product.length}
      register={register}
      indexNum={product.length}
    />,
  ];

  useEffect(() => {
    let valueLength = 0;
    let formValueObjectLength = Object.values(getValues()).length;

    const checkButton = Object.values(getValues()).some((values) => {
      valueLength += Object.values(values).filter(
        (index) => index.value.length > 0
      ).length;
      return valueLength === formValueObjectLength * 7;
    });

    setButtonActive(checkButton);
  }, [formState]);

  const handleRegistration = (data) => {
    console.log(data);

    navigate(nextPageLink);
  };

  const handleProductAdd = (event) => {
    setButtonActive(false);
    setProduct(
      product.concat(
        <Product
          key={product.length}
          register={register}
          indexNum={product.length}
        />
      )
    );
  };

  const stepsInfo = [
    {
      id: 1,
      text: "1- Gönderi Bilgileri",
      isChecked: true,
      isActive: false,
      isNextStepExist: false,
    },
    {
      id: 2,
      text: "2- Ürün İçerik Bilgileri",
      isChecked: false,
      isActive: true,
      isNextStepExist: true,
    },
    {
      id: 3,
      text: "3- Alıcı Bilgileri",
      isChecked: false,
      isActive: false,
      isNextStepExist: false,
    },
  ];

  const excelTemplate = {
    title: (
      <Text p={1} style={{ whiteSpace: "break-spaces", lineHeight: "1.5" }}>
        Toplu gönderilerinizi tek seferde yüklemek için excel formları
        kullanarak işlemlerinizi hızlandırabilirsiniz. Öncelikle hazır Excel
        Şablon Formu{" "}
        <Download href="#" download>
          indirip
        </Download>{" "}
        doldurmanız ve daha sonra yüklemeniz gerekmektedir.
      </Text>
    ),
    isDownloadTemplate: true,
  };

  const menus = [
    {
      subKey: "excellImporting",
      title: "Excel Yükle",
      component: <ExcelImporting template={excelTemplate} />,
      headerIcon: (
        <DiffOutlined
          style={{
            fontSize: "25px",
            position: "relative",
            top: "-4px",
            marginRight: "5px",
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    setProduct(productArr);
  }, []);

  return (
    <>
      <Flex justifyContent={"center"}>
        {stepsInfo.map((step) => {
          return <Steps key={step.id} steps={step} />;
        })}
      </Flex>
      <Flex justifyContent="center" width={"60%"} m="30px auto">
        <Box>
          <form id="hook-form" onSubmit={handleSubmit(handleRegistration)}>
            <Card
              style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
            >
              <Text fontSize={"24px"} mb={4} fontWeight={"500"}>
                Ürün İçerik Bilgileri
              </Text>
              {product}
            </Card>
          </form>
          <Flex justifyContent="end" my={4}>
            <AddProduct
              danger
              size="large"
              icon={
                <PlusOutlined
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    top: "-1px",
                  }}
                />
              }
              onClick={handleProductAdd}
            >
              Ürün Ekle
            </AddProduct>
          </Flex>
          <Box>
            <AntCollapse menus={menus} />
          </Box>
        </Box>
      </Flex>
      <OrderSummary />
      <Footer prevLink={"/"}>
        <Flex>
          <ContinueButton
            type="submit"
            form="hook-form"
            disabled={!buttonActive}
          >
            Devam Et
          </ContinueButton>
        </Flex>
      </Footer>
    </>
  );
};

export default ProductInfo;
