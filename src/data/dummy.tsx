import {
  ChartIcon,
  DiscoveryIcon,
  DocumentIcon,
  FolderIcon,
  OverviewIcon,
  WalletIcon,
  MessageIcon,
  BellIcon,
  CommentIcon,
} from "@/components/atoms/IconParams";
import { MenuItem } from "@/types/menu-item";
import { DropdownDateItem, DropdownItem } from "@/types/dropdown-items";
import {
  oneYearAgo,
  oneSemesterAgo,
  oneMonthAgo,
  oneWeekAgo,
  today,
} from "@/utils/date";

const menuItem: Array<MenuItem> = [
  {
    name: "Beranda",
    url: "/",
    icon: OverviewIcon,
  },
  {
    name: "Realisasi Kerja",
    url: "/relker",
    icon: FolderIcon,
  },
  {
    name: "Rekap Absen",
    url: "/rekapabsen",
    icon: ChartIcon,
  },
];

const menuItemInsights: Array<MenuItem> = [
  {
    name: "Inbox",
    url: "/inbox",
    icon: MessageIcon,
    notif: 4,
  },
  {
    name: "Notifications",
    url: "/notif",
    icon: BellIcon,
    notif: 12,
  },
  {
    name: "Comments",
    url: "/comments",
    icon: CommentIcon,
    notif: 2,
  },
];

const DropdownItem: Array<DropdownItem> = [
  {
    title: "Januari",
    link: false,
    key: "-1-",
  },
  {
    title: "Februari",
    link: false,
    key: "-2-",
  },
  {
    title: "Maret",
    link: false,
    key: "-3-",
  },
  {
    title: "April",
    link: false,
    key: "-4-",
  },
  {
    title: "Mei",
    link: false,
    key: "-5-",
  },
  {
    title: "Juni",
    link: false,
    key: "-6-",
  },
  {
    title: "Juli",
    link: false,
    key: "-7-",
  },
  {
    title: "Agustus",
    link: false,
    key: "-8-",
  },
  {
    title: "September",
    link: false,
    key: "-9-",
  },
  {
    title: "Oktober",
    link: false,
    key: "-10-",
  },
  {
    title: "November",
    link: false,
    key: "-11-",
  },
  {
    title: "Desember",
    link: false,
    key: "-12-",
  },
];

const DropdownItemYr: Array<DropdownItem> = [
  {
    title: "2023",
    link: false,
    key: "2023-",
  },
  {
    title: "2022",
    link: false,
    key: "2022-",
  },
  {
    title: "2021",
    link: false,
    key: "2021-",
  },
  {
    title: "2020",
    link: false,
    key: "2020-",
  },
];

export { menuItem, menuItemInsights, DropdownItem, DropdownItemYr };
