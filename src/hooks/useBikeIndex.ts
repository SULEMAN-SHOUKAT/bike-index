import { useQuery } from '@tanstack/react-query';
import { type IFilter } from './useFilter';
import bikeIndexService, { type BikeIndexes } from '../services/bike-index';

const useBikeIndex = (filter: IFilter) =>
  useQuery<BikeIndexes>({
    queryKey: ['queryBikeIndexes', { ...filter }],
    queryFn: () => bikeIndexService.get(filter),
    staleTime: 1000 * 60 * 5,
  });

export default useBikeIndex;
