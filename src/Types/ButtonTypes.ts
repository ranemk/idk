export interface ICustomButton {
    name: string
}

export interface ICustomSelect {
    name: string
}

type HTMLInputTypeAttribute = "number" | "search" | "button" | "time" | "image" | "text" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "password" | "radio" | "range"
export interface HeaderSearchInput {
    inputPlaceholder: string
    type: HTMLInputTypeAttribute
}