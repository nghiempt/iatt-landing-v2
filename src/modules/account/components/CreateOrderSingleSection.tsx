"use client";

import Cookies from "js-cookie";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ROUTES } from "@/utils/route";
import { ProductService } from "@/services/product";
import React from "react";
import { useSearchParams } from "next/navigation";
import { AccountService } from "@/services/account";
import { cn } from "@/lib/utils";
import ImageUpload from "./image-upload";
import { HELPER } from "@/utils/helper";

interface ColorOption {
    id: string;
    name: string;
    bgColor: string;
    borderColor: string;
}

interface SizeOption {
    id: string;
    label: string;
    dimensions: {
        width: number;
        height: number;
    };
}

export interface Province {
    code: number;
    codename: string;
    districts: District[];
    division_type: string;
    name: string;
    phone_code: number;
}

export interface District {
    code: number;
    codename: string;
    division_type: string;
    name: string;
    short_codename: string;
    wards: Ward[];
}

export interface Ward {
    code: number;
    codename: string;
    division_type: string;
    name: string;
    short_codename: string;
}

export interface UserData {
    name: string;
    avatar: string;
    email: string;
    phone: string;
    address: string;
}

export interface FormData extends UserData {
    ward: number;
    district: number;
    province: number;
}

export interface CustomerAccount {
    _id: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    avatar: string;
    address: string;
    ward: string;
    district: string;
    province: string;
    role: string;
    status: boolean;
    created_at: string;
    districtName: string;
    provinceName: string;
    wardName: string;
}

