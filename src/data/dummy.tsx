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
  HomeIcon,
  FormIcon,
  SettingIcon,
  UserTimeIcon,
  CalendarIcon,
  UsersIcon,
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
    icon: HomeIcon,
  },
  {
    name: "Cuti",
    url: "/cuti",
    icon: UserTimeIcon,
  },
  {
    name: "Rencana Studi",
    url: "/rencana-studi",
    icon: FormIcon,
    notif: 3,
  },
  {
    name: "Perwalian",
    url: "/perwalian",
    icon: UsersIcon,
    notif: 3,
  },
  {
    name: "Kelas",
    url: "/kelas",
    icon: CalendarIcon,
  },
];

const menuItemInsights: Array<MenuItem> = [
  {
    name: "Pengaturan",
    url: "/pengaturan",
    icon: SettingIcon,
  },
];

const DropdownItem: Array<DropdownItem> = [
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

const DropdownJenisKelas: Array<DropdownItem> = [
  {
    title: "Mata Kuliah Umum",
    link: false,
    key: "",
  },
  {
    title: "Departemen",
    link: false,
    key: "",
  },
  {
    title: "Pengayaan",
    link: false,
    key: "",
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

export {
  menuItem,
  menuItemInsights,
  DropdownItem,
  DropdownItemDate,
  DropdownSemester,
  DropdownJenisKelas,
  DropdownRole,
  DropdownChangeRole,
};
