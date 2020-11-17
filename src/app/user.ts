export class User {
  id?: string;
  username?: string;

  constructor(user: User) {
    this.username = user.username;
    this.id = user.id;
  }

  get presentation(): string {
    return this.username || 'user ' + this.id;
  }


}
