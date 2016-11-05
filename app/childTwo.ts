export class Article {
    title;
    link;
    votes: number;
    constructor(title, link, votes: number) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }

    voteup() {
        this.votes++;
    }

    votedown() {
        this.votes--;
    }

}