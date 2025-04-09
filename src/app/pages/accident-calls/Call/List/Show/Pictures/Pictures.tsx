import React from "react";

function Pictures() {
  return (
    <>
      <h4 className="mb-4 text-primary">Şəkillər</h4>
      <div className="row pt-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="mb-4 col-md-3">
            <div className="card h-100">
              <img
                src={`https://picsum.photos/300/200?random=${item}`}
                className="card-img-top"
                alt={`Şəkil ${item}`}
              />
              <div className="card-body">
                <p className="card-text text-muted">
                  01.06.2024 {10 + item}:00
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pictures;
