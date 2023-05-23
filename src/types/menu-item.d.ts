interface MenuItem {
    name: string,
    url: string,
    icon?: string,
    submenu?: Array<MenuItem>
}

export { MenuItem }