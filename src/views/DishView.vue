<script setup lang="ts">
import { ref } from 'vue'

interface Dish {
  name?: string
  diet?: Diet
  status?: RecommendStatus
}

const recommendStatusList = ['Want to Try', 'Recommended', 'Do not Recommend', 'Must Try'] as const

type RecommendStatus = (typeof recommendStatusList)[number]

type Diet = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free'

const dishList = ref<Dish[]>([])
const newDish = ref<Dish>({
  status: 'Want to Try'
})

const addDishes = () => {
  dishList.value.push({
    name: newDish.value.name,
    status: newDish.value.status
  })
}
</script>

<template>
  <main>
    <pre>{{ newDish }}</pre>
    <form @submit.prevent="addDishes">
      <div>
        <label for="dish-name">Dish Name</label>
        <input type="text" id="dish-name" name="dish-name" v-model="newDish.name" />
      </div>

      <div>
        <label for="dish-status">Dish Status</label>
        <select name="dish-status" id="dish-status" v-model="newDish.status">
          <option v-for="status in recommendStatusList" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Add Dish</button>
    </form>

    <ul>
      <li v-for="dish in dishList" :key="dish.name">{{ dish.name }}</li>
    </ul>
  </main>
</template>
