
import { ChartIcon, DiscoveryIcon, DocumentIcon, FolderIcon, OverviewIcon, WalletIcon, MessageIcon, BellIcon, CommentIcon } from '@/components/atoms/IconParams'
import { MenuItem } from '@/types/menu-item'
import { DropdownItem } from '@/types/dropdown-items'

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

export { menuItem }

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

export { menuItemInsights }

const DropdownItem: Array<DropdownItem> = [
    {
        name: "Semua jenis",
        link: false,
    },
    {
        name: "Sertifikat",
        link: false,
    },
    {
        name: "Foto",
        link: false,
    },
    {
        name: "Dokumen",
        link: false,
    },
    {
        name: "Lain",
        link: false,
    },
]

export {DropdownItem}

const DropdownItemDate: Array<DropdownItem> = [
    {
        name: "Tanpa batas waktu",
        link: false,
    },
    {
        name: "1 tahun terakhir",
        link: false,
    },
    {
        name: "1 semester terakhir",
        link: false,
    },
    {
        name: "30 hari terakhir",
        link: false,
    },
    {
        name: "Minggu ini",
        link: false,
    },
    {
        name: "Hari ini",
        link: false,
    },
]

export {DropdownItemDate}