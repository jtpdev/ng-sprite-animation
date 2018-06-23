import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sprite-animation',
  templateUrl: './sprite-animation.component.html',
  styleUrls: ['./sprite-animation.component.css']
})
export class SpriteAnimationComponent {

  @Input()
  data: any;

  imagePaths: string[];
  times: string[];

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
    }
  }



}
