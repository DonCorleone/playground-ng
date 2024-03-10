import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Blog, BloggerService} from "./services/blogger.service";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-17-2-3';
  blogs$: Observable<Blog> = EMPTY

  constructor(private bloggerService: BloggerService) {
    this.blogs$ = this.bloggerService.blogs$;
  }
}
