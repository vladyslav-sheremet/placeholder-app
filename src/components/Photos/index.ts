import { IPhoto } from "../../models"

export type PhotosProps = {
    data: IPhoto[]
    error: string
    loading: boolean
}

export { default } from './Photos'