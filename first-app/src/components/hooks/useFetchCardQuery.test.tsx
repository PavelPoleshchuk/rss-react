import { act, renderHook, waitFor } from '@testing-library/react';
import { dataApi } from '../data/dataApi';
import { useFetchCardQuery } from './useFetchCardQuery';

describe('useFetchCardQuery', () => {
  beforeEach(() => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(dataApi.results[0]),
        }) as Promise<Response>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should', async () => {
    const { result } = renderHook(() => useFetchCardQuery());
    act(() => {
      result.current.getClickFromCard('1');
    });

    await waitFor(() => {
      expect(global.fetch).toBeCalledWith(`https://rickandmortyapi.com/api/character/1`);
    });
    // rerender();
    // await waitFor(() => {
    //   expect(result.current.modalCard).toEqual(dataApi.results[0]);
    // });

    act(() => {
      result.current.getClickCloseModal();
    });
    await waitFor(() => {
      expect(global.fetch).toHaveBeenNthCalledWith(
        1,
        `https://rickandmortyapi.com/api/character/1`
      );
    });
  });
});

// fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'test' } })

// screen.getByRole('button').click();
