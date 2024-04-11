import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { PaintingsInterface } from '../../interfaces/paintings.interface';
import { PaintingService } from '../../services/paintings.service';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-paintings-list',
    standalone: true,
    templateUrl: './paintings-list.component.html',
    styleUrl: './paintings-list.component.css',
    imports: [NavbarComponent, RouterLink, UpperCasePipe, TitleCasePipe, RouterLink]
})
export class PaintingsListComponent{

  public paintings: PaintingsInterface[] = [];
  public baseUrl: string = 'http://localhost:3000/';
  listPaiting: PaintingsInterface[] | undefined;

  constructor( private paintingService: PaintingService){}

  
  ngOnInit(): void {
    this.getListPaitings()
  }

  getListPaitings() {
    this.paintingService.getListPaintings().subscribe((data: PaintingsInterface[]) => {
      this.listPaiting = data;
    })
  }

  deletePaitings(id: number) {
    if (window.confirm('Are you sure you want to delete this painting?')) {
      this.paintingService.deletePainting(id).subscribe(() => {
        this.getListPaitings();
      });
    }
}}
