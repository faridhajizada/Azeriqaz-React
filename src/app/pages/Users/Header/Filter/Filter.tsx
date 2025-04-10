import "./Filter.scss";

function Filter({ showFilter }: { showFilter: boolean }) {
  return (
    <div className={`filter-accordion mt-3 ${showFilter ? "open" : ""}`}>
      <div className="card p-4 shadow-sm">
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">İstifadəçi adı</label>
                <input type="text" className="form-control" placeholder="Ad" />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Rolu</label>
                <select className="form-control">
                  <option value="">Seçin</option>
                  <option value="admin">Admin</option>
                  <option value="user">İstifadəçi</option>
                </select>
              </div>
              <div className="mb-3 col-md-6">
                <div className="d-flex align-items-end h-100">
                  <button className="btn btn-primary w-100">Axtar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              {[
                {
                  label: "Sıfırla",
                  icon: "fas fa-sync-alt",
                  className: "btn btn-secondary text-dark",
                },
                {
                  label: "Excel-ə ixrac",
                  icon: "fas fa-file-excel",
                  className: "btn btn-success",
                },
              ].map((button, index) => (
                <div key={index} className=" col-md-12 ">
                  <div className="d-flex align-items-end h-100">
                    <button
                      className={`${button.className} w-100 fw-bold py-3 mt-10`}
                    >
                      <i className={`${button.icon} me-2`}></i> {button.label}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
