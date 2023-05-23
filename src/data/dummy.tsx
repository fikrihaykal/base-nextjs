
import { MenuItem } from '@/types/menu-item'

const menuItem: Array<MenuItem> = [
    {
        name: "Beranda",
        url: "/",
        icon: "home.svg"
    },
    {
        name: "Komponen",
        url: "/",
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
            }
        ]
    },
    {
        name: "Style",
        url: "/",
        icon: "paintbrush.svg",
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
        name: "Pattern",
        url: "/",
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
        url: "/",
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
        url: "/",
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