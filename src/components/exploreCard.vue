<script setup></script>
<template>
  <div class="exploreCardContainer">
    <div class="exploreCardMain">
      <div class="exploreCard"></div>
      <div class="data">
        <div class="img"></div>
        <div class="text">
          <div class="text_m">CSS Gradient Button</div>
          <div class="text_s">Praashoo7</div>
        </div>
      </div>
      <div class="btns">
        <div class="likes">
          <svg viewBox="-2 0 105 92" class="likes_svg">
            <path
              d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"
            ></path></svg
          ><span class="likes_text">22</span>
        </div>
        <div class="comments">
          <svg
            title="Comment"
            viewBox="-405.9 238 56.3 54.8"
            class="comments_svg"
          >
            <path
              d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"
            ></path></svg
          ><span class="comments_text">12</span>
        </div>
        <div class="views">
          <svg title="Views" viewBox="0 0 30.5 16.5" class="views_svg">
            <path
              d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"
            ></path></svg
          ><span class="views_text">332</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exploreCardContainer {
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  width: 23.6%;
  height: 210px;
  background: #252525;
}

.exploreCard {
  width: 100%;
  height: 120px;
  background: linear-gradient(270deg, #ce68d9, #45c6db, #45db79);
  background-size: 800% 800%;
  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
  transition: 0.4s ease-in-out;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
}

.fl {
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.fl:hover .fullscreen {
  scale: 1.2;
}

.fl:hover .fullscreen_svg {
  fill: white;
}

.fullscreen {
  width: 1.5em;
  height: 1.5em;
  border-radius: 5px;
  background-color: #727890;
  margin: 1em;
  margin-right: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.fullscreen_svg {
  width: 15px;
  height: 15px;
  fill: rgb(177, 176, 176);
  transition: 0.2s ease-in-out;
}

.exploreCardMain:hover .card_back {
  margin-top: -5.9em;
  margin-left: 0em;
  scale: 1.1;
  height: 15.25em;
  cursor: pointer;
}

.exploreCardMain:hover .fl {
  opacity: 1;
  cursor: pointer;
  margin-right: 0.5em;
}

.data {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  margin-left: 1em;
}

.img {
  width: 2.25em;
  height: 2.25em;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
}

.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.5em;
  font-family: Montserrat;
  color: white;
}

.text_m {
  font-weight: bold;
  font-size: 0.9em;
}

.text_s {
  font-size: 0.7em;
}

.btns {
  margin-left: 1em;
  display: flex;
  gap: 0.5em;
  transition: 0.2s ease-in-out;
}

.likes {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: 0.2s ease-in-out;
}

.likes_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.likes_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.likes:hover {
  background-color: #5a5f73;
  cursor: pointer;
}

.comments {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: 0.24s ease-in-out;
}

.comments_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.comments_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.comments:hover {
  background-color: #5a5f73;
  cursor: pointer;
}

.views {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: 0.28s ease-in-out;
}

.views_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.views_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.views:hover {
  background-color: #5a5f73;
  cursor: pointer;
}

.exploreCardMain:hover .likes {
  margin-top: 0.5em;
  opacity: 1;
}

.exploreCardMain:hover .comments {
  margin-top: 0.5em;
  opacity: 1;
}

.exploreCardMain:hover .views {
  margin-top: 0.5em;
  opacity: 1;
}

/* The Main Switch */

.card_content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.exploreCardButton {
  padding: 0.8em;
  width: 14em;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 0.8em;
  align-self: center;
  outline: none;
  font-weight: bold;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  transition: 0.4s ease-in-out;
}

.exploreCardButton::after {
  content: '(Hold Me)';
  opacity: 0;
  position: absolute;
}

.exploreCardButton::before {
  content: '∞';
  font-size: 3.5em;
  position: absolute;
  opacity: 0;
  left: 1.6em;
  top: -0.36em;
  transition: 0.4s ease-in-out;
}

.exploreCardButton:hover {
  cursor: pointer;
  color: black;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.exploreCardButton:hover::after {
  position: relative;
  opacity: 1;
  font-size: 0.7em;
}

@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.exploreCardButton:active {
  scale: 1.1;
  opacity: 1;
  color: transparent;
  background: linear-gradient(
    90deg,
    #ce68d9,
    #45c6db,
    #45db79,
    #9f45b0,
    #e54ed0,
    #ffe4f2
  );
  background-size: 800% 800%;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 1s ease infinite;
  animation: AnimationName 1s ease infinite;
}

.exploreCardButton:active::before {
  color: white;
  opacity: 1;
}
</style>
