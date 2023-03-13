import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[]= [];

  constructor(private contractService:ContractService) { }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(data =>{
      this.contractList = data
      console.log(this.contractList)
    })
  }

}
