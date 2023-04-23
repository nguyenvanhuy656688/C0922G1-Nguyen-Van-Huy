import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT, ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }


  scrollToElement(elementId: string) {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Cannot find element with id: ${elementId}`);
    }
  }

  scrollToElement1(elementId: string) {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Cannot find element with id: ${elementId}`);
    }

  }

  scrollToElement2(elementId: string) {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Cannot find element with id: ${elementId}`);
    }
  }
}
