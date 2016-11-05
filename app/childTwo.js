"use strict";
var Article = (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }
    Article.prototype.voteup = function () {
        this.votes++;
    };
    Article.prototype.votedown = function () {
        this.votes--;
    };
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=childTwo.js.map