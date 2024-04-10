import { CommonModule } from '@angular/common';
import { Component, inject, WritableSignal, type OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PaintingsService } from '../../services/paintings.service';
import { Paintings } from '../../interfaces/paintings.interface';
import { VoteService } from '../../services/vote.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-paintings-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './paintings-page.component.html',
  styleUrl: './paintings-page.component.css',
})
export class PaintingsPageComponent implements OnInit {
  public id!: number;
  public currentPainting!: Paintings;
  public currentUser!: User;
  public baseUrl: string = 'http://localhost:3000/';
  public isLogged?: boolean;
  public hasVoted?: boolean;

  private route = inject(ActivatedRoute);
  private paintingsService = inject(PaintingsService);
  private router = inject(Router);
  private voteService = inject(VoteService);
  private usersService = inject(UsersService);

  constructor() {}

  ngOnInit(): void {
    this.currentUser = this.usersService.currentUser();
    console.log('painting-page-comp, ngOnInit, currentUser:', this.currentUser);

    this.route.params.subscribe((params) => {
      this.id = params?.['painting_id'];
      this.paintingsService.getPainting(this.id).subscribe((painting) => {
        this.currentPainting = painting;
      });
    });

    this.isLogged = this.usersService.isLogged();
  }

  public goBack() {
    this.router.navigate(['paintings']);
  }

  public userVote(user_id: number, painting_id: number, value: number) {
    this.voteService
      .hasUserVoted(this.currentUser.user_id, this.currentPainting.painting_id)
      .subscribe((resp) => {
        this.hasVoted = resp.hasVoted;

        console.log('userVote hasVoted:', this.hasVoted);

        if (this.hasVoted) {
          alert('you have already voted this Painting');
          return;
        }

        this.voteService.vote(user_id, painting_id).subscribe(
          (resp) => console.log('user voted:', resp),
          (error) => {
            console.error('Error registering vote:', error);
            alert(error);
          }
        );

        this.voteService.updateVotes(painting_id, value).subscribe(() => {
          this.paintingsService.getPainting(this.id).subscribe((painting) => {
            this.currentPainting = painting;
            alert('Thank you for voting!');
          });
        });
      });
  }
  comment(){

  }
}
