export class Comment {
  constructor(
    public author: string = "",
    public postedDate: Date = new Date(),
    public text: string = ""
  ) {}
}
