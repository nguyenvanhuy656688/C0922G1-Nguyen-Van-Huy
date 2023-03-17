import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {XeService} from '../../service/xe.service';
import {DiemDenService} from '../../service/diem-den.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Xe} from '../../model/xe';
import {DiemDen} from '../../model/diem-den';
import {ToastrService} from 'ngx-toastr';
import {LoaiXe} from '../../model/loai-xe';
import {LoaiXeService} from '../../service/loai-xe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formSua: FormGroup;
  xe: Xe;
  danhSachDiemDen: DiemDen[] = [];
  danhSachLoaiXe: LoaiXe[] = [];

  constructor(private activatedRoute: ActivatedRoute, private xeService: XeService
              , private diemDenService: DiemDenService,
              private toast: ToastrService,private loaiXeService:LoaiXeService) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      this.getXe(+id);
    });


  }

  ngOnInit(): void {
    this.formSua = new FormGroup({
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


  sua() {
    this.xe = this.formSua.value;
    if (this.formSua.valid) {
      let temp = this.xeService.sua(this.xe.id, this.xe).subscribe(data => {
        if (temp != null && data) {
          this.toast.success('Chỉnh sửa thành công', 'Chỉnh sửa');
        }

      });
    } else {
      this.toast.warning('Vui lòng kiểm tra lại thông tin', 'Lỗi');
    }
  }

  private getXe(id: number) {
    return this.xeService.timTheoId(id).subscribe(data => {
      this.formSua.patchValue(data);
    });
  }

  compare(so1: any, so2: any) {
    return so1 && so2 ? so1.id === so2.id : so1 === so2;
  }

}
