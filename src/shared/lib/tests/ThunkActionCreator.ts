import { StoreSchema } from 'app/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';

type ActionCreatorType<Returned, ThunkArg, RejectedValue>
    = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig<RejectedValue>>;

jest.mock('axios');
export class ThunkActionCreator<Returned, ThunkArg, RejectedValue> {
  actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>

  mockedAxios = axios as jest.Mocked<typeof axios>;

  dispatch:jest.MockedFn<any>;

  getState: () => StoreSchema;

  constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callAction(arg: ThunkArg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, { api: this.mockedAxios })
    return result
  }
}
