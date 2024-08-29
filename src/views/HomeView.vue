<script setup lang="ts">
import { ref, toValue } from 'vue'

interface Restaurant {
  name?: string
  address?: string
  status?: RestaurantStatus
  dishes?: Dish[]
}

type RestaurantStatus = 'Want to Try' | 'Recommended' | 'Do not Recommend' | 'Must Try'

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({})

// How to extract types from type
const statusList = ['Want to Try', 'Recommended', 'Do not Recommend', 'Must Try']

const addRestaurant = () => {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    address: '',
    status: 'Want to Try',
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
        <label for="restaurant">Restaurant Address</label>
        <input
          type="text"
          id="restaurant-address"
          name="restaurant-address"
          v-model="newRestaurant.address"
        />
      </div>

      <div>
        <label for="restaurant-status">Restaurant Status</label>
        <select name="restaurant-status" id="restaurant-status" v-model="newRestaurant.status">
          <option v-for="status in statusList" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Add Restaurant</button>
    </form>

    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">{{ restaurant.name }}</li>
    </ul>
  </main>
</template>
