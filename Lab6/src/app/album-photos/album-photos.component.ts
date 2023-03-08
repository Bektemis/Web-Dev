import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Location} from "@angular/common";
import {Album, Photos} from "../models";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  Photos: Photos[]
  loaded: boolean
  constructor(private route: ActivatedRoute, private albumService: AlbumsService, private location: Location) {
    this.loaded = true
    this.Photos = {} as Photos[]
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loaded = false;
    this.albumService.getPhotos(id).subscribe((photos => {
      this.Photos = photos;
      this.loaded = true
    }))
  }
}
