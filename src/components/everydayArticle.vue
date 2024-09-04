<template>
  <div class="articleBox">
    <div class="boxavatar"></div>
    <h2>Article Title</h2>
    <div class="boxcontent">
      <p>
        Stray birds of summer come to my windowto sing and fly away.And yellow
        leaves of autumn, which have nosongs, flutter and fall there with a
        sigh.
      </p>
    </div>

    <small>2024.7.10</small>
  </div>
</template>

<script setup></script>

<style scoped>
.boxavatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 15%;
  background-image: url(../assets/qq_pic_merged_1720493142583.jpg);
  background-size: cover;
  background-position: center;
}
.articleBox h2 {
  display: inline-block; /* 使h2也成为内联块级元素 */
  margin: 0; /* 移除默认的外边距 */
  vertical-align: top; /* 对齐到顶部，根据需要调整 */
  margin-left: 10px; /* 根据需要添加左边距以产生间距 */
}
.boxcontent {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
.boxcontent p {
  color: #959eb6;
  font-size: 17px;
}

.articleBox small {
  margin-left: 470px;
  font-weight: 400;
  font-size: small;
}

.articleBox {
  padding: 10px;
  height: 150px;
  width: 560px;
  margin-bottom: 10px;
  background-color: #202020;
  border-radius: 5px;
}

.articleBox:hover {
  background-color: #303030;
}
</style>
