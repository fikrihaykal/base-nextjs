interface MenuItem {
    name: string,
    url: string,
    icon?: any,
    submenu?: Array<MenuItem>
    // submenu?: boolean,
    notif?: number,
}

export { MenuItem }