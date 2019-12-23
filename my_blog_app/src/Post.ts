export class Post {
  constructor(
    public title: string = "",
    public postedDate: Date = new Date(),
    public lastModifiedDate: Date = new Date(),
    public author: string = "",
    public text: string = ""
  ) {}
}
