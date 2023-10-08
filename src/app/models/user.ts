export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone?: number,

    public permisionlevel? : {
      zones : {Read : number , Write : number } ,
      devices : {Read : number , Write : number },
      alerts : {Read : number , Write : number },
      schedulers : {Read : number , Write : number },
      users : {Read : number , Write : number },
      userCommands : {Read : number , Write : number },
     },
  ) {}
}

