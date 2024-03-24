export const categories = {
  ai: "AI",
  marketing: "Marketing",
  design: "Thiết kế",
  website: "Công cụ làm web",
  mobile: "Di động",
  analytics: "Analytics",
  editor: "Chỉnh sửa ảnh/video",
  template: "Template",
  utility: "Tiện ích",
  service: "Dịch vụ",
  entertainment: "Giải trí",
  jobs: "Trang tìm việc",
};

export const categoryIcon: Record<keyof typeof categories, string> = {
  ai: "uil:robot",
  marketing: "uil:megaphone",
  design: "uil:palette",
  website: "uil:web-grid",
  mobile: "uil:mobile-android",
  analytics: "uil:chart-pie",
  editor: "uil:image-edit",
  template: "uil:box",
  utility: "uil:wrench",
  service: "uil:calling",
  entertainment: "uil:play-circle",
  jobs: "uil:briefcase-alt",
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
