import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToPlain',
  standalone: true,
})
export class HtmlToPlainPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    // Regular expression to match HTML tags
    const regex = /<[^>]+>/g;
    return value.replace(regex, '');
  }

}
