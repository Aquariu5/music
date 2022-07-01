import { IComment } from "./comment"

export interface ITrack {
    _id: string
    name: string
    author: string
    picture: string
    audio: string
    comments: IComment[]
}