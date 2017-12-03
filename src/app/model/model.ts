namespace Model {
    export class Article {
        public id: number;
        public title: string;
        public titleImg: string;
        public publishedOn: Date;
        public section: string;
        public summary: string;
        public author: string;
        public infoType: string;
        public rating: number;
        public infoView: number;
        public infoComment: number;
        public comments: Array<Comment>;
        public tags: Array<Tag>;
    }

    export class Tag {
        public id: number;
        public title: string;
    }

    export class Comment {
        public id: number;
        public author: string;
        public publishedOn: Date;
        public text: string;
    }

    export class Fullstory {
        public title: string;
        public text: string;
    }
}
