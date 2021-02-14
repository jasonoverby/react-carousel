import { wait } from '../lib/wait';

describe('wait', () => {
  it('calls setTimeout with the correct arguments', () => {
    const waitMs = 1000;
    jest.spyOn(window, 'setTimeout');
    wait(waitMs);
    expect(window.setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      waitMs,
    );
  });
});
