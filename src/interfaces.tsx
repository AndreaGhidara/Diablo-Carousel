// Caption
export interface CaptionProps{
    title: string | null,
    description?: string | null, //description is optional
}

export interface ButtonProps{
    text: string | null,
    primaryColor?: string | null,
    secondaryColor?: string | null,
}

export interface DevicesProps{
    wid: number | null,
    key: string | null,
    path: string | null,
}