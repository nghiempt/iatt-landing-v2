import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ROUTES } from "@/utils/route";

const CreateOrderSingleSection = () => {
  const [frameSize, setFrameSize] = useState("20x30");
  const [frameColor, setFrameColor] = useState("red");
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="w-full mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-4">Thông tin khách hàng</h2>
            <div className="grid grid-cols-2 gap-4 mb-4 ml-5">
              <div>
                <input
                  type="text"
                  placeholder="Tên"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Họ"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mb-4 ml-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 ml-5">
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Địa chỉ nhận hàng</h2>
            <div className="mb-4 ml-5">
              <input
                type="text"
                placeholder="Quốc gia"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 ml-5">
              <div>
                <input
                  type="text"
                  placeholder="Tỉnh/Thành phố"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Quận/huyện"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mb-4 ml-5">
              <input
                type="text"
                placeholder="Phường/Xã"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 ml-5">
              <input
                type="text"
                placeholder="Số nhà, tên đường (Ví dụ: 123/45, đường ABC)"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Tùy chọn thanh toán</h2>
            <div className="border border-gray-300 rounded divide-y ml-5">
              <div className="p-4 flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  className="mr-2 w-4 h-4 accent-yellow-500"
                  defaultChecked
                />
                <label htmlFor="cod" className="ml-2">
                  Thanh toán khi nhận hàng
                </label>
              </div>
              <div className="p-4 flex items-center">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  className="mr-2 w-4 h-4"
                />
                <label htmlFor="bank" className="ml-2">
                  Thanh toán qua chuyển khoản ngân hàng
                </label>
              </div>
              <div className="p-4 flex items-center">
                <input
                  type="radio"
                  id="momo"
                  name="payment"
                  className="mr-2 w-4 h-4"
                />
                <label htmlFor="momo" className="ml-2">
                  Thanh toán qua MOMO
                </label>
              </div>
              <div className="p-4 flex items-center">
                <input
                  type="radio"
                  id="vnpay"
                  name="payment"
                  className="mr-2 w-4 h-4"
                />
                <label htmlFor="vnpay" className="ml-2">
                  Thanh toán qua VNPay
                </label>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-2">
              Thêm ghi chú cho đơn hàng
            </h2>
            <textarea
              placeholder="Ghi chú về đơn hàng (Nếu có)"
              className="w-full p-3 border border-gray-300 rounded h-24 ml-5"
            ></textarea>
          </div>

          <p className="text-sm text-gray-600">
            Bằng cách tiến hành mua hàng, bạn đã đồng ý với các điều khoản và
            chính sách của chúng tôi.
          </p>

          <div className="flex flex-row justify-between items-center mt-6">
            <Link
              href={`${ROUTES.HOME}`}
              className="flex items-center text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Quay lại Giỏ hàng
            </Link>

            <button className="w-1/2 py-4 bg-yellow-400 hover:bg-yellow-500 text-center rounded-md font-medium transition">
              Đặt hàng
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-4">Thông tin sản phẩm</h2>
            <p className="mb-2">
              <span className="font-medium">Tên sản phẩm:</span> KHUNG ẢNH HÀN
              QUỐC
            </p>
            <div className="border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center h-64 mb-4">
              <div className="text-gray-500 flex flex-col items-center">
                <div className="flex flex-row justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Tải hình ảnh lên</span>
                </div>
                <span className="text-xs mt-1">hoặc kéo thả ảnh vào đây</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Kích thước khung ảnh</h2>
            <div className="flex gap-4 mb-6">
              <button
                className={`border px-4 py-2 rounded-md ${
                  frameSize === "20x30"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-300"
                }`}
                onClick={() => setFrameSize("20x30")}
              >
                20×30
              </button>
              <button
                className={`border px-4 py-2 rounded-md ${
                  frameSize === "40x20"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-300"
                }`}
                onClick={() => setFrameSize("40x20")}
              >
                40×20
              </button>
              <button
                className={`border px-4 py-2 rounded-md ${
                  frameSize === "15x21"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-300"
                }`}
                onClick={() => setFrameSize("15x21")}
              >
                15×21
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Màu sắc</h2>
            <div className="flex gap-4 mb-6">
              <button
                className={`w-8 h-8 rounded-full bg-red-700 ${
                  frameColor === "red"
                    ? "ring-2 ring-offset-2 ring-red-700"
                    : ""
                }`}
                onClick={() => setFrameColor("red")}
                aria-label="Màu đỏ"
              ></button>
              <button
                className={`w-8 h-8 rounded-full bg-gray-800 ${
                  frameColor === "black"
                    ? "ring-2 ring-offset-2 ring-gray-800"
                    : ""
                }`}
                onClick={() => setFrameColor("black")}
                aria-label="Màu đen"
              ></button>
              <button
                className={`w-8 h-8 rounded-full bg-white border border-gray-200 ${
                  frameColor === "white"
                    ? "ring-2 ring-offset-2 ring-gray-400"
                    : ""
                }`}
                onClick={() => setFrameColor("white")}
                aria-label="Màu trắng"
              ></button>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Giá sản phẩm</span>
              <span>100.000₫</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>30.000₫</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Tạm tính</span>
              <span>130.000₫</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span>Khuyến mãi</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nhập mã khuyến mãi"
                  className="border border-gray-300 rounded p-2 text-sm"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between font-bold text-xl pt-4">
              <span>Tổng</span>
              <span>120.000₫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderSingleSection;
