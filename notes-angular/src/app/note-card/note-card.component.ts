import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  /*@ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;*/

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    let truncator = <HTMLElement> document.getElementById('truncator');
    let bodyText = <HTMLElement> document.getElementById('bodyText');

    let style = window.getComputedStyle(bodyText, null);
    let viewableHeight = parseInt(style.getPropertyValue('height'), 10);

    if(bodyText.scrollHeight > viewableHeight) {
      this.renderer.setStyle(truncator, 'display', 'block'); //no overflow
    } else {
      this.renderer.setStyle(truncator, 'display', 'none'); //overflow
    }

  }

}
