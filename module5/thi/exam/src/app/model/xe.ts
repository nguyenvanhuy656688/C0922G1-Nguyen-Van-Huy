import {DiemDen} from './diem-den';
import {LoaiXe} from './loai-xe';

export interface Xe {
  id?:number
  soXe?:string
  loaiXe?:LoaiXe
  tenNhaXe?:string
  diemDi?:string
  diemDen?:DiemDen
  soDienThoai:string
  email?:string
  gioDi?:string
  gioDen?:string
}
