<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
});
</script>

<template>
  <section id="banner">
    <div class="site-banner">
      <div class="banner-img"></div>
    </div>
  </section>
  <section id="service" class="section">
    <div class="container">
      <div class="section-header">
        <h2>火星的服务</h2>
        <div></div>
      </div>
      <div class="section-content">
        <div class="section-p">
          火星未来是一家企业知识服务公司，成立于2016年，我们连接全球顶尖大脑，帮助客户学习和应用前沿知识，更好地赢得未来的竞争。
        </div>
        <div class="section-p">
          火星未来通过游学、嘉宾、讲师、咨询等知识产品，长期服务包括腾讯、字节跳动、华为、阿里、SheIn、安联等近十家超千亿美金市值公司，累计服务了数千位创始人和企业高管。
        </div>
        <div class="section-p">
          火星未来代理的嘉宾包括奈飞、特斯拉、苹果、星巴克、亚马逊等知名企业的创始人和高管，数十位诺奖得主和奥斯卡奖得主，独家老师包括lululemon的前中国区品牌负责人Flora等
        </div>
      </div>
    </div>
  </section>

  <section id="process" class="section">
    <div class="container">
      <div class="section-header">
        <h2>嘉宾业务流程</h2>
      </div>
      <div class="section-content">
        <div class="section-p">
          针对游学&培训需求、活动嘉宾邀请和其他需要和全球各界行业领袖的合作
        </div>
      </div>
      <div class="process-content">
        <b-tabs content-class="mt-3" nav-class="process-tabs">
          <b-tab title="① 需求沟通会" active nav-wrapper-class="process-tab">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">轻咨询模式剖析活动可行性方案</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <span>解决痛点：</span>没有启发创意的信息来源
                </h6>
                <ul class="li-list">
                  <li>资深客户成功专家对接</li>
                  <li>调研项目背景、预算 、方向 、交付时间和地点</li>
                  <li>输出类似案例信息</li>
                  <li>高质量嘉宾初步推荐</li>
                </ul>
              </div>
            </div>
          </b-tab>
          <b-tab title="② 提交定制化方案" nav-wrapper-class="process-tab">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">强大资源库匹配合适 嘉宾 、设计活动形式</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <span>解决痛点：</span>资源不独特
                </h6>
                <ul class="li-list">
                  <li>全球前沿资源调取，多维度提供推荐嘉宾list</li>
                  <li>设计可行的活动形式，提供多样形式参考</li>
                  <li>方案对接会，根据反馈修改方案</li>
                </ul>
              </div>
            </div>
          </b-tab>
          <b-tab title="③ 确定方案&签定合同" nav-wrapper-class="process-tab">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  强大资源库匹配合适嘉宾 、设计活动形式协商一致敲定合预算、高质量、可落地
                  、强传播的方案
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <span>解决痛点：</span>性价比
                </h6>
                <ul class="li-list">
                  <li>确定最合适的嘉宾</li>
                  <li>确定最合适的活动形式</li>
                  <li>制定项目交付timeline</li>
                </ul>
              </div>
            </div>
          </b-tab>
          <b-tab title="④ 提交定制化方案" nav-wrapper-class="process-tab">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  从管控嘉宾内容、管控项目流程、管控交付现场全方位陪跑落地项目
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <span>解决痛点：</span>方案与实际落地出入大
                </h6>
                <ul class="li-list">
                  <li>管理项目时间交付线</li>
                  <li>嘉宾客户火星三方对接会，高质量信息传递</li>
                  <li>打磨出能被记住、能被传播的知识主题和内容</li>
                  <li>现场专人支持交付</li>
                </ul>
              </div>
            </div>
          </b-tab>
          <b-tab title="⑤ 复盘&改善" nav-wrapper-class="process-tab">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">设计复盘模板，收集用户数据展示活动效果</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <span>解决痛点：</span>复盘无法展示真实情况
                </h6>
                <ul class="li-list">
                  <li>针对活动目标设计复盘模板</li>
                  <li>协助主办方收集用户反馈</li>
                  <li>组织项目小组复盘会</li>
                  <li>提出改善建议&协助持续改善</li>
                </ul>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>

  <section id="speaker" class="section">
    <div class="container">
      <div class="section-header">
        <h2>独家嘉宾</h2>
        <div></div>
      </div>
      <div class="section-content speaker-content">
        <div class="row">
          <div class="col-md-4">
            <div class="card home-card">
              <img
                src="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/themartians/p1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Flora Zhang</h5>
                <p class="card-text">
                  lululemon前中国中国区一号员工lululemon中国社群建立者，帮助lululemon成功的在中国实现从0到1的转变。现奢侈滑雪服公司BOGNER中国市场和数字业务负责人
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card home-card">
              <img
                src="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/themartians/p2.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Jonathan Zhang</h5>
                <p class="card-text">
                  喜马拉雅前HRVP，华为前高端招聘总监，首熙国际贸易前CEO，盒淘优选前CEO，500强企业金牌讲师，东北大学客座教授，清华大学职业生涯教练，天津卫视《非你莫属》栏目特HR专家，LinkedIn专栏撰稿人
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card home-card">
              <img
                src="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/themartians/p3.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Leeann Tang</h5>
                <p class="card-text">
                  曾任lululemon上海新天地门店副店长，见证新天地店从正式店发展到中国第一家旗舰店的全流程；后担任lululemon中国品牌执行，深度策划并参与各类社群项目
                  如：2019上海深坑酒店lululemon全球首场T台秀；2018心展中国系列活动等
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-img {
  width: 100%;
  height: 300px;
  background-image: url(https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/themartians/huoxing.jpeg);
  background-position: left top;
  background-size: cover;
  background-repeat: no-repeat;
}
.process-content{
  margin-top: 40px;
}
#speaker {
  width: 100%;
  background-image: url(https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/themartians/landing-schedules-slider-bckg-img.webp);
  background-position: left top;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ffffff;
  color: #ffffff;
  padding: 40px 0;
}
#speaker h2 {
  color: #ffffff;
}
.speaker-content {
  display: flex;
}
.home-card {
  background-color: rgba(0, 0, 0, 0.9);
}
.speaker-content .card-text {
  height: 130px;
  font-size: 12px;
  line-height: 18px;
  color: #969696;
}
.li-list {
  margin-top: 15px;
  margin-left: -15px;
}

#footer {
  display: block;
  overflow: hidden;
  padding: 40px 20px;
  background-color: black;
  color: #fff;
  margin-top: 30px;
  bottom: 0;
}
#footer a {
  color: #fff;
}
#footer p {
  color: #969696;
}
.foot-pic {
  display: block;
  overflow: hidden;
  text-align: center;
  margin: 20px auto;
}
img.foot-logo {
  height: 40px;
}
.menu-list {
  padding-top: 15px;
}
p.menu {
  text-align: center;
  font-size: 14px;
  margin: -10px 0 0 0;
}
p.beian {
  text-align: center;
  font-size: 12px;
  line-height: 1.6;
}

#speaker {
  margin-bottom: 100px;
}
</style>
