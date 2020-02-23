import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string;

  constructor(private photoService: PhotosService) {
    this.fetchPhoto();
  }

  private fetchPhoto() {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }

  ngOnInit() {
  }

  onClick() {
    this.fetchPhoto();
  }
}
