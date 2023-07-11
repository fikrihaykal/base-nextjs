
import { ChartIcon, DiscoveryIcon, DocumentIcon, FolderIcon, OverviewIcon, WalletIcon } from '@/components/atoms/IconParams'
import { MenuItem } from '@/types/menu-item'

const iconParam = {
    fontSize: "21px",
    opacity: "0.4"
}

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
        icon: WalletIcon
    }
]

export { menuItem }