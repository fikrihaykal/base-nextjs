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
    submenu: [
    //   { name: "Delegasi Realisasi", url: "/relker/delegasi" },
      { name: "Riwayat Realisasi", url: "/relker/riwayat" },
    ],
  },
  {
    name: "Presensi",
    url: "/rekapabsen",
    icon: ChartIcon,
    submenu: [
      { name: "Cuti", url: "/rekapabsen/cuti" },
      { name: "Perbaikan", url: "/rekapabsen/rekaplupa" },
    ],
  },
];

const menuItemInsights: Array<MenuItem> = [
  {
    name: "Pengaturan",
    url: "/pengaturan",
    icon: MessageIcon,
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

const DropdownSemester: Array<DropdownItem> = [
  {
    title: "Semester 3 (Ganjil 2023/2024)",
    link: false,
    key: "",
  },
  {
    title: "Semester 2 (Genap 2022/2023)",
    link: false,
    key: "",
  },
  {
    title: "Semester 1 (Ganjil 2022/2023)",
    link: false,
    key: "",
  },
];

const DropdownRole: Array<DropdownItem> = [
  {
    title: "Dosen",
    link: false,
    key: "",
  },
  {
    title: "Mahasiswa",
    link: false,
    key: "",
  },
  {
    title: "Administrator",
    link: false,
    key: "",
  },
];

const DropdownChangeRole = [
  { value: "1", label: "Mahasiswa" },
  { value: "2", label: "Dosen" },
  { value: "3", label: "Tata Usaha" },
  { value: "4", label: "Administrasi" },
  { value: "5", label: "Kepala Departemen" },
  { value: "6", label: "Dekan Fakultas" },
  { value: "7", label: "THL" },
  { value: "8", label: "Magang" },
  { value: "9", label: "Wali" },
  { value: "10", label: "Alumni" },
];
const DropdownItemType: Array<DropdownItem> = [
  {
    title: "Semua jenis",
    link: false,
    key: "",
  },
  {
    title: "Sertifikat",
    link: false,
    key: "sertifikat",
  },
  {
    title: "Foto",
    link: false,
    key: "foto",
  },
  {
    title: "Dokumen",
    link: false,
    key: "dokumen",
  },
  {
    title: "Lain",
    link: false,
    key: "lain",
  },
];

const DropdownItemDate: Array<DropdownDateItem> = [
  {
    title: "Tanpa batas waktu",
    link: false,
  },
  {
    title: "1 tahun terakhir",
    link: false,
    date_start: oneYearAgo,
  },
  {
    title: "1 semester terakhir",
    link: false,
    date_start: oneSemesterAgo,
  },
  {
    title: "30 hari terakhir",
    link: false,
    date_start: oneMonthAgo,
  },
  {
    title: "Minggu ini",
    link: false,
    date_start: oneWeekAgo,
  },
  {
    title: "Hari ini",
    link: false,
    date_start: today,
  },
];

export {
  menuItem,
  menuItemInsights,
  DropdownItem,
  DropdownItemYr,
  DropdownSemester,
  DropdownRole,
  DropdownChangeRole,
  DropdownItemType,
  DropdownItemDate,
};
