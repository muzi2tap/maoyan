<template>
  <div class="page">
    <Header title="影院" />
    <div id="cinema_content">
      <div class="cinema_nav">
        <ul>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe642;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe642;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe642;</i>
          </li>
        </ul>
      </div>

      <div class="cinema_body">
        <div class="cinema_body_detail">
          <div class="cinema_body_detail_name">
            <span>大地影院(珠江摩尔店)</span>
            <span class="cinema_price">22.9元起</span>
          </div>
          <div class="cinema_body_detail_address">
            <span>金州区大连经济开发区</span>
            <span>1763.5km</span>
          </div>
          <div class="cinema_body_detail_card">
            <div>小吃卡</div>
            <div>折扣卡</div>
          </div>
        </div>
        <div class="cinema_body_detail">
          <div class="cinema_body_detail_name">
            <span>大地影院(珠江摩尔店)</span>
            <span class="cinema_price">22.9元起</span>
          </div>
          <div class="cinema_body_detail_address">
            <span>金州区大连经济开发区</span>
            <span>1763.5km</span>
          </div>
          <div class="cinema_body_detail_card">
            <div>小吃卡</div>
            <div>折扣卡</div>
          </div>
        </div>
        <div class="cinema_body_detail">
          <div class="cinema_body_detail_name">
            <span>大地影院(珠江摩尔店)</span>
            <span class="cinema_price">22.9元起</span>
          </div>
          <div class="cinema_body_detail_address">
            <span>金州区大连经济开发区</span>
            <span>1763.5km</span>
          </div>
          <div class="cinema_body_detail_card">
            <div>小吃卡</div>
            <div>折扣卡</div>
          </div>
        </div>
        <div class="cinema_body_detail">
          <div class="cinema_body_detail_name">
            <span>大地影院(珠江摩尔店)</span>
            <span class="cinema_price">22.9元起</span>
          </div>
          <div class="cinema_body_detail_address">
            <span>金州区大连经济开发区</span>
            <span>1763.5km</span>
          </div>
          <div class="cinema_body_detail_card">
            <div>小吃卡</div>
            <div>折扣卡</div>
          </div>
        </div>
        <div class="cinema_body_detail">
          <div class="cinema_body_detail_name">
            <span>大地影院(珠江摩尔店)</span>
            <span class="cinema_price">22.9元起</span>
          </div>
          <div class="cinema_body_detail_address">
            <span>金州区大连经济开发区</span>
            <span>1763.5km</span>
          </div>
          <div class="cinema_body_detail_card">
            <div>小吃卡</div>
            <div>折扣卡</div>
          </div>
        </div>
        <div class="cinema_body_detail">
          <div class="cinema_body_detail_name">
            <span>大地影院(珠江摩尔店)</span>
            <span class="cinema_price">22.9元起</span>
          </div>
          <div class="cinema_body_detail_address">
            <span>金州区大连经济开发区</span>
            <span>1763.5km</span>
          </div>
          <div class="cinema_body_detail_card">
            <div>小吃卡</div>
            <div>折扣卡</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cinema"
};
</script>

<style>
/*cinema*/
#cinema_content {
  position: absolute;
  width: 100%;
  height: 100%;
}
#cinema_content .cinema_nav {
  width: 100%;
  position: fixed;
  height: 0.92rem;
  border-bottom: 1px solid #ccc;
  z-index: 2;
  background: #fff;
}
#cinema_content .cinema_nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#cinema_content .cinema_nav ul li {
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
}

/*cinema_body*/

.cinema_body {
  position: relative;
  top: 0.92rem;
  left: 0;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-bottom: 1rem;
}
.cinema_body .cinema_body_detail {
  margin-top: 0.4rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
.cinema_body .cinema_body_detail > div {
  margin-bottom: 0.2rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name > span:nth-child(1) {
  font-size: 0.35rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name > span:nth-child(2) {
  font-size: 0.3rem;
  color: #f03d37;
}
.cinema_body .cinema_body_detail .cinema_body_detail_address {
  display: flex;
  justify-content: space-between;
  font-size: 0.26rem;
  align-items: center;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card {
  display: flex;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card > div {
  padding: 0 0.06rem;
  height: 0.36rem;
  line-height: 0.36rem;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 0.26rem;
  margin-right: 5px;
}
</style>