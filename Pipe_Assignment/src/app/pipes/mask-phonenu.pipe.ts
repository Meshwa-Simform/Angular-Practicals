import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhonenu',
  standalone: true
})
export class MaskPhonenuPipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone) {
      return phone; 
    }
    // Remove non-numeric characters
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length < 3) {
      return phone; 
    }
    return cleanedPhone[0] + '*'.repeat(cleanedPhone.length - 3) + cleanedPhone[cleanedPhone.length - 2] + cleanedPhone[cleanedPhone.length - 1];
  }

}
