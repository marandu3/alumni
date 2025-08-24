import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  formData = {
    username: '',
    email: '',
    full_name: '',
    graduatedyear: 0,
    phone: '',
    role: 'user',
    hashed_password: '',
    is_active: true
  };

  loading = false; // loader flag

  constructor(private userService: UserService, private messageService: MessageService, private router: Router) {}

  onRegister() {
    // Validate form fields
    if (!this.formData.username || !this.formData.email || !this.formData.full_name || !this.formData.graduatedyear || !this.formData.phone || !this.formData.hashed_password) {
      this.messageService.add({severity:'info', summary: 'Warning', detail: 'Please fill all fields!'});
      return;
    }

    this.loading = true; // show loader

    this.userService.registerUser(this.formData).subscribe({
      next: (res: any) => {
        // Show success toast
        this.messageService.add({severity:'success', summary: 'Success', detail: 'User registered successfully!', life: 2000});

        // Reset form
        

        // Wait for toast to disappear before redirecting
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err: any) => {
        console.error(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Registration failed!'});
        this.loading = false; // hide loader on error
      }
    });
  }
}
