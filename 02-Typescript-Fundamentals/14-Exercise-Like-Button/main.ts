import { LikeButton } from './like-button';

const likeButton = new LikeButton(0);

console.log('Clicked like');
likeButton.like();

likeButton.showStatus();

console.log('Clicked like again');
likeButton.like();

likeButton.showStatus();
