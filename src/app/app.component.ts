import { Component } from '@angular/core';
import { LoaderService } from './common/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loaderCount = 0;
  loading: boolean = false;
  title = 'space-x';
  constructor(private loaderService: LoaderService) {
    this.loaderService.loader.subscribe((state) => {
      setTimeout(() => {
        this.loading = state;
      }, 0);
    });
  }

  ngOnInit() {
    // this.fetchUsersLocation();

    this.loaderService.loader.subscribe((state) => {
      setTimeout(() => {
        this.loaderCount = this.loaderCount + (state ? 1 : -1);
        this.loaderCount = this.loaderCount < 0 ? 0 : this.loaderCount;
      });
    });
  }
}
