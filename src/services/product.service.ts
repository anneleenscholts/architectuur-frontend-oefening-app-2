import type { Product } from "@/components/models";
import { ref, type Ref } from "vue";


const products: Ref<Product[]> = ref([
    { id: 1, name: 'Product A', description: 'Beschrijving van product A', price: 25.0 },
    { id: 2, name: 'Product B', description: 'Beschrijving van product B', price: 30.0 },
    { id: 3, name: 'Product C', description: 'Beschrijving van product C', price: 45.0 },
]);

const useProducts = () => {
    return products
}
export { useProducts }