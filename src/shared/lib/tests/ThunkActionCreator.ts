import { StoreSchema } from 'app/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, ThunkArg, RejectedValue>
    = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;
export class ThunkActionCreator<Returned, ThunkArg, RejectedValue> {
  actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>

  dispatch:jest.MockedFn<any>;

  getState: () => StoreSchema;

  constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callAction(arg: ThunkArg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)
    return result
  }
}
