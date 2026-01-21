import React, { useState } from 'react';

function PizzaCard({
  image,
  name,
  price,
  oldPrice,
  description,
  tags,
}) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="card h-100 shadow-sm">
        {/* IMAGE */}
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ height: 220, objectFit: 'cover' }}
        />

        {/* BODY */}
        <div className="card-body d-flex flex-column">
          {/* TAGS */}
          {tags && (
            <div className="mb-2">
              {tags.map((t, i) => (
                <span key={i} className="badge bg-danger me-1">
                  {t}
                </span>
              ))}
            </div>
          )}

          <h5 className="card-title">{name}</h5>
          <p className="card-text small text-muted">{description}</p>

          {/* PRICE */}
          <div className="mt-auto">
            <strong className="text-danger fs-5">${price}</strong>
            {oldPrice && (
              <span className="text-muted text-decoration-line-through ms-2">
                ${oldPrice}
              </span>
            )}
          </div>

          {/* BUTTONS */}
          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-outline-primary btn-sm w-50"
              onClick={() => setShowDetail(true)}
            >
              View Details
            </button>
            <button className="btn btn-danger btn-sm w-50">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showDetail && (
        <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{name}</h5>
                <button className="btn-close" onClick={() => setShowDetail(false)} />
              </div>

              <div className="modal-body row">
                <div className="col-md-6">
                  <img
                    src={image}
                    alt={name}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-6">
                  <p>{description}</p>
                  <h4 className="text-danger">${price}</h4>
                  {oldPrice && (
                    <p className="text-muted text-decoration-line-through">
                      ${oldPrice}
                    </p>
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowDetail(false)}
                >
                  Close
                </button>
                <button className="btn btn-danger">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PizzaCard;
