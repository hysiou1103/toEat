<script setup lang="ts">
import { ref } from 'vue'
import type { RecommendStatus, Dish } from '../types'
import { restaurantStatusList } from '../constants'

interface Restaurant {
  name?: string
  status?: RecommendStatus
  dishes?: Dish[]
}

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({
  status: 'Want to Try'
})

const addRestaurant = () => {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    status: newRestaurant.value.status,
    dishes: []
  })
}
</script>

<template>
  <main>
    <pre>{{ newRestaurant }}</pre>
    <!-- Create a form that allows users to add a restaurant to the list. -->
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant">Restaurant Name</label>
        <input
          type="text"
          id="restaurant-name"
          name="restaurant-name"
          v-model="newRestaurant.name"
        />
      </div>

      <div>
        <label for="restaurant-status">Restaurant Status</label>
        <select name="restaurant-status" id="restaurant-status" v-model="newRestaurant.status">
          <option v-for="status in restaurantStatusList" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Add Restaurant</button>
    </form>

    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">{{ restaurant.name }}</li>
    </ul>
  </main>
</template>
