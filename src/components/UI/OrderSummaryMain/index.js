import React from "react";
import paymentLogo from "../../../assests/paymentLogo.png";

import AntModal from "../AntModal";
import Footer from "../Footer";
import LoginTabs from "../LoginTabs";

import { useModal } from "../../../config/hooks/useModal";
import { Button } from "antd";

import { FooterContainer } from "./style";
import { PlusOutlined } from "@ant-design/icons";

const OrderSummaryMain = ({ nexPageLink }) => {
  const { isModalVisible, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex flex-col font-[Poppins, sans-serif] items-center">
        <div className="col-lg-12 border flex justify-center shadow-[0px_0px_8px_rgba(38,43,55,20%)] bg-white w-[60%]">
          <div className="card border-0 px-[12px] pb-[12px] border-[unset] w-[65%]">
            <div className="card-header bg-white pt-[30px] pb-[20px] border-b-0">
              <h1 className="display-6 text-[26px] font-medium">
                Sipariş Özeti
              </h1>
            </div>
            <div className="card-body">
              <div className="row mx-0">
                <div className="col-5 bg-[#f5f7f8] pt-0 rounded-[5px] pl-[23px]">
                  <label className="form-label text-[12px] text-[#6c757d]">
                    Nereden
                  </label>
                  <br />
                  <label className="form-label text-[16px]">Türkiye</label>
                </div>
                <div className="col flex justify-center align-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-circle w-[30px] h-[30px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    ></path>
                  </svg>
                </div>
                <div className="col-5 bg-[#f5f7f8] pt-[8px] rounded-[5px] pl-[23px]">
                  <label className="form-label text-[12px] text-[#6c757d]">
                    Nereye
                  </label>
                  <br />
                  <label className="form-label text-[16px]">Almanya</label>
                </div>
              </div>
              <div className="row mx-0 mt-[14px]">
                <div className="col-sm-6 col-lg-6 rounded-[3px] pt-[3px]">
                  <label className="col-form-label text-[16px] text-[#6c757d]">
                    Adet
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 text-right	rounded-[3px] pt-[3px]">
                  <label className="col-form-label font-medium	text-[16px]">
                    2
                  </label>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[16px] text-[#6c757d]">
                    Paket İçeriği
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 text-right	rounded-[3px] pt-[3px]">
                  <label className="col-form-label text-[16px] font-medium">
                    Paket
                  </label>
                </div>
              </div>
              <div className="row mx-0 mt-0">
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[16px] text-[#6c757d]">
                    Paket Ölçüleri
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[16px] font-medium">
                    12 x 15 x16
                  </label>
                </div>
              </div>
              <div className="row mx-0 mt-0">
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[16px] text-[#6c757d]">
                    Toplam Ağırlık
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 text-right	rounded-[3px] pt-[3px]">
                  <label className="col-form-label text-[16px] font-medium">
                    31 KG
                  </label>
                </div>
              </div>
              <div className="row mx-0 mt-[30px]">
                <div className="col-sm-6 col-lg-6 p5-[3px] rounded-[3px]">
                  <label className="col-form-label text-[16px] text-[#6c757d]">
                    Alıcı Ad Soyad
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[16px] font-medium">
                    Ayşe Keskin
                  </label>
                </div>
              </div>
              <div className="row mx-0 mt-0">
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[16px] text-[#6c757d]">
                    Alıcı Adres
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[16px] font-medium">
                    İstanbul Akevler
                  </label>
                </div>
              </div>
              <div className="row mx-0 mt-0">
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[16px] text-[#6c757d]">
                    Alıcı Telefon
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 pt-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[16px] font-medium">
                    +90 000 000 00 00
                  </label>
                </div>
                <div className="col-lg-12 px-0">
                  <hr className="text-[#adb5bd] mt-0 mb-[5px]" />
                </div>
              </div>
              <div className="row mt-0 mx-0">
                <div className="col-sm-6 col-lg-6 flex align-center pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[17px]">
                    Toplam Tutar
                  </label>
                </div>
                <div className="col-sm-6 col-lg-6 py-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[27px] font-medium">
                    USD 21,33
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-[20px]">
          <img className="flex" src={paymentLogo} alt="logo" />
        </div>
      </div>
      <Footer prevLink={"/personalInfo"}>
        <FooterContainer>
          <Button className="newOrderButton" danger>
            <PlusOutlined />
            Yeni Gönderi Ekle
          </Button>
          <Button
            className="completeOrderButton"
            type="submit"
            danger
            form="hook-form"
            onClick={openModal}
          >
            Siparişi Tamamla
          </Button>
        </FooterContainer>
      </Footer>
      <AntModal visible={isModalVisible} onCancel={closeModal}>
        <LoginTabs nexPageLink={nexPageLink} />
      </AntModal>
    </>
  );
};

export default OrderSummaryMain;
