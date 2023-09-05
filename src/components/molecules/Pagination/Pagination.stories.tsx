import type {Meta, StoryObj} from '@storybook/react';

import {
    Pagination, PaginationProps
} from "./Pagination"
import {ButtonProps, IconButton, ComponentDefaultProps} from "@chakra-ui/react";
import theme from "../../../theme/theme"


const meta: Meta<typeof IconButton> = {
    title: 'Pagination',
    component: IconButton,
    argTypes: {
        size: {
            options: ["lg" , "md" , "sm" , "xs"],
            control: { type: 'radio'}
        },
        variant: {
            options: ["ghost" , "outline" , "solid" , "link" , "unstyled"],
            control: { type: 'select'}
        },
        colorScheme: {
            options: ["whiteAlpha" , "blackAlpha" , "gray" , "red" , "orange" , "yellow" , "green" , "teal" , "blue" , "cyan" , "purple" , "pink" , "linkedin" , "facebook" , "messenger" , "whatsapp" , "twitter" , "telegram"],
            control: { type: 'select'}
        }
    }
}
export default meta

type Story = StoryObj<typeof Pagination>

const buttonProps = {
    ...theme.components.Button.defaultProps
}

console.log(theme)
const roundObject : Omit<PaginationProps, "aria-label"> = {
    count: 8,
    defaultPage: 2,
    isRound: true,
    siblingCount: 1,
    boundaryCount: 1,
    hideNextButton: false,
    hidePrevButton: false,
    onChange: (event, index) => console.log('berhasil - ' + index),
    ...buttonProps
}
export const Round: Story = {
    args: {
      ...roundObject
    },
    render: (args) => <Pagination {...args} />
}

export const Blue: Story = {
    args: {
        ...roundObject,
        colorScheme: 'blue'
    },
    render: (args) => <Pagination {...args} />
}

export const BoundaryCount: Story = {
    args: {
        ...roundObject,
        colorScheme: 'blue',
        count: 8,
        defaultPage: 2,
        boundaryCount: 2
    },
    render: (args) => <Pagination {...args} />
}