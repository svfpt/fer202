import { useState } from "react";

function Exercise2() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleConfirm = () => {
    alert(
      "Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?"
    );
    setIsShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h2>Exercise 2 - Order Processing</h2>

      <button
        className="btn btn-primary"
        onClick={() => setIsShowModal(true)}
      >
        Xử lý đơn hàng
      </button>

      {/* MODAL */}
      {isShowModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Xác nhận</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                Bạn có chắc chắn muốn duyệt đơn hàng này không?
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsShowModal(false)}
                >
                  Hủy
                </button>
                <button className="btn btn-success" onClick={handleConfirm}>
                  Xác nhận
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* BACKDROP */}
      {isShowModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default Exercise2;
