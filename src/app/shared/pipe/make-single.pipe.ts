import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeLastLetter'
})
export class MakeSinglePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length > 0) {
      return value.slice(0, -1); // Use slice to remove the last character
    }
    return value; // Return the original value if it's empty or undefined
  }

}
