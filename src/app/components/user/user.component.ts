import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: Date;
  avatar?: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  activeTab = 'users';
  
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@thermofisher.com',
      role: 'Administrator',
      status: 'active',
      lastLogin: new Date('2024-01-15T10:30:00')
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@thermofisher.com',
      role: 'Manager',
      status: 'active',
      lastLogin: new Date('2024-01-14T14:22:00')
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@thermofisher.com',
      role: 'User',
      status: 'inactive',
      lastLogin: new Date('2024-01-10T09:15:00')
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@thermofisher.com',
      role: 'Manager',
      status: 'active',
      lastLogin: new Date('2024-01-15T16:45:00')
    }
  ];

  filteredUsers: User[] = [];
  searchTerm = '';
  selectedRole = '';
  selectedStatus = '';

  roles = ['Administrator', 'Manager', 'User'];

  ngOnInit() {
    this.filteredUsers = [...this.users];
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filterUsers();
  }

  onRoleFilter(event: any) {
    this.selectedRole = event.target.value;
    this.filterUsers();
  }

  onStatusFilter(event: any) {
    this.selectedStatus = event.target.value;
    this.filterUsers();
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchTerm) ||
                           user.email.toLowerCase().includes(this.searchTerm);
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      const matchesStatus = !this.selectedStatus || user.status === this.selectedStatus;
      
      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  getUserInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  onEditUser(user: User) {
    console.log('Edit user:', user);
    // Implement edit functionality
  }

  onDeleteUser(user: User) {
    console.log('Delete user:', user);
    // Implement delete functionality
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.users = this.users.filter(u => u.id !== user.id);
      this.filterUsers();
    }
  }

  onAddUser() {
    console.log('Add new user');
    // Implement add user functionality
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

  get activeUsersCount(): number {
    return this.users.filter(user => user.status === 'active').length;
  }

  get inactiveUsersCount(): number {
    return this.users.filter(user => user.status === 'inactive').length;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    console.log('Active tab changed to:', tab);
  }
}