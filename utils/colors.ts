import type { StatusType } from "./types";

export const colors: Record<StatusType, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-700",
  acquired: "bg-purple-100 text-purple-700",
  unknown: "bg-gray-200 text-gray-700",
};
