<script setup></script>
import EverydayArticle from './everydayArticle.vue'
<style></style>

<template>
  <div class="giftContainer">
    <div class="leftPart">
      <div class="giftTitle">每日推荐</div>

      <div class="post-card">
        <div class="giftAvatar"></div>
        <a href="#" class="title">7 Tools for Faster Development in React</a>
        <span class="datetime">3 min to read</span>
        <div class="image-preview"></div>
        <div class="comment-like">
          <span
            ><svg
              fill=""
              xml:space="preserve"
              viewBox="0 0 32 32"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Uploaded to svgrepo.com"
              version="1.1"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21.081,6C23.752,6.031,26,8.766,26,12c0,5.106-6.47,10.969-10.001,13.593 C12.466,22.974,6,17.12,6,12c0-3.234,2.248-5.969,4.918-6C13.586,6.175,13.926,6.801,16,8.879C18.069,6.806,18.418,6.173,21.081,6 M20.911,4.006L20.912,4C18.993,4,17.259,4.785,16,6.048C14.741,4.785,13.007,4,11.088,4l0.001,0.006C7.044,3.936,4,7.719,4,12 c0,8,11.938,16,11.938,16h0.124C16.062,28,28,20,28,12C28,7.713,24.951,3.936,20.911,4.006z"
                  class="bentblocks_een"
                ></path>
              </g></svg
            >10</span
          >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill=""
                  d="M4.49999 20.25C4.37892 20.2521 4.25915 20.2248 4.1509 20.1705C4.04266 20.1163 3.94916 20.0366 3.87841 19.9383C3.80766 19.8401 3.76175 19.7261 3.74461 19.6063C3.72747 19.4864 3.73961 19.3641 3.77999 19.25L5.37999 14C5.03175 13.0973 4.85539 12.1375 4.85999 11.17C4.8584 10.1057 5.06918 9.0518 5.47999 8.06999C5.88297 7.13047 6.45975 6.27549 7.17999 5.54999C7.90382 4.82306 8.76344 4.24545 9.70999 3.84999C10.6889 3.4344 11.7415 3.22021 12.805 3.22021C13.8685 3.22021 14.9211 3.4344 15.9 3.84999C17.3341 4.46429 18.5573 5.48452 19.4191 6.7851C20.2808 8.08568 20.7434 9.60985 20.75 11.17C20.7437 13.2771 19.9065 15.2966 18.42 16.79C17.6945 17.5102 16.8395 18.087 15.9 18.49C14.0091 19.2819 11.8865 19.3177 9.96999 18.59L4.71999 20.19C4.64977 20.22 4.57574 20.2402 4.49999 20.25ZM12.8 4.74999C11.5334 4.75547 10.2962 5.13143 9.24068 5.83153C8.18519 6.53164 7.35763 7.52528 6.85999 8.68999C6.19883 10.2911 6.19883 12.0889 6.85999 13.69C6.91957 13.8548 6.91957 14.0352 6.85999 14.2L5.62999 18.37L9.77999 17.11C9.94477 17.0504 10.1252 17.0504 10.29 17.11C11.0824 17.439 11.932 17.6083 12.79 17.6083C13.648 17.6083 14.4976 17.439 15.29 17.11C16.0708 16.7813 16.779 16.3018 17.3742 15.6989C17.9693 15.096 18.4397 14.3816 18.7583 13.5967C19.077 12.8118 19.2376 11.9717 19.231 11.1245C19.2244 10.2774 19.0508 9.4399 18.72 8.65999C18.2234 7.50094 17.398 6.51285 16.3459 5.81792C15.2937 5.123 14.0609 4.75171 12.8 4.74999Z"
                ></path>
              </g></svg
            >4</span
          >
        </div>
      </div>
    </div>

    <div class="ArticlePart">
      <EverydayArticle />
      <EverydayArticle />
      <EverydayArticle />
      <EverydayArticle />
    </div>
    <button class="refreshbutton">
      <svg
        class="svgIcon"
        viewBox="0 0 512 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style>
.refreshbutton {
  width: 30px;
  height: 30px;
  margin-top: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  border-radius: 30px;
  color: rgb(19, 19, 19);
  font-weight: 600;
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
  padding-left: 3px;
  transition-duration: 0.5s;
}

