import { Component, OnInit } from '@angular/core';
import {Xe} from '../../model/xe';
import {XeService} from '../../service/xe.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  trang: string | number = 0;
  danhSachXe: Xe[] = [];
  xoa: Xe;

  constructor(private xeService:XeService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.xeService.danhSach().subscribe(data =>{
      this.danhSachXe = data
    })
  }

  xoaXe() {
    let temp = this.xeService.xoaXe(this.xoa.id).subscribe(data=>{
      if (temp != null && data){
        this.toast.success('Đã xóa thành công','Xóa')
        this.ngOnInit()
      }
    })
  }
}
