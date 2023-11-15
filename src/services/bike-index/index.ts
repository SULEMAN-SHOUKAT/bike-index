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
  try {
    const response = await axios.get<{ proximity: number }>(
      `${window.CONFIG.api.bikeIndex}/search/count`,
      {
        params: filter,
      },
    );
    return response.data.proximity;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get bikes');
  }
};

const searchBikes = async (filter: IFilter) => {
  try {
    const response = await axios.get<{ bikes: Bike[] }>(
      `${window.CONFIG.api.bikeIndex}/search`,
      {
        params: filter,
      },
    );
    return response.data.bikes;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get bikes');
  }
};

const get = async (filter: IFilter): Promise<BikeIndexes> => {
  const bikes = await searchBikes(filter);
  const count = await getCount(filter);
  return {
    bikes,
    count,
    totalPages: Math.ceil(count / filter.per_page),
  };
};

export default { get };
