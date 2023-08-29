import { EntityState } from '@reduxjs/toolkit';

export interface CommentsSchema extends EntityState<Comment>{
    isLoading: boolean,
    error?: string,
}
