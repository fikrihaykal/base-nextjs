
import { MenuItem } from '@/types/menu-item'

const menuItem: Array<MenuItem> = [
    {
        name: "Beranda",
        url: "/",
        icon: "home.svg"
    },
    {
        name: "Komponen",
        url: "/komponen",
        icon: "apps.svg",
        submenu: [
            {
                name: "Button",
                url: "/"
            },
            {
                name: "Badge",
                url: "/"
            },
            {
                name: "Dialog",
                url: "/"
            },
            {
                name: "Table",
                url: "/komponen/table"
            }
        ]
    },
    {
        name: "Style",
        url: "/style",
        icon: "paintbrush.svg",
        submenu: [
            {
                name: "Warna",
                url: "/"
            },
            {
                name: "Tifografi",
                url: "/"
            },
            {
                name: "Elevasi",
                url: "/"
            }
        ]
    },
    {
        name: "Pattern",
        url: "/pattern",
        icon: "money.svg",
        submenu: [
            {
                name: "Button",
                url: "/"
            },
            {
                name: "Badge",
                url: "/"
            },
            {
                name: "Dialog",
                url: "/"
            }
        ]
    },
    {
        name: "Foundations",
        url: "/foundations",
        icon: "globe.svg",
        submenu: [
            {
                name: "Button",
                url: "/"
            },
            {
                name: "Badge",
                url: "/"
            },
            {
                name: "Dialog",
                url: "/"
            }
        ]
    },
    {
        name: "Asset",
        url: "/asset",
        icon: "form.svg",
        submenu: [
            {
                name: "Button",
                url: "/"
            },
            {
                name: "Badge",
                url: "/"
            },
            {
                name: "Dialog",
                url: "/"
            }
        ]
    }
]

export { menuItem }