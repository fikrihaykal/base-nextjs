interface DropdownItem {
    title: string;
    subtitle?: string;
    link?: Boolean;
    key?: string;
}

interface DropdownDateItem {
    title: string;
    date_start?: Date;
    date_end?: Date;
    subtitle?: string;
    link?: Boolean;
    key?: string;
}

export { DropdownItem, DropdownDateItem }