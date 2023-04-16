describe('root render', () => {
  it('root element exist in document', () => {
    const root = document.getElementById('root');

    expect(root).toBeDefined();
  });
});
