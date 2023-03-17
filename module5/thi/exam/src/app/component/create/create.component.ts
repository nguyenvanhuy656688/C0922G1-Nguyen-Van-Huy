import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Xe} from '../../model/xe';
import {DiemDenService} from '../../service/diem-den.service';
import {LoaiXeService} from '../../service/loai-xe.service';
import {LoaiXe} from '../../model/loai-xe';
import {DiemDen} from '../../model/diem-den';
import {ToastrService} from 'ngx-toastr';
import {XeService} from '../../service/xe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formThem: FormGroup;
  xe:Xe
  danhSachLoaiXe: LoaiXe[] = [];
  danhSachDiemDen: DiemDen[] = [];

  constructor(private toast:ToastrService,private diemDenService:DiemDenService,private loaiXeService:LoaiXeService,private xeService:XeService) { }

  ngOnInit(): void {
    this.formThem = new FormGroup({
      id: new FormControl(''),
      soXe: new FormControl(this.xe?.soXe, [Validators.required]),
      loaiXe: new FormControl(this.xe?.loaiXe, [Validators.required]),
      tenNhaXe: new FormControl(this.xe?.tenNhaXe, [Validators.required]),
      diemDi: new FormControl(this.xe?.diemDi, [Validators.required]),
      diemDen: new FormControl(this.xe?.gioDen, [Validators.required]),
      soDienThoai: new FormControl(this.xe?.soDienThoai, [Validators.required,Validators.pattern('090[0-9]{7}|093[0-9]{7}|097[0-9]{7}')]),
      email: new FormControl(this.xe?.email, [Validators.required,Validators.email]),
      gioDi: new FormControl(this.xe?.gioDi, [Validators.required]),
      gioDen: new FormControl(this.xe?.gioDen, [Validators.required]),
    });
    this.diemDenService.danhSach().subscribe(data => {
      this.danhSachDiemDen = data;
    });
    this.loaiXeService.danhSach().subscribe(data=>{
      this.danhSachLoaiXe = data
    })
  }

  them() {
    this.xe = this.formThem.value;
    if (this.formThem.valid) {
      let temp = this.xeService.them(this.xe).subscribe(data => {
        if (temp != null && data) {
          this.toast.success('Thêm mới thành công', 'Chỉnh sửa');
        }
      });
    } else {
      this.toast.warning('Vui lòng kiểm tra lại thông tin', 'Lỗi');
    }

  }
}
