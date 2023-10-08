import { MakeSinglePipe } from './make-single.pipe';

describe('MakeSinglePipe', () => {
  it('create an instance', () => {
    const pipe = new MakeSinglePipe();
    expect(pipe).toBeTruthy();
  });
});
