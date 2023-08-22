import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from 'entities/User';

export const getCanEdit = createSelector([getUserData, (state, id) => id], (user, id) => user?.id === id)
