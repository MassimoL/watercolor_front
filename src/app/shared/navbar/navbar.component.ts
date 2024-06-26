import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPaintingComponent } from '../../components/addPaintings/addPaintings.component';
import { UsersService } from '../../services/users.service';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public router = inject(Router);
  public usersService = inject(UsersService);
  private modalService = inject(NgbModal);

  addPainting(){
    const modalRef = this.modalService.open(AddPaintingComponent);
  }

  open(event: Event){
    const id = (event.target as HTMLButtonElement).id;
    if (id === 'register') {
      const modalRef = this.modalService.open(RegisterComponent);
    } else if (id === 'login'){
      const modalRef = this.modalService.open(LoginComponent);
    } else return;
  }

  public logout(){
    localStorage.removeItem('token');
    this.usersService.currentUser.set({
      user_id: 0,
      user_name:'',
      email: '',
      password: '',
      accessToken: ''
    });
    this.router.navigate(['/home']);
  }
}
