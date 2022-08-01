import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../Store';

export const selectCount = (state: RootState) => state.product;

export const countSelector = createSelector(selectCount, (state) => state);
