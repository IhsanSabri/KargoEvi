import React from "react";

const Product = () => {
  return (
    <div className="col-lg-12">
      <div className="card px-3 pb-3">
        <div className="card-header bg-white border-b-0 pt-8 pb-[20px]">
          <h1 className="display-6 text-[26px] font-normal text-left">
            Ürün İçerik Bilgileri
          </h1>
        </div>
        <div className="card-body">
          <div className="row flex justify-center">
            <div className="col-xl-2">
              <label className="form-label flex text-[12px] font-medium text-[#6c757d] mb-0 text-left">
                ADET (*)
              </label>
              <select className="form-select shadow-none h-[49px] text-[#495057] text-[15px] border-[#e5e5e7] mt-[6px]">
                <option value="" defaultValue="">
                  Seçiniz
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
            <div className="col-xl-2">
              <label className="form-label flex text-[12px] font-medium text-[#6c757d] mb-0 text-left">
                ÜRÜN TANIMI (*)
              </label>
              <input
                type="text"
                className="form-control shadow-none py-[12px] px-2.5 text-[#6c757d] text-[15px] border-[#e5e5e7] mt-[6px]"
              ></input>
            </div>
            <div className="col-xl-2">
              <label className="form-label flex text-[12px] font-medium text-[#6c757d] mb-0 text-left">
                AĞIRLIK (*)
              </label>
              <div className="input-group border-[#e5e5e7]">
                <input
                  className="form-control shadow-none text-[15px] py-[12px] pl-2.5 text-[#6c757d] border-[#e5e5e7] mt-[6px] border-r-0"
                  type="text"
                ></input>
                <span className="bg-white text-[10px] flex justify-content-xxl-center align-items-xxl-center input-group-text border-[#e5e5e7] border-l-0 mt-[6px] p-1.5">
                  KG
                </span>
              </div>
            </div>
            <div className="col-xl-2">
              <label className="form-label flex text-[12px] font-medium text-[#6c757d] mb-0 text-left">
                HS(GTIP)(*)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-question-circle w-[14px] h-[14px] flex mt-[3px] ml-[5px]"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path>
                </svg>
              </label>
              <input
                type="text"
                className="form-control shadow-none py-[12px] px-2.5 text-[#6c757d] text-[15px] border-[#e5e5e7] mt-[6px]"
              ></input>
            </div>
            <div className="col-xl-2">
              <label className="form-label flex text-[12px] font-medium text-[#6c757d] mb-0 text-left">
                MENŞEİ (*)
              </label>
              <select className="form-select shadow-none h-[49px] text-[#495057] text-[15px] border-[#e5e5e7] mt-[6px]">
                <option value="" defaultValue="">
                  Seçiniz
                </option>
                <option value="">Almanya</option>
              </select>
            </div>
            <div className="col-xl-2">
              <label className="form-label flex text-[12px] font-medium text-[#6c757d] mb-0 text-left">
                BİRİM DEĞERİ
              </label>
              <div className="input-group border-[#e5e5e7]">
                <input
                  className="form-control shadow-none text-[15px] py-[12px] pl-2.5 text-[#6c757d] border-[#e5e5e7] mt-[6px] border-r-0"
                  type="text"
                ></input>
                <select className="bg-[#E5E5E5] font-semibold text-[20px] flex justify-content-xxl-center align-items-xxl-center input-group-text border-[#e5e5e7] border-l-0 mt-[6px] p-1.5">
                  <option value="" defaultValue="">
                    €
                  </option>
                  <option value="">$</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
