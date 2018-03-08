import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(string: string): any {
    if (!string) {
      return null;
    }

    const wordsArray = string.toLowerCase().split(' ');
    const titleCaseString = wordsArray.map((word, index) => {
      if (index > 0 && this.isPreposition(word)) {
        return word;
      } else {
        return this.toTitleCase(word);
      }
    })
    .join(' ');

    return titleCaseString;
  }

  private isPreposition(word: string): boolean {
    const prepositions = [
      'the',
      'of',
    ];
    return prepositions.includes(word);
  }

  private toTitleCase(word: string): string {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }

}
