"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likes_component_1 = require("./likes.component");
var likeButton = new likes_component_1.LikeComponent(0, false);
console.log('Clicked like');
likeButton.onClick();
likeButton.showStatus();
console.log('Clicked like again');
likeButton.onClick();
likeButton.showStatus();