const CreateOrderSingleSection = () => {
    const param = useSearchParams();
    const [frameSize, setFrameSize] = useState("20x30");
    const [frameColor, setFrameColor] = useState("red");
    const [promoCode, setPromoCode] = useState("");
    const [currentImage, setCurrentImage] = React.useState("");
    const [products, setProducts] = useState([] as any);
    const [productsData, setProductsData] = useState({} as any);
    const isLogin = Cookies.get("isLogin");
    const [selectedSize, setSelectedSize] = React.useState<string>("15x21");
    const [customerAccount, setCustomerAccount] =
        useState<CustomerAccount | null>(null);
    const [selectedProduct, setSelectedProduct] = React.useState<any>(
        param.get("product") || "Chon san pham"
    );
    const [selectedColor, setSelectedColor] = React.useState<string>(
        productsData.color?.[0] || "white"
    );
    const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);
    const [formData, setFormData] = React.useState<FormData>({
        name: "",
        email: "",
        avatar: "",
        phone: "",
        address: "",
        ward: 0,
        district: 0,
        province: 0,
    });

    const colorOptions: ColorOption[] = [
        {
            id: "white",
            name: "Trắng",
            bgColor: "bg-white",
            borderColor: "border-gray-300",
        },
        {
            id: "black",
            name: "Đen",
            bgColor: "bg-black",
            borderColor: "border-black",
        },
        {
            id: "gold",
            name: "Gold",
            bgColor: "bg-[#FFD700]",
            borderColor: "border-black",
        },
        {
            id: "silver",
            name: "Bạc",
            bgColor: "bg-[#C0C0C0]",
            borderColor: "border-black",
        },
        {
            id: "wood",
            name: "Gỗ",
            bgColor: "bg-[#8B5A2B]",
            borderColor: "border-black",
        },
    ];

    const sizeOptions: SizeOption[] = [
        { id: "15x21", label: "15x21", dimensions: { width: 150, height: 210 } },
        { id: "20x30", label: "20x30", dimensions: { width: 200, height: 300 } },
        { id: "40x20", label: "40x20", dimensions: { width: 400, height: 200 } },
    ];


    useEffect(() => {
        const fetchProductData = async () => {
            if (!selectedProduct || selectedProduct === "Chon san pham") return;
            try {
                const res = await ProductService.getProductById(selectedProduct);
                if (res && res.data) {
                    setProductsData(res.data);
                    setSelectedColor(res.data.color[0]);
                }
            } catch (error) {
                console.error("Error fetching product by ID:", error);
            }
        };

        fetchProductData();
    }, [selectedProduct]);

    const getImageContainerStyle = () => {
        const selectedSizeOption = sizeOptions.find(
            (size) => size.id === selectedSize
        );
        if (!selectedSizeOption) return {};
        const aspectRatio =
            selectedSizeOption.dimensions.width /
            selectedSizeOption.dimensions.height;
        return {
            aspectRatio: aspectRatio,
            maxWidth: "100%",
            width: "100%",
            position: "relative" as const,
        };
    };

    const renderProduct = async () => {
        const res = await ProductService.getAll();
        if (res && res.data.length > 0) {
            setProducts(res.data);
        }
    };

    useEffect(() => {
        // if (emailCookie) {
        //   init(emailCookie);
        // }

        const fetchAccount = async () => {
            if (isLogin) {
                try {
                    const data = await AccountService.getAccountById(isLogin);
                    setCustomerAccount(data);
                    setFormData({
                        name: data.name,
                        email: data.email,
                        avatar: data.avatar,
                        phone: data.phone,
                        address: data.address,
                        ward: data.ward,
                        district: data.district,
                        province: data.province,
                    });
                } catch (error) {
                    console.error("Error fetching account:", error);
                }
            }
        };

        fetchAccount();
        renderProduct();
    }, []);


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
                    {selectedProduct !== "Chon san pham" && (
                        <>
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
                        </>
                    )}
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

                        {products?.length > 0 && (
                            <select
                                defaultValue={selectedProduct}
                                onChange={(e) => setSelectedProduct(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4"
                            >
                                <option value="Chon san pham" disabled>
                                    Chọn sản phẩm
                                </option>
                                {products?.map((item: any, index: any) => {
                                    return (
                                        <option key={index} value={item?._id}>
                                            {item?.name}
                                        </option>
                                    );
                                })}
                            </select>
                        )}

                        {/* <div
                        className="w-full h-full"
                        style={getImageContainerStyle()}
                        > */}
                        {!currentImage.startsWith("http") ? (
                            <>
                                <ImageUpload
                                    onImageChange={setUploadedFile}
                                    selectedColor={selectedColor}
                                    selectedSize={selectedSize}
                                />

                            </>)
                            : (
                                <>
                                    <div
                                        className={cn(
                                            "relative w-full h-full overflow-hidden rounded-md",
                                            `border-8 ${selectedColor === "white"
                                                ? "border-gray-100"
                                                : selectedColor === "black"
                                                    ? "border-black"
                                                    : selectedColor === "gold"
                                                        ? "border-yellow-400"
                                                        : selectedColor === "silver"
                                                            ? "border-gray-200"
                                                            : selectedColor === "wood"
                                                                ? "border-yellow-950"
                                                                : "border-gray-200"
                                            }`
                                        )}
                                    >
                                        <Image
                                            src={currentImage}
                                            alt="img"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </>
                            )}
                        {/* </div> */}

                    </div>
                    {selectedProduct !== "Chon san pham" && (
                        <>
                            <div>
                                <h2 className="text-lg font-medium mb-2">Kích thước khung ảnh</h2>
                                <div className="flex gap-4 mb-6">
                                    {sizeOptions.map((size) => (
                                        <button
                                            key={size.id}
                                            className={`border px-4 py-2 rounded-md ${selectedSize === size.id
                                                ? "border-yellow-500 bg-yellow-50"
                                                : "border-gray-300"
                                                }`}
                                            onClick={() => setSelectedSize(size.id)}
                                        >
                                            {size.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium mb-2">Màu sắc</h2>
                                <div className="flex gap-4 mb-6">
                                    {colorOptions
                                        .filter((colorOptions) =>
                                            productsData.color?.includes(colorOptions.id)
                                        )
                                        .map((color) => (
                                            <button
                                                key={color.id}
                                                type="button"
                                                className={cn("w-8 h-8 rounded-full transition-all border-2" , 
                                                    color.bgColor,
                                                    color.borderColor, 
                                                    selectedColor === color.id
                                                    ? "ring-2 ring-offset-2 ring-orange-700"
                                                    : ""
                                                )}
                                                onClick={() => {
                                                    setSelectedColor(color.id);
                                                }}
                                                
                                            ></button>
                                        ))}
                                </div>

                            </div>


                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between">
                                    <span>Giá sản phẩm</span>
                                    <span>{selectedProduct &&
                                        HELPER.formatVND(
                                            products.find(
                                                (pro: any) =>
                                                    pro._id.toString() === selectedProduct
                                            )?.price
                                        )}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Phí vận chuyển</span>
                                    <span>{HELPER.formatVND("30000")}</span>
                                </div>
                                <div className="flex justify-between font-medium">
                                    <span>Tạm tính</span>
                                    <span>{selectedProduct &&
                                        HELPER.calculateTotal(
                                            products.find(
                                                (pro: any) =>
                                                    pro._id.toString() === selectedProduct
                                            )?.price, "30000", "0"
                                        )}</span>
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
                                    <span>{selectedProduct &&
                                        HELPER.calculateTotal(
                                            products.find(
                                                (pro: any) =>
                                                    pro._id.toString() === selectedProduct
                                            )?.price, "30000", "0"
                                        )}</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateOrderSingleSection;

