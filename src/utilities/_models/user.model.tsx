import firebase from 'firebase/app';
import { BaseModel } from './base.model';

export interface User extends firebase.User, BaseModel {
}
