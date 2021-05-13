<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogData.show"
      width="30%"
      :before-close="handleClose">
      <el-form ref="ruleForm" :model="dialogData.data" :rules="rules" label-width="80px">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="dialogData.data.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="dialogData.data.phone"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="dialogData.data.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="close">取 消</el-button> -->
        <el-button type="primary" @click="submitForm('ruleForm')" class="yes">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogData: Object
  },
  data() {
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写机号'));
        } else if ((/^1[0-9]{10}$/).test(value)) {
          this.$refs.ruleForm.validateField('checkPass');
          callback();
        } else {
          callback(new Error('请填写正确格式的手机号'))
        }
      };
    return {
      count: 0,
       rules: {
          name: [
            { required: true, message: '请填写活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
             { validator: validatePass, trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
       }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    close() {
      this.dialogData.show = false
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogData.show = false
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style>

</style>