.svgIcon {
  height: 25px;
  transition-duration: 1.5s;
}

.bell path {
  fill: rgb(19, 19, 19);
}

.refreshbutton:hover {
  background-color: #9c4bf6;
  transition-duration: 0.5s;
}

.refreshbutton:active {
  transform: scale(0.97);
  transition-duration: 0.2s;
}

.refreshbutton:hover .svgIcon {
  transform: rotate(250deg);
  transition-duration: 1.5s;
}

.post-card {
  width: 320px;
  background: lightgrey;
  background-color: #252525;

  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
}

.giftAvatar {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: blueviolet;
  background-image: linear-gradient(to top left, blueviolet, rgb(73, 31, 112));
}

.title {
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
  margin-top: 10px;
  color: #fff;
  text-decoration: none;
  transition: all 0.35s ease-in;
}

.title:hover {
  text-decoration: underline blueviolet;
}

.datetime {
  font-size: 12px;
  color: rgb(168 179 207);
  margin: 10px 0;
}

.image-preview {
  flex: 1;
  min-height: 150px;
  width: 100%;
  border-radius: 20px;
  background-color: blueviolet;
  background-image: linear-gradient(to top left, blueviolet, rgb(73, 31, 112));
  margin-bottom: 4px;
}

.comment-like {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px 0;
}

.comment-like span {
  cursor: pointer;
  height: 40px;
  width: 50px;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  border-radius: 10px;
  background-color: transparent;
  transition: all 0.15s ease;
}

.comment-like span:hover {
  background-color: rgba(137, 43, 226, 0.096);
}

.comment-like span svg {
  fill: rgb(255, 255, 255);
  margin-right: 2px;
}
.leftPart {
  display: flex;
  margin-right: 80px;
  align-items: center;

  height: 220px;
  width: 400px;
  background-color: #171717;
  border-radius: 10px;
}
.ArticlePart {
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  padding-top: 15px;
  flex-direction: column;

  align-items: center;
  margin-right: 20px;
  height: 340px;
  width: 600px;
  background-color: #202020;
  border-radius: 10px;
}
.ArticlePart > * {
  min-height: 50px; /* 或者根据需要设置的最小高度 */
  flex-shrink: 0;
}
.ArticlePart::-webkit-scrollbar {
  width: 8px;
}

/* 自定义滚动条轨道的样式 */
.ArticlePart::-webkit-scrollbar-track {
  background: #2e2e2e; /* 轨道的背景颜色 */
  border-radius: 10px; /* 轨道的圆角 */
}

/* 自定义滚动条滑块的样式 */
.ArticlePart::-webkit-scrollbar-thumb {
  background: #555; /* 滑块的背景颜色 */
  border-radius: 10px; /* 滑块的圆角 */
}

/* 当鼠标悬停在滑块上时，改变滑块的样式 */
.ArticlePart::-webkit-scrollbar-thumb:hover {
  background: #888; /* 滑块的背景颜色（鼠标悬停时） */
}
.giftContainer {
  display: flex;
  align-items: center;

  padding: 20px;
  height: 400px;
  width: 100%;
  background-color: #171717;
}
.giftTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 15px;
  margin-right: 15px;
  height: 300px;
  letter-spacing: 17px;
  background: linear-gradient(to bottom, #92cb8a, #3dc9bc);
  /* 将背景剪裁到文本 */
  -webkit-background-clip: text;
  background-clip: text;
  /* 将文本颜色设置为透明 */
  color: transparent;
  /* 设置文本从上向下书写 */
  writing-mode: vertical-lr;
  /* 其他样式，如需要 */
  font-size: 50px; /* 示例字体大小 */
  font-weight: bold; /* 示例字体加粗 */
}

.giftcard {
  position: relative;
  width: 80%;
  height: 220px;
  margin: 8px;
  background: linear-gradient(-45deg, #8d53a5 0%, #5353a5 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.giftcard svg {
  width: 60px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.giftcard:hover {
  transform: rotate(-5deg) scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.giftcard:hover .card__content {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

.giftcard:hover svg {
  scale: 0;
  transform: rotate(-45deg);
}
</style>
