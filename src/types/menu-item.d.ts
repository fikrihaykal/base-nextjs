interface MenuItem {
    name: string,
    url: string,
    icon?: any,
    submenu?: Array<MenuItem>
    notif?: number,
}

export { MenuItem }