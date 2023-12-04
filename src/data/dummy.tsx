import {
  BellIcon,
  ChartIcon,
  CommentIcon,
  FolderIcon,
  MessageIcon,
  OverviewIcon,
} from "@/components/atoms/IconParams";
import Temu, { Hilang } from "@/types/barang";
import { DropdownItem } from "@/types/dropdown-items";
import { MenuItem } from "@/types/menu-item";

const menuItem: Array<MenuItem> = [
  {
    name: "Beranda",
    url: "/",
    icon: OverviewIcon,
  },
  {
    name: "Temuan",
    url: "/temuan",
    icon: FolderIcon,
  },
  {
    name: "Kehilangan",
    url: "/kehilangan",
    icon: ChartIcon,
  },
  {
    name: "Lapor Penemuan",
    url: "/laporpenemuan",
    icon: FolderIcon,
  },
  {
    name: "Lapor Kehilangan",
    url: "/laporkehilangan",
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

const DropdownKehilangan: Array<DropdownItem> = [
  {
    title: "Elektronik",
    key: "1",
  },
  {
    title: "Utilitas",
    key: "2",
  },
  {
    title: "Berharga",
    key: "3",
  },
  {
    title: "Keamanan",
    key: "4",
  },
  {
    title: "Lain",
    key: "5",
  },
];

const DropdownLokasi: Array<DropdownItem> = [
  {
    title: "Perpustakaan ITS",
  },
  {
    title: "GOR ITS",
  },
  {
    title: "Lab KCKS",
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

const foundItems: Array<Temu> = [
  {
    id: 0,
    title: "STNK",
    subtitle: "Disamping tempat duduk dekat pintu masuk bundaran perpus",
    location: "Bundaran Perpus ITS",
    link: "/temuan/stnk",
    icon: "/images/stnk.jpg",
    type: "dokumen",
    status: "on agent",
  },
  {
    id: 1,
    title: "Laptop HP putih",
    subtitle: "Meja kafe perpustakaan ITS samping jendela",
    location: "Perpustakaan ITS",
    link: "/temuan/laptop",
    icon: "/images/laptop.webp",
    type: "elektronik",
    status: "on agent",
  },
  {
    id: 2,
    title: "iPhone 11 Pro Max Hitam",
    subtitle: "Dibawah dekat garis tepi lapangan",
    location: "Lapangan badminton",
    link: "/portofolio",
    icon: "/images/iphone.webp",
    type: "elektronik",
    status: "on agent",
  },
  {
    id: 3,
    title: "Airpod putih",
    subtitle: "Meja perpus lt 4 dekat rak buku terakhir",
    location: "Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/airpod.jpg",
    type: "elektronik",
    status: "on agent",
  },
  {
    id: 4,
    title: "Kunci Motor Honda",
    subtitle: "Parkiran sepeda motor depan rektorat",
    location: "Depan Rektorat ITS",
    link: "/portofolio",
    icon: "/images/kunci_motor.webp",
    type: "keamanan",
    status: "on agent",
  },
  {
    id: 5,
    title: "Tas Ransel Hitam",
    subtitle: "Ditengah-tengah area parkir sepeda",
    location: "Parkiran Sepeda ITS",
    link: "/portofolio",
    icon: "/images/tas_ransel.jpg",
    type: "utilitas",
    status: "on agent",
  },
  {
    id: 6,
    title: "Dompet Kulit Coklat",
    subtitle: "Kantin FTIf lantai 2 dekat pintu masuk",
    location: "Kantin FTIf ITS",
    link: "/portofolio",
    icon: "/images/dompet.jpg",
    type: "keamanan",
    status: "on agent",
  },
  {
    id: 7,
    title: "Kacamata Hitam",
    subtitle: "Bangku taman depan perpustakaan",
    location: "Taman Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/kacamata.jpg",
    type: "utilitas",
    status: "on agent",
  },
  {
    id: 8,
    title: "Power Bank Samsung",
    subtitle: "Lantai 3 Gedung Labtek V dekat ruang B301",
    location: "Labtek V ITS",
    link: "/portofolio",
    icon: "/images/power_bank.jpg",
    type: "elektronik",
    status: "on agent",
  },
  {
    id: 9,
    title: "Buku Sosiologi",
    subtitle: "Rak buku sosiologi lantai 2 perpustakaan",
    location: "Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/buku_sosiologi.webp",
    type: "lain",
    status: "on agent",
  },
];

const lostItems: Array<Hilang> = [
  {
    id: 0,
    title: "KTM",
    subtitle: "Thalia Agatha",
    location: "Bundaran Perpus ITS",
    link: "/kehilangan/ktm",
    icon: "/images/ktm.jpeg",
    type: "dokumen",
    status: "hilang",
    contact: "082264171734",
  },
  {
    id: 1,
    title: "Jaket Hoodie Putih New Balance",
    subtitle: "Fikri Haykal",
    location: "Perpustakaan ITS",
    link: "/portofolio",
    icon: "/images/nb.jpeg",
    type: "utilitas",
    status: "hilang",
    contact: "@fikrihaykal",
  },
  {
    id: 2,
    title: "MacBook Pro",
    subtitle: "Sarah Johnson",
    location: "CCWS",
    link: "/portofolio",
    icon: "/images/laptop.webp",
    type: "device",
    status: "ditemukan",
    contact: "082123247584",
  },
  {
    id: 3,
    title: "Converse Canvas Putih",
    subtitle: "Alexandra Rodriguez",
    location: "Departemen Fisika",
    link: "/portofolio",
    icon: "/images/shoe.jpg",
    type: "art",
    status: "hilang",
    contact: "081275839123",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    subtitle: "Ryan Miller",
    location: "Gym",
    link: "/portofolio",
    icon: "/images/fitnesstracker.jpeg",
    type: "wearable",
    status: "ditemukan",
    contact: "@nay",
  },
  {
    id: 5,
    title: "Smart Home System",
    subtitle: "Elena Chen",
    location: "Home",
    link: "/portofolio",
    icon: "/images/smarthome.jpg",
    type: "tech",
    status: "hilang",
    contact: "@iuyls/082475937348",
  },
  {
    id: 6,
    title: "Vintage Camera",
    subtitle: "Daniel Smith",
    location: "Photography Studio",
    link: "/portofolio",
    icon: "/images/vintagecamera.jpg",
    type: "photography",
    status: "ditemukan",
    contact: "@nay",
  },
  {
    id: 7,
    title: "Leather Backpack",
    subtitle: "Sophie Anderson",
    location: "Fashion Store",
    link: "/portofolio",
    icon: "/images/backpack.jpg",
    type: "fashion",
    status: "hilang",
    contact: "@nay",
  },
  {
    id: 8,
    title: "Gourmet Cookbook",
    subtitle: "Michael Brown",
    location: "Kitchen",
    link: "/portofolio",
    icon: "/images/cookbook.jpg",
    type: "culinary",
    status: "ditemukan",
    contact: "@nay",
  },
  {
    id: 9,
    title: "Virtual Reality Headset",
    subtitle: "Chris Taylor",
    location: "Tech Expo",
    link: "/portofolio",
    icon: "/images/vrheadset.jpg",
    type: "tech",
    status: "hilang",
    contact: "@nay",
  },
];

export {
  DropdownItem,
  DropdownItemYr,
  foundItems,
  lostItems,
  menuItem,
  menuItemInsights,
  DropdownKehilangan,
  DropdownLokasi,
};
