import React from "react";

const OrderSummary = () => {
  return (
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
              <label className="col-form-label text-[12px]">Toplam Tutar</label>
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
  );
};

export default OrderSummary;
