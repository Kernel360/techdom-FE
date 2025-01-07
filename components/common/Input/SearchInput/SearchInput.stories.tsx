import SearchInput from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SearchInput> = {
    title: 'Components/Input/SearchInput',
    component: SearchInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: '검색 입력창의 크기를 설정합니다',
        },
        placeholder: {
            control: 'text',
            description: '플레이스홀더 텍스트를 설정합니다',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태를 설정합니다',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '320px' }}>
                <Story />
            </div>
        ),
    ],
}

export default meta

type StoryType = StoryObj<typeof SearchInput>

export const Default: StoryType = {
    args: {
        placeholder: '검색어를 입력하세요',
        icon: '/icons/search-icon.svg',
    },
}

export const VehicleRegistrationPlate: StoryType = {
    args: {
        placeholder: '차량을 검색하세요.',
        icon: '/icons/pink-search-icon.svg',
    },
}

export const DarkTheme: StoryType = {
    args: {
        placeholder: '차량을 검색하세요.',
        icon: '/icons/black-search-icon.svg',
    },
}
