import React from 'react';

function PizzaCard({ name, description, price, oldPrice, image, tags }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ height: 350, objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <p className="card-text">{description}</p>

        {/* Tags */}
        {tags && (
          <div className="mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-warning text-dark me-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <strong className="text-primary">${price}</strong>
            {oldPrice && (
              <span className="text-muted ms-2 text-decoration-line-through">
                ${oldPrice}
              </span>
            )}
          </div>

          <button className="btn btn-sm btn-outline-primary">
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
