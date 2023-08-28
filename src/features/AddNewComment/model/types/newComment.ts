import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { Dispatch } from '@reduxjs/toolkit';
import { ExtraType, StoreSchema } from 'app/StoreProvider';

export type ThunkApi = BaseThunkAPI<StoreSchema, ExtraType, Dispatch, string>
export type SenderFnType = (newComment: string, thunkAPI: ThunkApi) => Promise<void>

export enum NewCommentErrors {
    FAILED_TO_SEND_COMMENT = 'Не удалось отправить комментарий',
    EMPTY_COMMENT = 'Комментарий не должен быть пустым',
    FAILED_TO_SAVE_COMMENT = 'Не удалось сохранить комментарий',
}
