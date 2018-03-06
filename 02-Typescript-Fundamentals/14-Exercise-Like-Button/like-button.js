"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton(likes) {
        this.likes = likes;
        this.selected = false;
    }
    LikeButton.prototype.like = function () {
        if (!this.selected) {
            this.likes++;
            this.selected = true;
        }
        else {
            this.likes--;
            this.selected = false;
        }
    };
    LikeButton.prototype.showStatus = function () {
        console.log("Likes: " + this.likes + ", Selected: " + this.selected);
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
