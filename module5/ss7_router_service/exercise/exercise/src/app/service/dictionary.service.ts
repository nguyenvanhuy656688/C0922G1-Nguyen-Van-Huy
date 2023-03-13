import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [
    {
      word: "Chicken",
      mean: "con gà"
    },
    {
      word: "cow",
      mean: "con bò"
    },

    {
      word: "snake",
      mean: "con rắng"
    }, {
      word: "Dragon"
    }]

  constructor() {
  }

  findAll(){
    return this.dictionary;
  }


  findByWord(word: string):Dictionary {
    return this.dictionary.filter(it=> it.word === word)[0]
  }
}
