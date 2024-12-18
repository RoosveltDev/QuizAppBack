import * as e from 'express';
//import { ISessionUser } from '../../models/User';

type ISessionUser = any

export interface IReq<T = void> extends e.Request {
  body: T;
}

export interface IRes extends e.Response {
  locals: {
    sessionUser?: ISessionUser;
  };
}
