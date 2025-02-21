"use client";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { ROUTES } from "@/utils/route";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export type OrderStatus = 'pending' | 'success' | 'cancelled' | 'failed';

export interface OrderItem {
  id: string;
  date: string;
  image: string;
  title: string;
  category: string;
  specs: string;
  total: number;
  status: OrderStatus;
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('₫', 'đ');
};

const getStatusBadge = (status: OrderStatus) => {
  const statusConfig = {
    pending: { label: 'Đang giao hàng', class: 'bg-blue-500 hover:bg-blue-600' },
    success: { label: 'Giao hàng thành công', class: 'bg-green-500 hover:bg-green-600' },
    cancelled: { label: 'Đã hủy đơn hàng', class: 'bg-gray-500 hover:bg-gray-600' },
    failed: { label: 'Giao hàng thất bại', class: 'bg-red-500 hover:bg-red-600' }
  };

  const config = statusConfig[status];
  return (
    <Badge className={`${config.class} text-white py-2 rounded-md`}>
      {config.label}
    </Badge>
  );
};

const orders: OrderItem[] = [
  {
    id: "123456",
    date: "02/05/2025, 13:12",
    image: "https://res.cloudinary.com/farmcode/image/upload/v1739972497/iatt/wuojlih9vn0razzv8hre.png",
    title: "Khung ảnh Hàn Quốc",
    category: "Khung ảnh",
    specs: "Phân loại: 20x30, đen",
    total: 500000,
    status: "success"
  },
  {
    id: "123456",
    date: "02/05/2025, 13:12",
    image: "https://res.cloudinary.com/farmcode/image/upload/v1739972497/iatt/wuojlih9vn0razzv8hre.png",
    title: "Khung ảnh Hàn Quốc",
    category: "Khung ảnh",
    specs: "Phân loại: 20x30, đen",
    total: 500000,
    status: "cancelled"
  },
  {
    id: "123456",
    date: "02/05/2025, 13:12",
    image: "https://res.cloudinary.com/farmcode/image/upload/v1739972497/iatt/wuojlih9vn0razzv8hre.png",
    title: "Khung ảnh Hàn Quốc",
    category: "Khung ảnh",
    specs: "Phân loại: 20x30, đen",
    total: 500000,
    status: "failed"
  },
  {
    id: "123456",
    date: "02/05/2025, 13:12",
    image: "https://res.cloudinary.com/farmcode/image/upload/v1739972497/iatt/wuojlih9vn0razzv8hre.png",
    title: "Khung ảnh Hàn Quốc",
    category: "Khung ảnh",
    specs: "Phân loại: 20x30, đen",
    total: 500000,
    status: "pending"
  },
];

export default function OrderHistoryClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-black p-2.5 text-center text-white text-sm font-semibold">
        <span>IN ẢNH TRỰC TUYẾN - In ảnh nhanh chóng, tiện lợi</span>
      </div>
      <Header />
      <div className="container pb-6 pt-2">
        <div className="px-4 pt-4 pb-4 lg:pb-0 lg:px-0">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6 ">
            <Link href={`${ROUTES.HOME}`} className="hover:text-[rgb(var(--primary-rgb))] text-md">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`${ROUTES.ABOUT}`} className="hover:text-[rgb(var(--primary-rgb))] text-md">Lịch sử đơn hàng</Link>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className="w-1/3 h-[600px] bg-gray-300"></div>
          <div className="w-2/3 space-y-4">
            <h1 className="text-2xl font-semibold mb-6">Đơn hàng của bạn</h1>
            {orders.map((order: any, index: any) => (
              <div key={index} className="border border-gray-300 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex justify-between items-center gap-16">
                    <span>Mã đơn hàng: #123456</span>
                    <span>Ngày đặt hàng: 02/05/2025, 13:12</span>
                  </div>
                  <div className="flex justify-center items-center gap-1">Xem chi tiết <ChevronRight size={15} /></div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 justify-center items-center">
                    <div className="relative w-24 h-24">
                      <Image
                        src={order.image}
                        alt={order.title}
                        fill
                        className="object-cover rounded-md border"
                      />
                    </div>
                    <div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">{order.category}</p>
                        <h3 className="text-xl font-medium">{order.title}</h3>
                        <p className="text-sm text-gray-500">{order.specs}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="space-y-4">
                      {getStatusBadge(order.status)}
                      <p className="text-xl font-medium">Tổng đơn: {formatCurrency(order.total)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
