import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent implements OnInit{
  showProgressBar:boolean = false; 
  progressValue = 0;
  isCaretUp = false;
  showIcon:boolean =false

  constructor(private toaster: ToastrService){

  }
  ngOnInit(): void {

  }
  startProgress() {
    this.showProgressBar = true;
    this.updateProgress();
    this.showIcon = true;
  }
  toggleProgress() {
    this.showProgressBar = !this.showProgressBar;
    this.showIcon = true;
  }
  updateProgress() {
    const interval = setInterval(() => {
      this.progressValue += 10;
      if (this.progressValue >= 100) {
        clearInterval(interval);
        console.log('value',this.progressValue)
        this.showProgressBar = false;
          this.progressValue = 0;
          this.toaster.success('Migration process has been completed', 'Success',{
            progressBar: true,
            progressAnimation:"decreasing"
          });
          this.showIcon = false;
      }
    }, 1000);
  }
  
}
