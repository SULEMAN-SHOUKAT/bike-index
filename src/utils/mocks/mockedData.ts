export const mockedBikeWithNull = {
  date_stolen: null,
  description: null,
  frame_model: null,
  id: 123456,
  serial: null,
  thumb: null,
  stolen_location: null,
  title: null,
};

export const mockedBike = {
  date_stolen: new Date('01-01-2022'),
  description: 'test description',
  frame_model: 'test model',
  id: 123456,
  serial: 'XZYA-123',
  thumb: 'test-image',
  stolen_location: 'test location',
  title: 'test title',
};

export const mockedCount = [12, 10, 20];
export const mockedTotalPages = [2, 1, 2];

export const mockedLocations = ['Munich', 'berlin'];
export const mockedPage = [1, 2, 3, 4];
export const mockedPer_page = 10;

export const mockedStoleness = 'proximity';

export const mockedFilter = {
  query: 'test query',
  serial: 'test serial',
  location: mockedLocations[0],
  page: mockedPage[0],
  per_page: mockedPer_page,
  stolenness: mockedStoleness,
};

export const mockedDefaultFilter = {
  location: mockedLocations[0],
  page: mockedPage[0],
  per_page: mockedPer_page,
  stolenness: mockedStoleness,
};
