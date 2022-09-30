import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex, Box, Text } from "rebass";
import { Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Product from "../Product";
import Footer from "../Footer";
import Steps from "../Steps";
import ExcelImporting from "../ExcelImporting";
import AntCollapse from "../CollapseMenu";
import OrderSummary from "../OrderSummary";

import { FooterContainer, Download, AddProduct } from "./style";
import { DiffOutlined } from "@ant-design/icons";

const ProductInfo = ({ nextPageLink }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [product, setProduct] = useState([]);
  const productArr = [
    <Product
      key={product.length}
      register={register}
      indexNum={product.length}
    />,
  ];

  const handleRegistration = (data) => {
    console.log(data);

    navigate(nextPageLink);
  };

  const handleProductAdd = (event) => {
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
        <FooterContainer>
          <button
            as={Button}
            className="submitAndContinueButton"
            type="submit"
            form="hook-form"
          >
            Devam Et
          </button>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default ProductInfo;
