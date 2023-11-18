import axios from 'axios';

import { type IFilter } from '../../hooks/useFilter';

export type Bike = {
  date_stolen: Date;
  description: string;
  frame_model: string;
  id: number;
  serial: string;
  thumb?: string;
  stolen_location: string;
  title: string;
};

export type BikeIndexes = {
  bikes: Bike[];
  count: number;
  totalPages: number;
};

const getCount = async (filter: IFilter) => {
  const response = await axios.get<{ proximity: number }>(
    `${window.CONFIG.api.bikeIndex}/search/count`,
    {
      params: filter,
    },
  );
  return response.data.proximity;
};

const searchBikes = async (filter: IFilter) => {
  const response = await axios.get<{ bikes: Bike[] }>(
    `${window.CONFIG.api.bikeIndex}/search`,
    {
      params: filter,
    },
  );
  return response.data.bikes;
};

const get = async (filter: IFilter): Promise<BikeIndexes> => {
  try {
    const bikes = await searchBikes(filter);
    const count = await getCount(filter);
    const totalPages = Math.ceil(count / filter.per_page);
    return {
      bikes,
      count,
      totalPages,
    };
  } catch (error) {
    throw new Error('An error occur while getting bikeIndexes', {
      cause: error,
    });
  }
};

export default { get, searchBikes, getCount };
