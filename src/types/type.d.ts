export {};

declare global {
  type IFormLogin = {
    username: string;
    password: string;
  };
  type IFormRegister = {
    username: string;
    password: string;
  };
  type IOptionSelectFormat = {
    readonly label: string;
    readonly value: string | [number, number] | number;
  };
  type UserInfo = {
    status: number;
    source: number; //Nguồn khách hàng
    social_media?: number; // Nguồn khách hàng
    service?: [number, number]; //Sản phẩm quan tâm"
    full_name: string; // Họ tên khách hàng
    gender?: "Nam" | "Nữ" | "Khác"; // Giới tính
    date_of_birth?: datetime; //Ngày sinh
    phone_number: string; //Số điện thoại
    follow_up_date: datetime; //Giờ bắt đầu
    follow_down_date: datetime; //Giờ kết thúc
    address?: string; //Địa chỉ chi tiết
    city?: string; //Thành phố
    district?: string; //Huyện
    ward?: string; //Phường
    detailed_info?: string; //url mạng xã hội,
    notes?: string; //Ghi chú
    comments?: [
      {
        title: string;
        time: datetime;
        status_id: number; //trạng thái
      }
    ];
  };
}
