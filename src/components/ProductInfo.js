import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const ProductInfo = () => {
  return (
    <div className="container pt-10 font-['Poppins, sans-serif']">
      <div className="row block">
        <div className="col-lg-10 text-center">
          <span className="badge text-[#129068] bg-[#e3eaf1] font-medium inline-flex px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-check2 w-[18] h-[18]"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
            </svg>
            &nbsp; 1- Gönderi Bilgileri
          </span>
          <span className="badge text-[#129068] bg-[#212529] bg-[#ced9e5] font-medium inline-flex px-4 py-3 ml-[-5px] text-xs">
            2- Ürün İçerik Bilgileri
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-caret-right-fill text-[#ced9e5] ml-[-6px] relative z-1 inline-flex"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
          </svg>
          <span className="badge text-[#129068] bg-[#e3eaf1] font-medium inline-flex px-6 py-3 ml-[-10px]">
            3-Alıcı Bilgileri
          </span>
        </div>
      </div>
      <div className="row pt-8">
        <div className="col-lg-10 pb-10">
          <Product />
          <div className="col-lg-12 text-center pt-[30px]">
            <button
              className="btn btn-outline-danger btn-lg shadow-none float-lg-end items-center flex pt-[11px] pb-[12px] pr-[31px] pl-[25px]"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-plus"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
              </svg>
              Ürün Ekle
            </button>
          </div>
          <div className="col-lg-12 mt-[120px]">
            <div className="accordion" role="tablist" id="accordion-1">
              <div className="accordion-item">
                <h2 className="accordion-header" role="tab">
                  <button
                    className="accordion-button collapsed shadow-none text-[20px] text-[rgb(33, 37, 41)] bg-white"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-1 .item-1"
                    aria-expanded="false"
                    aria-controls="accordion-1 .item-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-file-spreadsheet w-[27px] h-[27px]"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1H4zm9 6h-3v2h3V7zm0 3h-3v2h3v-2zm0 3h-3v2h2a1 1 0 0 0 1-1v-1zm-4 2v-2H6v2h3zm-4 0v-2H3v1a1 1 0 0 0 1 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2zm3-2v2h3V7H6zm3 3H6v2h3v-2z"></path>
                    </svg>
                    &nbsp; Excel Yükle
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse item-1 mx-5"
                  role="tabpanel"
                  data-bs-parent="#accordion-1"
                >
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <p className="mb-0">
                          Toplu gönderilerinizi tek seferde yüklemek için excel
                          formları kullanarak işlemlerinizi
                          hızlandırabilirsiniz. Öncelikle hazır Excel Şablon
                          Formu indirip doldurmanız ve daha sonra yüklemeniz
                          gerekmektedir.
                        </p>
                      </div>
                    </div>
                    <div className="row mt-[23px]">
                      <div className="col-xl-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-file-spreadsheet text-[#139067] w-[21px] h-[21px] mr-[7px]"
                        >
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1H4zm9 6h-3v2h3V7zm0 3h-3v2h3v-2zm0 3h-3v2h2a1 1 0 0 0 1-1v-1zm-4 2v-2H6v2h3zm-4 0v-2H3v1a1 1 0 0 0 1 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2zm3-2v2h3V7H6zm3 3H6v2h3v-2z"></path>
                        </svg>
                        <a
                          className="text-[rgb(19,144,103)] text-[14px]"
                          href="#"
                        >
                          Şablon İndir
                        </a>
                      </div>
                    </div>
                    <div className="row mt-[23px]">
                      <div className="col-sm-12 col-md-6 col-lg-5">
                        <button
                          className="btn btn-outline-danger btn-lg active shadow-none border-dashed	bg-white text-[rgb(220,53,69)] text-[19px] py-9 px-[120px] mb-[20px]"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="bi bi-cloud-upload w-[20px] h-[20px]"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                            ></path>
                          </svg>
                          &nbsp; Yükle
                        </button>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="row d-xl-flex align-items-xl-center relative top-[50%] m-0	translate-y-[-50%]">
                          <div className="col-lg-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-file-earmark-spreadsheet d-none d-sm-none d-lg-block text-[rgb(19,144,103)] w-[40px] h-[40px]"
                            >
                              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z"></path>
                            </svg>
                          </div>
                          <div className="col-md-10 col-lg-8 pl-[0] mb-[11px]">
                            <label className="form-label text-[14px] mb-[0] pb-[5px]">
                              gonderilecek-urunler.xlsx
                            </label>
                            <div className="progress w-full h-[5px]">
                              <div
                                className="progress-bar w-6/12"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="visually-hidden">50%</span>
                              </div>
                            </div>
                            <label className="form-label text-[10px] text-[var(--bs-gray-700)]">
                              %65
                            </label>
                          </div>
                          <div className="col-md-2 col-lg-1 pl-[0]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-trash text-[23px] mb-[12px]"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                              <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-md-none d-lg-block d-sm-none d-md-block d-none">
          <div className="card min-w-[290px]">
            <div className="card-body">
              <h4 className="card-title text-[14px] text-[#373c47]">
                SİPARİŞ ÖZET
              </h4>
              <div className="row mx-0">
                <div className="col-lg-5 bg-[#f5f7f8] pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[12px]">Türkiye</label>
                </div>
                <div className="col pt-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-circle w-[18px] h-[18px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    ></path>
                  </svg>
                </div>
                <div className="col-lg-5 bg-[#f5f7f8] pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[12px]">Almanya</label>
                </div>
              </div>
              <div className="row mt-[14px] mx-0">
                <div className="col-lg-6 rounded-[3px] pt-[3px]">
                  <label className="col-form-label text-[12px] text-[#6c757d]">
                    Ağırlık
                  </label>
                </div>
                <div className="col-lg-6 pt-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[12px] font-medium">
                    31KG
                  </label>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-lg-6 pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[12px] text-[#6c757d]">
                    Hacim
                  </label>
                </div>
                <div className="col-lg-6 pt-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[12px] font-medium">
                    2.3M³
                  </label>
                </div>
                <div className="col-lg-12 px-0	">
                  <hr className="text-[#adb5bd] mt-[9px] mb-[5px]" />
                </div>
              </div>
              <div className="row m-0">
                <div className="col-lg-6 d-xxl-flex align-items-xxl-center pt-[3px] rounded-[3px]">
                  <label className="col-form-label text-[12px]">
                    Toplam Tutar
                  </label>
                </div>
                <div className="col-lg-6 pt-[3px] rounded-[3px] text-right">
                  <label className="col-form-label text-[18px] font-medium">
                    USD 21,33
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-2 pb-[13px]">
        <div className="col-lg-6 flex items-center">
          <Link className="text-[#225386] text-[24px] flex" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-arrow-left-short text-[40px]"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              ></path>
            </svg>
            &nbsp; Geri
          </Link>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
          <a
            className="btn btn-danger shadow-none py-[11px] pr-[30px] pl-[35px] text-[21px]"
            role="button"
            href="alici-bilgileri.html"
          >
            Devam Et
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
