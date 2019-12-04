import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpclient:HttpClient) { }

  searchSongs(name:String){
    const API_KEY = '9b9e01bf723996802337116a888953b4';
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${API_KEY}&format=json`;

    return this.httpclient.get(API_URL).toPromise();
  }

}
