export class LikeButton {
  private selected: boolean;

  constructor (private likes: number) {
    this.selected = false;
  }

  like() {
    if (!this.selected) {
      this.likes++;
      this.selected = true;
    } else {
      this.likes--;
      this.selected = false;
    }
  }

  showStatus() {
    console.log(`Likes: ${this.likes}, Selected: ${this.selected}`);
  }

}