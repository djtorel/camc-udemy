import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(string: string): any {
    if (!string) {
      return null;
    }

    // Convert string input into lower case then split into array
    const wordsArray = string.toLowerCase().split(' ');

    // Map through words array and apply title case then join
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

  // Check against a list of prepositions and return boolean
  private isPreposition(word: string): boolean {
    const prepositions = [
      'the',
      'of',
    ];
    return prepositions.includes(word);
  }

  // Convert a word to title case
  private toTitleCase(word: string): string {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }

}
