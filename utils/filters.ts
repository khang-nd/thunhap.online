export const categories = {
  ai: "AI",
  marketing: "Marketing",
  design: "Thiết kế",
  website: "Website Builders",
  mobile: "Di động",
  analytics: "Analytics",
  editor: "Chỉnh sửa ảnh/video",
  notes: "Ghi chú",
  utility: "Tiện ích",
  service: "Dịch vụ",
  entertainment: "Giải trí",
};

export const categoryIcon: Record<keyof typeof categories, string> = {
  ai: "uil:robot",
  marketing: "uil:megaphone",
  design: "uil:palette",
  website: "uil:web-grid",
  mobile: "uil:mobile-android",
  analytics: "uil:chart-pie",
  editor: "uil:image-edit",
  notes: "uil:notes",
  utility: "uil:box",
  service: "uil:briefcase",
  entertainment: "uil:play-circle",
};

export const revenueModels = {
  subscription: "Thu phí định kỳ",
  advertising: "Tiền quảng cáo",
  transaction: "Giao dịch",
  sponsorship: "Tài trợ",
  affiliate: "Tiếp thị liên kết",
};

export const status = {
  active: "Hoạt động",
  inactive: "Đã ngừng",
  acquired: "Đã bán",
  unknown: "Không rõ",
};
