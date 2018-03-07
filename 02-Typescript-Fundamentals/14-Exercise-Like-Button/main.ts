import { LikeComponent } from './likes.component';

const likeButton = new LikeComponent(0, false);

console.log('Clicked like');
likeButton.onClick();

likeButton.showStatus();

console.log('Clicked like again');
likeButton.onClick();

likeButton.showStatus();
