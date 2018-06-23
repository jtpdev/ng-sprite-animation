import { Component, OnInit, Input, animate } from '@angular/core';

@Component({
  selector: 'sprite-animation',
  templateUrl: './sprite-animation.component.html',
  styleUrls: ['./sprite-animation.component.css']
})
export class SpriteAnimationComponent {

  @Input()
  data: any;
  @Input()
  start: boolean;

  imagePaths: string[];
  times: string[];

  img: string;

  constructor() { }

  ngOnInit() {
    this.imagePaths = [];
    if (this.data) {
      if (this.data.animation) {
        let path = this.data.animation.path || "";
        let images = this.data.animation.images;
        if (images) {
          images.forEach(image => {
            this.imagePaths.push(path + image);
          });
        }
        console.log(this.imagePaths)
      }
      this.prepareAnimation();
    }
  }

  ngDoCheck() {
    let i = 0;
    this.img = this.imagePaths[i];
    setTimeout(() => {
      this.img = this.imagePaths[i];
    }, this.data.times[i])
    if (i+1 == this.imagePaths.length) {
      i = 0;
    }
  }

  prepareAnimation() {
    for (let i = 0; i < this.imagePaths.length; i++) {
      this.data.times.push(this.data.times[i] || 500);
    }
  }


}
