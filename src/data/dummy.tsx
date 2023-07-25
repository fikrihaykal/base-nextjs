
import { ChartIcon, DiscoveryIcon, DocumentIcon, FolderIcon, OverviewIcon, WalletIcon, MessageIcon, BellIcon, CommentIcon } from '@/components/atoms/IconParams'
import { MenuItem } from '@/types/menu-item'
import { DropdownDateItem, DropdownItem } from '@/types/dropdown-items'

const menuItem: Array<MenuItem> = [
    {
        name: "Beranda",
        url: "/",
        icon: OverviewIcon
    },
    {
        name: "Berkas",
        url: "/berkas",
        icon: FolderIcon
    },
    {
        name: "Portofolio",
        url: "/portofolio",
        icon: DocumentIcon
    },
    {
        name: "SKEM",
        url: "/skem",
        icon: DiscoveryIcon
    },
    {
        name: "Beasiswa",
        url: "/beasiswa",
        icon: ChartIcon
    },
    {
        name: "Wirausaha",
        url: "/wirausaha",
        icon: WalletIcon,
    }
]

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
]

const DropdownItem: Array<DropdownItem> = [
    {
        title: "Semua jenis",
        link: false,
        key: ""
    },
    {
        title: "Sertifikat",
        link: false,
        key: "sertifikat"
    },
    {
        title: "Foto",
        link: false,
        key: "foto"
    },
    {
        title: "Dokumen",
        link: false,
        key: "dokumen"
    },
    {
        title: "Lain",
        link: false,
        key: "lain"
    },
]

const oneYearAgo = new Date();
const oneSemesterAgo = new Date();
const oneMonthAgo = new Date();
const oneWeekAgo = new Date();
const today = new Date();
oneYearAgo.setHours(0, 0, 0, 0)
oneSemesterAgo.setHours(0, 0, 0, 0)
oneMonthAgo.setHours(0, 0, 0, 0)
oneWeekAgo.setHours(0, 0, 0, 0)
today.setHours(0, 0, 0, 0)
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
oneSemesterAgo.setMonth(oneSemesterAgo.getMonth() - 6)
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

const DropdownItemDate: Array<DropdownDateItem> = [
    {
        title: "Tanpa batas waktu",
        link: false
    },
    {
        title: "1 tahun terakhir",
        link: false,
        date_start: oneYearAgo
    },
    {
        title: "1 semester terakhir",
        link: false,
        date_start: oneSemesterAgo
    },
    {
        title: "30 hari terakhir",
        link: false,
        date_start: oneMonthAgo
    },
    {
        title: "Minggu ini",
        link: false,
        date_start: oneWeekAgo
    },
    {
        title: "Hari ini",
        link: false,
        date_start: today
    },
]

export { menuItem, menuItemInsights, DropdownItem, DropdownItemDate }