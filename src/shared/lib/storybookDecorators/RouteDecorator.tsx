import { StoryFn } from '@storybook/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function RouteDecorator(path: string, navigatePath: string) {
  return function (StoryComponent: StoryFn) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      navigate(navigatePath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <Routes>
        <Route path={path} element={<StoryComponent />} />
      </Routes>
    )
  }
}
