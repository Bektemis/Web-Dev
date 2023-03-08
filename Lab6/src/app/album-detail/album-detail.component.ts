import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import { Location } from '@angular/common'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  updatedAlbum: Album
  constructor(private route: ActivatedRoute, private albumService: AlbumsService, private location: Location) {
    this.album = {} as Album
    this.loaded = true
    this.updatedAlbum = {id: this.album.id, userId: this.album.userId} as Album
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loaded = false;
    this.albumService.getAlbum(id).subscribe((album => {
      this.album = album;
      this.loaded = true
    }))
  }

  returnBack(): void{
    this.location.back()
  }

  updateAlbum(id: number): void{
    this.updatedAlbum.userId = this.album.userId
    this.albumService.updateAlbum(id, this.updatedAlbum).subscribe((album) => {
      this.album = album;
      this.updatedAlbum.title = "";
    })
  }
}
