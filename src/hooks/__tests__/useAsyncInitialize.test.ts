import { act } from 'react';
import { renderHook } from '@testing-library/react-hooks/dom';
import { useAsyncInitialize } from '../useAsyncInitialize';

describe('useAsyncInitialize', () => {
  it('should initialize state with async function result', async () => {
    const mockValue = 'test';
    const mockAsyncFunc = jest.fn().mockResolvedValue(mockValue);

    const { result, waitForNextUpdate } = renderHook(() => useAsyncInitialize(mockAsyncFunc));

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current).toBe(mockValue);
  });
});
