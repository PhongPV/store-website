<template>
  <div class="footer-container">
    <div class="footer-desc">
      <img
        src="/images/Logo.png"
        alt=""
        class="icon-image"/>
      <p>© 1998–2018 DRA.io</p>
    </div>
    <div class="info-footer">
      <div class="footer-name">
        <p>Community</p>
        <ul>
          <li><a href="#">Github</a></li>
          <li><a href="#">Youtube</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      <div class="footer-name">
        <p>Service</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">Demo</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Upgrade</a></li>
          <li><a href="#">Security</a></li>
        </ul>
      </div>
      <div class="footer-name">
        <p>About Us</p>
        <ul>
          <li><a href="#">Our Company</a></li>
          <li><a href="#">Member</a></li>
          <li><a href="#">Event</a></li>
        </ul>
      </div>
    </div>
    <img
      src="/images/info_img.png"
      alt=""
      class="image"/>
  </div>
</template>

<style>
.footer-container {
  background-color: #2b3741;
  padding: 50px 0;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-container .image {
  width: 25%;
  padding-right: 15px;
}
.footer-container .footer-desc {
  padding-left: 30px;
}
.footer-container .footer-desc p {
  color: #fefefe;
  padding-left: 20px;
}
.footer-container .info-footer .footer-name ul {
  list-style-type: none;
  padding: 0;
}
.footer-container .info-footer .footer-name ul li a {
  color: #dcddde;
  font-size: 15px;
  text-decoration: none;
  padding-top: 20px;
}
.footer-container .info-footer .footer-name ul li a:hover {
  color: #fff;
}
.footer-container .info-footer .footer-name p {
  font-size: 20px;
  color: #fefefe;
}
.footer-container .info-footer {
  display: flex;
  padding-top: 50px;
}
.footer-container .info-footer .footer-name {
  margin: 0 25px;
}
.footer-container .info-footer .footer-name ul li {
  padding-top: 15px;
}
</style>
