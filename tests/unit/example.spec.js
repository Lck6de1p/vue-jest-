import { mount, createLocalVue } from '@vue/test-utils'
import dialog from '@/components/Dialog.vue'

import ElementUI from 'element-ui';
const localVue = createLocalVue()
localVue.use(ElementUI)


const testDatas = [
  {name:"lck", region: 'shanghai', phone: '18907666162'},
  {name:"lck", region: 'shanghai', phone: '18907666162'},
  {name:"lck", region: 'shanghai', phone: '18907666162'},
  {name:"lck", region: 'shanghai', phone: '18907666162'},
  {name:"lk", region: 'shanghai', phone: '18907666162'},
]
for (let i = 0; i < testDatas.length; i++) {
  it(`elementForm表单验证${i}`, async () => {
    const wrapper = mount(dialog, {
      localVue,
      propsData: {
        dialogData: {
          show: true,
          data: {
            name: testDatas[i].name,
            region: testDatas[i].region,
            phone: testDatas[i].phone,
          }
        }
      }
    })
    await wrapper.vm.$nextTick()
    await wrapper.find('button.yes').trigger('click')
    expect(wrapper.props().dialogData.show).toBe(false)
  })
}



