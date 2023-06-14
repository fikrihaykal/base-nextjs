
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
                url: "/komponen/button"
            },
            {
                name: "Badge",
                url: "/komponen/badge"
            },
            {
                name: "Dialog",
                url: "/komponen/dialog"
            },
            {
                name: "Table Basic",
                url: "/komponen/table-basic"
            },
            {
                name: "Table Advance",
                url: "/komponen/table-advance"
            },
            {
                name: "Table Scroll",
                url: "/komponen/table-scroll"
            },
            {
                name: "Form",
                url: "/komponen/form"
            }
        ]
    },
    {
        name: "Style",
        url: "/style",
        icon: "paintbrush.png",
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
        icon: "pattern.png",
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
        icon: "foundations.png",
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
        icon: "assets.png",
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