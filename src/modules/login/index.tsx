"use client";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Image from "next/image";


export default function LoginClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-black p-2.5 text-center text-white text-sm font-semibold">
        <span>IN ẢNH TRỰC TUYẾN - In ảnh nhanh chóng, tiện lợi</span>
      </div>
      <Header />
      <div className="container flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900">Đăng nhập với</h2>
          </div>

          <div className="space-y-4">
            {/* Social Login Buttons */}
            <div className="flex justify-between items-center gap-4">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Image
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="google logo"
                />
                <span className="text-gray-700">Google</span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/e639/9094/af2115f2fefe8b0ee78b87cb1d047faf?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L09K4ct3QucB0H4mvLdiuhN91RWTtdG4MAyPbvtlkX-4G0WbSCvRffz8pHalOPKKTq7BuyuVYnciXJsO~o~EX1M8PDIm0YqdJ2ireJXoH81eG7F-iRLf1ySz-oSpTZwXkYNpd7zkVjCoKb2e-x1nTzDaWaCRKHLS7OzWWSIUhjd0Gc9jLCOzZwZ8Q9XuKj~YRobCokYnDLctmeSKZ2V62NpG98uY6mwn1QB-JFg8bBtp1WIn62YzCtyebuCwN~z7gYREgrX2T1D8AwO-ZfxNnqqaEdWc56gEkDKtJadZDkVlieP5dxj77j2L8AR8JWkC2GJ43AjnUgn7GANpYDpyRQ__"
                  alt="Facebook"
                  className="w-5 h-5"
                  width={1000}
                  height={200}
                />
                <span className="text-gray-700">Facebook</span>
              </button>
            </div>


            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">hoặc</span>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nhập tài khoản"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                  Quên mật khẩu?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors"
              >
                Đăng nhập
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Bạn chưa có tài khoản?{' '}
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
