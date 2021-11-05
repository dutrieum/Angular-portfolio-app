import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usernameFormat'
})
export class UsernameFormatPipe implements PipeTransform {

  transform(username: string): string {
    if (username) {
      return '@' + username.toLowerCase();
    }
    else return ''
  }

}
