import { recommendStatusList } from './constants'

export type RecommendStatus = (typeof recommendStatusList)[number]

type Diet = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free'

export interface Dish {
  name?: string
  diet?: Diet
  status?: RecommendStatus
}
