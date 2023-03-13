import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  dictionaryList: Dictionary[] = [];

  constructor(private dictionaryService:DictionaryService) { }

  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.dictionaryList = this.dictionaryService.findAll();
  }

}
