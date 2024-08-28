import App from "@/App.vue";
import ResultDisplay from "@/components/ResultDisplay.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/getResult", component: ResultDisplay, name: "result-display" },
  ],
});

export default router;
