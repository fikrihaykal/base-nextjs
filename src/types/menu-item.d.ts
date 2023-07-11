interface MenuItem {
    name: string,
    url: string,
    // icon?: string,
    icon?: any,
    submenu?: Array<MenuItem>
}

export { MenuItem }