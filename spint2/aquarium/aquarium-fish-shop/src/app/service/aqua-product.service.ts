import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AquaProduct} from '../model/aqua-product';
import {AccompanyingImage} from '../model/accompanying-image';
import {AquaType} from '../model/aqua-type';

@Injectable({
  providedIn: 'root'
})
export class AquaProductService {

  constructor(private httpClient:HttpClient) { }


  getProductFish(page: number, size: number):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/listFish?page=' + page + '&size=' + size)
  }

  getProductAquatic(page1: number, size1: number):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/listAquatic?page1=' + page1 + '&size1=' + size1)
  }

  getProductFood(page2: number, size2: number):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/listFood?page2=' + page2 + '&size2=' + size2)
  }

  findProductById(id: number):Observable<AquaProduct> {
    return this.httpClient.get<AquaProduct>('http://localhost:8080/api/public/findProductById/' + id)
  }

  getAccompanyingImage(id: number):Observable<AccompanyingImage[]> {
    return this.httpClient.get<AccompanyingImage[]>('http://localhost:8080/api/public/accompanyingImageListById/' + id )
  }

  getListSearchResults(page: number, size: number,keyword: string):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/getListSearchResults?page='+page+'&size='+size+'&keyword='+keyword )
  }

  getAquaTypeList():Observable<AquaType[]> {
    return this.httpClient.get<AquaType[]>('http://localhost:8080/api/public/listAquaType')
  }

  changeListForOption(page:number,size:number,keyword: string, id: number):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/changeListForOptionList?page='+page+'&size='+size+'&keyword='+keyword+"&id="+id)
  }
}
