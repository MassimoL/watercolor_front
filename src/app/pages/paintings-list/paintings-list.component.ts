import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { Paintings } from '../../interfaces/paintings.interface';
import { PaintingsService } from '../../services/paintings.service';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-paintings-list',
    standalone: true,
    templateUrl: './paintings-list.component.html',
    styleUrl: './paintings-list.component.css',
    imports: [NavbarComponent, RouterLink, UpperCasePipe, TitleCasePipe]
})
export class PaintingsListComponent{

  public paintings: Paintings[] = [];
  public baseUrl: string = 'http://localhost:3000/';

  constructor( private paintingsService: PaintingsService){}


  ngOnInit(): void{
    this.paintingsService.getAllPaintings()
      .subscribe(
        (paintings) => {
          this.paintings = paintings
        },
        (error) => {

          console.log("Could not retrieve paintings list");
        }
      )
  }
}
