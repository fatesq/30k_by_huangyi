import { link } from '../van/mixins/link'
import { VantComponent } from '../van/common/component'
VantComponent({
  classes: ['title-class', 'label-class', 'value-class'],
  mixins: [link],
  props: {
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
    endWidth: {
      type: String,
      value: '100rpx'
    }
  },
  computed: {
    startStyle: function titleStyle() {
      var titleWidth = this.data.startWidth
      return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
    },
    endStyle: function titleStyle() {
      var titleWidth = this.data.endWidth
      return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
    }
  },
  methods: {
    onClick: function onClick(event) {
      // this.$emit('click', event.detail)
      // this.jumpLink()
    }
  }
})
