<template>
  <div class="header-container">
    <img
      src="/images/Logo.png"
      alt="Logo-Company"
      class="image"/>
    <div class="menu-container">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Cart</a></li>
        <li class="button-start"><a href="#">Getting started</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
.header-container {
  background-color: #2b3741;
  height: 50px;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.header-container .image {
  width: 150px;
  height: 40px;
  padding-left: 10px;
}
.header-container .menu-container {
  height: 50px;
}
.header-container .menu-container ul {
  display: flex;
}
.header-container .menu-container ul li {
  list-style-type: none;
  padding: 0 15px;
  border: 1px solid #3f515e;
  height: 50px;
  align-items: center;
}
.header-container .menu-container ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  padding-top: 25px;
  line-height: 50px;
}
.header-container .menu-container ul li:hover {
  background-color: #3f515e;
}
.header-container .menu-container ul .button-start {
  background-color: #0080ff;
}
</style>
