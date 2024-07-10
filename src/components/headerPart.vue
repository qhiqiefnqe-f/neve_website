<template>
  <div class="headerPart">
    <div class="logo">Dreaver</div>
    <div class="rightpart">
      <div class="toggle-switch">
        <label class="switch-label">
          <input type="checkbox" class="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="searchContainer">
        <input
          type="text"
          name="text"
          class="searchinput"
          placeholder="Search"
        />
        <button class="search__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="#efeff1"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style>
.toggle-switch {
  position: relative;
  width: 80px;
  height: 30px;
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}

.switch-label {
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: var(--dark);
  border-radius: 25px;
  cursor: pointer;
  border: 3px solid var(--dark);
}

.checkbox {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider {
  background-color: var(--light);
}

.slider::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
  box-shadow: inset 12px -4px 0px 0px var(--light);
  background-color: var(--dark);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider::before {
  -webkit-transform: translateX(50px);
  -ms-transform: translateX(50px);
  transform: translateX(50px);
  background-color: var(--dark);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.rightpart {
  display: flex;
  align-items: center;
  width: 330px;
  justify-content: space-between;
}
.logo {
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  color: white;
  font-style: italic;
}
.searchContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}

.searchinput {
  max-width: 190px;
  height: 100%;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  background-color: #53535f;
  caret-color: #f7f7f8;
  color: #fff;
  padding: 7px 10px;
  border: 2px solid transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;
}

.searchinput:hover {
  border: 2px solid rgba(255, 255, 255, 0.16);
}

.searchinput:focus {
  border: 2px solid #a970ff;
  background-color: #0e0e10;
}

.search__btn {
  border: none;
  cursor: pointer;
  background-color: rgba(42, 42, 45, 1);
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__btn:hover {
  background-color: rgba(54, 54, 56, 1);
}
.headerPart {
  /* 其他样式 */
  backdrop-filter: saturate(180%) blur(20px); /* 添加毛玻璃效果 */
  /* 针对旧版Safari浏览器的兼容性 */
  background-color: rgba(23, 23, 23, 0.2); /* 轻微的背景颜色，增强毛玻璃效果 */
  z-index: 100;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;

  color: white;
  font-size: 20px;
  font-weight: 500;

  position: fixed;
  top: 0;
  left: 100px;
  right: 0;

  height: 60px;
  transition: 0.6s;
}
</style>
