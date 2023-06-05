import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-list-component',
  templateUrl: './photo-list-component.component.html',
  styleUrls: ['./photo-list-component.component.scss']
})
export class PhotoListComponentComponent implements OnInit {
  photos: any[] = [];
  favoritePhotos: number[] = [];
  totalFavorites = new Subject<number>();

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe(
      (photos: any[]) => {
        this.photos = photos;
      },
      (error) => {
        console.error('Errore durante il recupero delle foto:', error);
      }
    );
  }

  deletePhoto(id: number): void {
    this.photoService.deletePhoto(id).subscribe(
      () => {
        this.photos = this.photos.filter((photo) => photo.id !== id);
      },
      (error) => {
        console.error('Errore durante la cancellazione della foto:', error);
      }
    );
  }

  likePhoto(id: number): void {
    if (!this.favoritePhotos.includes(id)) {
      this.favoritePhotos.push(id);
      this.totalFavorites.next(this.favoritePhotos.length);
    }
  }

  unlikePhoto(id: number): void {
    const index = this.favoritePhotos.indexOf(id);
    if (index !== -1) {
      this.favoritePhotos.splice(index, 1);
      this.totalFavorites.next(this.favoritePhotos.length);
    }
  }

}
