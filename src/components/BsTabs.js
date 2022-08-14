import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const BsTabs = ({ nextPageLink }) => {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
    history.push(nextPageLink);
  };

  return (
    <div className="container absolute top-[15%]	font-[Poppins, sans-seri] right-[15%] z-50">
      <div className="row d-none d-sm-block">
        <div className="col-md-7 col-lg-4 offset-md-4 offset-lg-8 px-0">
          <div id="anasayfaSliderTab" className="w-[455px] ml-[30px]">
            <ul
              className="nav nav-tabs nav-justified font-medium text-[12px]"
              role="tablist"
            >
              <li
                className="nav-item mr-[5px]"
                role="presentation"
                style={{ marginRight: "5px" }}
              >
                <a
                  className="nav-link active anasayfaSliderTab text-[#141414] py-[15px] px-[10px] bg-[#d1dbe5]"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#tab-1"
                >
                  Kurye Taşıması
                </a>
              </li>
              <li className="nav-item mr-[5px]" role="presentation">
                <a
                  className="nav-link anasayfaSliderTab text-[#141414] py-[15px] px-[10px] bg-[#d1dbe5]"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#tab-2"
                >
                  Havayolu Taşıması
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link anasayfaSliderTab text-[#141414] py-[15px] px-[10px] bg-[#d1dbe5]"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#tab-3"
                >
                  Denizyolu Taşıması
                </a>
              </li>
            </ul>
            <form
              onSubmit={handleSubmit(handleRegistration)}
              id="form-hook"
              className="bg-white"
            >
              <div className="tab-content px-[30px] py-[25px] bg-white">
                <div className="tab-pane active" role="tabpanel" id="tab-1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-check">
                        <input
                          {...register("fromTurkey")}
                          type="checkbox"
                          defaultChecked
                          aria-label="radio 1"
                          className="form-check-input shadow-none w-[23px] h-[23px] rounded-[100%]"
                          id="formCheck-1"
                          name="fromTurkey"
                        />
                        <label
                          className="form-check-label py-[4px] pl-[8px]"
                          htmlFor="formCheck-1"
                        >
                          Türkiye'den Gönder
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-check">
                        <input
                          {...register("bringFromTurkey")}
                          type="checkbox"
                          aria-label="radio 2"
                          className="form-check-input shadow-none w-[23px] h-[23px] rounded-[100%]"
                          id="formCheck-2"
                          name="bringFromTurkey"
                        />
                        <label
                          className="form-check-label py-[4px] pl-[8px] font-light"
                          htmlFor="formCheck-2"
                        >
                          Türkiye'ye Getir
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-[30px] text-left">
                    <div className="col-lg-12">
                      <label className="form-label text-[12px] font-medium	text-[#6c757d] mb-0">
                        NEREYE
                      </label>
                      <select
                        required
                        {...register("selected")}
                        className="form-select shadow-none h-[55px] text-[#6c757d]"
                      >
                        <option value="" defaultValue="">
                          Seçiniz
                        </option>
                        <option value="Turkiye">Turkiye</option>
                        <option value="Almanya">Almanya</option>
                      </select>
                    </div>
                  </div>
                  <div className="row pt-[30px] text-left">
                    <div className="col-md-3">
                      <label className="form-label text-[12px] font-medium	text-[#6c757d] mb-0">
                        AĞIRLIK
                      </label>
                      <div className="input-group">
                        <input
                          id="1"
                          type="text"
                          required
                          {...register("weight")}
                          className="form-control shadow-none border-r-0 text-[15px] py-[12px] pl-[9px] pr-[6px]"
                        />
                        <span className="input-group-text bg-white border-l-0 tet-[15px] px-[6px]">
                          KG
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label text-[12px] font-medium	text-[#6c757d] mb-0">
                        UZUNLUK
                      </label>
                      <div className="input-group">
                        <input
                          id="2"
                          required
                          {...register("length")}
                          className="form-control shadow-none border-r-0 text-[15px] py-[12px] pl-[9px] pr-[6px]"
                          type="text"
                        />
                        <span className="input-group-text bg-white border-l-0	text-[11px] px-[6px]">
                          CM
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label text-[12px] font-medium	text-[#6c757d] mb-0">
                        GENİŞLİK
                      </label>
                      <div className="input-group">
                        <input
                          id="3"
                          required
                          {...register("width")}
                          className="form-control shadow-none border-r-0 text-[15px] py-[12px] pl-[9px] pr-[6px]"
                          type="text"
                        />
                        <span className="input-group-text bg-white border-l-0	text-[11px] px-[6px]">
                          CM
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label text-[12px] font-medium	text-[#6c757d] mb-0">
                        YÜKSEKLİK
                      </label>
                      <div className="input-group">
                        <input
                          id="4"
                          required
                          {...register("height")}
                          className="form-control shadow-none py-[12px] pr-[6px] px-[9px] text-[15px] border-r-0"
                          type="text"
                        />
                        <span className="input-group-text bg-white border-l-0	text-[11px] px-[6px]">
                          CM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" role="tabpanel" id="tab-2">
                  <p>Test</p>
                </div>
                <div className="tab-pane" role="tabpanel" id="tab-3">
                  <p>Test</p>
                </div>
              </div>
              <div className="inline-flex shadow-[2px_2px_16px_rgba(38,43,55,0.25)] w-full items-center">
                <div className="col-md-6 z-50 text-left	pt-[10px] pl-[15px]">
                  <label className="form-label mb-0 text-[16px] font-normal">
                    Ödenecek Tutar
                  </label>
                  <label className="form-label text-[28px] font-semibold	">
                    USD 21,23
                  </label>
                </div>
                <button
                  type="submit"
                  variant="danger"
                  form="form-hook"
                  className="btn btn-danger btn-lg w-[220px] h-[64px] shadow-none py-[14px] px-[35px] z-50"
                >
                  Devam Et &gt;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BsTabs;
