<script setup>
import exploreClass from '@/components/exploreClass.vue'
import exploreCard from '@/components/exploreCard.vue'
</script>

<template>
  <div class="exploreContainer">
    <div class="exploreHeader">
      <h1>发现</h1>
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <button type="button" class="refreshButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-repeat"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
          ></path>
          <path
            fill-rule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
          ></path>
        </svg>
        Refresh
      </button>
    </div>
    <div class="exploreMain">
      <exploreCard />
      <exploreCard />
      <exploreCard />
      <exploreCard />
      <exploreCard />
      <exploreCard />
      <exploreCard />
      <exploreCard />
    </div>
  </div>
</template>

<style>
.refreshButton {
  margin-left: 385px;
  color: white;
  background-color: #222;
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  cursor: pointer;
  text-align: center;
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  border: none;
}

.refreshButton:hover {
  background-color: #333;
}

.refreshButton svg {
  display: inline;
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.75rem;
  color: white;
}

.refreshButton:focus svg {
  animation: spin_357 0.5s linear;
}

@keyframes spin_357 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.exploreMain {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  background-color: #171717;
}
.exploreHeader {
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  width: 100%;
  background-color: #171717;
}
.exploreContainer {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 1000px;
  width: 100%;
  background-color: #171717;
}
.exploreContainer h1 {
  color: white;
  font-size: 40px;
}
</style>
