import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  formData = {
    username: '',
    password: ''
  };

  loading = false;

  constructor(private userService: UserService, private messageService: MessageService, private router: Router) {}

  onLogin() {
    if (!this.formData.username || !this.formData.password) {
      this.messageService.add({ severity: 'info', summary: 'Warning', detail: 'Please fill all fields!' });
      return;
    }

    this.loading = true;

    this.userService.loginUser(this.formData).subscribe({
      next: (res: any) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful!', life: 2000 });

        // Save token or session if needed
        localStorage.setItem('token', res.token);

        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/dashboard']); // redirect after toast
        }, 2000);
      },
      error: (err: any) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid username or password!' });
        this.loading = false;
      }
    });
  }
}
