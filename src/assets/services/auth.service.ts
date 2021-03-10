import { Injectable } from '@angular/core';
import { User } from './../../app/models/user.model';
import { Users } from '../fake-backend/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[];
  alertForNonUsers: string;

  constructor() {
    this.users = Users;
    this.alertForNonUsers = 'Something is not clicking with our records, please check again :)';
  }

  /// signing in users
  public signIn(username: any = null, password: any = null): void {
    /// get index if we find a match based on email
    const userIndex = this.getUserIndex(this.users, 'username', username);
    if (userIndex > -1) {

      /// when user exists, we then check for a password match.
      /// then if that's good, we store couple of entries to localstorage
      const isPassMatched = this.isUserAuthenticated(this.users, 'password', password, userIndex);
      if (isPassMatched) {
        localStorage.setItem('ACCESS_TOKEN', 'granted');
        localStorage.setItem('username', username);
        localStorage.setItem('displayname', this.getName(this.users, userIndex, 'displayname'));
      } else {
        alert(this.alertForNonUsers);
      }

    /// for non existance user
    } else {
      alert(this.alertForNonUsers);
    }
  }

  /// use to guard content, checked for value&type match and some other existancec
  public isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') === 'granted'
            && localStorage.getItem('username') !== null
            && localStorage.getItem('displayname') !== null;
  }

  /// logout, destroy all localStorage data
  public logout(): void {
    localStorage.clear();
  }

  /// get user index by looping all users and return a match with user entry
  private getUserIndex(usersArr: any[], usersStore: string, usernameInput: string): number {
    let getIndex = -1;

    for (let i = 0; i < usersArr.length; i += 1) {
      getIndex = usersArr[i][usersStore] === usernameInput ? i : getIndex;
    }
    return getIndex;
  }

  /// method to check for a password match given the user index from the users array
  private isUserAuthenticated(users: any[], usersKeyName: string, userInput: string, index: any): boolean {
    return users[index][usersKeyName] === userInput;
  }

  /// getting a key value from authenticated users
  private getName(users: any[], index: any, key: string): string {
    return users[index][key];
  }
}
