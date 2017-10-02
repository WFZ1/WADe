namespace Model {
    export class News {
        public id: number;
        public title: string;
        public publishedOn: Date;
        public summary: string;
        public titleImg: string;
        public tags: Array<Tag>;
        public author: string;
        public comments: Array<Comment>;
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
}
