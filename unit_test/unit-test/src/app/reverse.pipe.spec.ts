import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance ReversePipe', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('hello')).toEqual('olleh');
  });
});
