import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Inf} from "../shared/note.model";

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input() title?: string;
  @Input() body?: string;
  @Input() link?: string;
  @Input() opacity: number = Inf.touchScreen;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

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

  OnXClick() {
    this.deleteEvent.emit();
  }

}
