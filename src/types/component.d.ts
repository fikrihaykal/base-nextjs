import { ButtonProps, CheckboxProps } from "@chakra-ui/react";

declare module "@tanstack/table-core" {
    interface FilterFns {
        fuzzy: FilterFn<unknown>;
        date?: FilterFn<unknown>;
    }

    interface FilterMeta {
        itemRank: RankingInfo;
    }
}

interface ButtonImageInterface extends ButtonProps {
    moreText: string,
    btnProps?: ButtonProps
}

interface TableCheckboxInterface extends CheckboxProps {
    id: string,
    header?: boolean,
    ref?: any,
    checkboxProps?: CheckboxProps
}

export { ButtonImageInterface, TableCheckboxInterface }

interface CustomCheckboxInterface extends CheckboxProps {
    header?: boolean,
    ref?: any,
    checkboxProps?: CheckboxProps
}

export { CustomCheckboxInterface }