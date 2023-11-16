const mockBikeIndexApiUrl = 'http://mocked-api-to-bike-index';

const mockGlobalWindowObject = () => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'CONFIG', {
    value: {
      api: {
        bikeIndex: mockBikeIndexApiUrl,
      },
    },
    writable: true,
  });
};

export default { mockGlobalWindowObject };
