import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";
import {Dictionary} from "../model/dictionary";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary:Dictionary={}

  constructor(private activatedRoute:ActivatedRoute, private dictionaryService:DictionaryService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      const word = paramMap.get('word')
      console.log(word)
      this.dictionary =this.dictionaryService.findByWord(word)
    })
  }

}
