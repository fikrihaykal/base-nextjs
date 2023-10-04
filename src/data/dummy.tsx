
import { ChartIcon, DiscoveryIcon, DocumentIcon, FolderIcon, OverviewIcon, WalletIcon, MessageIcon, BellIcon, CommentIcon } from '@/components/atoms/IconParams'
import { MenuItem } from '@/types/menu-item'
import { DropdownDateItem, DropdownItem } from '@/types/dropdown-items'
import { oneYearAgo, oneSemesterAgo, oneMonthAgo, oneWeekAgo, today } from '@/utils/date'

const menuItem: Array<MenuItem> = [
    {
        name: "Beranda",
        url: "/",
        icon: OverviewIcon
    },
    {
        name: "Cuti",
        url: "/cuti",
        icon: FolderIcon
    },
    {
        name: "Placeholder B",
        url: "/portofolio",
        icon: DocumentIcon
    },
    {
        name: "Placeholder C",
        url: "/skem",
        icon: DiscoveryIcon
    },
    {
        name: "Placeholder D",
        url: "/beasiswa",
        icon: ChartIcon
    },
    {
        name: "Placeholder E",
        url: "/",
        icon: ChartIcon
    },
    {
        name: "Placeholder F",
        url: "/",
        icon: ChartIcon
    },
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