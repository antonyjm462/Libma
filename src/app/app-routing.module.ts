import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './student/login/login.module#LoginPageModule' },
  { path: 'my-books', loadChildren: './student/my-books/my-books.module#MyBooksPageModule' },
  { path: 'register', loadChildren: './student/register/register.module#RegisterPageModule' },
  { path: 'student-dashboard', loadChildren: './student/student-dashboard/student-dashboard.module#StudentDashboardPageModule' },
  { path: 'all-books', loadChildren: './shared/all-books/all-books.module#AllBooksPageModule' },
  { path: 'about', loadChildren: './shared/about/about.module#AboutPageModule' },
  { path: 'add-book', loadChildren: './librarian/add-book/add-book.module#AddBookPageModule' },
  { path: 'return-book', loadChildren: './librarian/return-book/return-book.module#ReturnBookPageModule' },
  { path: 'issue-book', loadChildren: './librarian/issue-book/issue-book.module#IssueBookPageModule' },
  { path: 'librarian-dashboard', loadChildren: './librarian/librarian-dashboard/librarian-dashboard.module#LibrarianDashboardPageModule' },
  { path: 'book-list', loadChildren: './librarian/book-list/book-list.module#BookListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
