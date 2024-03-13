import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName'
})
export class FileNamePipe implements PipeTransform {
  transform(filePath: string): string {
    // Split the file path by '/'
    const parts = filePath.split('/');
    // Get the last part which represents the file name
    return parts[parts.length - 1];
  }
}
