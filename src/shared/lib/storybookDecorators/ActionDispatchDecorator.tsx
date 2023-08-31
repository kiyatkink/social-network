import { StoryFn } from '@storybook/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Action } from '@reduxjs/toolkit';

export function ActionDispatch(arrayActions: Array<Action>) {
  return function (StoryComponent: StoryFn) {
    const dispatch = useDispatch()

    useEffect(() => {
      arrayActions.forEach((action) => {
        dispatch(action)
      })
    }, [])

    return <StoryComponent />
  }
}
