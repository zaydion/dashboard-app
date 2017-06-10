import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let characterToReplace: string = args[0]
    let replacementCharacter: string = args[1]
    return value.replace(characterToReplace, replacementCharacter);
  }

}
