<script setup></script>
<template>
  <div class="cards">
    <div class="card red">
      <p class="tip">Hover Me</p>
      <p class="second-text">Lorem Ipsum</p>
    </div>
    <div class="card blue">
      <p class="tip">Hover Me</p>
      <p class="second-text">Lorem Ipsum</p>
    </div>
    <div class="card green">
      <p class="tip">Hover Me</p>
      <p class="second-text">Lorem Ipsum</p>
    </div>
  </div>
</template>

<style>
.cards {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.cards .red {
  background: linear-gradient(#e66465, #9198e5);
}

.cards .blue {
  background: linear-gradient(135deg, #ebadb6 0%, #aceae1 100%);
}

.cards .green {
  background: linear-gradient(to bottom, #474dec, #47b49f);
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 300px;
  width: 350px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}

.cards .card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.cards .card p.second-text {
  font-size: 0.7em;
}

.cards .card:hover {
  transform: scale(1.2, 1.2);
}

.cards:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
</style>
