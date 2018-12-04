import {Injectable} from '@angular/core';
import {Artist} from './artist';

@Injectable()
export class GlobalArtist {
    dirtyArtist: Artist;
}
