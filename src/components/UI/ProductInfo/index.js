import React, { useState } from "react";
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

import { FooterContainer } from "./style";
import { DiffOutlined } from "@ant-design/icons";

const ProductInfo = ({ nextPageLink }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
    navigate(nextPageLink);
  };

  const handleProductAdd = (event) => {
    setProduct(
      product.concat(<Product key={product.length} register={register} />)
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

  const menus = [
    {
      subKey: "excellImporting",
      title: "Excel Yükle",
      component: <ExcelImporting />,
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
              <Text fontSize={3} mb={2}>
                Ürün İçerik Bilgileri
              </Text>
              <Product key={product.length} register={register} />
              {product}
            </Card>
          </form>
          <Flex justifyContent="end" my={4}>
            <Button
              danger
              size="large"
              style={{ width: "150px", height: "50px" }}
              icon={
                <PlusOutlined
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    top: "-4px",
                  }}
                />
              }
              onClick={handleProductAdd}
            >
              Ürün Ekle
            </Button>
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
