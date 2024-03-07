import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('imageFadeInOut', [
      transition(':increment, :decrement', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AnimationComponent implements OnInit {
  slideIndex = 0;

  images = [
    'assets/image-1.jpg',
    'assets/image-2.jpg',
    'assets/image-4.jpg',
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.images.length;
    }, 3500);
  }

  getCurrentImage(): string {
    return this.images[this.slideIndex];
  }
}

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('300ms', style({ opacity: 0 })),
  ]),
]);