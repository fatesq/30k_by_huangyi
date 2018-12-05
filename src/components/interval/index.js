import { link } from '../van/mixins/link'
import { VantComponent } from '../van/common/component'
VantComponent({
  classes: ['title-class', 'label-class', 'value-class'],
  mixins: [link],
  props: {
    type: {
      type: String,
      value: 'text'
    },
    start: String,
    center: {
      type: String,
      value: '至'
    },
    end: String,
    startWidth: {
      type: String,
      value: '140rpx'
    },
    centerWidth: {
      type: String,
      value: '30rpx'
    },
    endWidth: {
      type: String,
      value: '100rpx'
    },
    startId: String,
    endId: String
  },
  computed: {
    startStyle: function titleStyle() {
      var titleWidth = this.data.startWidth
      return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
    },
    centerStyle: function titleStyle() {
      var titleWidth = this.data.centerWidth
      return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
    },
    endStyle: function titleStyle() {
      var titleWidth = this.data.endWidth
      return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
    }
  },
  methods: {
    onInput: function onInput(event) {
      console.log('child', event)
      var _ref = event.detail || {},
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value
      this.$emit('input', value)
      this.$emit('change', event)
      this.setData({value: value})
    },
    onChange: function onChange(event) {
      // console.log(event)
      // this.$emit('click', event.detail)
      // this.jumpLink()
    }
  }
})
