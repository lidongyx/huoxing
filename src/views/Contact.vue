<script>
import axios from "axios";
async function postData(params) {
  const url = "https://hackweek-1302178265.ap-shanghai.app.tcloudbase.com/num"
  const result = (await axios.post(url,params)).data
  console.log("返回的结果",result)
  return "ok"
}

export default {
  data() {
    return {
      show:false,
      orgname: "",
      eventname: "",
      eventback: "",
      time:'',
      duration:'',
      channel:'',
      modus:'',
      project:'',
      ann:'',
      anno:'',
      audi:'',
      audiNum:'',
      auditarget:'',
      require:'',
      content:'',
      time:'',
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    async submit() {
      const {orgname,require,eventback,time,eventname} = this
      console.log("项目名称", this.eventname);
      console.log("项目名称", require);

      const params = {
      orgname: orgname,
      eventname: eventname,
      eventback: eventback,
      time:time,
      duration:'',
      channel:'',
      modus:'',
      project:'',
      ann:'',
      anno:'',
      audi:'',
      audiNum:'',
      auditarget:'',
      require:'',
      content:'',
      time:'',
    }

    const postresult = await postData(params)
    console.log("啥结果",postresult)

    if(postresult == "ok"){
      this.show = true
    }
    },
  },
  mounted() {
    // 在其他方法或是生命周期中也可以调用方法
    this.increment();
  },
};
// import { defineComponent } from "vue";
// export default defineComponent({
//   name: "Contact",
// });
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>企业嘉宾需求澄清表</h2>
        <div></div>
      </div>
      <div class="section-content">
        <div class="section-p">
          您好，为了使我们提供的嘉宾解决方案更加贴合贵公司活动的需求，并具有针对性，请您详细填写以下资料，内容请填写详细、准确，以便嘉宾更好的配合提供服务，谢谢！
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="name1" class="form-label">主办方名称</label>
          <input 
            class="form-control"
            id="orgname"
            v-model="orgname"
            required
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">活动名称</label>
          <input
            class="form-control"
            id="eventname"
            v-model="eventname"
            required
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">项目背景</label>
          <input
            class="form-control"
            id="eventback"
            v-model="eventback"
            required
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">活动日期</label>
          <input
            class="form-control"
            id="time"
            v-model="time"
            required
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">线上/线下</label>
          <select class="form-select" aria-label="Default select example">
            <option selected value="1">线上</option>
            <option value="2">线下</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">参与时长</label>
          <input
            class="form-control"
            id="duration"
            v-model="duration"
            required
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">是否有通过其他渠道联系嘉宾</label>
          <input
            class="form-control"
            id="channel"
            v-model="channel"
            placeholder="是否有通过其他渠道联系嘉宾"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">参与形式</label>
          <input
            class="form-control"
            id="modus"
            v-model="modus"
            placeholder="请填写参与形式"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">嘉宾分享内容主题</label>
          <input
            class="form-control"
            id="project"
            v-model="project"
            placeholder="请填写嘉宾分享内容主题"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">是否需要做宣发</label>
          <input
            class="form-control"
            id="ann"
            v-model="ann"
            placeholder="请填写是否需要宣发"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">预算</label>
          <input
            class="form-control"
            id="anno"
            v-model="anno"
            placeholder="请填写活动的预算"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">面向听众</label>
          <input
            class="form-control"
            id="audi"
            v-model="audi"
            placeholder="请填写面向的听众"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">总人数</label>
          <input
            class="form-control"
            id="audiNum"
            v-model="audiNum"
            placeholder="请填写总人数"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">职位状况</label>
          <input
            class="form-control"
            id="audiNum"
            v-model="audiDesc"
            placeholder="如总监、部门经理、部门经理、部门职员的人数情况"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">本次内容分享的目标</label>
          <input
            class="form-control"
            id="auditarget"
            v-model="auditarget"
            placeholder="请填写内容分享的目标"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">（重要）希望解决哪些具体问题</label>
          <input class="form-control" id="problem"
          v-model="problem"
            placeholder="请填写需要我们帮您解决哪些问题"
          
           />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">对内容设计方面有哪些具体要求</label>
          <input
            class="form-control"
            id="require"
            v-model="require"
            placeholder="请填写对内容设计方面的具体要求"
          />
        </div>
        <div class="mb-3">
          <label for="name1" class="form-label">期望了解的内容</label>
          <input
            class="form-control"
            id="content"
            v-model="content"
            placeholder="请填写期望了解的内容"
          />
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </form>
      <div v-if="show" class="alert alert-primary d-flex align-items-center" role="alert">
        <div>您填写的资料已成功提交</div>
      </div>
      <div v-else class="alert alert-danger d-flex align-items-center" role="alert">
        <div>您的资料没有填写完整</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#site-header {
  display: block;
  border: 1px solid #e5e5e5;
}
#topnav {
  margin-left: auto;
}
.alert{
  margin-top: 30px;
}
</style>
