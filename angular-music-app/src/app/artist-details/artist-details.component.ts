import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import {Artist} from '../artist';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArtistService} from '../artist-service.service';
import { ArtistsComponent } from '../artists/artists.component';
import {FormControl, AbstractControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GlobalArtist } from '../global-artist';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  @Input() artist: Artist;
  //gArtist: Artist;
  @ViewChild('btnCrud') btn: ElementRef;
  //@ViewChild('display') display: ElementRef;
  artistForm: FormGroup;
  //public display = "block";
  display = 'none';


  constructor(private route: ActivatedRoute, private artistService: ArtistService, private location: Location, private fb: FormBuilder, private globalArtist: GlobalArtist){
    //debugger;

    this.createForm();
   }

  ngOnInit() {
    this.getArtist();
  }

  ngOnChanges(){
    this.rebuildForm();
  }

  rebuildForm(){
    this.artistForm.reset({
      ArtistName: '',
      id: ''
    })    
  }

  resetForm(){
    //debugger;
    this.rebuildForm();
    //element.innerHTML = 'add';
    this.btn.nativeElement.textContent = 'add';
    //var x = this.btnCrud();
    //element.textContent = text;
  }

  OnSubmit(){

    //debugger;
    this.artist = this.artistForm.value;
    this.globalArtist.dirtyArtist = this.artist;
    if (this.btn.nativeElement.textContent == 'update')
    {
      
      this.artistService.updateArtist(this.artist).subscribe(() => this.goBack());
    }
    else{
      
      this.artist = this.artistForm.value;

      this.artistService.addArtist({ArtistName: this.artist.ArtistName} as Artist).subscribe(() =>{

        this.goBack();
        
        });
    } 

  }

  

  createForm(){
    this.artistForm = this.fb.group({
      ArtistName: ['', Validators.required],
      id: ['']
    });
  }

  getArtist(): void{
    //debugger;
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != 0)
    {
      this.artistService.getArtist(id).pipe(tap(artist => this.artistForm.setValue({ArtistName: artist.ArtistName, id: artist.id}))).subscribe(artist => {
        artist = this.artist;
      });

      //var x = this.artist;
    }
    else{
      this.btn.nativeElement.textContent = 'add';
    }
  }

  get ArtistName(){
    return this.artistForm.get('ArtistName');
  }

  goBack(): void{
    this.location.back();
  }

  modalOpen(){
    //debugger;
    return this.display ='block';
  }
  modalClose(){
    return this.display ='none';
  }
  getStyle(){
    //debugger;
    return 'none';
  }

  deleteArtist(artistForm): void{
    this.artist = artistForm.value;
    this.artistService.deleteArtist(this.artist).subscribe(() => this.goBack());
  }

  // save(): void{
  //   // debugger;
  //   // if (this.artistForm.get('btnCrud').value == 'update')
  //   // {
  //   //   this.artistService.updateArtist(this.artist).subscribe(() => this.goBack());
  //   // }    
  // }

  // this.artistForm.setValue({
  //   ArtistName: this.artist.ArtistName
  // });

}
