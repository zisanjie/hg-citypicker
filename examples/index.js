import CityPicker from '@'
// import CityPicker from '../dist/hg-citypicker.js';
import '../picker.css'

var picker = new CityPicker({
  // eslint-disable-next-line no-undef
  moreData: city, // 符合格式的数组
  data: [{ 'value': '上海市' }, { 'value': '北京市' }, { 'value': '深圳市' }, { 'value': '成都市' }],
  cancel: function () {
    console.log('取消城市选择')
  },
  onOk: function (arr) {
    console.log(arr)
    var arr2 = []
    arr.forEach(function (val) {
      arr2.push(val.value)
    })
    document.getElementById('city-input' + this.get('pickerNumber')).innerHTML = arr2
  }
})

window.setInitailOption = function () {
  picker.set({ initialOption: ['湖北', '荆州', '荆州区'] })
}

window.select = function (number) {
  picker.set({
    pickerNumber: number,
    title: number + '号选择器'
  })
  picker.show()
}
