

export class Todo implements Todo{
  id?: number;
  title: string;
  completed:boolean;
  constructor(title:string, completed:boolean, id?:number)
  {
    this.title=title;
    this.completed=completed;
    this.id=id;
  }
}
