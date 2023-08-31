import { StoryFn } from '@storybook/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function RouteDecorator(path: string, navigatePath: string) {
  return function (StoryComponent: StoryFn) {
    const navigate = useNavigate()

    useEffect(() => {
      navigate(navigatePath)
    }, []);

    return (
      <Routes>
        <Route path={path} element={<StoryComponent />} />
      </Routes>
    )
  }
}
