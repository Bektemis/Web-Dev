import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photos} from "./models";

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  BASE_URL: string;

  constructor(private client: HttpClient) {
    this.BASE_URL = "https://jsonplaceholder.typicode.com"
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(album: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  deleteAlbum(id: number): Observable<Album[]>{
    return this.client.delete<Album[]>(`${this.BASE_URL}/albums/${id}`)
  }

  updateAlbum(id: number, album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${id}`, album)
  }

  getPhotos(id:number): Observable<Photos[]>{
    return this.client.get<Photos[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }
}
