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
import Barang from "@/types/barang";

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
    name: "Presensi",
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

const foundItems: Array<Barang> = [
  {
    id: 0,
    title: "STNK",
    subtitle: "Disamping tempat duduk dekat pintu masuk bundaran perpus",
    location: "Bundaran Perpus ITS",
    link: "/portofolio",
    icon: "/images/stnk.jpg",
    type: "dokumen",
  },
  {
    id: 1,
    title: "Laptop HP putih",
    subtitle: "Meja kafe perpustakaan ITS samping jendela",
    location: "Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/laptop.webp",
    type: "elektronik",
  },
  {
    id: 2,
    title: "iPhone 11 Pro Max Hitam",
    subtitle: "Dibawah dekat garis tepi lapangan",
    location: "GOR ITS lapangan badminton",
    link: "/portofolio",
    icon: "/images/iphone.webp",
    type: "elektronik",
  },
  {
    id: 3,
    title: "Airpod putih",
    subtitle: "Meja perpus lt 4 dekat rak buku terakhir",
    location: "Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/airpod.jpg",
    type: "elektronik",
  },
  {
    id: 4,
    title: "Kunci Motor Honda",
    subtitle: "Parkiran sepeda motor depan rektorat",
    location: "Depan Rektorat ITS",
    link: "/portofolio",
    icon: "/images/kunci_motor.webp",
    type: "keamanan",
  },
  {
    id: 5,
    title: "Tas Ransel Hitam",
    subtitle: "Ditengah-tengah area parkir sepeda",
    location: "Parkiran Sepeda ITS",
    link: "/portofolio",
    icon: "/images/tas_ransel.jpg",
    type: "utilitas",
  },
  {
    id: 6,
    title: "Dompet Kulit Coklat",
    subtitle: "Kantin FTIf lantai 2 dekat pintu masuk",
    location: "Kantin FTIf ITS",
    link: "/portofolio",
    icon: "/images/dompet.jpg",
    type: "keamanan",
  },
  {
    id: 7,
    title: "Kacamata Hitam",
    subtitle: "Bangku taman depan perpustakaan",
    location: "Taman Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/kacamata.jpg",
    type: "utilitas",
  },
  {
    id: 8,
    title: "Power Bank Samsung",
    subtitle: "Lantai 3 Gedung Labtek V dekat ruang B301",
    location: "Labtek V ITS",
    link: "/portofolio",
    icon: "/images/power_bank.jpg",
    type: "elektronik",
  },
  {
    id: 9,
    title: "Buku Sosiologi",
    subtitle: "Rak buku sosiologi lantai 2 perpustakaan",
    location: "Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/buku_sosiologi.webp",
    type: "lain",
  },
];

export { menuItem, menuItemInsights, DropdownItem, DropdownItemYr, foundItems };
