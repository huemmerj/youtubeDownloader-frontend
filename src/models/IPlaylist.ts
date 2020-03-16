import { IFIle } from './IFile'
import { Status } from './Status'

export interface IPlaylist {
  id: string
  url: string
  folder: string
  format: string
  files: IFIle[]
  status: Status
}
