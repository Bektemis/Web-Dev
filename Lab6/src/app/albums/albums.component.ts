import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ALBUMS} from "../fake-db";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  loaded: boolean
  newAlbum: Album

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as Album
  }
  ngOnInit(): void {
    this.getAlbums()
  }


  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  addAlbum(){
    this.loaded = false;
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
        this.albums.push(album);
        this.loaded = true;
        this.newAlbum = {} as Album;
    });
  }

  delAlbum(id: number){
    this.loaded = false;
    this.albumsService.deleteAlbum(id).subscribe((albums) => {
      this.albums = this.albums.filter((album) => album.id !== id);
      this.loaded = true;
    })
  }

}

