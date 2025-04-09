import React from "react";

function Main() {
  return (
    <div className="d-flex flex-column h-100">
      <div className="mb-6">
        <h4 className="mb-4 text-primary"> Ümumi məlumatlar</h4>
        <div className="separator separator-dashed mb-6"></div>

        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">
                Kateqoriya
              </span>
              <span className="text-dark fs-6 fw-bolder">Partlayış</span>
            </div>
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">
                Çağırış nömrəsi
              </span>
              <span className="text-dark fs-6 fw-bolder">AQ-2024-1</span>
            </div>
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">Ad Soyad</span>
              <span className="text-dark fs-6 fw-bolder">Elvin Malikov</span>
            </div>
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">
                Telefon nömrəsi
              </span>
              <span className="text-dark fs-6 fw-bolder">0506567001</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">Fin</span>
              <span className="text-dark fs-6 fw-bolder">5zk92ne</span>
            </div>
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">
                Abunəçi kodu
              </span>
              <span className="text-dark fs-6 fw-bolder">456456</span>
            </div>
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">
                Sayğac nömrəsi
              </span>
              <span className="text-dark fs-6 fw-bolder">321</span>
            </div>
            <div className="d-flex flex-column mb-8">
              <span className="text-gray-600 fs-7 fw-bold mb-2">Status</span>
              <span className="badge badge-light-success fs-7 fw-bold">
                Tamamlanıb
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="card bg-light">
          <div className="card-body p-4">
            <h5 className="text-gray-800 fw-bold mb-4">Qeyd</h5>
            <p className="text-gray-600 mb-0">test qeyd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
