import {
  Component,
  Renderer2,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css'],
})
export class StatCardComponent {
  @ViewChild('card', { read: ElementRef }) card!: ElementRef;
  @ViewChild('status', { read: ElementRef }) statusElement!: ElementRef;
  @Input() width: number | string = 150;
  @Input() icon: string = 'home';
  @Input() title: string = 'default title';
  @Input() value!: number | string;
  @Input() height: number | string = 100;
  @Input() enableStatus!: boolean;
  public statusBtnIcon: string = 'toggle_on';
  private isStatusActive: boolean = false;

  ngAfterViewInit() {
    this.cartStatusConfig(this.width, this.height);
    if (this.enableStatus) {
      this.SetupStatusConfig(this.isStatusActive);
    }
  }
  ngOnInit() {}

  private cartStatusConfig(
    width: number | string,
    height: number | string
  ): void {
    this.card.nativeElement.style.width = width.toString() + 'px';
    this.card.nativeElement.style.height = height.toString() + 'px';
  }

  public toggleStatus(): void {
    this.isStatusActive = !this.isStatusActive;
    this.getToggleButtonIconForCurrentStatus(this.isStatusActive);
    this.SetupStatusConfig(this.isStatusActive);
  }
  private getToggleButtonIconForCurrentStatus(status: boolean): void {
    if (status) {
      this.statusBtnIcon = 'toggle_on';
    } else {
      this.statusBtnIcon = 'toggle_off';
    }
  }
  private SetupStatusConfig(status: boolean): void {
    console.log('enabled' + this.enableStatus);
    if (status) {
      console.log('background blue');

      this.statusElement.nativeElement.style.backgroundColor = '#6ebe47';
    } else {
      console.log('background red');

      this.statusElement.nativeElement.style.backgroundColor = 'red';
    }
  }
}
