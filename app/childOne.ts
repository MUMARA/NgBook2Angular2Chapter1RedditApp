import {Component} from '@angular/core';
import {Article} from './childTwo';

@Component({
    selector: 'reddit-Article',
    template: `<br/><br/>article.votes is {{article.votes}}
    `,
    inputs: ['article']
})
export class ArticleComponent {
    article: Article;

    voteup() {
        this.article.voteup();
        return false;
    }

    votedown() {
        this.article.votedown();
        return false;
    }



}